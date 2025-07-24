import { PrismaClient } from './generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

// Real MIB Questions for Barunah!
const realQuestions = [
  // EASY Questions (15 seconds timer, 10 KP each)
  {
    question: "What are the three pillars of MIB?",
    optionA: "Malay, Islam, Monarchy",
    optionB: "Culture, Religion, Government", 
    optionC: "Tradition, Faith, Leadership",
    optionD: "Heritage, Belief, Authority",
    correctAnswer: "A",
    explanation: "MIB stands for Melayu (Malay), Islam, and Beraja (Monarchy) - the three fundamental pillars of Brunei's national philosophy.",
    subject: "GENERAL_MIB",
    difficulty: "EASY"
  },
  {
    question: "What is the official language of Brunei Darussalam?",
    optionA: "English",
    optionB: "Malay",
    optionC: "Arabic",
    optionD: "Chinese",
    correctAnswer: "B",
    explanation: "Malay (Bahasa Melayu) is the official language of Brunei, reflecting the Melayu component of MIB.",
    subject: "MELAYU_CULTURE",
    difficulty: "EASY"
  },
  {
    question: "When did Brunei gain full independence?",
    optionA: "1984",
    optionB: "1963",
    optionC: "1971",
    optionD: "1990",
    correctAnswer: "A",
    explanation: "Brunei gained full independence on January 1, 1984, marking the beginning of modern Brunei under MIB philosophy.",
    subject: "BRUNEI_HISTORY",
    difficulty: "EASY"
  },
  {
    question: "What is the official religion of Brunei?",
    optionA: "Buddhism",
    optionB: "Christianity",
    optionC: "Islam",
    optionD: "Hinduism",
    correctAnswer: "C",
    explanation: "Islam is the official religion of Brunei, representing the Islam pillar of MIB.",
    subject: "ISLAMIC_VALUES",
    difficulty: "EASY"
  },
  {
    question: "Who is the current Sultan of Brunei?",
    optionA: "Sultan Hassanal Bolkiah",
    optionB: "Sultan Omar Ali Saifuddien",
    optionC: "Sultan Sharif Ali",
    optionD: "Sultan Muhammad Shah",
    correctAnswer: "A",
    explanation: "Sultan Hassanal Bolkiah is the current Sultan of Brunei, representing the Beraja (Monarchy) system.",
    subject: "BERAJA_SYSTEM",
    difficulty: "EASY"
  },

  // MEDIUM Questions (10 seconds timer, 15 KP each)
  {
    question: "In what year was the MIB philosophy officially introduced?",
    optionA: "1984",
    optionB: "1990",
    optionC: "1985",
    optionD: "1988",
    correctAnswer: "A",
    explanation: "The MIB philosophy was officially introduced in 1984, coinciding with Brunei's independence.",
    subject: "GENERAL_MIB",
    difficulty: "MEDIUM"
  },
  {
    question: "What does 'Adat' refer to in Malay culture?",
    optionA: "Traditional customs and practices",
    optionB: "Religious ceremonies",
    optionC: "Royal protocols",
    optionD: "Modern laws",
    correctAnswer: "A",
    explanation: "Adat refers to traditional Malay customs and practices that are preserved under the Melayu component of MIB.",
    subject: "MELAYU_CULTURE",
    difficulty: "MEDIUM"
  },
  {
    question: "Which Islamic school of thought is predominantly followed in Brunei?",
    optionA: "Hanafi",
    optionB: "Shafi'i",
    optionC: "Maliki",
    optionD: "Hanbali",
    correctAnswer: "B",
    explanation: "The Shafi'i school of Islamic jurisprudence is predominantly followed in Brunei.",
    subject: "ISLAMIC_VALUES",
    difficulty: "MEDIUM"
  },
  {
    question: "What is the role of the Legislative Council in Brunei's monarchy?",
    optionA: "To make laws independently",
    optionB: "To advise the Sultan on legislation",
    optionC: "To elect the Sultan",
    optionD: "To control the military",
    correctAnswer: "B",
    explanation: "The Legislative Council advises the Sultan on legislation, maintaining the balance in Brunei's monarchical system.",
    subject: "BERAJA_SYSTEM",
    difficulty: "MEDIUM"
  },
  {
    question: "Which historical period saw the golden age of the Brunei Sultanate?",
    optionA: "14th-16th centuries",
    optionB: "17th-18th centuries",
    optionC: "19th century",
    optionD: "20th century",
    correctAnswer: "A",
    explanation: "The 14th-16th centuries marked the golden age of the Brunei Sultanate when it controlled much of Borneo.",
    subject: "BRUNEI_HISTORY",
    difficulty: "MEDIUM"
  },

  // HARD Questions (5 seconds timer, 25 KP each)
  {
    question: "What is the concept of 'Budi' in Malay philosophy?",
    optionA: "Gratitude and moral obligation",
    optionB: "Wealth and prosperity",
    optionC: "Power and authority",
    optionD: "Knowledge and wisdom",
    correctAnswer: "A",
    explanation: "Budi represents gratitude, moral obligation, and reciprocal relationships in Malay culture, fundamental to MIB values.",
    subject: "MELAYU_CULTURE",
    difficulty: "HARD"
  },
  {
    question: "Which Sultan established the first Islamic legal code in Brunei?",
    optionA: "Sultan Muhammad Shah",
    optionB: "Sultan Sharif Ali",
    optionC: "Sultan Bolkiah",
    optionD: "Sultan Abdul Jalilul Akbar",
    correctAnswer: "B",
    explanation: "Sultan Sharif Ali established the first comprehensive Islamic legal code in Brunei, strengthening the Islamic foundation.",
    subject: "ISLAMIC_VALUES",
    difficulty: "HARD"
  },
  {
    question: "What is the significance of 'Musyawarah' in Islamic governance?",
    optionA: "Individual decision-making",
    optionB: "Consultation and collective decision-making",
    optionC: "Religious ritual",
    optionD: "Military strategy",
    correctAnswer: "B",
    explanation: "Musyawarah emphasizes consultation and collective decision-making, reflecting Islamic principles in governance.",
    subject: "ISLAMIC_VALUES",
    difficulty: "HARD"
  },
  {
    question: "How does MIB philosophy address modernization?",
    optionA: "Rejects all modern influences",
    optionB: "Adopts Western values completely",
    optionC: "Balances tradition with selective modernization",
    optionD: "Focuses only on economic development",
    correctAnswer: "C",
    explanation: "MIB philosophy promotes balanced development that preserves traditional values while embracing beneficial modern elements.",
    subject: "GENERAL_MIB",
    difficulty: "HARD"
  },
  {
    question: "What role does the concept of 'Titah' play in Brunei's monarchy?",
    optionA: "Royal decree or command",
    optionB: "Religious ceremony",
    optionC: "Traditional dance",
    optionD: "Court protocol",
    correctAnswer: "A",
    explanation: "Titah refers to royal decrees or commands from the Sultan, representing the authority of the Beraja system.",
    subject: "BERAJA_SYSTEM",
    difficulty: "HARD"
  }
];

