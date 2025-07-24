import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Don't show navbar on landing page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🎮</span>
            <span className="text-xl font-bold text-barunah-primary">Barunah!</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isAuthenticated ? (
              <>
                {/* Common links for all authenticated users */}
                <Link
                  to="/lobby"
                  className={`nav-link ${
                    location.pathname === '/lobby' ? 'text-barunah-primary' : 'text-gray-700'
                  }`}
                >
                  🏠 Lobby
                </Link>
                
                {/* Student-specific links */}
                {user?.role === 'STUDENT' && (
                  <>
                    <Link
                      to="/game"
                      className={`nav-link ${
                        location.pathname === '/game' ? 'text-barunah-primary' : 'text-gray-700'
                      }`}
                    >
                      🎮 Game
                    </Link>
                    <Link
                      to="/rewards"
                      className={`nav-link ${
                        location.pathname === '/rewards' ? 'text-barunah-primary' : 'text-gray-700'
                      }`}
                    >
                      🎁 Redeem Rewards
                    </Link>
                    <Link
                      to="/leaderboard"
                      className={`nav-link ${
                        location.pathname === '/leaderboard' ? 'text-barunah-primary' : 'text-gray-700'
                      }`}
                    >
                      🏆 Leaderboard
                    </Link>
                  </>
                )}
                
                {/* Vendor-specific links */}
                {user?.role === 'VENDOR' && (
                  <Link
                    to="/vendor-dashboard"
                    className={`nav-link ${
                      location.pathname === '/vendor-dashboard' ? 'text-barunah-primary' : 'text-gray-700'
                    }`}
                  >
                    🏪 Vendor Dashboard
                  </Link>
                )}
                
                {/* Admin-specific links */}
                {user?.role === 'ADMIN' && (
                  <Link
                    to="/admin-dashboard"
                    className={`nav-link ${
                      location.pathname === '/admin-dashboard' ? 'text-barunah-primary' : 'text-gray-700'
                    }`}
                  >
                    🛡️ Admin Dashboard
                  </Link>
                )}
              </>
            ) : (
              <Link
                to="/auth"
                className="nav-link text-gray-700"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* User Profile & Actions */}
          <div className="flex items-center space-x-4">
            {isAuthenticated && user ? (
              <>
                {/* Knowledge Points (only for students) */}
                {user.role === 'STUDENT' && (
                  <div className="hidden sm:flex items-center space-x-2 bg-barunah-accent bg-opacity-10 px-3 py-1 rounded-full">
                    <span className="text-barunah-accent font-bold">💎</span>
                    <span className="text-sm font-medium text-barunah-accent">
                      {user.knowledgePoints.toLocaleString()} KP
                    </span>
                  </div>
                )}

                {/* Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex items-center space-x-2 bg-barunah-primary text-white px-3 py-2 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <span className="text-sm">
                      {user.role === 'ADMIN' ? '👑' : user.role === 'VENDOR' ? '🏪' : '👤'}
                    </span>
                    <span className="hidden sm:inline text-sm font-medium">
                      {user.username}
                    </span>
                    <span className="text-sm">⌄</span>
                  </button>

                  {isMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                    >
                      {/* Role-specific dashboard links */}
                      {user.role === 'STUDENT' && (
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          👤 Profile
                        </Link>
                      )}
                      
                      {user.role === 'VENDOR' && (
                        <Link
                          to="/vendor-dashboard"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          🏪 Vendor Dashboard
                        </Link>
                      )}
                      
                      {user.role === 'ADMIN' && (
                        <Link
                          to="/admin-dashboard"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          🛡️ Admin Dashboard
                        </Link>
                      )}
                      
                      <Link
                        to="/lobby"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        🏠 Game Lobby
                      </Link>
                      <div className="border-t border-gray-100"></div>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        🚪 Logout
                      </button>
                    </motion.div>
                  )}
                </div>
              </>
            ) : (
              <Link
                to="/auth"
                className="game-button text-sm"
              >
                Sign In
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/lobby"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    🏠 Lobby
                  </Link>
                  
                  {/* Student-specific mobile links */}
                  {user?.role === 'STUDENT' && (
                    <>
                      <Link
                        to="/game"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        🎮 Game
                      </Link>
                      <Link
                        to="/rewards"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        🎁 Redeem Rewards
                      </Link>
                      <Link
                        to="/leaderboard"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        🏆 Leaderboard
                      </Link>
                    </>
                  )}
                  
                  {/* Vendor-specific mobile links */}
                  {user?.role === 'VENDOR' && (
                    <Link
                      to="/vendor-dashboard"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      🏪 Vendor Dashboard
                    </Link>
                  )}
                  
                  {/* Admin-specific mobile links */}
                  {user?.role === 'ADMIN' && (
                    <Link
                      to="/admin-dashboard"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      🛡️ Admin Dashboard
                    </Link>
                  )}
                </>
              ) : (
                <Link
                  to="/auth"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 