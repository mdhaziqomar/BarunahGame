import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { adminAPI, questionsAPI } from '../api/api';

interface User {
  id: string;
  username: string;
  fullName: string;
  email: string;
  role: 'STUDENT' | 'VENDOR' | 'ADMIN';
  school?: string;
  knowledgePoints: number;
  level: number;
  isActive: boolean;
  lastLogin: string;
}

interface SystemStats {
  totalUsers: number;
  totalStudents: number;
  totalVendors: number;
  totalQuestions: number;
  totalGamesPlayed: number;
  averageSessionTime: number;
  activeUsersToday: number;
}

interface Question {
  id: string;
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: string; // "A", "B", "C", or "D"
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  subject: 'MELAYU_CULTURE' | 'ISLAMIC_VALUES' | 'BERAJA_SYSTEM' | 'GENERAL_MIB' | 'BRUNEI_HISTORY';
  explanation?: string;
  points: number;
  timesAnswered: number;
  correctAnswers: number;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
}

interface QuestionForm {
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  subject: 'MELAYU_CULTURE' | 'ISLAMIC_VALUES' | 'BERAJA_SYSTEM' | 'GENERAL_MIB' | 'BRUNEI_HISTORY';
  explanation: string;
  points: number;
}

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'questions' | 'analytics' | 'settings'>('overview');
  const [isAddingQuestion, setIsAddingQuestion] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);
  const [questionForm, setQuestionForm] = useState<QuestionForm>({
    question: '',
    options: ['', '', '', ''],
    correctAnswer: 0,
    difficulty: 'EASY',
    subject: 'GENERAL_MIB',
    explanation: '',
    points: 75,
  });
  const [questionFilter, setQuestionFilter] = useState<'ALL' | 'EASY' | 'MEDIUM' | 'HARD'>('ALL');
  const [subjectFilter, setSubjectFilter] = useState<'ALL' | 'MELAYU_CULTURE' | 'ISLAMIC_VALUES' | 'BERAJA_SYSTEM' | 'GENERAL_MIB' | 'BRUNEI_HISTORY'>('ALL');

  // Real system stats from API
  const [systemStats, setSystemStats] = useState<SystemStats>({
    totalUsers: 0,
    totalStudents: 0,
    totalVendors: 0,
    totalQuestions: 0,
    totalGamesPlayed: 0,
    averageSessionTime: 0,
    activeUsersToday: 0,
  });

  // Real users data will be fetched from API
  const [recentUsers, setRecentUsers] = useState<User[]>([]);

  // Real questions data from API
  const [questions, setQuestions] = useState<Question[]>([]);

  // Real analytics data
  const [analytics, setAnalytics] = useState<any>(null);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Fetch real data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch dashboard stats
        const statsResponse = await adminAPI.getDashboardStats();
        setSystemStats({
          totalUsers: statsResponse.stats.totalUsers,
          totalStudents: statsResponse.stats.totalUsers,
          totalVendors: statsResponse.stats.activeVendors,
          totalQuestions: statsResponse.stats.totalQuestions,
          totalGamesPlayed: statsResponse.stats.totalGames,
          averageSessionTime: 15, // Placeholder
          activeUsersToday: 0, // Will be updated from analytics
        });

        // Fetch analytics
        try {
          const analyticsResponse = await adminAPI.getAnalytics();
          setAnalytics(analyticsResponse.analytics);
          setSystemStats(prev => ({
            ...prev,
            activeUsersToday: analyticsResponse.analytics.activeUsersToday,
            averageSessionTime: analyticsResponse.analytics.averageSessionTime,
          }));
        } catch (error) {
          console.error('Error fetching analytics:', error);
        }

        // Fetch questions
        try {
          const questionsResponse = await questionsAPI.getAllQuestions();
          console.log('Questions response:', questionsResponse);
          // Map questions to include missing properties with default values
          const questionsWithDefaults = (questionsResponse.questions || []).map((q: any) => ({
            ...q,
            points: q.points || (q.difficulty === 'EASY' ? 75 : q.difficulty === 'MEDIUM' ? 100 : 150),
            timesAnswered: q.timesAnswered || 0,
            correctAnswers: q.correctAnswers || 0,
          }));
          setQuestions(questionsWithDefaults);
        } catch (error: any) {
          console.error('Error fetching questions:', error);
          setQuestions([]);
        }

        // Fetch recent users
        const usersResponse = await adminAPI.getAllUsers();
        setRecentUsers(usersResponse.users.slice(0, 5) || []); // Get first 5 users
      } catch (error) {
        console.error('Error fetching admin data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const StatCard: React.FC<{ title: string; value: string | number; icon: string; color: string; trend?: string }> =
    ({ title, value, icon, color, trend }) => (
      <motion.div
        className="bg-white rounded-lg p-6 shadow-md"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">{title}</p>
            <p className={`text-3xl font-bold ${color}`}>{value}</p>
            {trend && (
              <p className="text-sm text-green-600 mt-1">
                ↗ {trend}
              </p>
            )}
          </div>
          <div className={`text-4xl ${color.replace('text', 'text')}`}>
            {icon}
          </div>
        </div>
      </motion.div>
    );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'ADMIN': return 'bg-red-100 text-red-800';
      case 'VENDOR': return 'bg-blue-100 text-blue-800';
      case 'STUDENT': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Question management functions
  const handleAddQuestion = () => {
    setIsAddingQuestion(true);
    setEditingQuestion(null);
    setQuestionForm({
      question: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
      difficulty: 'EASY',
      subject: 'GENERAL_MIB',
      explanation: '',
      points: 75,
    });
  };

  const handleEditQuestion = (question: Question) => {
    setEditingQuestion(question);
    setIsAddingQuestion(false);
    setQuestionForm({
      question: question.question,
      options: [question.optionA, question.optionB, question.optionC, question.optionD],
      correctAnswer: question.correctAnswer.charCodeAt(0) - 65, // Convert "A" to 0, "B" to 1, etc.
      difficulty: question.difficulty,
      subject: question.subject,
      explanation: question.explanation || '',
      points: question.points,
    });
  };

  const handleSaveQuestion = async () => {
    // Validation
    if (!questionForm.question.trim()) {
      alert('Question is required');
      return;
    }

    if (questionForm.options.some(opt => !opt.trim())) {
      alert('All options must be filled');
      return;
    }

    if (!questionForm.explanation.trim()) {
      alert('Explanation is required');
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (editingQuestion) {
      console.log('Updating question:', editingQuestion.id, questionForm);
      alert('Question updated successfully!');
    } else {
      console.log('Adding new question:', questionForm);
      alert('Question added successfully!');
    }

    // Reset form
    setIsAddingQuestion(false);
    setEditingQuestion(null);
    setQuestionForm({
      question: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
      difficulty: 'EASY',
      subject: 'GENERAL_MIB',
      explanation: '',
      points: 75,
    });
  };

  const handleDeleteQuestion = async (questionId: string) => {
    if (window.confirm('Are you sure you want to delete this question?')) {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log('Deleting question:', questionId);
      alert('Question deleted successfully!');
    }
  };

  const handleToggleQuestionStatus = async (questionId: string, isActive: boolean) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log('Toggling question status:', questionId, !isActive);
    alert(`Question ${!isActive ? 'activated' : 'deactivated'} successfully!`);
  };

  const updateQuestionForm = (field: keyof QuestionForm, value: any) => {
    setQuestionForm(prev => ({ ...prev, [field]: value }));
  };

  const updateQuestionOption = (index: number, value: string) => {
    const newOptions = [...questionForm.options];
    newOptions[index] = value;
    setQuestionForm(prev => ({ ...prev, options: newOptions }));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'EASY': return 'bg-green-100 text-green-800';
      case 'MEDIUM': return 'bg-yellow-100 text-yellow-800';
      case 'HARD': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAccuracyPercentage = (question: Question) => {
    if (question.timesAnswered === 0) return 0;
    return Math.round((question.correctAnswers / question.timesAnswered) * 100);
  };

  const getSubjectColor = (subject: string) => {
    switch (subject) {
      case 'MELAYU_CULTURE': return 'bg-blue-100 text-blue-800';
      case 'ISLAMIC_VALUES': return 'bg-green-100 text-green-800';
      case 'BERAJA_SYSTEM': return 'bg-purple-100 text-purple-800';
      case 'GENERAL_MIB': return 'bg-orange-100 text-orange-800';
      case 'BRUNEI_HISTORY': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredQuestions = questions.filter(q => {
    const matchesDifficulty = questionFilter === 'ALL' || q.difficulty === questionFilter;
    const matchesSubject = subjectFilter === 'ALL' || q.subject === subjectFilter;
    return matchesDifficulty && matchesSubject;
  });

  // Check if user is admin
  if (user?.role !== 'ADMIN') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="text-6xl mb-4">🚫</div>
          <h1 className="text-3xl font-bold text-red-600 mb-2">Access Denied</h1>
          <p className="text-gray-600 mb-6">You don't have permission to access the admin dashboard.</p>
          <button
            onClick={() => navigate('/lobby')}
            className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Return to Game
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">⏳</div>
          <h1 className="text-2xl font-bold text-gray-700 mb-2">Loading Dashboard...</h1>
          <p className="text-gray-600">Fetching system data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-purple-800 mb-2">🛡️ Admin Dashboard</h1>
          <p className="text-gray-600">Barunah! Educational Platform Management</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-lg p-1 shadow-md">
            {[
              { key: 'overview', label: 'Overview', icon: '📊' },
              { key: 'users', label: 'Users', icon: '👥' },
              { key: 'questions', label: 'Questions', icon: '❓' },
              { key: 'analytics', label: 'Analytics', icon: '📈' },
              { key: 'settings', label: 'Settings', icon: '⚙️' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`px-4 py-2 rounded-md font-medium transition-all ${activeTab === tab.key
                  ? 'bg-purple-600 text-white shadow-md'
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
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* System Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <StatCard
                  title="Total Users"
                  value={systemStats.totalUsers.toLocaleString()}
                  icon="👥"
                  color="text-blue-600"
                  trend="+12% this month"
                />
                <StatCard
                  title="Active Today"
                  value={systemStats.activeUsersToday}
                  icon="🟢"
                  color="text-green-600"
                  trend="+5% vs yesterday"
                />
                <StatCard
                  title="Total Games"
                  value={systemStats.totalGamesPlayed.toLocaleString()}
                  icon="🎮"
                  color="text-purple-600"
                  trend="+8% this week"
                />
                <StatCard
                  title="Avg Session"
                  value={`${systemStats.averageSessionTime}m`}
                  icon="⏱️"
                  color="text-orange-600"
                  trend="+2m this month"
                />
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">🚀 Quick Actions</h3>
                  <div className="space-y-3">
                    <button 
                      onClick={() => setActiveTab('questions')}
                      className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors text-left"
                    >
                      ➕ Add New Question
                    </button>
                    <button className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors text-left">
                      👤 Create User Account
                    </button>
                    <button className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition-colors text-left">
                      📊 Generate Report
                    </button>
                    <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors text-left">
                      📢 Send Announcement
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">📈 System Health</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Server Status</span>
                      <span className="text-green-600 font-medium">🟢 Online</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Database</span>
                      <span className="text-green-600 font-medium">🟢 Healthy</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">API Response</span>
                      <span className="text-green-600 font-medium">⚡ 142ms</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Storage Used</span>
                      <span className="text-yellow-600 font-medium">📦 68%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">📝 Recent Activity</h3>
                <div className="space-y-3">
                  {analytics?.recentGames && analytics.recentGames.length > 0 ? (
                    analytics.recentGames.map((game: any, index: number) => (
                      <div key={game.id} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                        <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">🎮</span>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-800">
                            Game completed by {game.user.fullName} (Score: {game.score})
                          </p>
                          <p className="text-xs text-gray-500">
                            {new Date(game.timeStarted).toLocaleDateString()} at {new Date(game.timeStarted).toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <span className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white text-sm">📊</span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">No recent activity</p>
                        <p className="text-xs text-gray-500">System is ready for new games</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  ➕ Add User
                </button>
              </div>

              {/* User Stats */}
              <div className="grid grid-cols-3 gap-6">
                <StatCard title="Students" value={systemStats.totalStudents} icon="�"color="text-green-600" />
                <StatCard title="Vendors" value={systemStats.totalVendors} icon="🏪" color="text-blue-600" />
                <StatCard title="Admins" value="5" icon="🛡️" color="text-red-600" />
              </div>

              {/* User List */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-purple-600 text-white p-4">
                  <h3 className="text-lg font-semibold">Recent Users</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                            {user.fullName.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">{user.fullName}</h4>
                            <p className="text-sm text-gray-600">@{user.username}</p>
                            {user.school && <p className="text-xs text-gray-500">{user.school}</p>}
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                            {user.role}
                          </span>
                          <p className="text-sm text-gray-600 mt-1">Level {user.level}</p>
                          <p className="text-xs text-gray-500">{formatDate(user.lastLogin)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'questions' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Question Management</h2>
                <button
                  onClick={handleAddQuestion}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  ➕ Add New Question
                </button>
              </div>

              {/* Filters */}
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex flex-wrap gap-4 items-center">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
                    <select
                      value={questionFilter}
                      onChange={(e) => setQuestionFilter(e.target.value as any)}
                      className="border border-gray-300 rounded-md px-3 py-2"
                    >
                      <option value="ALL">All Difficulties</option>
                      <option value="EASY">Easy</option>
                      <option value="MEDIUM">Medium</option>
                      <option value="HARD">Hard</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select
                      value={subjectFilter}
                      onChange={(e) => setSubjectFilter(e.target.value as any)}
                      className="border border-gray-300 rounded-md px-3 py-2"
                    >
                      <option value="ALL">All Subjects</option>
                      <option value="MELAYU_CULTURE">Melayu Culture</option>
                      <option value="ISLAMIC_VALUES">Islamic Values</option>
                      <option value="BERAJA_SYSTEM">Beraja System</option>
                      <option value="GENERAL_MIB">General MIB</option>
                      <option value="BRUNEI_HISTORY">Brunei History</option>
                    </select>
                  </div>
                  <div className="ml-auto">
                    <span className="text-sm text-gray-600">
                      Showing {filteredQuestions.length} of {questions.length} questions
                    </span>
                  </div>
                </div>
              </div>

              {/* Add/Edit Question Form */}
              {(isAddingQuestion || editingQuestion) && (
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {editingQuestion ? 'Edit Question' : 'Add New Question'}
                  </h3>

                  <div className="space-y-4">
                    {/* Question Text */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Question</label>
                      <textarea
                        value={questionForm.question}
                        onChange={(e) => updateQuestionForm('question', e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 h-20 resize-none"
                        placeholder="Enter your question here..."
                      />
                    </div>

                    {/* Options */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Options</label>
                      {questionForm.options.map((option, index) => (
                        <div key={index} className="flex items-center space-x-2 mb-2">
                          <input
                            type="radio"
                            name="correctAnswer"
                            checked={questionForm.correctAnswer === index}
                            onChange={() => updateQuestionForm('correctAnswer', index)}
                            className="text-purple-600"
                          />
                          <span className="text-sm text-gray-600 w-8">{String.fromCharCode(65 + index)}.</span>
                          <input
                            type="text"
                            value={option}
                            onChange={(e) => updateQuestionOption(index, e.target.value)}
                            className="flex-1 border border-gray-300 rounded-md px-3 py-2"
                            placeholder={`Option ${String.fromCharCode(65 + index)}`}
                          />
                        </div>
                      ))}
                      <p className="text-xs text-gray-500 mt-1">Select the correct answer by clicking the radio button</p>
                    </div>

                    {/* Difficulty and Subject */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
                        <select
                          value={questionForm.difficulty}
                          onChange={(e) => updateQuestionForm('difficulty', e.target.value)}
                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                        >
                          <option value="EASY">Easy (75 points)</option>
                          <option value="MEDIUM">Medium (100 points)</option>
                          <option value="HARD">Hard (150 points)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <select
                          value={questionForm.subject}
                          onChange={(e) => updateQuestionForm('subject', e.target.value)}
                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                        >
                          <option value="MELAYU_CULTURE">Melayu Culture</option>
                          <option value="ISLAMIC_VALUES">Islamic Values</option>
                          <option value="BERAJA_SYSTEM">Beraja System</option>
                          <option value="GENERAL_MIB">General MIB</option>
                          <option value="BRUNEI_HISTORY">Brunei History</option>
                        </select>
                      </div>
                    </div>

                    {/* Points */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Points</label>
                      <input
                        type="number"
                        value={questionForm.points}
                        onChange={(e) => updateQuestionForm('points', parseInt(e.target.value))}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        min="25"
                        max="200"
                        step="25"
                      />
                    </div>

                    {/* Explanation */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Explanation</label>
                      <textarea
                        value={questionForm.explanation}
                        onChange={(e) => updateQuestionForm('explanation', e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 h-20 resize-none"
                        placeholder="Provide an explanation for the correct answer..."
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <button
                        onClick={handleSaveQuestion}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                      >
                        {editingQuestion ? 'Update Question' : 'Add Question'}
                      </button>
                      <button
                        onClick={() => {
                          setIsAddingQuestion(false);
                          setEditingQuestion(null);
                        }}
                        className="bg-gray-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Questions List */}
              <div className="space-y-4">
                {filteredQuestions.length === 0 ? (
                  <div className="bg-white rounded-lg p-8 shadow-md text-center">
                    <div className="text-4xl mb-4">📝</div>
                    <p className="text-gray-600 mb-4">No questions found</p>
                    <button
                      onClick={handleAddQuestion}
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                    >
                      Add First Question
                    </button>
                  </div>
                ) : (
                  filteredQuestions.map((question) => (
                  <div key={question.id} className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{question.question}</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(question.difficulty)}`}>
                            {question.difficulty}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSubjectColor(question.subject)}`}>
                            {question.subject.replace('_', ' ')}
                          </span>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {question.points} points
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${question.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                            {question.isActive ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditQuestion(question)}
                          className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleToggleQuestionStatus(question.id, question.isActive)}
                          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${question.isActive
                            ? 'bg-yellow-600 text-white hover:bg-yellow-700'
                            : 'bg-green-600 text-white hover:bg-green-700'
                            }`}
                        >
                          {question.isActive ? 'Deactivate' : 'Activate'}
                        </button>
                        <button
                          onClick={() => handleDeleteQuestion(question.id)}
                          className="bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-700 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>

                    {/* Options */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {[question.optionA, question.optionB, question.optionC, question.optionD].map((option, index) => (
                        <div
                          key={index}
                          className={`p-2 rounded-md border ${index === (question.correctAnswer.charCodeAt(0) - 65)
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 bg-gray-50'
                            }`}
                        >
                          <span className="text-sm font-medium text-gray-600 mr-2">
                            {String.fromCharCode(65 + index)}.
                          </span>
                          <span className="text-sm">{option}</span>
                          {index === (question.correctAnswer.charCodeAt(0) - 65) && (
                            <span className="ml-2 text-green-600">✓</span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 mb-3">
                      <div>
                        <span className="font-medium">Times Answered:</span> {question.timesAnswered.toLocaleString()}
                      </div>
                      <div>
                        <span className="font-medium">Correct Answers:</span> {question.correctAnswers.toLocaleString()}
                      </div>
                      <div>
                        <span className="font-medium">Accuracy:</span> {getAccuracyPercentage(question)}%
                      </div>
                    </div>

                    {/* Explanation */}
                    <div className="bg-gray-50 rounded-md p-3">
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Explanation:</h4>
                      <p className="text-sm text-gray-600">{question.explanation}</p>
                    </div>
                  </div>
                ))
                )}
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Analytics & Reports</h2>

              {/* Performance Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <StatCard title="Avg Score" value="1,150" icon="⭐" color="text-yellow-600" />
                <StatCard title="Completion Rate" value="87%" icon="✅" color="text-green-600" />
                <StatCard title="Boss Defeats" value="2,341" icon="⚔️" color="text-purple-600" />
                <StatCard title="Active Schools" value="45" icon="🏫" color="text-blue-600" />
              </div>

              {/* Charts Placeholder */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">📊 User Activity (Last 30 Days)</h3>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Chart visualization would go here</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">📈 Score Distribution</h3>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Chart visualization would go here</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">System Settings</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">🎮 Game Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Default Timer (seconds)</label>
                      <input type="number" value="15" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Questions per Game</label>
                      <input type="number" value="10" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Shop Pause Point</label>
                      <input type="number" value="5" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">💰 Point System</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Easy Question Points</label>
                      <input type="number" value="75" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Medium Question Points</label>
                      <input type="number" value="100" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Hard Question Points</label>
                      <input type="number" value="150" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">🔧 System Maintenance</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                    🔄 Backup Database
                  </button>
                  <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors">
                    🧹 Clear Cache
                  </button>
                  <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors">
                    📊 Export Data
                  </button>
                  <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors">
                    🚨 System Reset
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Back to Game Button */}
        <div className="flex justify-center mt-8">
          <motion.button
            onClick={() => navigate('/lobby')}
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🎮 Back to Game
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;