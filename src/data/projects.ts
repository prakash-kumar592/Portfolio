import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "algobattle",
    title: "AlgoBattle",
    summary:
      "Real-time 1v1 competitive programming battles with ELO ranking.",
    highlights: [
      "Socket.IO live matches and a Redis (Upstash) matchmaking queue",
      "Sandboxed code execution via Piston on AWS EC2",
      "ELO ratings, leaderboard, and JWT refresh-token rotation",
    ],
    stack: [
      "TypeScript",
      "Socket.IO",
      "PostgreSQL",
      "Redis",
      "Express.js",
      "Docker",
      "Piston API",
      "AWS EC2",
      "Turborepo",
      "pnpm",
    ],
    repo: "https://github.com/prakash-kumar592/AlgoBattle",
    live: "https://algo-battle-arena-frontend.vercel.app/",
  },
  {
    slug: "lender-banking-system",
    title: "Lender Banking System",
    summary:
      "A banking REST API built around a double-entry ledger and idempotent transfers.",
    highlights: [
      "Balances derived from immutable CREDIT/DEBIT ledger entries",
      "JWT authentication with HTTP-only cookies and a token blacklist",
      "Idempotency keys, MongoDB transactions, and email notifications",
    ],
    stack: [
      "Node.js",
      "Express 5",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Nodemailer",
    ],
    repo: "https://github.com/prakash-kumar592/Lender-Banking-System",
  },
  {
    slug: "crowd-funding-website",
    title: "Buy Me a Coffee",
    summary:
      "A crowdfunding platform where creators receive contributions from supporters.",
    highlights: [
      "GitHub sign-in with Auth.js (NextAuth)",
      "Razorpay payment integration",
      "Creator profiles, donation tiers, and a dashboard",
    ],
    stack: [
      "Next.js (React-based)",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay API",
    ],
    repo: "https://github.com/prakash-kumar592/Crowd_Funding_Website",
  },
];
