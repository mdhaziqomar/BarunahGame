import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate('/lobby');
    } else {
      navigate('/auth');
    }
  };

  return (
    <div className="min-h-screen game-background flex items-center justify-center">
      <div className="text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-bounce-slow">
            🎮 Barunah!
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            An Edutainment Experience for Brunei's MIB Philosophy
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Embark on an exciting journey through Brunei's rich cultural heritage. 
            Learn about Melayu Islam Beraja through interactive gameplay, earn Knowledge Points, 
            and redeem amazing rewards!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6"
        >
          <button 
            onClick={handleGetStarted}
            className="game-button text-lg px-8 py-4 mx-auto block"
          >
            🚀 Start Your Journey
          </button>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Learn & Play</h3>
              <p className="text-sm opacity-90">
                Answer trivia questions about MIB philosophy in a fun, gamified environment
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6"
            >
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold mb-2">Earn Rewards</h3>
              <p className="text-sm opacity-90">
                Collect Knowledge Points and redeem real-world prizes from local vendors
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6"
            >
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Compete</h3>
              <p className="text-sm opacity-90">
                Challenge friends and climb the leaderboard to become the ultimate MIB champion
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-12 text-sm opacity-75"
          >
            <p>🎓 Created by Team ComplexCreators</p>
            <p>Chung Hwa Middle School BSB | Celik Biz Competition 2025</p>
            <p className="mt-2">Supporting UN SDGs: Quality Education • Economic Growth • Innovation • Partnerships</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage; 