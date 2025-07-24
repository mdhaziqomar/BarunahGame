import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useGame } from '../context/GameContext';

interface BossQuestion {
  id: string;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: string; // 'A', 'B', 'C', or 'D'
  difficulty: 'HARD';
  explanation: string;
  damage: number;
}

interface Boss {
  id: string;
  name: string;
  description: string;
  maxHp: number;
  currentHp: number;
  image: string;
  weakness: string;
}

const BossFight: React.FC = () => {
  const navigate = useNavigate();
  const { updateUserStats } = useAuth();
  const { gameStats, updateScore, completeGame } = useGame();
  
  const [boss, setBoss] = useState<Boss>({
    id: 'guardian-of-knowledge',
    name: 'Guardian of Knowledge',
    description: 'The ancient keeper of MIB wisdom challenges you!',
    maxHp: 100,
    currentHp: 100,
    image: '🛡️👑',
    weakness: 'Deep understanding of MIB philosophy'
  });

  const [currentQuestion, setCurrentQuestion] = useState<BossQuestion | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [timeLeft, setTimeLeft] = useState(15);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [playerHp, setPlayerHp] = useState(100);
  const [battleLog, setBattleLog] = useState<string[]>([]);
  const [battlePhase, setBattlePhase] = useState<'intro' | 'fighting' | 'victory' | 'defeat'>('intro');
  const [showExplanation, setShowExplanation] = useState(false);

  const bossQuestions: BossQuestion[] = [
    {
      id: 'boss-1',
      question: 'What is the ultimate goal of implementing MIB philosophy in Brunei\'s governance?',
      options: {
        A: 'To modernize the country rapidly',
        B: 'To create a perfect balance between tradition, faith, and monarchy',
        C: 'To compete with neighboring countries',
        D: 'To attract foreign investment',
      },
      correctAnswer: 'B',
      difficulty: 'HARD',
      explanation: 'MIB philosophy seeks to create harmony between Malay culture, Islamic values, and the monarchy system.',
      damage: 25,
    },
    {
      id: 'boss-2',
      question: 'Which aspect of MIB philosophy is most crucial for maintaining social harmony in Brunei?',
      options: {
        A: 'Economic prosperity',
        B: 'Military strength',
        C: 'Balance between individual rights and collective responsibility',
        D: 'International recognition',
      },
      correctAnswer: 'C',
      difficulty: 'HARD',
      explanation: 'MIB emphasizes balancing individual freedoms with collective responsibility to maintain social harmony.',
      damage: 30,
    },
    {
      id: 'boss-3',
      question: 'How does MIB philosophy address the challenges of globalization?',
      options: {
        A: 'By completely rejecting foreign influence',
        B: 'By adopting all global trends',
        C: 'By selectively integrating beneficial aspects while preserving core values',
        D: 'By isolating the country from the world',
      },
      correctAnswer: 'C',
      difficulty: 'HARD',
      explanation: 'MIB philosophy advocates for selective integration of global benefits while maintaining Brunei\'s core identity.',
      damage: 35,
    },
    {
      id: 'boss-4',
      question: 'What role does education play in strengthening MIB philosophy?',
      options: {
        A: 'It has no significant role',
        B: 'It serves as the primary vehicle for transmitting MIB values to future generations',
        C: 'It only focuses on academic subjects',
        D: 'It prioritizes foreign curricula',
      },
      correctAnswer: 'B',
      difficulty: 'HARD',
      explanation: 'Education is fundamental in MIB philosophy as it transmits core values and strengthens national identity.',
      damage: 40,
    },
  ];

  useEffect(() => {
    if (battlePhase === 'fighting' && !currentQuestion) {
      setCurrentQuestion(bossQuestions[questionIndex]);
    }
  }, [battlePhase, questionIndex]);

  useEffect(() => {
    if (battlePhase === 'fighting' && timeLeft > 0 && !isAnswerSubmitted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isAnswerSubmitted) {
      handleTimeUp();
    }
  }, [timeLeft, isAnswerSubmitted, battlePhase]);

  const handleTimeUp = () => {
    handleAnswerSubmit();
  };

  const handleAnswerSelect = (answer: string) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(answer);
    }
  };

  const handleAnswerSubmit = () => {
    if (!currentQuestion) return;

    const correct = selectedAnswer === currentQuestion.correctAnswer;
    setIsAnswerCorrect(correct);
    setIsAnswerSubmitted(true);
    setShowExplanation(true);

    if (correct) {
      // Player damages boss
      const newBossHp = Math.max(0, boss.currentHp - currentQuestion.damage);
      setBoss(prev => ({ ...prev, currentHp: newBossHp }));
      setBattleLog(prev => [...prev, `✅ Correct! You dealt ${currentQuestion.damage} damage to the ${boss.name}!`]);
      updateScore(150); // Hard question points
    } else {
      // Boss damages player
      const damage = 20;
      const newPlayerHp = Math.max(0, playerHp - damage);
      setPlayerHp(newPlayerHp);
      setBattleLog(prev => [...prev, `❌ Wrong! The ${boss.name} dealt ${damage} damage to you!`]);
    }
  };

  const handleNextQuestion = () => {
    if (boss.currentHp <= 0) {
      setBattlePhase('victory');
      return;
    }
    
    if (playerHp <= 0) {
      setBattlePhase('defeat');
      return;
    }

    if (questionIndex + 1 < bossQuestions.length) {
      setQuestionIndex(prev => prev + 1);
      setCurrentQuestion(bossQuestions[questionIndex + 1]);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
      setIsAnswerCorrect(null);
      setShowExplanation(false);
      setTimeLeft(15);
    } else {
      // No more questions, determine winner based on HP
      if (boss.currentHp <= playerHp) {
        setBattlePhase('victory');
      } else {
        setBattlePhase('defeat');
      }
    }
  };

  const handleStartBattle = () => {
    setBattlePhase('fighting');
    setBattleLog(['⚔️ The battle begins! Answer correctly to damage the boss!']);
  };

  const handleFinishBattle = async () => {
    const bossDefeated = battlePhase === 'victory';
    
    try {
      // Complete the game and update stats
      const gameData = await completeGame(bossDefeated);
      updateUserStats(gameData);
      
      // Navigate back to lobby
      navigate('/lobby');
    } catch (error) {
      console.error('Error completing game:', error);
      // Still navigate to lobby even if stats update fails
      navigate('/lobby');
    }
  };

  const getHpPercentage = (current: number, max: number) => {
    return (current / max) * 100;
  };

  const getHpColor = (percentage: number) => {
    if (percentage > 60) return 'bg-green-500';
    if (percentage > 30) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  if (battlePhase === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <motion.div
          className="text-center max-w-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-8xl mb-6">{boss.image}</div>
          <h1 className="text-4xl font-bold text-white mb-4">{boss.name}</h1>
          <p className="text-xl text-gray-300 mb-8">{boss.description}</p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Battle Rules:</h3>
            <div className="text-left text-gray-300 space-y-2">
              <p>• Answer questions correctly to damage the boss</p>
              <p>• Wrong answers will cause the boss to damage you</p>
              <p>• You have 15 seconds per question</p>
              <p>• Defeat the boss to claim victory!</p>
            </div>
          </div>
          <motion.button
            onClick={handleStartBattle}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-xl transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ⚔️ Start Battle!
          </motion.button>
        </motion.div>
      </div>
    );
  }

  if (battlePhase === 'victory') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 flex items-center justify-center p-4">
        <motion.div
          className="text-center max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-8xl mb-6">🏆</div>
          <h1 className="text-4xl font-bold text-white mb-4">Victory!</h1>
          <p className="text-xl text-gray-200 mb-8">
            You have defeated the {boss.name} and proven your mastery of MIB philosophy!
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Battle Results:</h3>
            <div className="text-gray-200 space-y-2">
              <p>Final Score: <span className="font-bold text-yellow-300">{gameStats.currentScore}</span></p>
              <p>Questions Correct: <span className="font-bold text-green-300">{gameStats.correctAnswers}/10</span></p>
              <p>Boss Defeated: <span className="font-bold text-red-300">✅ Yes</span></p>
              <p>Knowledge Points Earned: <span className="font-bold text-blue-300">+200 KP</span></p>
            </div>
          </div>
          <motion.button
            onClick={handleFinishBattle}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-bold text-xl transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🎉 Claim Rewards!
          </motion.button>
        </motion.div>
      </div>
    );
  }

  if (battlePhase === 'defeat') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-700 flex items-center justify-center p-4">
        <motion.div
          className="text-center max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-8xl mb-6">💀</div>
          <h1 className="text-4xl font-bold text-white mb-4">Defeat...</h1>
          <p className="text-xl text-gray-200 mb-8">
            The {boss.name} has proven too powerful. But knowledge is gained through every challenge!
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Battle Results:</h3>
            <div className="text-gray-200 space-y-2">
              <p>Final Score: <span className="font-bold text-yellow-300">{gameStats.currentScore}</span></p>
              <p>Questions Correct: <span className="font-bold text-green-300">{gameStats.correctAnswers}/10</span></p>
              <p>Boss Defeated: <span className="font-bold text-red-300">❌ No</span></p>
              <p>Knowledge Points Earned: <span className="font-bold text-blue-300">+100 KP</span></p>
            </div>
          </div>
          <motion.button
            onClick={handleFinishBattle}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-xl transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🔄 Try Again Later
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Health Bars */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Player HP */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white font-semibold">👤 You</span>
              <span className="text-white font-bold">{playerHp}/100</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div 
                className={`h-4 rounded-full transition-all duration-500 ${getHpColor(getHpPercentage(playerHp, 100))}`}
                style={{ width: `${getHpPercentage(playerHp, 100)}%` }}
              />
            </div>
          </div>

          {/* Boss HP */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white font-semibold">{boss.image} {boss.name}</span>
              <span className="text-white font-bold">{boss.currentHp}/100</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div 
                className={`h-4 rounded-full transition-all duration-500 ${getHpColor(getHpPercentage(boss.currentHp, boss.maxHp))}`}
                style={{ width: `${getHpPercentage(boss.currentHp, boss.maxHp)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Timer */}
        <div className="text-center mb-6">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
            <span className="text-white text-xl font-bold">⏱️ {timeLeft}s</span>
          </div>
        </div>

        {/* Question Card */}
        {currentQuestion && (
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                BOSS QUESTION
              </span>
              <span className="text-white">
                Question {questionIndex + 1}/{bossQuestions.length}
              </span>
            </div>
            
            <h3 className="text-xl text-white mb-6">{currentQuestion.question}</h3>
            
            <div className="space-y-3">
              {Object.entries(currentQuestion.options).map(([key, option]) => (
                <motion.button
                  key={key}
                  onClick={() => handleAnswerSelect(key)}
                  disabled={isAnswerSubmitted}
                  className={`w-full p-4 rounded-lg text-left transition-all duration-200 ${
                    isAnswerSubmitted
                      ? key === currentQuestion.correctAnswer
                        ? 'bg-green-500 text-white'
                        : key === selectedAnswer
                        ? 'bg-red-500 text-white'
                        : 'bg-white/5 text-gray-300'
                      : selectedAnswer === key
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                  whileHover={!isAnswerSubmitted ? { scale: 1.02 } : {}}
                  whileTap={!isAnswerSubmitted ? { scale: 0.98 } : {}}
                >
                  <span className="font-semibold mr-3">{key}.</span>
                  {option}
                </motion.button>
              ))}
            </div>

            {!isAnswerSubmitted && selectedAnswer !== null && (
              <motion.button
                onClick={handleAnswerSubmit}
                className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                ⚔️ Attack Boss!
              </motion.button>
            )}
          </motion.div>
        )}

        {/* Explanation */}
        <AnimatePresence>
          {showExplanation && currentQuestion && (
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-white mb-3">
                {isAnswerCorrect ? '✅ Correct!' : '❌ Incorrect'}
              </h4>
              <p className="text-gray-300 mb-4">{currentQuestion.explanation}</p>
              <motion.button
                onClick={handleNextQuestion}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Continue Battle
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Battle Log */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <h4 className="text-white font-semibold mb-3">⚔️ Battle Log</h4>
          <div className="max-h-32 overflow-y-auto space-y-1">
            {battleLog.map((log, index) => (
              <p key={index} className="text-gray-300 text-sm">{log}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BossFight; 