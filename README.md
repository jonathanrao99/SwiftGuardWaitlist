# SwiftGuard Waitlist

SwiftGuard is the next generation security app that provides advanced scam protection, VPN security, and comprehensive digital safety features.

This is a Next.js project for the SwiftGuard waitlist, featuring marketing pages and comprehensive security features. The application includes a waitlist system that collects email addresses and user feedback through an interactive modal.

SwiftGuard combines cutting-edge AI technology with robust security protocols to keep you safe online.

## ⚡️ Instantly clone & deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FPaddleHQ%2Fpaddle-mobile-web-payments-starter)

## 🔦 About

This starter project provides a comprehensive marketing website for SwiftGuard with modern UI components and responsive design.

## ✨ Features

- Advanced Scam Protection — AI-powered detection and blocking of scam attempts in real-time
- Premium VPN Service — Secure your online activity with our high-speed, encrypted VPN
- Cross-Platform Security — Works seamlessly across iOS, Android, Windows, and Mac
- Real-time Threat Detection — Stay protected with instant alerts and automatic blocking
- Privacy-First Design — Your data stays private with our zero-log policy
- Easy-to-Use Interface — Simple setup and intuitive controls for maximum protection

## 🗄️ Database & Waitlist System

The application includes a comprehensive waitlist system built with Supabase:

- **Email Collection** — Secure storage of user email addresses
- **Interactive Feedback Modal** — Role-based feedback collection (business vs guard)
- **Detailed Feedback Storage** — Stores user challenges, elaborations, and preferences
- **Real-time Updates** — Immediate feedback submission and processing

### Database Schema

The `waitlist` table stores:
- Email addresses (unique)
- Feedback ratings
- Detailed feedback text (JSON format)
- Feedback categories (business/guard/general)
- Timestamps for tracking

## 📦 Included packages

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS

## 🏁 Getting started

### Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the SwiftGuard waitlist page.

### Environment variables

Create a `.env.local` file based on `.env.example` with the following variables:

- `APPLE_TEAM_ID` - Your Apple Team ID (for Universal Links)
- `NEXT_PUBLIC_BUNDLE_IDENTIFIER` - Your iOS app's bundle identifier
- `NEXT_PUBLIC_APP_REDIRECT_URL` - The redirect url back to your app
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key

For more detailed setup instructions, check out the project documentation.
