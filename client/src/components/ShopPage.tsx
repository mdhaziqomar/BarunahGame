import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useGame } from '../context/GameContext';
import { gameAPI } from '../api/api';

interface ShopItem {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
  category: 'power-ups' | 'boosts' | 'protection';
  effect: string;
  available: boolean;
}

const ShopPage: React.FC = () => {
  const navigate = useNavigate();
  const { user, updateUser, refreshUser } = useAuth();
  const { gameStats, gameId, startBossPhase, nextQuestion } = useGame();
  const [selectedItem, setSelectedItem] = useState<ShopItem | null>(null);
  const [userKP, setUserKP] = useState(user?.knowledgePoints || 0);

  // Sync userKP with user's actual knowledge points
  useEffect(() => {
    setUserKP(user?.knowledgePoints || 0);
  }, [user?.knowledgePoints]);

  const shopItems: ShopItem[] = [
    {
      id: 'time-boost',
      name: 'Time Boost',
      description: 'Add 5 extra seconds to each question timer',
      price: 50,
      icon: '⏰',
      category: 'boosts',
      effect: '+5 seconds per question',
      available: true,
    },
    {
      id: 'double-points',
      name: 'Double Points',
      description: 'Double your points for the next 3 questions',
      price: 75,
      icon: '💰',
      category: 'power-ups',
      effect: '2x points for 3 questions',
      available: true,
    },
    {
      id: 'shield',
      name: 'Answer Shield',
      description: 'Protect yourself from one wrong answer',
      price: 100,
      icon: '🛡️',
      category: 'protection',
      effect: 'Blocks 1 wrong answer',
      available: true,
    },
    {
      id: 'hint-master',
      name: 'Hint Master',
      description: 'Remove 2 wrong answers for next 2 questions',
      price: 80,
      icon: '💡',
      category: 'power-ups',
      effect: 'Eliminates 2 wrong options',
      available: true,
    },
    {
      id: 'streak-saver',
      name: 'Streak Saver',
      description: 'Maintain your streak even if you answer incorrectly',
      price: 120,
      icon: '🔥',
      category: 'protection',
      effect: 'Preserves current streak',
      available: true,
    },
    {
      id: 'boss-weakness',
      name: 'Boss Weakness',
      description: 'Reduce boss HP by 20 points in the upcoming fight',
      price: 150,
      icon: '⚔️',
      category: 'power-ups',
      effect: 'Boss starts with -20 HP',
      available: true,
    },
  ];

  const handlePurchase = async (item: ShopItem) => {
    if (userKP >= item.price) {
      try {
        // Call backend API to purchase item
        const response = await gameAPI.purchaseShopItem(
          gameId || '',
          item.id,
          item.price
        );
        
        // Update local state with the response
        setUserKP(response.remainingKP);
        updateUser({ knowledgePoints: response.remainingKP });
        
        // Refresh user data to ensure consistency
        await refreshUser();
        
        alert(`Successfully purchased ${item.name}!`);
      } catch (error) {
        console.error('Error purchasing item:', error);
        alert('Failed to purchase item. Please try again.');
      }
    }
  };

  const handleContinueGame = () => {
    if (gameStats.questionsAnswered === 5) {
      // Advance to question 6 before navigating
      nextQuestion();
      navigate('/game');
    } else if (gameStats.questionsAnswered >= 10) {
      // Go to boss fight
      startBossPhase();
      navigate('/boss');
    } else {
      // Continue to next question
      nextQuestion();
      navigate('/game');
    }
  };

  const getItemsByCategory = (category: string) => {
    return shopItems.filter(item => item.category === category);
  };

  const CategorySection: React.FC<{ title: string; items: ShopItem[]; color: string }> = ({ title, items, color }) => (
    <div className="mb-8">
      <h3 className={`text-xl font-bold mb-4 ${color}`}>{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className={`bg-white rounded-lg p-4 shadow-md border-2 ${
              selectedItem?.id === item.id ? 'border-barunah-primary' : 'border-gray-200'
            } cursor-pointer transition-all duration-200`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedItem(item)}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-xs text-barunah-primary font-medium mt-1">{item.effect}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1">
                  <span className="text-lg font-bold text-barunah-primary">{item.price}</span>
                  <span className="text-sm text-gray-500">KP</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePurchase(item);
                  }}
                  disabled={userKP < item.price}
                  className={`mt-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    userKP >= item.price
                      ? 'bg-barunah-primary text-white hover:bg-barunah-primary/90'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {userKP >= item.price ? 'Buy' : 'Not enough KP'}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1 
            className="text-4xl font-bold text-barunah-primary mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            🏪 In-Game Shop
          </motion.h1>
          <p className="text-gray-600 mb-4">Boost your performance with power-ups and special items!</p>
          
          {/* Progress & KP Display */}
          <div className="flex justify-center items-center space-x-6 mb-6">
            <div className="bg-white rounded-lg px-4 py-2 shadow-md">
              <span className="text-sm text-gray-600">Questions Completed:</span>
              <span className="font-bold text-barunah-primary ml-2">{gameStats.questionsAnswered}/10</span>
            </div>
            <div className="bg-white rounded-lg px-4 py-2 shadow-md">
              <span className="text-sm text-gray-600">Current Score:</span>
              <span className="font-bold text-green-600 ml-2">{gameStats.currentScore}</span>
            </div>
            <div className="bg-white rounded-lg px-4 py-2 shadow-md">
              <span className="text-sm text-gray-600">Knowledge Points:</span>
              <span className="font-bold text-yellow-600 ml-2">{userKP} KP</span>
            </div>
          </div>
        </div>

        {/* Shop Categories */}
        <div className="space-y-8">
          <CategorySection 
            title="⚡ Power-Ups" 
            items={getItemsByCategory('power-ups')} 
            color="text-yellow-600"
          />
          <CategorySection 
            title="🚀 Boosts" 
            items={getItemsByCategory('boosts')} 
            color="text-blue-600"
          />
          <CategorySection 
            title="🛡️ Protection" 
            items={getItemsByCategory('protection')} 
            color="text-green-600"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <motion.button
            onClick={handleContinueGame}
            className="bg-barunah-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-barunah-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {gameStats.questionsAnswered === 5 ? 'Continue Game' : 'Fight Boss'}
          </motion.button>
          
          <motion.button
            onClick={() => navigate('/lobby')}
            className="bg-gray-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Exit Game
          </motion.button>
        </div>

        {/* Shop Info */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>💡 Tip: Purchase power-ups strategically to maximize your score!</p>
          <p>🎯 Items purchased here will be active for the remaining questions.</p>
        </div>
      </div>
    </div>
  );
};

export default ShopPage; 