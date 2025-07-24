import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { authAPI, userAPI } from '../api/api';

interface User {
  id: string;
  email: string;
  username: string;
  fullName?: string;
  school?: string;
  role: 'STUDENT' | 'ADMIN' | 'VENDOR';
  knowledgePoints: number;
  level: number;
  totalGamesPlayed: number;
  totalCorrectAnswers: number;
  bossesDefeated: number;
  profileImage?: string;
  businessName?: string;
  businessType?: string;
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

interface AuthContextType {
  user: User | null;
  userStats: UserStats | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, username: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
  updateUserStats: (gameData: any) => void;
  getUserStats: () => UserStats | null;
  refreshUser: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// @refresh reset
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userStats, setUserStats] = useState<UserStats | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const data = await authAPI.login(email, password);
      setUser(data.user);
      localStorage.setItem('token', data.token);
      
      // Fetch user stats if it's a student
      if (data.user.role === 'STUDENT') {
        try {
          const statsData = await userAPI.getStats(data.user.id);
          setUserStats(statsData.stats);
        } catch (statsError) {
          console.error('Error fetching user stats:', statsError);
          // Set default stats for new students
          const initialStats: UserStats = {
            totalGamesPlayed: 0,
            totalCorrectAnswers: 0,
            totalQuestions: 0,
            bossesDefeated: 0,
            longestStreak: 0,
            averageScore: 0,
            totalTimeSpent: 0,
            favoriteSubject: 'General MIB',
            totalKnowledgePoints: data.user.knowledgePoints || 0,
            currentLevel: data.user.level || 1,
            nextLevelKP: 200,
          };
          setUserStats(initialStats);
        }
      } else {
        setUserStats(null); // Admin and vendor don't need game stats
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error; // Re-throw to let the UI handle the error
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, username: string, password: string) => {
    setIsLoading(true);
    try {
      const data = await authAPI.register(email, username, password);
      setUser(data.user);
      localStorage.setItem('token', data.token);
      
      // Initialize default stats for new students
      if (data.user.role === 'STUDENT') {
        const initialStats: UserStats = {
          totalGamesPlayed: 0,
          totalCorrectAnswers: 0,
          totalQuestions: 0,
          bossesDefeated: 0,
          longestStreak: 0,
          averageScore: 0,
          totalTimeSpent: 0,
          favoriteSubject: 'General MIB',
          totalKnowledgePoints: data.user.knowledgePoints || 0,
          currentLevel: data.user.level || 1,
          nextLevelKP: 200,
        };
        setUserStats(initialStats);
      } else {
        setUserStats(null);
      }
    } catch (error) {
      console.error('Registration error:', error);
      throw error; // Re-throw to let the UI handle the error
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setUserStats(null);
    localStorage.removeItem('token');
  };

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...updates });
    }
  };

  const updateUserStats = (gameData: any) => {
    if (user && userStats) {
      // Calculate new longest streak if current streak is higher
      const newLongestStreak = gameData.finalStreak > userStats.longestStreak 
        ? gameData.finalStreak 
        : userStats.longestStreak;

      // Calculate new average score safely
      const newTotalGames = userStats.totalGamesPlayed + 1;
      const newAverageScore = newTotalGames === 1 
        ? gameData.finalScore 
        : ((userStats.averageScore * userStats.totalGamesPlayed) + gameData.finalScore) / newTotalGames;

      const newTotalKP = userStats.totalKnowledgePoints + (gameData.knowledgePointsEarned || 0);
      const newLevel = Math.floor(newTotalKP / 200) + 1;

      const newStats: UserStats = {
        ...userStats,
        totalGamesPlayed: newTotalGames,
        totalCorrectAnswers: userStats.totalCorrectAnswers + (gameData.correctAnswers || 0),
        totalQuestions: userStats.totalQuestions + (gameData.totalQuestions || 0),
        bossesDefeated: userStats.bossesDefeated + (gameData.bossDefeated ? 1 : 0),
        longestStreak: newLongestStreak,
        totalKnowledgePoints: newTotalKP,
        averageScore: newAverageScore,
        totalTimeSpent: userStats.totalTimeSpent + (gameData.gameTimeMinutes || 0),
        currentLevel: newLevel,
        nextLevelKP: newLevel * 200,
      };
      setUserStats(newStats);
      
      // Update user's knowledge points and level
      updateUser({
        knowledgePoints: newTotalKP,
        level: newLevel,
        totalGamesPlayed: newStats.totalGamesPlayed,
        totalCorrectAnswers: newStats.totalCorrectAnswers,
        bossesDefeated: newStats.bossesDefeated,
      });
    }
  };

  const getUserStats = () => {
    return userStats;
  };

  const refreshUser = async () => {
    if (user) {
      try {
        console.log('🔄 Refreshing user data...');
        // Fetch updated user data from backend
        const userData = await userAPI.getProfile(user.id);
        console.log('📊 Updated user data:', userData.user);
        setUser(userData.user);
        
        // Refresh user stats if it's a student
        if (user.role === 'STUDENT') {
          try {
            const statsData = await userAPI.getStats(user.id);
            console.log('📈 Updated user stats:', statsData.stats);
            setUserStats(statsData.stats);
          } catch (statsError) {
            console.error('Error refreshing user stats:', statsError);
          }
        }
      } catch (error) {
        console.error('Error refreshing user data:', error);
      }
    }
  };

  const value: AuthContextType = {
    user,
    userStats,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    updateUser,
    updateUserStats,
    getUserStats,
    refreshUser,
    isLoading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 