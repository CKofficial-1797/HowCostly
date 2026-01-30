# PriceTrack

PriceTrack is a Next.js web app that tracks product prices and notifies users when prices change, hit a threshold, or items come back in stock. It scrapes product details, stores history, and sends email alerts for subscribed users.

## Features

- Track products by URL and store price history
- Automatic price refresh via a cron-triggered API route
- Email notifications for price drops, thresholds, and restocks
- Responsive UI with reusable components

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- MongoDB + Mongoose
- Nodemailer for email alerts
- Axios + Cheerio for scraping

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- MongoDB connection string
- Bright Data (or similar) proxy credentials for scraping
- Email account credentials for SMTP (Hotmail configured by default)

### Install

```bash
npm install
```

### Environment Variables

Create a .env file in the project root and add the following:

```bash
MONGODB_URI=your_mongodb_connection_string
BRIGHT_DATA_USERNAME=your_bright_data_username
BRIGHT_DATA_PASSWORD=your_bright_data_password
EMAIL_PASSWORD=your_email_app_password
```

Note: The sender email address is currently set in lib/nodemailer/index.ts. Update it to match your SMTP account.

### Run locally

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Cron / Scheduled Updates

Price updates are handled by the GET endpoint at /api/cron. Trigger it via a scheduler (e.g., Vercel Cron or any external cron job) to refresh prices and send notifications.

## Scripts

- npm run dev — start the dev server
- npm run build — build for production
- npm run start — start the production server
- npm run lint — run lint checks

## Project Structure

- app — routes, pages, and API handlers
- components — UI building blocks
- lib — data, scraping, email, and utility logic
- public — static assets
- types — shared TypeScript types
