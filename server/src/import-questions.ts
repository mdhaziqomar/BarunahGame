import { PrismaClient } from './generated/prisma';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

// Function to import questions from JSON file
async function importQuestions() {
  try {
    console.log('📚 Importing questions from JSON...');
    
    // Read questions from JSON file
    const questionsPath = path.join(__dirname, 'questions.json');
    
    if (!fs.existsSync(questionsPath)) {
      console.log('❌ questions.json file not found. Creating template...');
      
      // Create template JSON file
      const template = [
        {
          "question": "What does MIB stand for?",
          "optionA": "Malay Islam Beraja",
          "optionB": "Modern Islamic Brunei", 
          "optionC": "Monarchy Islam Brunei",
          "optionD": "Malay Islamic Brotherhood",
          "correctAnswer": "A",
          "explanation": "MIB stands for Melayu Islam Beraja, the national philosophy of Brunei.",
          "subject": "GENERAL_MIB",
          "difficulty": "EASY"
        }
      ];
      
      fs.writeFileSync(questionsPath, JSON.stringify(template, null, 2));
      console.log('✅ Template questions.json created. Please add your questions and run again.');
      return;
    }
    
    const questionsData = JSON.parse(fs.readFileSync(questionsPath, 'utf8'));
    
    // Import each question
    for (const question of questionsData) {
      await prisma.question.create({
        data: {
          question: question.question,
          optionA: question.optionA,
          optionB: question.optionB,
          optionC: question.optionC,
          optionD: question.optionD,
          correctAnswer: question.correctAnswer,
          explanation: question.explanation,
          subject: question.subject,
          difficulty: question.difficulty
        }
      });
    }
    
    console.log(`✅ Successfully imported ${questionsData.length} questions`);
    
  } catch (error) {
    console.error('❌ Error importing questions:', error);
  }
}

importQuestions()
  .finally(async () => {
    await prisma.$disconnect();
  });