async function main() {
  console.log('🌱 Starting real data seeding...');

  // Create real admin account
  const adminPassword = await bcrypt.hash('your-secure-admin-password', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@barunah.edu.bn' },
    update: {},
    create: {
      email: 'admin@barunah.edu.bn',
      username: 'barunah_admin',
      password: adminPassword,
      fullName: 'Barunah Administrator',
      role: 'ADMIN'
    }
  });

  // Create real vendor accounts (example)
  const vendorPassword = await bcrypt.hash('vendor-secure-password', 10);
  const vendor = await prisma.user.upsert({
    where: { email: 'vendor@local-store.bn' },
    update: {},
    create: {
      email: 'vendor@local-store.bn',
      username: 'local_vendor',
      password: vendorPassword,
      fullName: 'Local Education Store',
      role: 'VENDOR',
      businessName: 'Brunei Education Supplies',
      businessType: 'Educational Materials',
      contactPhone: '+673-XXXXXXX'
    }
  });

  // Insert real questions
  for (const question of realQuestions) {
    await prisma.question.create({
      data: {
        ...question,
        subject: question.subject as any,
        difficulty: question.difficulty as any
      }
    });
  }

  // Create real rewards
  const realRewards = [
    {
      title: 'MIB Study Guide Book',
      description: 'Comprehensive study guide covering all MIB topics',
      knowledgePointsCost: 300,
      category: 'Educational',
      stockQuantity: 50,
      vendorId: vendor.id
    },
    {
      title: 'School Supplies Bundle',
      description: 'Complete set of school supplies for one semester',
      knowledgePointsCost: 500,
      category: 'Educational',
      stockQuantity: 20,
      vendorId: vendor.id
    },
    {
      title: 'Brunei History Book',
      description: 'Detailed history of Brunei Darussalam',
      knowledgePointsCost: 250,
      category: 'Educational',
      stockQuantity: 30,
      vendorId: vendor.id
    },
    {
      title: '20% Discount Voucher',
      description: '20% off on educational materials',
      knowledgePointsCost: 150,
      category: 'Discount',
      stockQuantity: 100,
      vendorId: vendor.id
    },
    {
      title: 'Premium Calculator',
      description: 'Scientific calculator for advanced studies',
      knowledgePointsCost: 400,
      category: 'Educational',
      stockQuantity: 15,
      vendorId: vendor.id
    },
    {
      title: 'Islamic Values Workbook',
      description: 'Interactive workbook on Islamic principles',
      knowledgePointsCost: 200,
      category: 'Educational',
      stockQuantity: 40,
      vendorId: vendor.id
    }
  ];

  for (const reward of realRewards) {
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

  console.log('✅ Real data seeding completed!');
  console.log(`📚 ${realQuestions.length} real questions added`);
  console.log('🎁 Real rewards created');
}

main()
  .catch((e) => {
    console.error('❌ Error during real data seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });