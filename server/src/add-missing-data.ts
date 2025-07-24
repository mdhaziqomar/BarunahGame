import { PrismaClient } from './generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function addMissingData() {
  console.log('🔧 Adding missing data for full functionality...\n');

  try {
    // Add test student accounts
    const studentPassword = await bcrypt.hash('student123', 10);
    
    const students = [
      {
        email: 'student1@chms.edu.bn',
        username: 'student_ali',
        fullName: 'Ali Rahman',
        school: 'Chung Hwa Middle School BSB',
        grade: 'Year 5'
      },
      {
        email: 'student2@chms.edu.bn', 
        username: 'student_siti',
        fullName: 'Siti Aminah',
        school: 'Chung Hwa Middle School BSB',
        grade: 'Year 5'
      },
      {
        email: 'student3@chms.edu.bn',
        username: 'student_ahmad',
        fullName: 'Ahmad Faisal',
        school: 'Chung Hwa Middle School BSB', 
        grade: 'Year 5'
      }
    ];

    for (const studentData of students) {
      const student = await prisma.user.upsert({
        where: { email: studentData.email },
        update: {},
        create: {
          ...studentData,
          password: studentPassword,
          role: 'STUDENT',
          knowledgePoints: Math.floor(Math.random() * 500), // Random starting KP
          level: 1
        }
      });

      // Create user stats for each student
      await prisma.userStats.upsert({
        where: { userId: student.id },
        update: {},
        create: {
          userId: student.id,
          totalGamesPlayed: Math.floor(Math.random() * 5),
          totalBossesDefeated: Math.floor(Math.random() * 2),
          totalCorrectAnswers: Math.floor(Math.random() * 20),
          totalQuestions: Math.floor(Math.random() * 30) + 20
        }
      });

      console.log(`✅ Created student: ${studentData.email}`);
    }

    // Add collectible pets
    const pets = [
      {
        name: 'Harimau Malaya',
        description: 'A brave Malayan tiger representing courage and strength in MIB values',
        imageUrl: '/images/pets/tiger.png',
        rarity: 'Common',
        knowledgePointsCost: 300,
        abilities: ['Courage Boost', 'Extra KP +10%']
      },
      {
        name: 'Burung Enggang',
        description: 'A wise hornbill representing wisdom and knowledge in Islamic teachings',
        imageUrl: '/images/pets/hornbill.png', 
        rarity: 'Rare',
        knowledgePointsCost: 500,
        abilities: ['Wisdom Boost', 'Time Extension +5s']
      },
      {
        name: 'Kancil Bijak',
        description: 'A clever mousedeer representing intelligence and wit in Malay folklore',
        imageUrl: '/images/pets/mousedeer.png',
        rarity: 'Epic',
        knowledgePointsCost: 800,
        abilities: ['Intelligence Boost', 'Shield Protection']
      },
      {
        name: 'Naga Brunei',
        description: 'A legendary dragon representing the royal heritage of Beraja system',
        imageUrl: '/images/pets/dragon.png',
        rarity: 'Legendary', 
        knowledgePointsCost: 1200,
        abilities: ['Royal Blessing', 'KP Multiplier x2', 'Boss Damage +50%']
      }
    ];

    for (const petData of pets) {
      try {
        await prisma.pet.create({
          data: petData
        });
        console.log(`✅ Created pet: ${petData.name} (${petData.rarity})`);
      } catch (error: any) {
        if (error.code === 'P2002') {
          console.log(`Pet already exists: ${petData.name}`);
        } else {
          throw error;
        }
      }
    }

    // Add boss data
    let boss;
    try {
      boss = await prisma.boss.create({
        data: {
          name: 'Guardian of MIB Knowledge',
          description: 'The ultimate test of your understanding of Melayu Islam Beraja philosophy',
          imageUrl: '/images/boss/mib-guardian.png',
          baseHp: 150,
          hpPerLevel: 25,
          difficulty: 'HARD'
        }
      });
      console.log(`✅ Created boss: ${boss.name}`);
    } catch (error: any) {
      if (error.code === 'P2002') {
        console.log('Boss already exists, fetching existing boss...');
        boss = await prisma.boss.findFirst({
          where: { name: 'Guardian of MIB Knowledge' }
        });
        if (boss) {
          console.log(`✅ Found existing boss: ${boss.name}`);
        }
      } else {
        throw error;
      }
    }

    // Link some hard questions to the boss
    const hardQuestions = await prisma.question.findMany({
      where: { difficulty: 'HARD' },
      take: 3
    });

    if (boss) {
      for (const question of hardQuestions) {
        try {
          await prisma.bossQuestion.create({
            data: {
              bossId: boss.id,
              questionId: question.id
            }
          });
        } catch (error: any) {
          if (error.code === 'P2002') {
            console.log(`Boss question link already exists`);
          } else {
            throw error;
          }
        }
      }
    }
    console.log(`✅ Linked ${hardQuestions.length} questions to boss`);

    console.log('\n🎉 Missing data added successfully!');
    console.log('\n📊 Your app now has:');
    console.log('👥 Test student accounts with login: student123');
    console.log('🐾 4 collectible pets (Common to Legendary)');
    console.log('👹 Boss fight with linked questions');
    console.log('📈 Student stats for leaderboard');

  } catch (error) {
    console.error('❌ Error adding missing data:', error);
  }
}

addMissingData()
  .finally(async () => {
    await prisma.$disconnect();
  });