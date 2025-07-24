import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { gameAPI } from '../api/api';

interface LeaderboardEntry {
  id: string;
  username: string;
  fullName: string;
  school?: string;
  knowledgePoints: number;
  level: number;
  totalGamesPlayed: number;
  bossesDefeated: number;
  averageScore: number;
  rank: number;
  isCurrentUser?: boolean;
}

type LeaderboardFilter = 'all-time' | 'weekly' | 'monthly' | 'school';
type LeaderboardCategory = 'knowledge-points' | 'boss-defeats' | 'average-score' | 'games-played';

const Leaderboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, userStats } = useAuth();
  const [activeFilter, setActiveFilter] = useState<LeaderboardFilter>('all-time');
  const [activeCategory, setActiveCategory] = useState<LeaderboardCategory>('knowledge-points');
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  // Real leaderboard data fetched from API

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true);
      try {
        const response = await gameAPI.getLeaderboard();
        setLeaderboardData(response.leaderboard);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
        setLeaderboardData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, [activeFilter, activeCategory]);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return `#${rank}`;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return 'text-yellow-500';
      case 2: return 'text-gray-400';
      case 3: return 'text-orange-500';
      default: return 'text-gray-600';
    }
  };

  const getLevelColor = (level: number) => {
    if (level >= 15) return 'bg-purple-500';
    if (level >= 10) return 'bg-blue-500';
    if (level >= 5) return 'bg-green-500';
    return 'bg-gray-500';
  };

  const getCategoryDisplayValue = (entry: LeaderboardEntry, category: LeaderboardCategory) => {
    switch (category) {
      case 'knowledge-points': return `${entry.knowledgePoints.toLocaleString()} KP`;
      case 'boss-defeats': return `${entry.bossesDefeated} Bosses`;
      case 'average-score': return `${entry.averageScore.toLocaleString()} pts`;
      case 'games-played': return `${entry.totalGamesPlayed} Games`;
    }
  };

  const filterOptions = [
    { key: 'all-time', label: 'All Time', icon: '🏆' },
    { key: 'weekly', label: 'This Week', icon: '📅' },
    { key: 'monthly', label: 'This Month', icon: '📆' },
    { key: 'school', label: 'My School', icon: '🏫' },
  ];

  const categoryOptions = [
    { key: 'knowledge-points', label: 'Knowledge Points', icon: '🧠' },
    { key: 'boss-defeats', label: 'Boss Defeats', icon: '⚔️' },
    { key: 'average-score', label: 'Average Score', icon: '📊' },
    { key: 'games-played', label: 'Games Played', icon: '🎮' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-barunah-primary mx-auto mb-4"></div>
          <p className="text-barunah-primary font-medium">Loading leaderboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-barunah-primary mb-2">🏆 Leaderboard</h1>
          <p className="text-gray-600">Compete with fellow MIB scholars and climb the ranks!</p>
        </motion.div>

        {/* Filters */}
        <div className="mb-6">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {filterOptions.map((filter) => (
              <motion.button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key as LeaderboardFilter)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeFilter === filter.key
                    ? 'bg-barunah-primary text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.icon} {filter.label}
              </motion.button>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categoryOptions.map((category) => (
              <motion.button
                key={category.key}
                onClick={() => setActiveCategory(category.key as LeaderboardCategory)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeCategory === category.key
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon} {category.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Top 3 Podium */}
        <motion.div
          className="grid grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* 2nd Place */}
          {leaderboardData[1] && (
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 shadow-lg mb-2 h-32 flex flex-col justify-center">
                <div className="text-4xl mb-2">🥈</div>
                <h3 className="font-bold text-gray-800">{leaderboardData[1].username}</h3>
                <p className="text-sm text-gray-600">{getCategoryDisplayValue(leaderboardData[1], activeCategory)}</p>
              </div>
              <div className="bg-gray-400 h-20 rounded-t-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">2nd</span>
              </div>
            </div>
          )}

          {/* 1st Place */}
          {leaderboardData[0] && (
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 shadow-lg mb-2 h-32 flex flex-col justify-center border-2 border-yellow-400">
                <div className="text-4xl mb-2">👑</div>
                <h3 className="font-bold text-gray-800">{leaderboardData[0].username}</h3>
                <p className="text-sm text-gray-600">{getCategoryDisplayValue(leaderboardData[0], activeCategory)}</p>
              </div>
              <div className="bg-yellow-500 h-28 rounded-t-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">1st</span>
              </div>
            </div>
          )}

          {/* 3rd Place */}
          {leaderboardData[2] && (
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 shadow-lg mb-2 h-32 flex flex-col justify-center">
                <div className="text-4xl mb-2">🥉</div>
                <h3 className="font-bold text-gray-800">{leaderboardData[2].username}</h3>
                <p className="text-sm text-gray-600">{getCategoryDisplayValue(leaderboardData[2], activeCategory)}</p>
              </div>
              <div className="bg-orange-500 h-16 rounded-t-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">3rd</span>
              </div>
            </div>
          )}
        </motion.div>

        {/* Full Leaderboard */}
        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-barunah-primary text-white p-4">
            <h2 className="text-xl font-bold">Full Rankings</h2>
          </div>
          
          <div className="divide-y divide-gray-200">
            {leaderboardData.map((entry, index) => (
              <motion.div
                key={entry.id}
                className={`p-4 flex items-center justify-between hover:bg-gray-50 transition-colors ${
                  entry.isCurrentUser ? 'bg-blue-50 border-l-4 border-barunah-primary' : ''
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`text-2xl font-bold ${getRankColor(entry.rank)}`}>
                    {getRankIcon(entry.rank)}
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full ${getLevelColor(entry.level)} flex items-center justify-center text-white text-sm font-bold`}>
                      {entry.level}
                    </div>
                    
                    <div>
                      <h3 className={`font-semibold ${entry.isCurrentUser ? 'text-barunah-primary' : 'text-gray-800'}`}>
                        {entry.username} {entry.isCurrentUser && '(You)'}
                      </h3>
                      <p className="text-sm text-gray-600">{entry.fullName}</p>
                      {entry.school && <p className="text-xs text-gray-500">{entry.school}</p>}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-lg font-bold text-barunah-primary">
                    {getCategoryDisplayValue(entry, activeCategory)}
                  </div>
                  <div className="text-sm text-gray-500">
                    Level {entry.level} • {entry.totalGamesPlayed} games
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* User Stats Summary */}
        {user && (
          <motion.div
            className="mt-8 bg-white rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold text-barunah-primary mb-4">Your Performance</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">{user.knowledgePoints || 0}</div>
                <div className="text-sm text-gray-600">Knowledge Points</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">{user.level || 1}</div>
                <div className="text-sm text-gray-600">Current Level</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">{userStats?.bossesDefeated || 0}</div>
                <div className="text-sm text-gray-600">Bosses Defeated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">{userStats?.totalGamesPlayed || 0}</div>
                <div className="text-sm text-gray-600">Games Played</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <motion.button
            onClick={() => navigate('/lobby')}
            className="bg-barunah-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-barunah-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🎮 Play Game
          </motion.button>
          
          <motion.button
            onClick={() => navigate('/profile')}
            className="bg-gray-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            👤 View Profile
          </motion.button>
        </div>

        {/* Competition Info */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>🏆 Rankings update in real-time</p>
          <p>🎯 Compete in the Celik Biz Competition 2025!</p>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard; 