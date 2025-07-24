import { PrismaClient } from './generated/prisma';

const prisma = new PrismaClient();

async function checkData() {
  try {
    console.log('🔍 Checking database data...\n');

    // Check users
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        fullName: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true
      }
    });
    console.log(`👥 Users (${users.length}):`);
    users.forEach(user => {
      console.log(`  - ${user.fullName} (${user.role}) - ${user.email}`);
    });

    // Check questions
    const questions = await prisma.question.findMany({
      select: {
        id: true,
        question: true,
        subject: true,
        difficulty: true,
        isActive: true
      }
    });
    console.log(`\n❓ Questions (${questions.length}):`);
    questions.slice(0, 5).forEach(q => {
      console.log(`  - ${q.question.substring(0, 50)}... (${q.subject} - ${q.difficulty})`);
    });

    // Check rewards
    const rewards = await prisma.reward.findMany({
      select: {
        id: true,
        title: true,
        category: true,
        knowledgePointsCost: true,
        stockQuantity: true,
        vendorId: true
      }
    });
    console.log(`\n🎁 Rewards (${rewards.length}):`);
    rewards.forEach(reward => {
      console.log(`  - ${reward.title} (${reward.category}) - ${reward.knowledgePointsCost} KP - Stock: ${reward.stockQuantity}`);
    });

    // Check games
    const games = await prisma.game.findMany({
      select: {
        id: true,
        score: true,
        status: true,
        timeStarted: true
      }
    });
    console.log(`\n🎮 Games (${games.length}):`);
    games.slice(0, 5).forEach(game => {
      console.log(`  - Score: ${game.score}, Status: ${game.status}, Started: ${game.timeStarted}`);
    });

    // Check user rewards
    const userRewards = await prisma.userReward.findMany({
      select: {
        id: true,
        status: true,
        createdAt: true
      }
    });
    console.log(`\n🎫 User Rewards (${userRewards.length}):`);
    userRewards.slice(0, 5).forEach(ur => {
      console.log(`  - Status: ${ur.status}, Created: ${ur.createdAt}`);
    });

    console.log('\n✅ Database check completed!');

  } catch (error) {
    console.error('❌ Error checking data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkData();