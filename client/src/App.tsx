import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';

// Import components
import LandingPage from './components/LandingPage';
import AuthPage from './components/AuthPage';
import GameLobby from './components/GameLobby';
import GameSetup from './components/GameSetup';
import GamePlay from './components/GamePlay';
import ShopPage from './components/ShopPage';
import RewardsPage from './components/RewardsPage';
import BossFight from './components/BossFight';
import Leaderboard from './components/Leaderboard';
import Profile from './components/Profile';
import AdminDashboard from './components/AdminDashboard';
import VendorDashboard from './components/VendorDashboard';
import Navbar from './components/Navbar';

// Game context for state management
import { GameProvider } from './context/GameContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <GameProvider>
        <Router>
          <div className="App min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <Navbar />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/lobby" element={<GameLobby />} />
                <Route path="/setup" element={<GameSetup />} />
                <Route path="/game" element={<GamePlay />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/rewards" element={<RewardsPage />} />
                <Route path="/boss" element={<BossFight />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/vendor-dashboard" element={<VendorDashboard />} />
              </Routes>
            </motion.div>
      </div>
        </Router>
      </GameProvider>
    </AuthProvider>
  );
}

export default App;
