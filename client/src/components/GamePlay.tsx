import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { useAuth } from '../context/AuthContext';

const GamePlay: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    gameStats,
    currentQuestion,
    selectedAnswer,
    isAnswerSubmitted,
    isAnswerCorrect,
    selectAnswer,
    submitAnswer,
    nextQuestion,
    enterShopPhase,
    resetGame,
    getTimerDuration,
    isLoading
  } = useGame();

  const [showExplanation, setShowExplanation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getTimerDuration());
  const [showResult, setShowResult] = useState(false);

  // Sync timer with game context when phase changes to QUESTIONS
  useEffect(() => {
    if (gameStats.phase === 'QUESTIONS' && currentQuestion && !isAnswerSubmitted) {
      // Use gameStats.timeRemaining if available, otherwise use default timer duration
      const initialTime = gameStats.timeRemaining > 0 ? gameStats.timeRemaining : getTimerDuration();
      setTimeLeft(initialTime);
    }
  }, [gameStats.phase, currentQuestion, isAnswerSubmitted, gameStats.timeRemaining]);

  // Timer countdown effect
  useEffect(() => {
    if (gameStats.phase === 'QUESTIONS' && !isAnswerSubmitted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            // Auto-submit when time runs out
            submitAnswer();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [gameStats.phase, isAnswerSubmitted, timeLeft, submitAnswer]);

  // Reset timer ONLY when new question loads (not when answer selection changes)
  useEffect(() => {
    if (currentQuestion && !isAnswerSubmitted) {
      const newTimerDuration = getTimerDuration();
      setTimeLeft(newTimerDuration);
      setShowExplanation(false);
      setShowResult(false);
    }
  }, [currentQuestion?.id, isAnswerSubmitted]); // Removed getTimerDuration from dependencies

  // Show result and explanation after answer submission
  useEffect(() => {
    if (isAnswerSubmitted) {
      setShowResult(true);
      setTimeout(() => {
        setShowExplanation(true);
      }, 1000);
    }
  }, [isAnswerSubmitted]);

  const handleSubmitAnswer = () => {
    if (selectedAnswer !== null) {
      submitAnswer();
    }
  };

  const handleNextQuestion = () => {
    if (gameStats.questionsAnswered === 5) {
      // After 5 questions, go to shop
      enterShopPhase();
      navigate('/shop');
    } else if (gameStats.questionsAnswered === 10) {
      // After 10 questions, go to boss fight
      navigate('/boss');
    } else {
      // Continue to next question
      nextQuestion();
    }
  };

  const handleQuitGame = () => {
    resetGame();
    navigate('/lobby');
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'EASY': return 'text-green-600 bg-green-100';
      case 'MEDIUM': return 'text-yellow-600 bg-yellow-100';
      case 'HARD': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSubjectIcon = (subject: string) => {
    switch (subject) {
      case 'MELAYU_CULTURE': return '🎭';
      case 'ISLAMIC_VALUES': return '🕌';
      case 'BERAJA_SYSTEM': return '👑';
      case 'GENERAL_MIB': return '⚖️';
      case 'BRUNEI_HISTORY': return '🏛️';
      default: return '❓';
    }
  };

  const getProgressPercentage = () => {
    return (gameStats.questionsAnswered / gameStats.totalQuestions) * 100;
  };

  const getTimerPercentage = () => {
    return (timeLeft / getTimerDuration()) * 100;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-barunah-primary mx-auto mb-4"></div>
          <p className="text-barunah-primary font-medium">Loading your questions...</p>
        </div>
      </div>
    );
  }

  if (gameStats.phase === 'SETUP' || !currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="game-card text-center">
          <h2 className="text-2xl font-bold text-barunah-primary mb-4">
            {gameStats.phase === 'SETUP' ? 'Game Not Started' : 'No Questions Available'}
          </h2>
          <p className="text-gray-600 mb-4">
            {gameStats.phase === 'SETUP' 
              ? 'Please start a game from the setup page.'
              : 'There was an issue loading the questions.'
            }
          </p>
          <button
            onClick={() => navigate(gameStats.phase === 'SETUP' ? '/setup' : '/lobby')}
            className="game-button"
          >
            {gameStats.phase === 'SETUP' ? 'Go to Setup' : 'Return to Lobby'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Game Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="game-card mb-6"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-barunah-primary rounded-full flex items-center justify-center text-white font-bold">
                👤
              </div>
              <div>
                <div className="font-bold">{user?.username || 'Player'}</div>
                <div className="text-sm text-gray-600">Level {user?.level || 1}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="kp-display text-lg">{gameStats.currentScore} KP</div>
              <div className="text-sm text-gray-600">
                Question {gameStats.questionsAnswered + 1}/{gameStats.totalQuestions}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-barunah-primary">Game Progress</span>
            <span className="text-sm text-gray-600">
              {gameStats.questionsAnswered}/{gameStats.totalQuestions} completed
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${getProgressPercentage()}%` }}
              transition={{ duration: 0.5 }}
              className="bg-barunah-primary h-3 rounded-full"
            />
          </div>
        </motion.div>

        {/* Timer */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Time Remaining</span>
            <span className={`font-bold ${timeLeft <= 10 ? 'text-red-600' : 'text-barunah-primary'}`}>
              {timeLeft}s
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              animate={{ width: `${getTimerPercentage()}%` }}
              transition={{ duration: 0.3 }}
              className={`h-2 rounded-full transition-colors ${
                timeLeft <= 10 ? 'bg-red-500' : 'bg-barunah-accent'
              }`}
            />
          </div>
        </motion.div>

        {/* Question Card */}
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="question-card mb-6"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{getSubjectIcon(currentQuestion.subject)}</span>
              <div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(currentQuestion.difficulty)}`}>
                  {currentQuestion.difficulty}
                </span>
                <div className="text-xs text-gray-500 mt-1">
                  {currentQuestion.difficulty === 'EASY' ? '10' : 
                   currentQuestion.difficulty === 'MEDIUM' ? '15' : '25'} KP
                </div>
              </div>
            </div>
            {gameStats.streak > 0 && (
              <div className="flex items-center space-x-1 text-orange-600">
                <span>🔥</span>
                <span className="text-sm font-medium">{gameStats.streak} streak</span>
              </div>
            )}
          </div>

          <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">
            {currentQuestion.question}
          </h2>

          {/* Answer Options */}
          <div className="grid gap-3">
            {Object.entries(currentQuestion.options).map(([key, option], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => !isAnswerSubmitted && selectAnswer(key)}
                className={`answer-option ${
                  selectedAnswer === key ? 'selected' : ''
                } ${
                  isAnswerSubmitted && key === currentQuestion.correctAnswer
                    ? 'correct'
                    : isAnswerSubmitted && selectedAnswer === key && key !== currentQuestion.correctAnswer
                    ? 'incorrect'
                    : ''
                } ${
                  isAnswerSubmitted ? 'pointer-events-none' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="font-bold text-barunah-primary">
                    {key})
                  </span>
                  <span className="flex-1">{option}</span>
                  {isAnswerSubmitted && key === currentQuestion.correctAnswer && (
                    <span className="text-green-600">✓</span>
                  )}
                  {isAnswerSubmitted && selectedAnswer === key && key !== currentQuestion.correctAnswer && (
                    <span className="text-red-600">✗</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Result and Explanation */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`game-card mb-6 ${
                isAnswerCorrect ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl">
                  {isAnswerCorrect ? '🎉' : '😔'}
                </span>
                <div>
                  <h3 className={`font-bold text-lg ${
                    isAnswerCorrect ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {isAnswerCorrect ? 'Correct!' : 'Incorrect!'}
                  </h3>
                  <p className="text-gray-600">
                    {isAnswerCorrect 
                      ? `+${currentQuestion.difficulty === 'EASY' ? '10' : 
                         currentQuestion.difficulty === 'MEDIUM' ? '15' : '25'} Knowledge Points earned!`
                      : 'Better luck next time!'
                    }
                  </p>
                </div>
              </div>

              {showExplanation && currentQuestion.explanation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="pt-4 border-t border-gray-200"
                >
                  <h4 className="font-medium text-barunah-primary mb-2">Explanation:</h4>
                  <p className="text-gray-700">{currentQuestion.explanation}</p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleQuitGame}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Quit Game
          </button>
          
          {!isAnswerSubmitted ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
              className={`game-button ${
                selectedAnswer === null ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="game-button"
            >
              {gameStats.questionsAnswered === 5 ? 'Enter Shop' : 
               gameStats.questionsAnswered === 10 ? 'Face Boss' : 'Next Question'}
            </button>
          )}
        </div>

        {/* Game Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 grid grid-cols-3 gap-4"
        >
          <div className="text-center">
            <div className="text-xl font-bold text-barunah-primary">
              {gameStats.correctAnswers}
            </div>
            <div className="text-sm text-gray-600">Correct</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-barunah-primary">
              {gameStats.currentScore}
            </div>
            <div className="text-sm text-gray-600">Score</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-barunah-primary">
              {gameStats.streak}
            </div>
            <div className="text-sm text-gray-600">Streak</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GamePlay; 