import { Router } from 'express';
import { PrismaClient } from '../generated/prisma';
import { authenticateToken } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// Apply authentication middleware to all user routes
router.use(authenticateToken);

// Get user profile
router.get('/profile/:userId', async (req: any, res: any) => {
  try {
    const { userId } = req.params;
    const authenticatedUserId = req.userId;

    // Users can only access their own profile
    if (userId !== authenticatedUserId) {
      return res.status(403).json({ error: 'Access denied' });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        fullName: true,
        email: true,
        role: true,
        knowledgePoints: true,
        level: true,
        avatar: true,
        school: true,
        grade: true,
        businessName: true,
        businessType: true,
        userStats: true,
        userPets: {
          include: {
            pet: true
          }
        }
      }
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Add computed fields to match frontend expectations
    const enhancedUser = {
      ...user,
      totalGamesPlayed: user.userStats?.totalGamesPlayed || 0,
      totalCorrectAnswers: user.userStats?.totalCorrectAnswers || 0,
      bossesDefeated: user.userStats?.totalBossesDefeated || 0,
      profileImage: user.avatar
    };

    res.json({ user: enhancedUser });
  } catch (error) {
    console.error('Get user profile error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update user profile
router.put('/profile/:userId', async (req: any, res: any) => {
  try {
    const { userId } = req.params;
    const { username, fullName, avatar } = req.body;
    const authenticatedUserId = req.userId;

    // Users can only update their own profile
    if (userId !== authenticatedUserId) {
      return res.status(403).json({ error: 'Access denied' });
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        username,
        fullName,
        avatar
      },
      select: {
        id: true,
        username: true,
        fullName: true,
        email: true,
        role: true,
        avatar: true,
        knowledgePoints: true,
        level: true,
        school: true,
        grade: true,
        businessName: true,
        businessType: true
      }
    });

    res.json({
      message: 'Profile updated successfully',
      user
    });
  } catch (error) {
    console.error('Update user profile error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get user stats
router.get('/stats/:userId', async (req: any, res: any) => {
  try {
    const { userId } = req.params;
    const authenticatedUserId = req.userId;

    // Users can only access their own stats
    if (userId !== authenticatedUserId) {
      return res.status(403).json({ error: 'Access denied' });
    }

    const [stats, user] = await Promise.all([
      prisma.userStats.findUnique({
        where: { userId }
      }),
      prisma.user.findUnique({
        where: { id: userId },
        select: { knowledgePoints: true, level: true }
      })
    ]);

    if (!stats || !user) {
      return res.status(404).json({ error: 'User stats not found' });
    }

    // Add computed fields to match frontend expectations
    const enhancedStats = {
      ...stats,
      totalKnowledgePoints: user.knowledgePoints,
      currentLevel: user.level,
      nextLevelKP: (user.level + 1) * 200,
      favoriteSubject: stats.favoriteSubject || 'General MIB'
    };

    res.json({ stats: enhancedStats });
  } catch (error) {
    console.error('Get user stats error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router; 