import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import QRCode from 'react-qr-code';

interface Reward {
  id: string;
  name: string;
  description: string;
  category: 'STATIONERY' | 'VOUCHER' | 'DIGITAL' | 'EDUCATIONAL' | 'MERCHANDISE';
  kpCost: number;
  icon: string;
  stockRemaining: number;
  totalStock: number;
  imageUrl?: string;
  vendor?: string;
  expiryDate?: string;
}

interface RedemptionData {
  redemptionId: string;
  userId: string;
  rewardId: string;
  playerName: string;
  rewardName: string;
  pointsSpent: number;
  generatedAt: string;
  expiresAt: string;
  vendorName: string;
  status: 'ACTIVE' | 'USED' | 'EXPIRED';
}

type RewardFilter = 'ALL' | 'STATIONERY' | 'VOUCHER' | 'DIGITAL' | 'EDUCATIONAL' | 'MERCHANDISE';

const RewardsPage: React.FC = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();
  const [activeFilter, setActiveFilter] = useState<RewardFilter>('ALL');
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null);
  const [isRedeemModalOpen, setIsRedeemModalOpen] = useState(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [redeemStatus, setRedeemStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [redemptionData, setRedemptionData] = useState<RedemptionData | null>(null);

  // Mock rewards data
  const mockRewards: Reward[] = [
    // Stationery
    {
      id: 'stat-001',
      name: 'Premium Notebook Set',
      description: 'High-quality notebook with MIB theme cover design',
      category: 'STATIONERY',
      kpCost: 250,
      icon: '📓',
      stockRemaining: 15,
      totalStock: 50,
      vendor: 'Brunei Stationery Co.',
    },
    {
      id: 'stat-002',
      name: 'Sultan Pen Collection',
      description: 'Limited edition pen set with Brunei royal emblems',
      category: 'STATIONERY',
      kpCost: 400,
      icon: '🖊️',
      stockRemaining: 8,
      totalStock: 25,
      vendor: 'Royal Supplies',
    },
    {
      id: 'stat-003',
      name: 'MIB Study Kit',
      description: 'Complete study kit with highlighters, sticky notes, and bookmarks',
      category: 'STATIONERY',
      kpCost: 180,
      icon: '📚',
      stockRemaining: 22,
      totalStock: 40,
      vendor: 'Brunei Educational Supplies',
    },
    
    // Vouchers
    {
      id: 'vouch-001',
      name: 'Bookstore Voucher',
      description: 'BND $10 voucher for any bookstore in Brunei',
      category: 'VOUCHER',
      kpCost: 500,
      icon: '🎟️',
      stockRemaining: 30,
      totalStock: 100,
      vendor: 'Popular Bookstore',
      expiryDate: '2025-12-31',
    },
    {
      id: 'vouch-002',
      name: 'Hua Ho Voucher',
      description: 'BND $15 shopping voucher for Hua Ho stores',
      category: 'VOUCHER',
      kpCost: 750,
      icon: '🛍️',
      stockRemaining: 20,
      totalStock: 60,
      vendor: 'Hua Ho Department Store',
      expiryDate: '2025-12-31',
    },
    
    // Digital
    {
      id: 'dig-001',
      name: 'Premium Game Badge',
      description: 'Exclusive digital badge for your profile',
      category: 'DIGITAL',
      kpCost: 150,
      icon: '🏆',
      stockRemaining: 999,
      totalStock: 999,
      vendor: 'Barunah! Platform',
    },
    {
      id: 'dig-002',
      name: 'Custom Profile Theme',
      description: 'Unlock premium themes for your game profile',
      category: 'DIGITAL',
      kpCost: 300,
      icon: '🎨',
      stockRemaining: 999,
      totalStock: 999,
      vendor: 'Barunah! Platform',
    },
    
    // Educational
    {
      id: 'edu-001',
      name: 'MIB Reference Book',
      description: 'Comprehensive guide to Melayu Islam Beraja philosophy',
      category: 'EDUCATIONAL',
      kpCost: 600,
      icon: '📖',
      stockRemaining: 12,
      totalStock: 30,
      vendor: 'Brunei Educational Publishers',
    },
    {
      id: 'edu-002',
      name: 'Online Course Access',
      description: 'Free access to premium Brunei history course',
      category: 'EDUCATIONAL',
      kpCost: 800,
      icon: '🎓',
      stockRemaining: 5,
      totalStock: 20,
      vendor: 'Brunei Learning Academy',
      expiryDate: '2025-06-30',
    },
    
    // Merchandise
    {
      id: 'merch-001',
      name: 'Barunah! T-Shirt',
      description: 'Official Barunah! game t-shirt with MIB design',
      category: 'MERCHANDISE',
      kpCost: 450,
      icon: '👕',
      stockRemaining: 18,
      totalStock: 35,
      vendor: 'Brunei Apparel Co.',
    },
    {
      id: 'merch-002',
      name: 'Brunei Flag Pin',
      description: 'High-quality enamel pin with Brunei flag design',
      category: 'MERCHANDISE',
      kpCost: 200,
      icon: '📍',
      stockRemaining: 25,
      totalStock: 50,
      vendor: 'Royal Gifts',
    },
  ];

  const filterOptions = [
    { key: 'ALL', label: 'All Rewards', icon: '🎁' },
    { key: 'STATIONERY', label: 'Stationery', icon: '📝' },
    { key: 'VOUCHER', label: 'Vouchers', icon: '🎟️' },
    { key: 'DIGITAL', label: 'Digital', icon: '💻' },
    { key: 'EDUCATIONAL', label: 'Educational', icon: '📚' },
    { key: 'MERCHANDISE', label: 'Merchandise', icon: '👕' },
  ];

  const filteredRewards = activeFilter === 'ALL' 
    ? mockRewards 
    : mockRewards.filter(reward => reward.category === activeFilter);

  const handleRedeemClick = (reward: Reward) => {
    setSelectedReward(reward);
    setIsRedeemModalOpen(true);
    setRedeemStatus('idle');
  };

  const handleConfirmRedeem = async () => {
    if (!selectedReward || !user) return;

    if (user.knowledgePoints < selectedReward.kpCost) {
      setRedeemStatus('error');
      return;
    }

    setRedeemStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Update user's KP
    const newKP = user.knowledgePoints - selectedReward.kpCost;
    updateUser({ knowledgePoints: newKP });
    
    // Generate redemption data for QR code
    const redemptionId = `RED_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const generatedAt = new Date().toISOString();
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(); // 7 days from now
    
    const newRedemptionData: RedemptionData = {
      redemptionId,
      userId: user.id,
      rewardId: selectedReward.id,
      playerName: user.fullName || user.username,
      rewardName: selectedReward.name,
      pointsSpent: selectedReward.kpCost,
      generatedAt,
      expiresAt,
      vendorName: selectedReward.vendor || 'Unknown Vendor',
      status: 'ACTIVE',
    };
    
    setRedemptionData(newRedemptionData);
    setRedeemStatus('success');
    
    // Close redeem modal and open QR modal
    setTimeout(() => {
      setIsRedeemModalOpen(false);
      setIsQRModalOpen(true);
    }, 1500);
  };

  const closeQRModal = () => {
    setIsQRModalOpen(false);
    setRedemptionData(null);
    setSelectedReward(null);
  };

  const getStockColor = (remaining: number, total: number) => {
    const percentage = (remaining / total) * 100;
    if (percentage > 50) return 'text-green-600';
    if (percentage > 20) return 'text-yellow-600';
    return 'text-red-600';
  };

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
          <h1 className="text-4xl font-bold text-barunah-primary mb-2">🎁 Redeem Rewards</h1>
          <p className="text-gray-600">Exchange your Knowledge Points for amazing rewards!</p>
          
          {/* User KP Display */}
          <div className="mt-4 bg-white rounded-lg shadow-lg p-4 inline-block">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">💎</span>
              <div>
                <p className="text-sm text-gray-600">Your Knowledge Points</p>
                <p className="text-2xl font-bold text-barunah-primary">
                  {user?.knowledgePoints?.toLocaleString() || 0} KP
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filterOptions.map((filter) => (
            <motion.button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key as RewardFilter)}
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

        {/* Rewards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRewards.map((reward, index) => (
            <motion.div
              key={reward.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{reward.icon}</div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-barunah-primary">{reward.kpCost} KP</div>
                    <div className={`text-sm ${getStockColor(reward.stockRemaining, reward.totalStock)}`}>
                      {reward.stockRemaining} left
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{reward.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{reward.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Vendor:</span>
                    <span className="font-medium">{reward.vendor}</span>
                  </div>
                  {reward.expiryDate && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Expires:</span>
                      <span className="font-medium">{reward.expiryDate}</span>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleRedeemClick(reward)}
                  disabled={!user || user.knowledgePoints < reward.kpCost || reward.stockRemaining === 0}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    !user || user.knowledgePoints < reward.kpCost || reward.stockRemaining === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-barunah-primary text-white hover:bg-barunah-primary/90'
                  }`}
                >
                  {reward.stockRemaining === 0 ? 'Out of Stock' : 
                   !user || user.knowledgePoints < reward.kpCost ? 'Insufficient KP' : 
                   'Redeem Now'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Redeem Modal */}
        {isRedeemModalOpen && selectedReward && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              className="bg-white rounded-lg p-6 max-w-md w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              {redeemStatus === 'success' ? (
                <div className="text-center">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">Redeemed Successfully!</h3>
                  <p className="text-gray-600 mb-4">
                    Your reward will be processed and delivered according to vendor instructions.
                  </p>
                  <p className="text-sm text-gray-500">
                    Remaining KP: {user?.knowledgePoints?.toLocaleString()} KP
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl">{selectedReward.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{selectedReward.name}</h3>
                      <p className="text-barunah-primary font-semibold">{selectedReward.kpCost} KP</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{selectedReward.description}</p>
                  
                  {redeemStatus === 'error' && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                      Insufficient Knowledge Points. You need {selectedReward.kpCost} KP but only have {user?.knowledgePoints || 0} KP.
                    </div>
                  )}
                  
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setIsRedeemModalOpen(false)}
                      className="flex-1 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                      disabled={redeemStatus === 'loading'}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleConfirmRedeem}
                      disabled={redeemStatus === 'loading'}
                      className="flex-1 py-3 bg-barunah-primary text-white rounded-lg hover:bg-barunah-primary/90 transition-colors disabled:opacity-50"
                    >
                      {redeemStatus === 'loading' ? 'Processing...' : 'Confirm Redeem'}
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        )}

        {/* QR Code Modal */}
        {isQRModalOpen && redemptionData && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">🎫</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Redemption QR Code</h2>
                <p className="text-gray-600 mb-6">Show this QR code to the vendor to claim your reward</p>
                
                {/* QR Code */}
                <div className="bg-white p-4 rounded-lg shadow-inner mb-6 flex justify-center">
                  <QRCode
                    value={JSON.stringify(redemptionData)}
                    size={200}
                    bgColor="#ffffff"
                    fgColor="#000000"
                  />
                </div>
                
                {/* Redemption Details */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                  <h3 className="font-semibold text-gray-800 mb-2">Redemption Details:</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Reward:</span>
                      <span className="font-medium">{redemptionData.rewardName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Vendor:</span>
                      <span className="font-medium">{redemptionData.vendorName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Points Spent:</span>
                      <span className="font-medium">{redemptionData.pointsSpent} KP</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Redemption ID:</span>
                      <span className="font-medium text-xs">{redemptionData.redemptionId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Expires:</span>
                      <span className="font-medium text-red-600">
                        {new Date(redemptionData.expiresAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex space-x-3">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(redemptionData.redemptionId);
                      alert('Redemption ID copied to clipboard!');
                    }}
                    className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Copy ID
                  </button>
                  <button
                    onClick={closeQRModal}
                    className="flex-1 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
                  >
                    Done
                  </button>
                </div>
                
                <p className="text-xs text-gray-500 mt-4">
                  Save this QR code or take a screenshot. You'll need it to claim your reward.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Back Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/lobby')}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            ← Back to Lobby
          </button>
        </div>
      </div>
    </div>
  );
};

export default RewardsPage; 