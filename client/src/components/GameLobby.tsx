import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
// import { useGame } from '../context/GameContext'; // Removed unused import

const GameLobby: React.FC = () => {
  const navigate = useNavigate();
  const { user, userStats } = useAuth();
  // const { startGame } = useGame(); // Removed unused import

  // Calculate achievements unlocked
  const getUnlockedAchievements = () => {
    if (!userStats) return 0;
    
    let count = 0;
    
    // Check each achievement condition
    if (userStats.totalGamesPlayed >= 1) count++; // First Steps
    if (userStats.bossesDefeated >= 5) count++; // Boss Slayer  
    if (userStats.totalKnowledgePoints >= 1000) count++; // Knowledge Seeker
    if (userStats.totalQuestions > 0 && (userStats.totalCorrectAnswers / userStats.totalQuestions) === 1 && userStats.totalGamesPlayed >= 1) count++; // Perfect Scholar
    if (userStats.longestStreak >= 10) count++; // Streak Master
    if (userStats.currentLevel >= 10) count++; // MIB Expert
    if (userStats.currentLevel >= 15) count++; // Scholar Supreme
    if (userStats.bossesDefeated >= 10) count++; // Boss Master
    if (userStats.totalGamesPlayed >= 25) count++; // Game Veteran
    if (userStats.totalQuestions >= 100 && (userStats.totalCorrectAnswers / userStats.totalQuestions) >= 0.9 && userStats.totalGamesPlayed >= 10) count++; // Accuracy Master
    if (userStats.totalKnowledgePoints >= 2500) count++; // Knowledge Master
    
    return count;
  };

  const handleStartGame = () => {
    navigate('/setup');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-barunah-primary mb-2">
            Welcome, {user?.username}!
          </h1>
          <div className="flex justify-center items-center space-x-6 text-lg">
            <div className="kp-display">🎯 {user?.knowledgePoints || 0} KP</div>
            <div className="text-barunah-primary">⭐ Level {user?.level || 1}</div>
            <div className="text-barunah-primary">🏆 Rank #{Math.floor(Math.random() * 100) + 1}</div>
          </div>
        </motion.div>

        {/* Menu Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onClick={handleStartGame}
            className="game-card cursor-pointer text-center hover:shadow-xl transition-all"
          >
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-bold mb-2">New Game</h3>
            <p className="text-gray-600">Start a new MIB trivia adventure</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onClick={() => navigate('/rewards')}
            className="game-card cursor-pointer text-center hover:shadow-xl transition-all"
          >
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-xl font-bold mb-2">Redeem Rewards</h3>
            <p className="text-gray-600">Exchange KP for amazing prizes</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onClick={() => navigate('/leaderboard')}
            className="game-card cursor-pointer text-center hover:shadow-xl transition-all"
          >
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2">Leaderboard</h3>
            <p className="text-gray-600">See top players</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => navigate('/profile')}
            className="game-card cursor-pointer text-center hover:shadow-xl transition-all"
          >
            <div className="text-4xl mb-4">👤</div>
            <h3 className="text-xl font-bold mb-2">Profile</h3>
            <p className="text-gray-600">Customize your avatar</p>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-4 gap-4"
        >
          <div className="game-card text-center">
            <div className="text-2xl font-bold text-barunah-primary">{user?.totalGamesPlayed || 0}</div>
            <div className="text-sm text-gray-600">Games Played</div>
          </div>
          <div className="game-card text-center">
            <div className="text-2xl font-bold text-barunah-primary">{user?.bossesDefeated || 0}</div>
            <div className="text-sm text-gray-600">Bosses Defeated</div>
          </div>
          <div className="game-card text-center">
            <div className="text-2xl font-bold text-barunah-primary">{user?.totalCorrectAnswers || 0}</div>
            <div className="text-sm text-gray-600">Correct Answers</div>
          </div>
          <div className="game-card text-center">
            <div className="text-2xl font-bold text-barunah-primary">{getUnlockedAchievements()}</div>
            <div className="text-sm text-gray-600">Achievements</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GameLobby; 