# 🎮 Barunah! - An Edutainment Experience

> **Team ComplexCreators** | Chung Hwa Middle School BSB | Celik Biz Competition 2025

Barunah! is an interactive web application that gamifies learning about Brunei's Melayu Islam Beraja (MIB) philosophy through a roguelite trivia game, real-time leaderboards, and a real-world reward system.

---

## 🌟 Features

- **Roguelite Trivia Game**: Timed questions, upgrades, and boss fights.
- **Knowledge Points (KP)**: Earn KP for correct answers, redeem for real rewards.
- **Multi-Role System**: Student, Vendor, and Admin dashboards.
- **Vendor Integration**: Real reward management and QR redemption.
- **Admin Dashboard**: Manage questions, users, and analytics.
- **Leaderboard**: Top 100 players.
- **Pet & Avatar System**: Customization and collectibles (in progress).

---

## 🏗️ Tech Stack

- **Frontend**: React 18 + TypeScript, Vite, Tailwind CSS, Framer Motion, Socket.io-client
- **Backend**: Node.js (Express, TypeScript), PostgreSQL, Prisma ORM, Socket.io, JWT
- **Deployment**: Node.js 20+, PostgreSQL, cPanel/Cloud/VPS

---

## 🚀 Getting Started

### Prerequisites

- Node.js v20+
- PostgreSQL database
- npm

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Barunah
```

### 2. Install Dependencies

```bash
cd client
npm install
cd ../server
npm install
```

### 3. Configure Environment Variables

Create `server/.env`:

```env
DATABASE_URL="postgresql://<db_user>:<db_pass>@<db_host>:5432/<db_name>"
JWT_SECRET="your-super-secret-jwt-key"
PORT=3000
```

### 4. Database Setup

```bash
cd server
npx prisma generate
npx prisma db push
npx ts-node src/seed-real.ts
```

### 5. Run the App (Development)

**Backend:**

```bash
cd server
npm run dev
```

**Frontend:**

```bash
cd client
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 🏢 Production Deployment (cPanel Example)

1. **Upload code** to `/home/chmsedu/barunah.chms.edu.bn`
2. **Set up Node.js app** in cPanel (Node 20.19.2, root: `/server`)
3. **Configure `.env`** with your cPanel PostgreSQL credentials
4. **Install dependencies** (`npm install`)
5. **Push schema & seed data** (`npx prisma generate && npx prisma db push && npx ts-node src/seed-real.ts`)
6. **Build frontend** (`cd client && npm run build`)
7. **Serve frontend** (either via Express static or cPanel static site)
8. **Update frontend API URL** in `client/.env.production`:

   ```
   VITE_API_URL=https://barunah.chms.edu.bn/api
   ```

---

## 📝 Scripts

**Server:**
- `npm run dev` — Start backend (dev)
- `npm run build` — Build backend
- `npm run start` — Start backend (prod)
- `npm run db:generate` — Generate Prisma client
- `npm run db:push` — Push schema to DB
- `npm run seed-real` — Seed real data

**Client:**
- `npm run dev` — Start frontend (dev)
- `npm run build` — Build frontend
- `npm run preview` — Preview production build

---

## 🔐 Default Test Accounts

- **Admin:** admin@barunah.com / admin123
- **Student:** student@example.com / student123
- **Vendor:** vendor@example.com / vendor123

---

## 📊 API Endpoints

- `/api/auth/*` — Auth (register, login, verify)
- `/api/game/*` — Game logic, leaderboard
- `/api/rewards/*` — Rewards, redemption
- `/api/vendor/*` — Vendor dashboard, analytics, QR validation
- `/api/admin/*` — Admin dashboard, analytics, user management

---

## 👥 Team

- Gwen, Zhi Ling, Ellie, Zakwan, Joel
- Mentors: Teacher Siew Ying, Gino, Haziq, Hana

---

## 📄 License

Educational use only — Celik Biz Competition 2025

---

**Made with ❤️ by Team ComplexCreators** 