import { PrismaClient } from './generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const questions = [
  // Easy Questions
  {
    question: "What is the official religion of Brunei Darussalam?",
    optionA: "Christianity",
    optionB: "Buddhism",
    optionC: "Islam",
    optionD: "Hinduism",
    correctAnswer: "C",
    explanation: "Islam is the official religion of Brunei Darussalam as stated in the country's constitution.",
    subject: "ISLAMIC_VALUES",
    difficulty: "EASY"
  },
  {
    question: "What does \"Melayu Islam Beraja\" (MIB) emphasize?",
    optionA: "Democracy and secularism",
    optionB: "Malay culture, Islamic faith, and monarchy",
    optionC: "Socialism and equality",
    optionD: "Western modernization",
    correctAnswer: "B",
    explanation: "MIB emphasizes the three core pillars: Malay culture (Melayu), Islamic faith (Islam), and monarchy system (Beraja).",
    subject: "GENERAL_MIB",
    difficulty: "EASY"
  },
  {
    question: "Who is the head of state in Brunei?",
    optionA: "Prime Minister",
    optionB: "Sultan",
    optionC: "President",
    optionD: "King",
    correctAnswer: "B",
    explanation: "The Sultan is the head of state in Brunei, representing the monarchy system in MIB.",
    subject: "BERAJA_SYSTEM",
    difficulty: "EASY"
  },
  {
    question: "Which language is predominantly spoken in Brunei?",
    optionA: "English",
    optionB: "Mandarin",
    optionC: "Malay",
    optionD: "Arabic",
    correctAnswer: "C",
    explanation: "Malay is the official language and is predominantly spoken in Brunei, representing the Melayu aspect of MIB.",
    subject: "MELAYU_CULTURE",
    difficulty: "EASY"
  },
  {
    question: "When did Brunei gain full independence?",
    optionA: "1950",
    optionB: "1984",
    optionC: "1963",
    optionD: "1990",
    correctAnswer: "B",
    explanation: "Brunei gained full independence on January 1, 1984, from British protection.",
    subject: "BRUNEI_HISTORY",
    difficulty: "EASY"
  },
  // Medium Questions
  {
    question: "Which Sultan built the Kampong Ayer Water Village?",
    optionA: "Sultan Bolkiah",
    optionB: "Sultan Sharif Ali",
    optionC: "Sultan Muhammad Shah",
    optionD: "Sultan Abdul Jalilul Akbar",
    correctAnswer: "A",
    explanation: "Sultan Bolkiah was instrumental in the development of Kampong Ayer, the world's largest water village.",
    subject: "BRUNEI_HISTORY",
    difficulty: "MEDIUM"
  },
  {
    question: "What is the main objective of MIB?",
    optionA: "Promote Westernization",
    optionB: "Strengthen Malay identity, Islamic values, and loyalty to the monarchy",
    optionC: "Encourage secular governance",
    optionD: "Reduce royal authority",
    correctAnswer: "B",
    explanation: "MIB aims to strengthen Malay identity, Islamic values, and loyalty to the monarchy as the foundation of Brunei's society.",
    subject: "GENERAL_MIB",
    difficulty: "MEDIUM"
  },
  {
    question: "Which year was the MIB philosophy officially introduced?",
    optionA: "1960",
    optionB: "1984",
    optionC: "1990",
    optionD: "2000",
    correctAnswer: "B",
    explanation: "The MIB philosophy was officially introduced in 1984, coinciding with Brunei's independence.",
    subject: "GENERAL_MIB",
    difficulty: "MEDIUM"
  },
  // Hard Questions
  {
    question: "Which Sultan introduced the first Islamic legal code in Brunei?",
    optionA: "Sultan Muhammad Shah",
    optionB: "Sultan Sharif Ali",
    optionC: "Sultan Bolkiah",
    optionD: "Sultan Abdul Jalilul Akbar",
    correctAnswer: "B",
    explanation: "Sultan Sharif Ali introduced the first Islamic legal code in Brunei, establishing the foundation of Islamic law in the country.",
    subject: "ISLAMIC_VALUES",
    difficulty: "HARD"
  },
  {
    question: "What is the Malay term for the Islamic concept of \"consultation\" in governance?",
    optionA: "Musyawarah",
    optionB: "Fatwa",
    optionC: "Ijtihad",
    optionD: "Taqlid",
    correctAnswer: "A",
    explanation: "Musyawarah refers to the Islamic concept of consultation in decision-making and governance.",
    subject: "ISLAMIC_VALUES",
    difficulty: "HARD"
  }
];

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create admin user (upsert to handle existing data)
  const adminPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@barunah.com' },
    update: {},
    create: {
      email: 'admin@barunah.com',
      username: 'admin',
      password: adminPassword,
      fullName: 'System Administrator',
      role: 'ADMIN'
    }
  });

  // Create sample student (upsert to handle existing data)
  const studentPassword = await bcrypt.hash('student123', 10);
  const student = await prisma.user.upsert({
    where: { email: 'student@example.com' },
    update: {},
    create: {
      email: 'student@example.com',
      username: 'student1',
      password: studentPassword,
      fullName: 'Test Student',
      role: 'STUDENT',
      school: 'Chung Hwa Middle School BSB',
      grade: 'Year 5',
      knowledgePoints: 0,
      level: 1
    }
  });

  // Create student stats (upsert to handle existing data)
  await prisma.userStats.upsert({
    where: { userId: student.id },
    update: {},
    create: {
      userId: student.id
    }
  });

  // Create sample vendor (upsert to handle existing data)
  const vendorPassword = await bcrypt.hash('vendor123', 10);
  const vendor = await prisma.user.upsert({
    where: { email: 'vendor@example.com' },
    update: {},
    create: {
      email: 'vendor@example.com',
      username: 'vendor1',
      password: vendorPassword,
      fullName: 'Test Vendor',
      role: 'VENDOR',
      businessName: 'Barunah Rewards Store',
      businessType: 'Education Supplies',
      contactPhone: '+673-1234567'
    }
  });

  // Insert questions (skip if they exist)
  for (const question of questions) {
    try {
      await prisma.question.create({
        data: {
          ...question,
          subject: question.subject as any,
          difficulty: question.difficulty as any
        }
      });
    } catch (error: any) {
      if (error.code === 'P2002') {
        console.log(`Question already exists: ${question.question.substring(0, 50)}...`);
      } else {
        throw error;
      }
    }
  }

  // Create sample rewards (skip if they exist)
  const rewards = [
    {
      title: 'Pencil Set',
      description: 'Set of 12 colored pencils',
      knowledgePointsCost: 100,
      category: 'Stationery',
      stockQuantity: 50,
      vendorId: vendor.id
    },
    {
      title: '20% Discount Voucher',
      description: '20% off on any stationery purchase',
      knowledgePointsCost: 200,
      category: 'Discount',
      stockQuantity: 100,
      vendorId: vendor.id
    },
    {
      title: 'Notebook',
      description: 'Premium quality notebook',
      knowledgePointsCost: 150,
      category: 'Stationery',
      stockQuantity: 30,
      vendorId: vendor.id
    }
  ];

  for (const reward of rewards) {
    try {
      await prisma.reward.create({
        data: reward
      });
    } catch (error: any) {
      if (error.code === 'P2002') {
        console.log(`Reward already exists: ${reward.title}`);
      } else {
        throw error;
      }
    }
  }

  // Create sample pets (skip if they exist)
  const pets = [
    {
      name: 'Harimau Malaya',
      description: 'A brave tiger representing courage',
      imageUrl: '/images/pets/tiger.png',
      rarity: 'Common',
      knowledgePointsCost: 300,
      abilities: ['Courage Boost', 'Extra KP']
    },
    {
      name: 'Burung Enggang',
      description: 'A wise hornbill representing wisdom',
      imageUrl: '/images/pets/hornbill.png',
      rarity: 'Rare',
      knowledgePointsCost: 500,
      abilities: ['Wisdom Boost', 'Time Extension']
    },
    {
      name: 'Kancil',
      description: 'A clever mousedeer representing intelligence',
      imageUrl: '/images/pets/mousedeer.png',
      rarity: 'Epic',
      knowledgePointsCost: 800,
      abilities: ['Intelligence Boost', 'Shield Protection']
    }
  ];

  for (const pet of pets) {
    try {
      await prisma.pet.create({
        data: pet
      });
    } catch (error: any) {
      if (error.code === 'P2002') {
        console.log(`Pet already exists: ${pet.name}`);
      } else {
        throw error;
      }
    }
  }

  // Create sample boss (skip if it exists)
  try {
    await prisma.boss.create({
      data: {
        name: 'Guardian of Knowledge',
        description: 'The final challenge to test your MIB knowledge',
        imageUrl: '/images/boss/guardian.png',
        baseHp: 100,
        hpPerLevel: 50,
        difficulty: 'MEDIUM'
      }
    });
  } catch (error: any) {
    if (error.code === 'P2002') {
      console.log('Boss already exists: Guardian of Knowledge');
    } else {
      throw error;
    }
  }

  console.log('✅ Database seeding completed!');
  console.log('👤 Admin user created: admin@barunah.com / admin123');
  console.log('🎓 Student user created: student@example.com / student123');
  console.log('🏪 Vendor user created: vendor@example.com / vendor123');
  console.log(`📚 ${questions.length} questions added`);
  console.log('🎁 Sample rewards and pets created');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 