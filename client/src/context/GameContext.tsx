import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { gameAPI } from '../api/api';
import { useAuth } from './AuthContext';

interface Question {
  id: string;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: string; // 'A', 'B', 'C', or 'D'
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  subject: 'MELAYU_CULTURE' | 'ISLAMIC_VALUES' | 'BERAJA_SYSTEM' | 'GENERAL_MIB' | 'BRUNEI_HISTORY';
  explanation?: string;
}

interface GameSettings {
  selectedSubject: 'MELAYU_CULTURE' | 'ISLAMIC_VALUES' | 'BERAJA_SYSTEM' | 'GENERAL_MIB' | 'BRUNEI_HISTORY' | 'ALL';
  selectedDifficulty: 'EASY' | 'MEDIUM' | 'HARD' | 'MIXED';
  timerDuration: number; // Dynamic based on difficulty
}

interface GameStats {
  currentScore: number;
  questionsAnswered: number;
  totalQuestions: number;
  correctAnswers: number;
  timeRemaining: number;
  streak: number;
  phase: 'SETUP' | 'PREPARATION' | 'QUESTIONS' | 'SHOP' | 'BOSS' | 'COMPLETED';
}

interface GameContextType {
  gameStats: GameStats;
  gameSettings: GameSettings;
  currentQuestion: Question | null;
  questions: Question[];
  selectedAnswer: string | null; // 'A', 'B', 'C', or 'D'
  isAnswerSubmitted: boolean;
  isAnswerCorrect: boolean | null;
  gameId: string | null;
  updateGameSettings: (settings: Partial<GameSettings>) => void;
  startGame: (settings?: Partial<GameSettings>) => Promise<void>;
  selectAnswer: (answer: string) => void; // 'A', 'B', 'C', or 'D'
  submitAnswer: () => void;
  nextQuestion: () => void;
  endGame: () => void;
  completeGame: (bossDefeated: boolean) => Promise<any>;
  resetGame: () => void;
  enterShopPhase: () => void;
  startBossPhase: () => void;
  updateScore: (points: number) => void;
  getTimerDuration: () => number;
  isLoading: boolean;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

// @refresh reset
export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

interface GameProviderProps {
  children: ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const { refreshUser } = useAuth();
  
  const [gameStats, setGameStats] = useState<GameStats>({
    currentScore: 0,
    questionsAnswered: 0,
    totalQuestions: 10,
    correctAnswers: 0,
    timeRemaining: 15,
    streak: 0,
    phase: 'SETUP',
  });

  const [gameSettings, setGameSettings] = useState<GameSettings>({
    selectedSubject: 'ALL',
    selectedDifficulty: 'MIXED',
    timerDuration: 15,
  });

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [gameId, setGameId] = useState<string | null>(null);

  const updateGameSettings = (settings: Partial<GameSettings>) => {
    setGameSettings(prev => ({ ...prev, ...settings }));
  };

  const getTimerDuration = () => {
    if (gameSettings.selectedDifficulty === 'MIXED') {
      // For mixed difficulty, use current question's difficulty
      if (currentQuestion) {
        switch (currentQuestion.difficulty) {
          case 'EASY': return 15;
          case 'MEDIUM': return 10;
          case 'HARD': return 5;
          default: return 15;
        }
      }
      return 15;
    } else {
      // Use selected difficulty
      switch (gameSettings.selectedDifficulty) {
        case 'EASY': return 15;
        case 'MEDIUM': return 10;
        case 'HARD': return 5;
        default: return 15;
      }
    }
  };

  const getTimerDurationForSettings = (settings: GameSettings, question?: Question): number => {
    if (settings.selectedDifficulty === 'MIXED' && question) {
      switch (question.difficulty) {
        case 'EASY': return 15;
        case 'MEDIUM': return 10;
        case 'HARD': return 5;
        default: return 10;
      }
    }
    
    switch (settings.selectedDifficulty) {
      case 'EASY': return 15;
      case 'MEDIUM': return 10;
      case 'HARD': return 5;
      default: return 10;
    }
  };

