import { Router } from 'express';
import { PrismaClient } from '../generated/prisma';
import { authenticateToken } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// Apply authentication middleware to all game routes
router.use(authenticateToken);

// Start a new game
router.post('/start', async (req: any, res: any) => {
  try {
    const { difficulty, subject } = req.body;
    const userId = req.userId; // Get userId from authenticated request

    // Handle MIXED difficulty - for mixed difficulty, we'll use EASY as default
    // but the actual difficulty will be determined by each individual question
    const gameDifficulty = difficulty === 'MIXED' ? 'EASY' : difficulty;

    const game = await prisma.game.create({
      data: {
        userId,
        difficulty: gameDifficulty,
        subject: subject === 'mixed' ? null : subject, // null for mixed subjects
        status: 'ACTIVE',
        currentQuestion: 1,
        totalQuestions: 10
      }
    });

    res.json({
      message: 'Game started successfully',
      game
    });
  } catch (error) {
    console.error('Start game error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get random questions for a game
router.get('/questions', async (req: any, res: any) => {
  try {
    const { difficulty, subject, count = 5 } = req.query;

    const whereClause: any = {
      isActive: true
    };

    // Handle MIXED difficulty - don't filter by difficulty, get questions of all difficulties
    if (difficulty && difficulty !== 'MIXED') {
      whereClause.difficulty = difficulty;
    }

    if (subject && subject !== 'mixed') {
      whereClause.subject = subject;
    }

    const questions = await prisma.question.findMany({
      where: whereClause,
      take: parseInt(count),
      orderBy: {
        createdAt: 'desc'
      }
    });

    // Shuffle questions
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);

    res.json({
      questions: shuffledQuestions.map((q: any) => ({
        id: q.id,
        question: q.question,
        options: {
          A: q.optionA,
          B: q.optionB,
          C: q.optionC,
          D: q.optionD
        },
        correctAnswer: q.correctAnswer,
        subject: q.subject,
        difficulty: q.difficulty,
        explanation: q.explanation
      }))
    });
  } catch (error) {
    console.error('Get questions error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Submit answer
router.post('/answer', async (req: any, res: any) => {
  try {
    const { gameId, questionId, selectedAnswer, timeSpent } = req.body;

    // Get the question to check correct answer
    const question = await prisma.question.findUnique({
      where: { id: questionId }
    });

    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }

    const isCorrect = selectedAnswer === question.correctAnswer;
    
    // Calculate knowledge points earned
    let kpEarned = 0;
    if (isCorrect) {
      switch (question.difficulty) {
        case 'EASY':
          kpEarned = 10;
          break;
        case 'MEDIUM':
          kpEarned = 15;
          break;
        case 'HARD':
          kpEarned = 25;
          break;
      }
    }

    // Get the game to find userId
    const game = await prisma.game.findUnique({
      where: { id: gameId }
    });

    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }

    // Record the answer
    const gameAnswer = await prisma.gameAnswer.create({
      data: {
        gameId,
        questionId,
        userId: game.userId,
        selectedAnswer,
        isCorrect,
        timeSpent,
        knowledgePointsEarned: kpEarned
      }
    });

    // Update game score
    await prisma.game.update({
      where: { id: gameId },
      data: {
        score: {
          increment: isCorrect ? 1 : 0
        },
        knowledgePointsEarned: {
          increment: kpEarned
        }
      }
    });

    // Update user's knowledge points immediately
    if (kpEarned > 0) {
      await prisma.user.update({
        where: { id: game.userId },
        data: {
          knowledgePoints: {
            increment: kpEarned
          }
        }
      });
    }

    res.json({
      message: 'Answer submitted successfully',
      isCorrect,
      correctAnswer: question.correctAnswer,
      explanation: question.explanation,
      knowledgePointsEarned: kpEarned,
      gameAnswer
    });
  } catch (error) {
    console.error('Submit answer error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get boss questions for boss fight
router.get('/boss-questions', async (req: any, res: any) => {
  try {
    const { difficulty } = req.query;

    const whereClause: any = {
      isActive: true
    };

    // Handle MIXED difficulty - for boss fights, default to HARD questions
    if (difficulty && difficulty !== 'MIXED') {
      whereClause.difficulty = difficulty;
    } else {
      whereClause.difficulty = 'HARD'; // Boss questions are always hard
    }

    const bossQuestions = await prisma.question.findMany({
      where: whereClause,
      take: 3,
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.json({
      questions: bossQuestions.map((q: any) => ({
        id: q.id,
        question: q.question,
        options: {
          A: q.optionA,
          B: q.optionB,
          C: q.optionC,
          D: q.optionD
        },
        correctAnswer: q.correctAnswer,
        difficulty: q.difficulty,
        explanation: q.explanation
      }))
    });
  } catch (error) {
    console.error('Get boss questions error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Purchase shop item
router.post('/shop/purchase', async (req: any, res: any) => {
  try {
    const { gameId, itemId, itemPrice } = req.body;
    const userId = req.userId; // Get userId from authenticated request

    // Get the game to verify it belongs to the user
    const game = await prisma.game.findUnique({
      where: { id: gameId }
    });

    if (!game || game.userId !== userId) {
      return res.status(404).json({ error: 'Game not found' });
    }

    // Get user to check current KP
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if user has enough KP
    if (user.knowledgePoints < itemPrice) {
      return res.status(400).json({ error: 'Insufficient knowledge points' });
    }

    // Deduct KP from user
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        knowledgePoints: {
          decrement: itemPrice
        }
      }
    });

    res.json({
      message: 'Item purchased successfully',
      remainingKP: updatedUser.knowledgePoints,
      itemId,
      itemPrice
    });
  } catch (error) {
    console.error('Shop purchase error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Complete game
router.post('/complete', async (req: any, res: any) => {
  try {
    const { gameId, bossDefeated } = req.body;

    const game = await prisma.game.findUnique({
      where: { id: gameId }
    });

    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }

    let bonusKP = 0;
    if (bossDefeated) {
      bonusKP = 50; // Boss defeat bonus
    }

    // Update game as completed
    const updatedGame = await prisma.game.update({
      where: { id: gameId },
      data: {
        status: 'COMPLETED',
        timeCompleted: new Date(),
        bossDefeated,
        knowledgePointsEarned: {
          increment: bonusKP
        }
      }
    });

    // Update user's total knowledge points
    await prisma.user.update({
      where: { id: game.userId },
      data: {
        knowledgePoints: {
          increment: updatedGame.knowledgePointsEarned
        }
      }
    });

    // Update user stats
    await prisma.userStats.upsert({
      where: { userId: game.userId },
      update: {
        totalGamesPlayed: {
          increment: 1
        },
        totalBossesDefeated: {
          increment: bossDefeated ? 1 : 0
        },
        lastPlayedAt: new Date()
      },
      create: {
        userId: game.userId,
        totalGamesPlayed: 1,
        totalBossesDefeated: bossDefeated ? 1 : 0,
        lastPlayedAt: new Date()
      }
    });

    res.json({
      message: 'Game completed successfully',
      game: updatedGame,
      totalKnowledgePoints: updatedGame.knowledgePointsEarned,
      bonusKP
    });
  } catch (error) {
    console.error('Complete game error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get leaderboard
router.get('/leaderboard', async (req: any, res: any) => {
  try {
    const { period = 'all-time', limit = 100 } = req.query;

    const users = await prisma.user.findMany({
      where: {
        role: 'STUDENT'
      },
      select: {
        id: true,
        username: true,
        knowledgePoints: true,
        level: true,
        userStats: {
          select: {
            totalGamesPlayed: true,
            totalBossesDefeated: true
          }
        }
      },
      orderBy: {
        knowledgePoints: 'desc'
      },
      take: parseInt(limit)
    });

    const leaderboard = users.map((user: any, index: number) => ({
      rank: index + 1,
      username: user.username,
      knowledgePoints: user.knowledgePoints,
      level: user.level,
      totalGamesPlayed: user.userStats?.totalGamesPlayed || 0,
      totalBossesDefeated: user.userStats?.totalBossesDefeated || 0
    }));

    res.json({
      leaderboard,
      period
    });
  } catch (error) {
    console.error('Get leaderboard error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router; 