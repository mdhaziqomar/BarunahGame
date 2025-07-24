import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { vendorAPI } from '../api/api';
import QrScanner from 'qr-scanner';
import QRCode from 'react-qr-code';

interface Reward {
  id: string;
  name: string;
  description: string;
  category: 'EDUCATIONAL' | 'STATIONERY' | 'VOUCHER' | 'DIGITAL';
  knowledgePointsCost: number;
  stockQuantity: number;
  originalStock: number;
  isActive: boolean;
  imageUrl?: string;
  expiryDate?: string;
}

interface RedemptionRequest {
  id: string;
  studentName: string;
  studentEmail: string;
  rewardName: string;
  knowledgePointsCost: number;
  status: 'PENDING' | 'APPROVED' | 'COMPLETED' | 'REJECTED';
  requestDate: string;
  completedDate?: string;
  notes?: string;
}

interface VendorStats {
  totalRewards: number;
  totalRedemptions: number;
  pendingRequests: number;
  totalRevenue: number;
  topReward: string;
  avgRating: number;
}

interface ScannedRedemption {
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

const VendorDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'rewards' | 'redemptions' | 'scanner' | 'analytics'>('overview');
  const [isScanning, setIsScanning] = useState(false);
  const [scannedData, setScannedData] = useState<ScannedRedemption | null>(null);
  const [scanError, setScanError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [vendorStats, setVendorStats] = useState<VendorStats>({
    totalRewards: 0,
    totalRedemptions: 0,
    pendingRequests: 0,
    totalRevenue: 0,
    topReward: 'No rewards yet',
    avgRating: 4.7,
  });
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [redemptionRequests, setRedemptionRequests] = useState<RedemptionRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const qrScannerRef = useRef<QrScanner | null>(null);

  // Fetch real data from API
  useEffect(() => {
    const fetchData = async () => {
      if (!user?.id) return;
      
      try {
        setLoading(true);
        
        // Fetch vendor stats
        const statsResponse = await vendorAPI.getVendorDashboard(user.id);
        setVendorStats(statsResponse.stats);
        
        // Fetch vendor rewards
        const rewardsResponse = await vendorAPI.getVendorRewards(user.id);
        const mappedRewards = rewardsResponse.rewards.map((reward: any) => ({
          id: reward.id,
          name: reward.title,
          description: reward.description,
          category: reward.category as any,
          knowledgePointsCost: reward.knowledgePointsCost,
          stockQuantity: reward.stockQuantity,
          originalStock: reward.stockQuantity + Math.floor(Math.random() * 20), // Estimate original stock
          isActive: reward.isActive,
          imageUrl: reward.imageUrl,
        }));
        setRewards(mappedRewards);
        
        // Fetch vendor redemptions
        const redemptionsResponse = await vendorAPI.getVendorRedemptions(user.id);
        const mappedRedemptions = redemptionsResponse.redemptions.map((redemption: any) => ({
          id: redemption.id,
          studentName: redemption.user.fullName,
          studentEmail: redemption.user.email,
          rewardName: redemption.reward.title,
          knowledgePointsCost: redemption.reward.knowledgePointsCost,
          status: redemption.status,
          requestDate: redemption.createdAt,
          completedDate: redemption.redeemedAt,
        }));
        setRedemptionRequests(mappedRedemptions);
        
      } catch (error) {
        console.error('Error fetching vendor data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user?.id]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PENDING': return 'bg-yellow-100 text-yellow-800';
      case 'APPROVED': return 'bg-blue-100 text-blue-800';
      case 'COMPLETED': return 'bg-green-100 text-green-800';
      case 'REJECTED': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'EDUCATIONAL': return 'bg-blue-100 text-blue-800';
      case 'STATIONERY': return 'bg-green-100 text-green-800';
      case 'VOUCHER': return 'bg-purple-100 text-purple-800';
      case 'DIGITAL': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'EDUCATIONAL': return '📚';
      case 'STATIONERY': return '✏️';
      case 'VOUCHER': return '🎫';
      case 'DIGITAL': return '💻';
      default: return '📦';
    }
  };

  const getStockStatus = (current: number, original: number) => {
    const percentage = (current / original) * 100;
    if (percentage === 0) return { color: 'text-red-600', label: 'Out of Stock' };
    if (percentage < 20) return { color: 'text-red-600', label: 'Low Stock' };
    if (percentage < 50) return { color: 'text-yellow-600', label: 'Medium Stock' };
    return { color: 'text-green-600', label: 'Good Stock' };
  };

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
        <div className={`text-4xl`}>
          {icon}
        </div>
      </div>
    </motion.div>
  );

  // QR Scanner functions
  const startScanning = async () => {
    if (!videoRef.current) return;
    
    try {
      setIsScanning(true);
      setScanError(null);
      
      qrScannerRef.current = new QrScanner(
        videoRef.current,
        (result) => {
          try {
            const redemptionData: ScannedRedemption = JSON.parse(result.data);
            setScannedData(redemptionData);
            stopScanning();
          } catch (error) {
            setScanError('Invalid QR code format');
          }
        },
        {
          highlightScanRegion: true,
          highlightCodeOutline: true,
        }
      );
      
      await qrScannerRef.current.start();
    } catch (error) {
      setScanError('Camera access denied or not available');
      setIsScanning(false);
    }
  };

  const stopScanning = () => {
    if (qrScannerRef.current) {
      qrScannerRef.current.stop();
      qrScannerRef.current.destroy();
      qrScannerRef.current = null;
    }
    setIsScanning(false);
  };

  const processRedemption = async (action: 'approve' | 'reject') => {
    if (!scannedData) return;
    
    setIsProcessing(true);
    
    try {
      // Use real API to process QR code
      const response = await vendorAPI.validateQRCode(scannedData);
      
      if (response.valid) {
        // Update redemption status
        await vendorAPI.updateRedemptionStatus(response.redemption.id, action === 'approve' ? 'REDEEMED' : 'EXPIRED');
        
        if (action === 'approve') {
          alert(`Redemption approved! ${scannedData.rewardName} has been given to ${scannedData.playerName}`);
        } else {
          alert('Redemption rejected');
        }
      } else {
        alert(response.error || 'Invalid redemption');
      }
    } catch (error) {
      console.error('Error processing redemption:', error);
      alert('Error processing redemption. Please try again.');
    }
    
    setScannedData(null);
    setIsProcessing(false);
  };

  const isRedemptionValid = (redemption: ScannedRedemption): boolean => {
    const now = new Date();
    const expiry = new Date(redemption.expiresAt);
    return redemption.status === 'ACTIVE' && now < expiry;
  };

  const getRedemptionStatusColor = (redemption: ScannedRedemption): string => {
    if (redemption.status === 'USED') return 'text-gray-500';
    if (redemption.status === 'EXPIRED') return 'text-red-500';
    if (new Date() > new Date(redemption.expiresAt)) return 'text-red-500';
    return 'text-green-500';
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopScanning();
    };
  }, []);

  // Check if user is vendor
  if (user?.role !== 'VENDOR') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="text-6xl mb-4">🚫</div>
          <h1 className="text-3xl font-bold text-red-600 mb-2">Access Denied</h1>
          <p className="text-gray-600 mb-6">You don't have permission to access the vendor dashboard.</p>
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
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">⏳</div>
          <h1 className="text-2xl font-bold text-gray-700 mb-2">Loading Dashboard...</h1>
          <p className="text-gray-600">Fetching your vendor data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-green-700 mb-2">🏪 Vendor Dashboard</h1>
          <p className="text-gray-600">Manage your rewards and redemption requests</p>
          <p className="text-sm text-gray-500 mt-1">
            {user?.businessName || 'Barunah Rewards Store'} • {user?.businessType || 'Education Supplies'}
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-lg p-1 shadow-md">
            {[
              { key: 'overview', label: 'Overview', icon: '📊' },
              { key: 'rewards', label: 'Rewards', icon: '🎁' },
              { key: 'redemptions', label: 'Redemptions', icon: '🎫' },
              { key: 'scanner', label: 'QR Scanner', icon: '📱' },
              { key: 'analytics', label: 'Analytics', icon: '📈' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`px-4 py-2 rounded-md font-medium transition-all ${
                  activeTab === tab.key
                    ? 'bg-blue-600 text-white shadow-md'
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
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <StatCard 
                  title="Total Rewards" 
                  value={vendorStats.totalRewards} 
                  icon="🎁" 
                  color="text-blue-600"
                />
                <StatCard 
                  title="Redemptions" 
                  value={vendorStats.totalRedemptions} 
                  icon="🔄" 
                  color="text-green-600"
                  trend="+12 this week"
                />
                <StatCard 
                  title="Pending" 
                  value={vendorStats.pendingRequests} 
                  icon="⏳" 
                  color="text-yellow-600"
                />
                <StatCard 
                  title="Revenue (KP)" 
                  value={vendorStats.totalRevenue.toLocaleString()} 
                  icon="💰" 
                  color="text-purple-600"
                  trend="+8% this month"
                />
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">🏆 Performance Highlights</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Top Reward:</span>
                      <span className="font-semibold text-blue-600">{vendorStats.topReward}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Average Rating:</span>
                      <span className="font-semibold text-yellow-600">⭐ {vendorStats.avgRating}/5.0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Active Rewards:</span>
                      <span className="font-semibold text-green-600">{rewards.filter(r => r.isActive).length}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Completion Rate:</span>
                      <span className="font-semibold text-purple-600">94%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">📋 Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✅</span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">Redemption completed</p>
                        <p className="text-xs text-gray-500">Premium Notebook Set • 2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                      <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm">⏳</span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">New redemption request</p>
                        <p className="text-xs text-gray-500">Scientific Calculator • 5 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">📦</span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">Stock restocked</p>
                        <p className="text-xs text-gray-500">Digital Learning App • 1 day ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pending Requests */}
              <div className="bg-white rounded-lg shadow-md">
                <div className="bg-yellow-500 text-white p-4 rounded-t-lg">
                  <h3 className="text-lg font-semibold">⏳ Pending Redemption Requests</h3>
                </div>
                <div className="p-4">
                  {redemptionRequests.filter(r => r.status === 'PENDING').length === 0 ? (
                    <p className="text-gray-500 text-center py-4">No pending requests</p>
                  ) : (
                    <div className="space-y-3">
                      {redemptionRequests.filter(r => r.status === 'PENDING').map((request) => (
                        <div key={request.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-semibold text-gray-800">{request.rewardName}</h4>
                            <p className="text-sm text-gray-600">{request.studentName} • {request.knowledgePointsCost} KP</p>
                            <p className="text-xs text-gray-500">{formatDate(request.requestDate)}</p>
                          </div>
                          <div className="flex space-x-2">
                            <button className="bg-green-500 text-white px-3 py-1 rounded-md text-sm hover:bg-green-600 transition-colors">
                              ✅ Approve
                            </button>
                            <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition-colors">
                              ❌ Reject
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'rewards' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Reward Management</h2>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                  ➕ Add Reward
                </button>
              </div>

              {/* Rewards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rewards.map((reward) => {
                  const stockStatus = getStockStatus(reward.stockQuantity, reward.originalStock);
                  return (
                    <motion.div
                      key={reward.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(reward.category)}`}>
                            {getCategoryIcon(reward.category)} {reward.category}
                          </span>
                          <span className={`text-sm font-medium ${stockStatus.color}`}>
                            {stockStatus.label}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{reward.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{reward.description}</p>
                        
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-lg font-bold text-purple-600">{reward.knowledgePointsCost} KP</span>
                          <span className="text-sm text-gray-600">
                            Stock: {reward.stockQuantity}/{reward.originalStock}
                          </span>
                        </div>
                        
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                          <div 
                            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(reward.stockQuantity / reward.originalStock) * 100}%` }}
                          />
                        </div>
                        
                        <div className="flex space-x-2">
                          <button className="flex-1 bg-blue-500 text-white py-2 px-3 rounded-md text-sm hover:bg-blue-600 transition-colors">
                            📝 Edit
                          </button>
                          <button className={`flex-1 py-2 px-3 rounded-md text-sm transition-colors ${
                            reward.isActive 
                              ? 'bg-red-500 text-white hover:bg-red-600' 
                              : 'bg-green-500 text-white hover:bg-green-600'
                          }`}>
                            {reward.isActive ? '⏸️ Disable' : '▶️ Enable'}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'redemptions' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Redemption Requests</h2>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>All Statuses</option>
                  <option>Pending</option>
                  <option>Approved</option>
                  <option>Completed</option>
                  <option>Rejected</option>
                </select>
              </div>

              {/* Redemptions List */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-green-600 text-white p-4">
                  <h3 className="text-lg font-semibold">All Redemption Requests</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {redemptionRequests.map((request) => (
                    <div key={request.id} className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-semibold text-gray-800">{request.rewardName}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                              {request.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">{request.studentName} • {request.studentEmail}</p>
                          <p className="text-sm text-gray-500">
                            Requested: {formatDate(request.requestDate)}
                            {request.completedDate && ` • Completed: ${formatDate(request.completedDate)}`}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-purple-600">{request.knowledgePointsCost} KP</div>
                          {request.status === 'PENDING' && (
                            <div className="flex space-x-2 mt-2">
                              <button className="bg-green-500 text-white px-3 py-1 rounded-md text-sm hover:bg-green-600 transition-colors">
                                ✅ Approve
                              </button>
                              <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition-colors">
                                ❌ Reject
                              </button>
                            </div>
                          )}
                          {request.status === 'APPROVED' && (
                            <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 transition-colors mt-2">
                              ✅ Mark Complete
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'scanner' && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">QR Code Scanner</h2>
                <p className="text-gray-600">Scan student QR codes to process reward redemptions</p>
              </div>

              {/* Scanner Interface */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="max-w-md mx-auto">
                  {!isScanning && !scannedData && (
                    <div className="text-center">
                      <div className="text-6xl mb-4">📱</div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Ready to Scan</h3>
                      <p className="text-gray-600 mb-4">Click the button below to start scanning QR codes</p>
                      <button
                        onClick={startScanning}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        📷 Start Scanner
                      </button>
                    </div>
                  )}

                  {isScanning && (
                    <div className="text-center">
                      <div className="relative">
                        <video
                          ref={videoRef}
                          className="w-full h-64 object-cover rounded-lg bg-gray-200"
                          playsInline
                        />
                        <div className="absolute inset-0 border-2 border-blue-500 rounded-lg flex items-center justify-center">
                          <div className="w-32 h-32 border-2 border-white rounded-lg"></div>
                        </div>
                      </div>
                      <p className="text-gray-600 mt-2">Point camera at QR code</p>
                      <button
                        onClick={stopScanning}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors mt-4"
                      >
                        Stop Scanner
                      </button>
                    </div>
                  )}

                  {scanError && (
                    <div className="text-center">
                      <div className="text-4xl mb-4">❌</div>
                      <h3 className="text-lg font-semibold text-red-600 mb-2">Scan Error</h3>
                      <p className="text-gray-600 mb-4">{scanError}</p>
                      <button
                        onClick={() => {
                          setScanError(null);
                          startScanning();
                        }}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Try Again
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Scanned Data Processing */}
              {scannedData && (
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Scanned Redemption</h3>
                    <div className={`text-sm font-medium ${getRedemptionStatusColor(scannedData)}`}>
                      {isRedemptionValid(scannedData) ? '✅ Valid' : '❌ Invalid/Expired'}
                    </div>
                  </div>

                  {/* QR Code Display */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <QRCode
                        value={JSON.stringify(scannedData)}
                        size={150}
                        bgColor="#ffffff"
                        fgColor="#000000"
                      />
                    </div>
                  </div>

                  {/* Redemption Details */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Redemption Details:</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Student:</span>
                        <p className="font-medium">{scannedData.playerName}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Reward:</span>
                        <p className="font-medium">{scannedData.rewardName}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Points Spent:</span>
                        <p className="font-medium">{scannedData.pointsSpent} KP</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Generated:</span>
                        <p className="font-medium">{new Date(scannedData.generatedAt).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Expires:</span>
                        <p className="font-medium text-red-600">
                          {new Date(scannedData.expiresAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <span className="text-gray-600">Redemption ID:</span>
                        <p className="font-medium text-xs">{scannedData.redemptionId}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <button
                      onClick={() => processRedemption('approve')}
                      disabled={!isRedemptionValid(scannedData) || isProcessing}
                      className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
                        isRedemptionValid(scannedData) && !isProcessing
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {isProcessing ? 'Processing...' : '✅ Approve & Give Reward'}
                    </button>
                    <button
                      onClick={() => processRedemption('reject')}
                      disabled={isProcessing}
                      className="flex-1 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:bg-gray-300 disabled:text-gray-500"
                    >
                      ❌ Reject
                    </button>
                  </div>

                  <button
                    onClick={() => setScannedData(null)}
                    className="w-full bg-gray-500 text-white py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors mt-4"
                  >
                    Scan Another Code
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Analytics & Reports</h2>

              {/* Revenue & Performance */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <StatCard title="Monthly Revenue" value="1,250 KP" icon="💰" color="text-green-600" />
                <StatCard title="Conversion Rate" value="23%" icon="📈" color="text-blue-600" />
                <StatCard title="Avg Order Value" value="325 KP" icon="🛒" color="text-purple-600" />
                <StatCard title="Customer Rating" value="4.7/5" icon="⭐" color="text-yellow-600" />
              </div>

              {/* Charts Placeholder */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">📊 Redemptions by Category</h3>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Pie chart would go here</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">📈 Revenue Trend</h3>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Line chart would go here</p>
                  </div>
                </div>
              </div>

              {/* Popular Rewards */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">🏆 Top Performing Rewards</h3>
                <div className="space-y-3">
                  {rewards.slice(0, 5).map((reward, index) => (
                    <div key={reward.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </span>
                        <div>
                          <h4 className="font-semibold text-gray-800">{reward.name}</h4>
                          <p className="text-sm text-gray-600">{reward.category}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-800">
                          {Math.floor(Math.random() * 50) + 10} redemptions
                        </div>
                        <div className="text-sm text-gray-600">{reward.knowledgePointsCost} KP</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Back to Game Button */}
        <div className="flex justify-center mt-8">
          <motion.button
            onClick={() => navigate('/lobby')}
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
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

export default VendorDashboard; 