  const startGame = async (newSettings?: Partial<GameSettings>) => {
    setIsLoading(true);
    try {
      // Use provided settings or current settings
      const currentSettings = newSettings ? { ...gameSettings, ...newSettings } : gameSettings;
      
      // Update settings if new ones were provided
      if (newSettings) {
        setGameSettings(currentSettings);
      }
      
      console.log('🎮 Starting game with settings:', currentSettings);
      
      // Start game on backend - user ID will be extracted from JWT token
      const gameResponse = await gameAPI.startGame(
        currentSettings.selectedDifficulty,
        currentSettings.selectedSubject === 'ALL' ? 'mixed' : currentSettings.selectedSubject.toLowerCase()
      );
      
      setGameId(gameResponse.game.id);
      
      // Fetch questions from backend
      const questionsResponse = await gameAPI.getQuestions(
        currentSettings.selectedDifficulty,
        currentSettings.selectedSubject === 'ALL' ? 'mixed' : currentSettings.selectedSubject.toLowerCase(),
        10
      );
      
      const apiQuestions = questionsResponse.questions;
      
      if (apiQuestions.length === 0) {
        throw new Error('No questions available for the selected settings');
      }
      
      setQuestions(apiQuestions);
      setCurrentQuestion(apiQuestions[0]);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
      setIsAnswerCorrect(null);
      
      // Set initial timer duration
      const initialTimerDuration = getTimerDurationForSettings(currentSettings, apiQuestions[0]);
      
      setGameStats(prev => ({
        ...prev,
        currentScore: 0,
        questionsAnswered: 0,
        totalQuestions: apiQuestions.length,
        correctAnswers: 0,
        timeRemaining: initialTimerDuration,
        streak: 0,
        phase: 'QUESTIONS',
      }));
      
      console.log('✅ Game started successfully with', apiQuestions.length, 'questions');
    } catch (error) {
      console.error('❌ Error starting game:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const selectAnswer = (answer: string) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(answer);
    }
  };

  const submitAnswer = async () => {
    if (currentQuestion && selectedAnswer !== null && gameId) {
      const correct = selectedAnswer === currentQuestion.correctAnswer;
      setIsAnswerCorrect(correct);
      setIsAnswerSubmitted(true);

      // Calculate points based on difficulty
      let points = 0;
      if (correct) {
        switch (currentQuestion.difficulty) {
          case 'EASY': points = 10; break;
          case 'MEDIUM': points = 15; break;
          case 'HARD': points = 25; break;
          default: points = 10;
        }
      }

      // Submit answer to backend
      try {
        const timeSpent = getTimerDuration() - gameStats.timeRemaining;
        const response = await gameAPI.submitAnswer(
          gameId,
          currentQuestion.id,
          selectedAnswer,
          timeSpent
        );
        
        console.log('Answer submitted:', response);
        
        // Refresh user data to get updated KP
        await refreshUser();
      } catch (error) {
        console.error('Error submitting answer:', error);
      }

      setGameStats(prev => ({
        ...prev,
        questionsAnswered: prev.questionsAnswered + 1,
        correctAnswers: correct ? prev.correctAnswers + 1 : prev.correctAnswers,
        currentScore: prev.currentScore + points,
        streak: correct ? prev.streak + 1 : 0,
      }));
    }
  };

  const nextQuestion = () => {
    const nextIndex = gameStats.questionsAnswered;
    
    if (nextIndex < questions.length) {
      const nextQ = questions[nextIndex];
      setCurrentQuestion(nextQ);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
      setIsAnswerCorrect(null);
      
      // Update timer based on next question's difficulty
      const timerDuration = getTimerDuration();
      setGameStats(prev => ({
        ...prev,
        phase: 'QUESTIONS', // Ensure we're back in QUESTIONS phase when continuing
        timeRemaining: timerDuration,
      }));
    }
  };

  const enterShopPhase = () => {
    setGameStats(prev => ({
      ...prev,
      phase: 'SHOP',
    }));
  };

  const startBossPhase = () => {
    setGameStats(prev => ({
      ...prev,
      phase: 'BOSS',
    }));
  };

  const updateScore = (points: number) => {
    setGameStats(prev => ({
      ...prev,
      currentScore: prev.currentScore + points,
    }));
  };

  const endGame = () => {
    setGameStats(prev => ({
      ...prev,
      phase: 'COMPLETED',
    }));
  };

  const completeGame = async (bossDefeated: boolean) => {
    try {
      if (!gameId) {
        throw new Error('No active game to complete');
      }

      // Complete game on backend
      const completionResponse = await gameAPI.completeGame(gameId, bossDefeated);
      
      console.log('Game completed with stats:', completionResponse);
      
      // Update game phase to completed
      setGameStats(prev => ({
        ...prev,
        phase: 'COMPLETED',
      }));

      // Return the results for the calling component
      return completionResponse;
    } catch (error) {
      console.error('Error completing game:', error);
      throw error;
    }
  };

  const resetGame = () => {
    setGameStats({
      currentScore: 0,
      questionsAnswered: 0,
      totalQuestions: 10,
      correctAnswers: 0,
      timeRemaining: 15,
      streak: 0,
      phase: 'SETUP',
    });
    setGameSettings({
      selectedSubject: 'ALL',
      selectedDifficulty: 'MIXED',
      timerDuration: 15,
    });
    setQuestions([]);
    setCurrentQuestion(null);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setIsAnswerCorrect(null);
    setGameId(null);
  };

  const value: GameContextType = {
    gameStats,
    gameSettings,
    currentQuestion,
    questions,
    selectedAnswer,
    isAnswerSubmitted,
    isAnswerCorrect,
    gameId,
    updateGameSettings,
    startGame,
    selectAnswer,
    submitAnswer,
    nextQuestion,
    endGame,
    completeGame,
    resetGame,
    enterShopPhase,
    startBossPhase,
    updateScore,
    getTimerDuration,
    isLoading,
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
}; 