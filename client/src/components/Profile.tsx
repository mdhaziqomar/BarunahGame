import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress?: number;
  maxProgress?: number;
}

interface UserStats {
  totalGamesPlayed: number;
  totalCorrectAnswers: number;
  totalQuestions: number;
  bossesDefeated: number;
  longestStreak: number;
  averageScore: number;
  totalTimeSpent: number; // in minutes
  favoriteSubject: string;
  totalKnowledgePoints: number;
  currentLevel: number;
  nextLevelKP: number;
}

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout, userStats: realUserStats } = useAuth();
  const [activeTab, setActiveTab] = useState<'stats' | 'achievements' | 'settings'>('stats');

  // Use real user stats or fallback to appropriate new user data
  const userStats: UserStats = realUserStats || {
    totalGamesPlayed: 0,
    totalCorrectAnswers: 0,
    totalQuestions: 0,
    bossesDefeated: 0,
    longestStreak: 0,
    averageScore: 0,
    totalTimeSpent: 0,
    favoriteSubject: 'General MIB',
    totalKnowledgePoints: user?.knowledgePoints || 0,
    currentLevel: user?.level || 1,
    nextLevelKP: 200,
  };

  // Helper functions
  const getAccuracyPercentage = () => {
    if (userStats.totalQuestions === 0) return 0;
    return Math.round((userStats.totalCorrectAnswers / userStats.totalQuestions) * 100);
  };

  const getLevelProgress = () => {
    const currentLevelKP = (userStats.currentLevel - 1) * 200;
    const progressInLevel = userStats.totalKnowledgePoints - currentLevelKP;
    const levelRange = 200;
    return (progressInLevel / levelRange) * 100;
  };

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  // Dynamic achievement calculation based on user stats
  const getAchievements = (): Achievement[] => {
    return [
      {
        id: 'first-game',
        name: 'First Steps',
        description: 'Complete your first game',
        icon: '🎯',
        unlocked: userStats.totalGamesPlayed >= 1,
      },
      {
        id: 'boss-slayer',
        name: 'Boss Slayer',
        description: 'Defeat 5 bosses',
        icon: '⚔️',
        unlocked: userStats.bossesDefeated >= 5,
        progress: userStats.bossesDefeated < 5 ? userStats.bossesDefeated : undefined,
        maxProgress: userStats.bossesDefeated < 5 ? 5 : undefined,
      },
      {
        id: 'knowledge-seeker',
        name: 'Knowledge Seeker',
        description: 'Earn 1000 Knowledge Points',
        icon: '🧠',
        unlocked: userStats.totalKnowledgePoints >= 1000,
        progress: userStats.totalKnowledgePoints < 1000 ? userStats.totalKnowledgePoints : undefined,
        maxProgress: userStats.totalKnowledgePoints < 1000 ? 1000 : undefined,
      },
      {
        id: 'perfect-game',
        name: 'Perfect Scholar',
        description: 'Get 100% accuracy in a game (10/10 questions)',
        icon: '✨',
        unlocked: getAccuracyPercentage() === 100 && userStats.totalGamesPlayed >= 1,
      },
      {
        id: 'streak-master',
        name: 'Streak Master',
        description: 'Achieve a 10-question streak',
        icon: '🔥',
        unlocked: userStats.longestStreak >= 10,
        progress: userStats.longestStreak < 10 ? userStats.longestStreak : undefined,
        maxProgress: userStats.longestStreak < 10 ? 10 : undefined,
      },
      {
        id: 'mib-expert',
        name: 'MIB Expert',
        description: 'Reach Level 10',
        icon: '👑',
        unlocked: userStats.currentLevel >= 10,
        progress: userStats.currentLevel < 10 ? userStats.currentLevel : undefined,
        maxProgress: userStats.currentLevel < 10 ? 10 : undefined,
      },
      {
        id: 'speed-demon',
        name: 'Speed Demon',
        description: 'Answer 50 questions correctly in under 10 seconds each',
        icon: '⚡',
        unlocked: false, // This would need timer tracking in the future
        progress: 7, // Mock progress for now
        maxProgress: 50,
      },
      {
        id: 'scholar-supreme',
        name: 'Scholar Supreme',
        description: 'Reach Level 15',
        icon: '🏆',
        unlocked: userStats.currentLevel >= 15,
        progress: userStats.currentLevel < 15 ? userStats.currentLevel : undefined,
        maxProgress: userStats.currentLevel < 15 ? 15 : undefined,
      },
      {
        id: 'boss-master',
        name: 'Boss Master',
        description: 'Defeat 10 bosses',
        icon: '🛡️',
        unlocked: userStats.bossesDefeated >= 10,
        progress: userStats.bossesDefeated < 10 ? userStats.bossesDefeated : undefined,
        maxProgress: userStats.bossesDefeated < 10 ? 10 : undefined,
      },
      {
        id: 'game-veteran',
        name: 'Game Veteran',
        description: 'Play 25 games',
        icon: '🎮',
        unlocked: userStats.totalGamesPlayed >= 25,
        progress: userStats.totalGamesPlayed < 25 ? userStats.totalGamesPlayed : undefined,
        maxProgress: userStats.totalGamesPlayed < 25 ? 25 : undefined,
      },
      {
        id: 'accuracy-master',
        name: 'Accuracy Master',
        description: 'Maintain 90% accuracy over 10+ games',
        icon: '🎯',
        unlocked: getAccuracyPercentage() >= 90 && userStats.totalGamesPlayed >= 10,
        progress: getAccuracyPercentage() < 90 ? getAccuracyPercentage() : undefined,
        maxProgress: getAccuracyPercentage() < 90 ? 90 : undefined,
      },
      {
        id: 'knowledge-master',
        name: 'Knowledge Master',
        description: 'Earn 2500 Knowledge Points',
        icon: '🧠',
        unlocked: userStats.totalKnowledgePoints >= 2500,
        progress: userStats.totalKnowledgePoints < 2500 ? userStats.totalKnowledgePoints : undefined,
        maxProgress: userStats.totalKnowledgePoints < 2500 ? 2500 : undefined,
      },
    ];
  };

  const achievements = getAchievements();

  const StatCard: React.FC<{ title: string; value: string | number; icon: string; color: string }> = 
    ({ title, value, icon, color }) => (
    <motion.div
      className="bg-white rounded-lg p-4 shadow-md"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className={`text-2xl font-bold ${color}`}>{value}</p>
        </div>
        <div className="text-3xl">{icon}</div>
      </div>
    </motion.div>
  );

  const AchievementCard: React.FC<{ achievement: Achievement }> = ({ achievement }) => (
    <motion.div
      className={`bg-white rounded-lg p-4 shadow-md border-2 ${
        achievement.unlocked ? 'border-green-200' : 'border-gray-200'
      }`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center space-x-3">
        <div className={`text-3xl ${achievement.unlocked ? '' : 'grayscale opacity-50'}`}>
          {achievement.icon}
        </div>
        <div className="flex-1">
          <h3 className={`font-semibold ${achievement.unlocked ? 'text-gray-800' : 'text-gray-500'}`}>
            {achievement.name}
          </h3>
          <p className="text-sm text-gray-600">{achievement.description}</p>
          {!achievement.unlocked && achievement.progress !== undefined && achievement.maxProgress && (
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(achievement.progress / achievement.maxProgress) * 100}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {achievement.progress}/{achievement.maxProgress} ({Math.round((achievement.progress / achievement.maxProgress) * 100)}%)
              </p>
            </div>
          )}
        </div>
        {achievement.unlocked && (
          <div className="text-green-500">
            <span className="text-xl">✅</span>
          </div>
        )}
      </div>
    </motion.div>
  );

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
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-20 h-20 bg-barunah-primary rounded-full flex items-center justify-center">
                <span className="text-2xl text-white font-bold">
                  {user?.fullName?.charAt(0) || 'U'}
                </span>
              </div>
              <div className="text-left">
                <h1 className="text-2xl font-bold text-gray-800">{user?.fullName || 'Demo User'}</h1>
                <p className="text-gray-600">@{user?.username || 'demo_user'}</p>
                <p className="text-sm text-gray-500">{user?.school || 'Chung Hwa Middle School BSB'}</p>
              </div>
            </div>
            
            {/* Level Progress */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Level {userStats.currentLevel}</span>
                <span className="text-sm text-gray-500">{userStats.totalKnowledgePoints}/{userStats.nextLevelKP} KP</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${getLevelProgress()}%` }}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-xl font-bold text-barunah-primary">{userStats.totalKnowledgePoints}</div>
                <div className="text-sm text-gray-600">Knowledge Points</div>
              </div>
              <div>
                <div className="text-xl font-bold text-green-600">{getAccuracyPercentage()}%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </div>
              <div>
                <div className="text-xl font-bold text-purple-600">{userStats.bossesDefeated}</div>
                <div className="text-sm text-gray-600">Bosses Defeated</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-lg p-1 shadow-md">
            {[
              { key: 'stats', label: 'Statistics', icon: '📊' },
              { key: 'achievements', label: 'Achievements', icon: '🏆' },
              { key: 'settings', label: 'Settings', icon: '⚙️' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === tab.key
                    ? 'bg-barunah-primary text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'stats' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Game Statistics</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard title="Games Played" value={userStats.totalGamesPlayed} icon="🎮" color="text-blue-600" />
                <StatCard title="Questions Answered" value={userStats.totalQuestions} icon="❓" color="text-green-600" />
                <StatCard title="Longest Streak" value={userStats.longestStreak} icon="🔥" color="text-red-600" />
                <StatCard title="Average Score" value={userStats.averageScore.toLocaleString()} icon="⭐" color="text-yellow-600" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">📈 Performance Overview</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Correct Answers:</span>
                      <span className="font-semibold text-green-600">{userStats.totalCorrectAnswers}/{userStats.totalQuestions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Accuracy Rate:</span>
                      <span className="font-semibold text-blue-600">{getAccuracyPercentage()}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time Played:</span>
                      <span className="font-semibold text-purple-600">{formatTime(userStats.totalTimeSpent)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Favorite Subject:</span>
                      <span className="font-semibold text-barunah-primary">{userStats.favoriteSubject}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">🎯 Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-sm text-gray-600">Defeated Guardian of Knowledge</span>
                      <span className="text-xs text-gray-400">2 hours ago</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="text-sm text-gray-600">Reached Level 10</span>
                      <span className="text-xs text-gray-400">1 day ago</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span className="text-sm text-gray-600">Perfect score on Islamic Values</span>
                      <span className="text-xs text-gray-400">2 days ago</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span className="text-sm text-gray-600">Unlocked MIB Expert achievement</span>
                      <span className="text-xs text-gray-400">3 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Achievements</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement) => (
                  <AchievementCard key={achievement.id} achievement={achievement} />
                ))}
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Achievement Progress</h3>
                <p className="text-gray-600 mb-4">
                  You've unlocked {achievements.filter(a => a.unlocked).length} out of {achievements.length} achievements!
                </p>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div 
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${(achievements.filter(a => a.unlocked).length / achievements.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Settings</h2>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Account Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      value={user?.fullName || ''} 
                      readOnly
                      className="w-full p-2 border border-gray-300 rounded-md bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                    <input 
                      type="text" 
                      value={user?.username || ''} 
                      readOnly
                      className="w-full p-2 border border-gray-300 rounded-md bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">School</label>
                    <input 
                      type="text" 
                      value={user?.school || ''} 
                      readOnly
                      className="w-full p-2 border border-gray-300 rounded-md bg-gray-50"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Game Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Sound Effects</span>
                    <button className="w-12 h-6 bg-green-500 rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Background Music</span>
                    <button className="w-12 h-6 bg-gray-300 rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Notifications</span>
                    <button className="w-12 h-6 bg-green-500 rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Account Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                    Change Password
                  </button>
                  <button className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors">
                    Export Game Data
                  </button>
                  <button 
                    onClick={logout}
                    className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <motion.button
            onClick={() => navigate('/lobby')}
            className="bg-barunah-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-barunah-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🎮 Back to Game
          </motion.button>
          
          <motion.button
            onClick={() => navigate('/leaderboard')}
            className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🏆 View Leaderboard
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Profile; 