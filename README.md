# Barunah! Educational Game Platform

Barunah! is a gamified educational platform focused on Brunei's MIB philosophy, featuring quizzes, rewards, and dashboards for students, vendors, and admins.

---

## 🚀 Split Hosting Deployment

- **Frontend:** [Vercel](https://barunah.vercel.app)
- **Backend:** [Railway](https://barunah-api.up.railway.app)
- **Database:** Railway PostgreSQL
- **GitHub:** [mdhaziqomar/BarunahGame](https://github.com/mdhaziqomar/BarunahGame)

---

## 🛠️ Tech Stack
- **Frontend:** React, TypeScript, Tailwind CSS, Vite
- **Backend:** Node.js, Express, TypeScript, Prisma ORM
- **Database:** PostgreSQL (Railway)

---

## 🏗️ Project Structure

```
BarunahGame/
  client/      # Frontend (React, Vite)
  server/      # Backend (Express, Prisma)
```

---

## 🧑‍💻 Local Development

### 1. Clone the Repo
```sh
git clone https://github.com/mdhaziqomar/BarunahGame.git
cd BarunahGame
```

### 2. Setup the Database (Railway PostgreSQL)
- Create a Railway project and add a PostgreSQL plugin.
- Copy the `DATABASE_URL` from Railway.

### 3. Backend Setup
```sh
cd server
cp .env.example .env # or create .env manually
# .env example:
# DATABASE_URL=postgresql://user:password@host:port/dbname
# JWT_SECRET=your-secret
# PORT=3000
npm install
npx prisma db push
npx ts-node src/seed-real.ts # (optional) Seed with real data
npm run dev
```

### 4. Frontend Setup
```sh
cd ../client
cp .env.example .env # or create .env manually
# .env example:
# VITE_API_URL=https://barunah-api.up.railway.app/api
npm install
npm run dev
```

---

## 🌐 Deployment

### Backend (Railway)
1. Connect your GitHub repo to Railway.
2. Set the service root to `/server`.
3. Add environment variables:
   - `DATABASE_URL` (from Railway PostgreSQL)
   - `JWT_SECRET` (your secret)
   - `PORT` (default: 3000)
4. Deploy! Railway will build and run your backend.
5. Run migrations and seed data in the Railway web terminal:
   ```sh
   npx prisma db push
   npx ts-node src/seed-real.ts
   ```

### Frontend (Vercel)
1. Connect your GitHub repo to Vercel.
2. Set the project root to `/client`.
3. Add environment variable:
   - `VITE_API_URL=https://barunah-api.up.railway.app/api`
4. Deploy! Vercel will build and host your frontend.

---

## 🔑 Environment Variables

### Backend (`server/.env`)
```
DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<db>
JWT_SECRET=your-secret
PORT=3000
```

### Frontend (`client/.env`)
```
VITE_API_URL=https://barunah-api.up.railway.app/api
```

---

## 🔄 CORS Configuration (Backend)
Make sure your backend allows requests from your frontend:
```js
app.use(cors({
  origin: [
    "https://barunah.vercel.app",
    "http://localhost:5173"
  ],
  credentials: true
}));
```

---

## 📦 Useful Scripts

### Backend
- `npm run dev` — Start backend in dev mode
- `npx prisma db push` — Push schema to DB
- `npx ts-node src/seed-real.ts` — Seed real data

### Frontend
- `npm run dev` — Start frontend in dev mode

---

## 📡 Live URLs
- **Frontend:** [https://barunah.vercel.app](https://barunah.vercel.app)
- **Backend API:** [https://barunah-api.up.railway.app/api](https://barunah-api.up.railway.app/api)

---

## 🤝 Contributing
Pull requests are welcome! Please open an issue first to discuss major changes.

---

## 📄 License
MIT 