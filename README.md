# 🎮 Barunah! - An Edutainment Experience

> **Team ComplexCreators** | Chung Hwa Middle School BSB | Celik Biz Competition 2025

An interactive web application that gamifies learning about Brunei's Melayu Islam Beraja (MIB) philosophy through an engaging roguelite trivia game system.

## 🌟 Project Overview

Barunah! transforms traditional learning into an exciting gaming experience where students earn Knowledge Points (KP) by answering MIB-related questions and can redeem real-world rewards from local vendors.

### 🎯 Key Features

- **Roguelite Trivia Game**: Answer 5 questions → Shop upgrades → 5 more questions → Boss fight
- **Knowledge Points System**: Earn KP for correct answers and redeem real rewards
- **Multi-Difficulty Levels**: Easy (15s), Medium (10s), Hard (5s) timers
- **Avatar & Pet System**: Customizable characters and collectible pets
- **Vendor Integration**: Real-world reward redemption system
- **Leaderboard**: Top 100 players ranking
- **Admin Dashboard**: Content management for questions, rewards, and users

## 🏗️ Technical Architecture

### Frontend Stack
- **React 18** with TypeScript
- **Vite** for fast development
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Socket.io Client** for real-time features

### Backend Stack
- **Node.js** with Express
- **TypeScript** for type safety
- **PostgreSQL** database
- **Prisma ORM** for database management
- **Socket.io** for real-time communication
- **JWT** for authentication

### 🎮 SDG Alignments

- **SDG 4**: Quality Education - Digital gamification for MIB learning
- **SDG 8**: Economic Growth - Student entrepreneurship development
- **SDG 9**: Innovation - Full-stack development with AI-enhanced learning
- **SDG 17**: Partnerships - Student-teacher collaboration model

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd barunahv2
   ```

2. **Set up the client**
   ```bash
   cd client
   npm install
   ```

3. **Set up the server**
   ```bash
   cd ../server
   npm install
   ```

4. **Environment Configuration**
   
   Create a `.env` file in the server directory:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/barunah_db"
   JWT_SECRET="your-super-secret-jwt-key"
   JWT_EXPIRES_IN="7d"
   NODE_ENV="development"
   PORT=3000
   CLIENT_URL="http://localhost:5173"
   ```

5. **Database Setup**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Push schema to database
   npx prisma db push
   
   # Seed database with initial data
   npm run seed
   ```

6. **Start Development Servers**
   
   Terminal 1 (Backend):
   ```bash
   cd server
   npm run dev
   ```
   
   Terminal 2 (Frontend):
   ```bash
   cd client
   npm run dev
   ```

## 🎯 Game Flow

### For Students
1. **Login/Register** → Create account
2. **Game Menu** → Choose New Game, Redeem Rewards, Leaderboard, Profile
3. **New Game** → Select Subject & Difficulty
4. **Question Phase** → Answer 5 questions with timers
5. **Shop Phase** → Buy upgrades (KP boost, timer extension, shields)
6. **Final Phase** → Answer 5 more questions
7. **Boss Fight** → 3 questions with 2-second timer
8. **Rewards** → Earn KP and redeem real prizes

### For Vendors
- **Dashboard** → View redemption requests
- **Inventory** → Manage available rewards
- **Analytics** → Track redemption statistics

### For Admins
- **Content Management** → Add/edit questions and answers
- **User Management** → Monitor student progress
- **System Analytics** → View overall platform statistics

## 📊 Database Schema

### Core Entities
- **Users** (Students, Vendors, Admins)
- **Questions** (MIB trivia with difficulty levels)
- **Games** (Game sessions and scores)
- **Rewards** (Redeemable items from vendors)
- **Pets** (Collectible virtual companions)
- **Leaderboard** (Player rankings)

## 🎮 Game Mechanics

### Knowledge Points (KP) System
- **Easy Questions**: 10 KP
- **Medium Questions**: 15 KP
- **Hard Questions**: 25 KP
- **Boss Defeat Bonus**: 50 KP

### Roguelite Elements
- Timer modifications (±5 seconds)
- KP multipliers (1.5x, 2x)
- Shield protection (wrong answer immunity)
- Experience boosts for leveling

## 🏆 Competition Deliverables

### Report Sections
- [x] Front Cover
- [x] Team Introduction
- [x] Project Introduction
- [x] Smart Experiment Sketch
- [x] Timeline
- [x] Project Activities
- [x] Project Direction
- [x] SDG Alignments
- [x] Impact Idea Map
- [x] QR Code Integration
- [x] Conclusion

### Technical Deliverables
- [x] Working Web Application
- [x] Database with 60+ MIB Questions
- [x] Multi-user Role System
- [x] Real-time Game Mechanics
- [x] Reward Redemption System
- [ ] 2-3 Minute Demo Video

## 👥 Team ComplexCreators

- **Gwen** - Leader & Project Manager
- **Zhi Ling** - Assistant Leader & UI/UX Designer
- **Ellie** - Frontend Developer
- **Zakwan** - Backend Developer
- **Joel** - Game Designer

### Mentors
- **Teacher Siew Ying** (Science)
- **Teacher Gino** (Technology)
- **Teacher Haziq** (Engineering)
- **Teacher Hana** (Mathematics)

## 🔐 Default Accounts

After seeding, use these accounts for testing:

- **Admin**: admin@barunah.com / admin123
- **Student**: student@example.com / student123
- **Vendor**: vendor@example.com / vendor123

## 🚀 Development Status

### ✅ Completed
- [x] Database Schema & Models
- [x] Authentication System
- [x] Game Logic & Mechanics
- [x] Question Management
- [x] Reward System
- [x] User Profiles & Statistics
- [x] Leaderboard System
- [x] Admin Dashboard Backend
- [x] Vendor Management System

### 🔄 In Progress
- [ ] Frontend Components
- [ ] Real-time Game UI
- [ ] Avatar & Pet System
- [ ] Mobile Responsiveness

### 📋 Next Steps
- [ ] Frontend-Backend Integration
- [ ] Socket.io Implementation
- [ ] Testing & Bug Fixes
- [ ] Production Deployment
- [ ] Video Production

## 📱 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/verify` - Token verification

### Game
- `POST /api/game/start` - Start new game
- `GET /api/game/questions` - Get random questions
- `POST /api/game/answer` - Submit answer
- `POST /api/game/complete` - Complete game
- `GET /api/game/leaderboard` - Get leaderboard

### Rewards
- `GET /api/rewards` - Get available rewards
- `POST /api/rewards/redeem` - Redeem reward
- `GET /api/rewards/user/:userId` - Get user redemptions

## 🎨 UI/UX Features

- **Responsive Design** - Works on all devices
- **Game Aesthetics** - Engaging visual design
- **Smooth Animations** - Framer Motion integration
- **Real-time Updates** - Socket.io for live features
- **Accessibility** - WCAG compliant design

## 🔧 Scripts

### Server
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run seed` - Seed database

### Client
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📝 License

This project is developed for educational purposes as part of the Celik Biz Competition 2025.

---

**Made with ❤️ by Team ComplexCreators**
*Chung Hwa Middle School BSB - Year 5 Students* 