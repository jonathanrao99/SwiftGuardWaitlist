# SwiftGuard Waitlist

SwiftGuard is the next generation security app that provides advanced scam protection, VPN security, and comprehensive digital safety features.

This is a Next.js project for the SwiftGuard waitlist, featuring marketing pages, pricing information, and a secure checkout system powered by Paddle for handling payments and subscriptions.

SwiftGuard combines cutting-edge AI technology with robust security protocols to keep you safe online.

## ⚡️ Instantly clone & deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FPaddleHQ%2Fpaddle-mobile-web-payments-starter&env=APPLE_TEAM_ID,NEXT_PUBLIC_BUNDLE_IDENTIFIER,NEXT_PUBLIC_APP_REDIRECT_URL,NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,NEXT_PUBLIC_PADDLE_ENV)

## 🔦 About

This starter project provides a fully functional implementation of a Paddle checkout within a Next.js application that can be easily embedded into iOS apps.

## ✨ Features

- Advanced Scam Protection — AI-powered detection and blocking of scam attempts in real-time
- Premium VPN Service — Secure your online activity with our high-speed, encrypted VPN
- Cross-Platform Security — Works seamlessly across iOS, Android, Windows, and Mac
- Real-time Threat Detection — Stay protected with instant alerts and automatic blocking
- Privacy-First Design — Your data stays private with our zero-log policy
- Easy-to-Use Interface — Simple setup and intuitive controls for maximum protection

## 📦 Included packages

- Next.js 15
- `@paddle/paddle-js` for secure payment processing
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
- `NEXT_PUBLIC_PADDLE_CLIENT_TOKEN` - Your Paddle client token
- `NEXT_PUBLIC_PADDLE_ENV` - Paddle environment (`sandbox` or `production`)

For more detailed setup instructions, check out [Paddle's documentation to deploy your starter app and launch a checkout from iOS](https://developer.paddle.com/build/nextjs-vercel-mobile-app-starter-kit).
