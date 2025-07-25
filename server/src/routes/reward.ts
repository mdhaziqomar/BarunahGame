import { Router } from 'express';
import { PrismaClient } from '../generated/prisma';
import { authenticateToken } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// Apply authentication middleware to protected routes
router.use('/redeem', authenticateToken);
router.use('/user/:userId', authenticateToken);

// Get all rewards
router.get('/', async (req: any, res: any) => {
  try {
    const rewards = await prisma.reward.findMany({
      where: {
        isActive: true,
        stockQuantity: {
          gt: 0
        }
      },
      include: {
        vendor: {
          select: {
            businessName: true,
            businessType: true
          }
        }
      },
      orderBy: {
        knowledgePointsCost: 'asc'
      }
    });

    res.json({ rewards });
  } catch (error) {
    console.error('Get rewards error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Redeem reward
router.post('/redeem', async (req: any, res: any) => {
  try {
    const { rewardId } = req.body;
    const userId = req.userId; // Get userId from authenticated request

    // Get user and reward
    const [user, reward] = await Promise.all([
      prisma.user.findUnique({ where: { id: userId } }),
      prisma.reward.findUnique({ 
        where: { id: rewardId },
        include: {
          vendor: {
            select: {
              businessName: true
            }
          }
        }
      })
    ]);

    if (!user || !reward) {
      return res.status(404).json({ error: 'User or reward not found' });
    }

    // Check if user has enough knowledge points
    if (user.knowledgePoints < reward.knowledgePointsCost) {
      return res.status(400).json({ error: 'Insufficient knowledge points' });
    }

    // Check if reward is in stock
    if (reward.stockQuantity <= 0) {
      return res.status(400).json({ error: 'Reward out of stock' });
    }

    // Generate QR code data
    const qrCodeData = {
      redemptionId: `RDM-${Date.now()}-${userId.slice(-6)}`,
      userId: userId,
      rewardId: rewardId,
      playerName: user.fullName,
      rewardName: reward.title,
      vendorName: reward.vendor.businessName,
      pointsSpent: reward.knowledgePointsCost,
      generatedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days
      status: 'ACTIVE'
    };

    // Create redemption record with QR code
    const userReward = await prisma.userReward.create({
      data: {
        userId,
        rewardId,
        status: 'PENDING',
        qrCode: JSON.stringify(qrCodeData),
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days
      }
    });

    // Update user's knowledge points
    await prisma.user.update({
      where: { id: userId },
      data: {
        knowledgePoints: {
          decrement: reward.knowledgePointsCost
        }
      }
    });

    // Update reward stock
    await prisma.reward.update({
      where: { id: rewardId },
      data: {
        stockQuantity: {
          decrement: 1
        }
      }
    });

    res.json({
      message: 'Reward redeemed successfully',
      redemption: {
        ...userReward,
        qrCodeData: qrCodeData
      }
    });
  } catch (error) {
    console.error('Redeem reward error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get user redemptions
router.get('/user/:userId', async (req: any, res: any) => {
  try {
    const { userId } = req.params;
    const authenticatedUserId = req.userId;

    // Users can only access their own redemptions
    if (userId !== authenticatedUserId) {
      return res.status(403).json({ error: 'Access denied' });
    }

    const redemptions = await prisma.userReward.findMany({
      where: { userId },
      include: {
        reward: {
          include: {
            vendor: {
              select: {
                businessName: true,
                businessType: true
              }
            }
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.json({ redemptions });
  } catch (error) {
    console.error('Get user redemptions error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Process QR code redemption (for vendors)
router.post('/process-qr', async (req: any, res: any) => {
  try {
    const { qrCodeData, action } = req.body; // action: 'approve' or 'reject'
    
    // Parse QR code data
    let redemptionData;
    try {
      redemptionData = typeof qrCodeData === 'string' ? JSON.parse(qrCodeData) : qrCodeData;
    } catch (error) {
      return res.status(400).json({ error: 'Invalid QR code format' });
    }

    // Find the redemption record
    const userReward = await prisma.userReward.findFirst({
      where: {
        userId: redemptionData.userId,
        rewardId: redemptionData.rewardId,
        status: 'PENDING'
      },
      include: {
        user: {
          select: {
            fullName: true,
            email: true
          }
        },
        reward: {
          select: {
            title: true,
            knowledgePointsCost: true
          }
        }
      }
    });

    if (!userReward) {
      return res.status(404).json({ error: 'Redemption not found or already processed' });
    }

    // Check if redemption has expired
    if (userReward.expiresAt && new Date() > userReward.expiresAt) {
      return res.status(400).json({ error: 'Redemption has expired' });
    }

    // Update redemption status
    const updatedStatus = action === 'approve' ? 'APPROVED' : 'EXPIRED';
    const updatedRedemption = await prisma.userReward.update({
      where: { id: userReward.id },
      data: {
        status: updatedStatus,
        redeemedAt: action === 'approve' ? new Date() : null
      }
    });

    res.json({
      message: `Redemption ${action}d successfully`,
      redemption: updatedRedemption,
      studentName: userReward.user.fullName,
      rewardName: userReward.reward.title
    });

  } catch (error) {
    console.error('Process QR redemption error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router; 