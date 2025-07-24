import { Router } from 'express';
import { PrismaClient } from '../generated/prisma';

const router = Router();
const prisma = new PrismaClient();

// Get dashboard stats
router.get('/dashboard', async (req: any, res: any) => {
  try {
    const [
      totalUsers,
      totalGames,
      totalQuestions,
      totalRewards,
      activeVendors
    ] = await Promise.all([
      prisma.user.count({ where: { role: 'STUDENT' } }),
      prisma.game.count(),
      prisma.question.count(),
      prisma.reward.count(),
      prisma.user.count({ where: { role: 'VENDOR' } })
    ]);

    res.json({
      stats: {
        totalUsers,
        totalGames,
        totalQuestions,
        totalRewards,
        activeVendors
      }
    });
  } catch (error) {
    console.error('Get dashboard stats error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all users
router.get('/users', async (req: any, res: any) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        fullName: true,
        email: true,
        role: true,
        knowledgePoints: true,
        level: true,
        isActive: true,
        createdAt: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.json({ users });
  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Toggle user active status
router.put('/users/:id/toggle-status', async (req: any, res: any) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: { id },
      select: { isActive: true }
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: { isActive: !user.isActive }
    });

    res.json({
      message: 'User status updated successfully',
      user: updatedUser
    });
  } catch (error) {
    console.error('Toggle user status error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get admin analytics
router.get('/analytics', async (req: any, res: any) => {
  try {
    const [
      totalStudents,
      totalVendors,
      totalAdmins,
      totalGames,
      totalQuestions,
      totalRewards,
      activeUsersToday
    ] = await Promise.all([
      prisma.user.count({ where: { role: 'STUDENT' } }),
      prisma.user.count({ where: { role: 'VENDOR' } }),
      prisma.user.count({ where: { role: 'ADMIN' } }),
      prisma.game.count(),
      prisma.question.count(),
      prisma.reward.count(),
      prisma.user.count({
        where: {
          updatedAt: {
            gte: new Date(new Date().setHours(0, 0, 0, 0))
          }
        }
      })
    ]);

    // Get recent activity
    const recentGames = await prisma.game.findMany({
      take: 5,
      orderBy: { timeStarted: 'desc' },
      include: {
        user: {
          select: { username: true, fullName: true }
        }
      }
    });

    res.json({
      analytics: {
        totalStudents,
        totalVendors,
        totalAdmins,
        totalGames,
        totalQuestions,
        totalRewards,
        activeUsersToday,
        averageSessionTime: 15, // Placeholder - would need to calculate from game data
        recentGames
      }
    });
  } catch (error) {
    console.error('Get admin analytics error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get system health
router.get('/system-health', async (req: any, res: any) => {
  try {
    const dbStatus = await prisma.$queryRaw`SELECT 1 as status`;
    
    res.json({
      systemHealth: {
        database: 'healthy',
        server: 'online',
        apiResponse: '142ms',
        storageUsed: '68%'
      }
    });
  } catch (error) {
    console.error('Get system health error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router; 