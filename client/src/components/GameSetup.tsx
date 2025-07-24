import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';

const GameSetup: React.FC = () => {
  const navigate = useNavigate();
  const { gameSettings, startGame, isLoading } = useGame();
  const [selectedSubject, setSelectedSubject] = useState(gameSettings.selectedSubject);
  const [selectedDifficulty, setSelectedDifficulty] = useState(gameSettings.selectedDifficulty);

  const subjects = [
    {
      value: 'ALL',
      name: 'All Topics',
      icon: '📚',
      description: 'Mixed questions from all MIB topics',
      color: 'bg-gray-100 text-gray-800 border-gray-300'
    },
    {
      value: 'MELAYU_CULTURE' as const,
      name: 'Malay Culture',
      icon: '🎭',
      description: 'Traditional arts, music, and customs',
      color: 'bg-orange-100 text-orange-800 border-orange-300'
    },
    {
      value: 'ISLAMIC_VALUES' as const,
      name: 'Islamic Values',
      icon: '🕌',
      description: 'Islamic principles and practices',
      color: 'bg-green-100 text-green-800 border-green-300'
    },
    {
      value: 'BERAJA_SYSTEM' as const,
      name: 'Beraja System',
      icon: '👑',
      description: 'Monarchy and governance',
      color: 'bg-purple-100 text-purple-800 border-purple-300'
    },
    {
      value: 'GENERAL_MIB' as const,
      name: 'MIB Philosophy',
      icon: '⚖️',
      description: 'Core MIB concepts and history',
      color: 'bg-blue-100 text-blue-800 border-blue-300'
    },
    {
      value: 'BRUNEI_HISTORY' as const,
      name: 'Brunei History',
      icon: '🏛️',
      description: 'Historical events and heritage',
      color: 'bg-amber-100 text-amber-800 border-amber-300'
    }
  ];

  const difficulties = [
    {
      value: 'MIXED' as const,
      name: 'Mixed Difficulty',
      timer: 'Dynamic Timer',
      points: 'Variable Points',
      icon: '🌈',
      description: 'Questions of all difficulty levels',
      color: 'bg-gray-100 text-gray-800 border-gray-300'
    },
    {
      value: 'EASY' as const,
      name: 'Easy',
      timer: '15 seconds',
      points: '75 points',
      icon: '🟢',
      description: 'Basic knowledge questions',
      color: 'bg-green-100 text-green-800 border-green-300'
    },
    {
      value: 'MEDIUM' as const,
      name: 'Medium',
      timer: '10 seconds',
      points: '100 points',
      icon: '🟡',
      description: 'Intermediate level questions',
      color: 'bg-yellow-100 text-yellow-800 border-yellow-300'
    },
    {
      value: 'HARD' as const,
      name: 'Hard',
      timer: '5 seconds',
      points: '150 points',
      icon: '🔴',
      description: 'Challenging expert questions',
      color: 'bg-red-100 text-red-800 border-red-300'
    }
  ];

  const handleStartGame = async () => {
    // Start the game with the selected settings
    try {
      await startGame({
        selectedSubject,
        selectedDifficulty,
      });
      navigate('/game');
    } catch (error) {
      console.error('Failed to start game:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-barunah-primary mb-2">
            🎮 Game Setup
          </h1>
          <p className="text-gray-600 text-lg">
            Choose your topic and challenge level to begin your MIB journey!
          </p>
        </motion.div>

        {/* Subject Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="game-card mb-6"
        >
          <h2 className="text-2xl font-bold text-barunah-primary mb-4">
            📚 Choose Your Topic
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((subject) => (
              <motion.div
                key={subject.value}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                                 onClick={() => setSelectedSubject(subject.value as any)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedSubject === subject.value
                    ? 'border-barunah-primary bg-barunah-primary bg-opacity-10'
                    : subject.color
                }`}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">{subject.icon}</div>
                  <h3 className="font-bold mb-1">{subject.name}</h3>
                  <p className="text-sm opacity-75">{subject.description}</p>
                  {selectedSubject === subject.value && (
                    <div className="mt-2">
                      <span className="text-barunah-primary font-medium">✓ Selected</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Difficulty Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="game-card mb-6"
        >
          <h2 className="text-2xl font-bold text-barunah-primary mb-4">
            ⚡ Choose Your Challenge
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {difficulties.map((difficulty) => (
              <motion.div
                key={difficulty.value}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedDifficulty(difficulty.value)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedDifficulty === difficulty.value
                    ? 'border-barunah-primary bg-barunah-primary bg-opacity-10'
                    : difficulty.color
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{difficulty.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{difficulty.name}</h3>
                    <p className="text-sm opacity-75 mb-2">{difficulty.description}</p>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">⏱️ {difficulty.timer}</span>
                      <span className="font-medium">💎 {difficulty.points}</span>
                    </div>
                  </div>
                  {selectedDifficulty === difficulty.value && (
                    <div className="text-barunah-primary">
                      <span className="text-xl">✓</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Game Rules Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="game-card mb-6"
        >
          <h3 className="text-xl font-bold text-barunah-primary mb-3">📋 Game Rules</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">📝 Questions & Scoring:</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• 10 questions total</li>
                <li>• Shop break after 5 questions</li>
                <li>• Boss fight after all questions</li>
                <li>• Earn KP for correct answers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">⏰ Timer & Streaks:</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Time limit varies by difficulty</li>
                <li>• Build streaks for bonus points</li>
                <li>• Auto-submit when time runs out</li>
                <li>• Detailed explanations provided</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <button
            onClick={() => navigate('/lobby')}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            ← Back to Lobby
          </button>
          
          <button
            onClick={handleStartGame}
            disabled={isLoading}
            className={`game-button px-8 py-3 text-lg ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Starting Game...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <span>🚀 Start Game</span>
                <span className="text-sm opacity-75">
                  ({selectedSubject === 'ALL' ? 'All Topics' : subjects.find(s => s.value === selectedSubject)?.name} • {difficulties.find(d => d.value === selectedDifficulty)?.name})
                </span>
              </div>
            )}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default GameSetup; 