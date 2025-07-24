import { Router } from 'express';
import { PrismaClient } from '../generated/prisma';

const router = Router();
const prisma = new PrismaClient();

// Get vendor rewards
router.get('/rewards/:vendorId', async (req: any, res: any) => {
  try {
    const { vendorId } = req.params;

    const rewards = await prisma.reward.findMany({
      where: { vendorId },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.json({ rewards });
  } catch (error) {
    console.error('Get vendor rewards error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create new reward
router.post('/rewards', async (req: any, res: any) => {
  try {
    const {
      title,
      description,
      knowledgePointsCost,
      imageUrl,
      category,
      stockQuantity,
      vendorId
    } = req.body;

    const reward = await prisma.reward.create({
      data: {
        title,
        description,
        knowledgePointsCost,
        imageUrl,
        category,
        stockQuantity,
        vendorId
      }
    });

    res.status(201).json({
      message: 'Reward created successfully',
      reward
    });
  } catch (error) {
    console.error('Create reward error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get vendor redemptions
router.get('/redemptions/:vendorId', async (req: any, res: any) => {
  try {
    const { vendorId } = req.params;

    const redemptions = await prisma.userReward.findMany({
      where: {
        reward: {
          vendorId
        }
      },
      include: {
        user: {
          select: {
            username: true,
            fullName: true,
            email: true
          }
        },
        reward: {
          select: {
            title: true,
            description: true,
            knowledgePointsCost: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.json({ redemptions });
  } catch (error) {
    console.error('Get vendor redemptions error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update redemption status
router.put('/redemptions/:id/status', async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const redemption = await prisma.userReward.update({
      where: { id },
      data: {
        status,
        redeemedAt: status === 'REDEEMED' ? new Date() : null
      }
    });

    res.json({
      message: 'Redemption status updated successfully',
      redemption
    });
  } catch (error) {
    console.error('Update redemption status error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get vendor dashboard stats
router.get('/dashboard/:vendorId', async (req: any, res: any) => {
  try {
    const { vendorId } = req.params;

    const [
      totalRewards,
      totalRedemptions,
      pendingRequests
    ] = await Promise.all([
      prisma.reward.count({ where: { vendorId } }),
      prisma.userReward.count({
        where: {
          reward: { vendorId },
          status: { in: ['APPROVED', 'REDEEMED'] }
        }
      }),
      prisma.userReward.count({
        where: {
          reward: { vendorId },
          status: 'PENDING'
        }
      })
    ]);

    // Calculate total revenue
    const redemptions = await prisma.userReward.findMany({
      where: {
        reward: { vendorId },
        status: { in: ['APPROVED', 'REDEEMED'] }
      },
      include: {
        reward: {
          select: { knowledgePointsCost: true }
        }
      }
    });

    const totalRevenue = redemptions.reduce((sum, redemption) => 
      sum + redemption.reward.knowledgePointsCost, 0
    );

    // Get top reward
    const topReward = await prisma.userReward.groupBy({
      by: ['rewardId'],
      where: {
        reward: { vendorId },
        status: { in: ['APPROVED', 'REDEEMED'] }
      },
      _count: {
        rewardId: true
      },
      orderBy: {
        _count: {
          rewardId: 'desc'
        }
      },
      take: 1
    });

    let topRewardName = 'No rewards yet';
    if (topReward.length > 0) {
      const reward = await prisma.reward.findUnique({
        where: { id: topReward[0].rewardId },
        select: { title: true }
      });
      topRewardName = reward?.title || 'Unknown';
    }

    res.json({
      stats: {
        totalRewards,
        totalRedemptions,
        pendingRequests,
        totalRevenue,
        topReward: topRewardName,
        avgRating: 4.7 // Placeholder for now
      }
    });
  } catch (error) {
    console.error('Get vendor dashboard stats error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get vendor analytics
router.get('/analytics/:vendorId', async (req: any, res: any) => {
  try {
    const { vendorId } = req.params;

    // Get redemptions by category
    const redemptionsByCategory = await prisma.userReward.groupBy({
      by: ['rewardId'],
      where: {
        reward: { vendorId },
        status: { in: ['APPROVED', 'REDEEMED'] }
      },
      _count: {
        id: true
      }
    });

    // Get monthly revenue
    const monthlyRedemptions = await prisma.userReward.findMany({
      where: {
        reward: { vendorId },
        status: { in: ['APPROVED', 'REDEEMED'] },
        createdAt: {
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
        }
      },
      include: {
        reward: {
          select: { knowledgePointsCost: true }
        }
      }
    });

    const monthlyRevenue = monthlyRedemptions.reduce((sum, redemption) => 
      sum + redemption.reward.knowledgePointsCost, 0
    );

    res.json({
      redemptionsByCategory,
      monthlyRevenue
    });
  } catch (error) {
    console.error('Get vendor analytics error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Validate QR code
router.post('/validate-qr', async (req: any, res: any) => {
  try {
    const { qrCodeData } = req.body;
    
    // Parse QR code data
    let redemptionData;
    try {
      redemptionData = typeof qrCodeData === 'string' ? JSON.parse(qrCodeData) : qrCodeData;
    } catch (error) {
      return res.status(400).json({ 
        valid: false, 
        error: 'Invalid QR code format' 
      });
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
            knowledgePointsCost: true,
            vendorId: true
          }
        }
      }
    });

    if (!userReward) {
      return res.status(200).json({ 
        valid: false, 
        error: 'Redemption not found or already processed' 
      });
    }

    // Check if redemption has expired
    const isExpired = userReward.expiresAt && new Date() > userReward.expiresAt;
    
    res.json({
      valid: !isExpired,
      redemption: {
        id: userReward.id,
        studentName: userReward.user.fullName,
        studentEmail: userReward.user.email,
        rewardName: userReward.reward.title,
        pointsSpent: userReward.reward.knowledgePointsCost,
        createdAt: userReward.createdAt,
        expiresAt: userReward.expiresAt,
        isExpired: isExpired
      }
    });

  } catch (error) {
    console.error('Validate QR error:', error);
    res.status(500).json({ 
      valid: false, 
      error: 'Internal server error' 
    });
  }
});

export default router; 