# 🚀 Barunah Deployment Guide

## Architecture
- **Frontend**: Vercel (barunah.vercel.app)
- **Backend**: Railway (barunah-api.up.railway.app)
- **Database**: Railway PostgreSQL

## Environment Variables

### Backend (Railway)
```
DATABASE_URL=postgresql://username:password@host:port/database
JWT_SECRET=your-super-secret-jwt-key-for-production
JWT_EXPIRES_IN=7d
NODE_ENV=production
PORT=3000
CLIENT_URL=https://barunah.vercel.app
```

### Frontend (Vercel)
```
VITE_API_URL=https://barunah-api.up.railway.app
```

## Deployment Steps

### 1. Deploy Backend to Railway
1. Connect GitHub repo to Railway
2. Select `server` folder as root directory
3. Add environment variables
4. Deploy

### 2. Deploy Frontend to Vercel
1. Connect GitHub repo to Vercel
2. Select `client` folder as root directory
3. Add environment variables
4. Deploy

### 3. Database Setup
1. Add PostgreSQL service in Railway
2. Run database migrations
3. Seed with initial data

## Test Accounts
- **Admin**: admin@barunah.edu.bn / your-secure-admin-password
- **Vendor**: vendor@local-store.bn / vendor-secure-password
- **Student**: student1@chms.edu.bn / student123