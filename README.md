# 🏔️ The Wild Oasis — Next.js Hotel & Cabin Management Platform

> **Language / Язык:** [English](#english) | [Русский](#русский)

---

<a name="english"></a>

### About

A modern, full-stack web application designed for boutique hotel management and luxury cabin reservations.

## 🚀 Live Demo

- **Live Demo:** [https://the-wild-oasis-website-nine-omega.vercel.app ↗️](https://the-wild-oasis-website-nine-omega.vercel.app)

## 📸 Features

- **Guest Reservation Flow:** Browse luxury cabins, check real-time availability, select booking dates, and manage account reservations.
- **Dynamic Route Optimization & Data Caching:** The project leverages Next.js 14 App Router, Request Memoization, Data Cache, and Incremental Static Regeneration (ISR).
- **Authentication & Security:** Secure OAuth and credentials authentication powered by **Auth.js** with session-based route protection.
- **Server Actions & Mutations:** Fast, progressive server-side form mutations for profile updates, booking CRUD operations with instant cache revalidation.
- **Database & Storage:** Real-time data persistence, relational queries, and image storage powered by **Supabase (PostgreSQL)**.

---

## 🛠️ Tech Stack & Architecture

- **Framework** Next.js 14 (App Router, RSC, Server Actions)
- **Language** JavaScript (ES6+) / React 18
- **Styling** Tailwind CSS
- **Database & Auth** Supabase (PostgreSQL) + Auth.js (NextAuth v5)
- **State & Flow** React Context API, Server-Side Streaming

---

## 📦 Getting Started

### 1. Prerequisites

- **Node.js:** `v18.17.0` or higher
- **npm** or **yarn** / **pnpm**
- **Supabase Account:** Active project with database schema and storage bucket setup.

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# NextAuth / Auth.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret

# Google OAuth Credentials
AUTH_GOOGLE_ID=your-google-client-id
AUTH_GOOGLE_SECRET=your-google-client-secret
```

### 3. Installation & Local Development

```bash
# Clone the repository
git clone https://github.com/your-username/the-wild-oasis-nextjs.git

# Navigate into project directory
cd the-wild-oasis-nextjs

# Install dependencies
npm install

# Start the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

---

## 📂 Folder Structure

```text
.
├── app/                      # Next.js App Router
│   ├── _components/          # React Server & Client Components
│   ├── _lib/                 # Helper utilities, Supabase client, & data queries
│   ├── _styles/              # Global CSS & Tailwind imports
│   ├── account/              # Authenticated user account routes
│   ├── cabins/               # Cabin catalog & dynamic cabin routes ([cabinId])
│   ├── login/                # Authentication routes
│   ├── api/                  # Route handlers & auth endpoints
│   ├── layout.js             # Root Layout (Navigation & Providers)
│   └── page.js               # Landing Page
├── public/                   # Static images and branding assets
└── next.config.mjs           # Next.js configuration
```

---

## 📄 License

This project is licensed under the MIT License — feel free to modify and use it for learning or personal projects!
