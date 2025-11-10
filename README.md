# 🚀 AI Portfolio - Interactive Chat & Showcase Platform

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/asmamestaysser0306-gmailcoms-projects/v0-portfolio-chat-ui)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Built with TypeScript](https://img.shields.io/badge/Built%20with-TypeScript-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

> An interactive AI-powered portfolio platform that showcases projects, skills, and achievements through an engaging chat interface and modern UI.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Development](#development)
- [Building & Deployment](#building--deployment)
- [Configuration](#configuration)
- [Showcase](#showcase)
- [Contact & Links](#contact--links)

## 🎯 Overview

**AI Portfolio** is a modern, interactive web application designed to present a professional portfolio through an innovative chat-based interface combined with traditional portfolio sections. Built with cutting-edge technologies, it provides a seamless user experience with real-time interactions, dynamic content loading, and beautiful visual design.

The platform integrates:

- 💬 **AI Chat Interface** - Intelligent conversation to explore portfolio content
- 🎨 **Modern UI Components** - Built with Radix UI and Tailwind CSS
- 📱 **Responsive Design** - Optimized for all devices
- ✨ **Interactive Elements** - Fluid cursors, smooth animations, and engaging interactions
- 🚀 **Performance Optimized** - Fast loading and seamless navigation

## ✨ Features

### Core Features

- **Interactive Chat System** - Engage with AI-powered responses about projects, skills, and experience
- **Project Showcase** - Display detailed project information with multiple images and technical details
- **Skills Categories** - Organized skill presentation across different technologies
- **Awards & Recognition** - Highlight achievements and recognitions
- **Resume Download** - Easy access to downloadable resume

### UI/UX Features

- **Fluid Cursor** - Smooth, interactive cursor animation
- **Dark/Light Theme Support** - Seamless theme switching with persistent preferences
- **Responsive Layout** - Mobile-first design approach
- **Smooth Animations** - Tailwind CSS animations and custom transitions
- **Modal Dialogs** - Beautiful project detail modals
- **Scrollable Cards** - Elegant card carousel for projects and achievements

### Advanced Features

- **Multiple Project Images** - Support for multiple screenshots per project
- **Dynamic Content** - Real-time data updates from portfolio database
- **Quick Actions** - Fast access to key portfolio sections
- **Welcome Modal** - Personalized introduction experience
- **Contact Section** - Easy communication channels

## 🛠️ Tech Stack

### Frontend Framework

- **[Next.js 15](https://nextjs.org)** - React framework with App Router
- **[React 19](https://react.dev)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org)** - Type safety

### Styling & UI

- **[Tailwind CSS 4](https://tailwindcss.com)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com)** - Unstyled, accessible component library
- **[Lucide React](https://lucide.dev)** - Beautiful icon library
- **[Recharts](https://recharts.org)** - Composable charting library

### State Management & Forms

- **[React Hook Form](https://react-hook-form.com)** - Performant form handling
- **[Zod](https://zod.dev)** - TypeScript-first schema validation

### Additional Libraries

- **[Embla Carousel](https://www.embla-carousel.com)** - Carousel library
- **[Date-fns](https://date-fns.org)** - Date utilities
- **[Sonner](https://sonner.emilkowal.ski)** - Toast notifications
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Theme management
- **[Vercel Analytics](https://vercel.com/analytics)** - Performance monitoring

### Development Tools

- **PostCSS** - CSS transformation
- **Autoprefixer** - CSS vendor prefixing
- **ESLint** - Code quality

## 📁 Project Structure

```
ai-portfolio/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # Chat API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── ui/                       # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── input.tsx
│   ├── chat-input.tsx            # Chat input component
│   ├── chat-message.tsx          # Message display
│   ├── contact-section.tsx       # Contact information
│   ├── fluid-cursor.tsx          # Interactive cursor
│   ├── fun-section.tsx           # Fun/personality section
│   ├── portfolio-avatar.tsx      # Avatar display
│   ├── portfolio-card.tsx        # Project card component
│   ├── portfolio-chat.tsx        # Main chat interface
│   ├── profile-section.tsx       # Profile information
│   ├── project-detail-modal.tsx  # Detailed project view
│   ├── quick-actions.tsx         # Quick action buttons
│   ├── resume-download.tsx       # Resume download button
│   ├── scrollable-cards.tsx      # Card carousel
│   ├── skills-categories.tsx     # Skills display
│   ├── theme-provider.tsx        # Theme configuration
│   └── welcome-modal.tsx         # Welcome screen
├── public/
│   ├── awards/                   # Award images and documents
│   ├── images/                   # General images
│   ├── moments/                  # Personal moments
│   └── projects/                 # Project assets organized by project
│       ├── 3dgenerator/
│       ├── Aura/
│       ├── airlinebot/
│       └── [other projects]/
├── styles/
│   └── globals.css               # Additional global styles
├── lib/
│   └── utils.ts                  # Utility functions
├── components.json               # Shadcn/ui configuration
├── next.config.mjs               # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── postcss.config.mjs            # PostCSS configuration
├── package.json                  # Project dependencies
└── README.md                     # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/asmamest/ai-portfolio.git
   cd ai-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Set up environment variables** (if needed)
   ```bash
   cp .env.example .env.local
   ```

## 💻 Development

### Start Development Server

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Run Linter

```bash
npm run lint
```

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

## 🔨 Building & Deployment

### Build the Project

```bash
npm run build
```

### Deploy on Vercel (Recommended)

The project is already configured for Vercel deployment:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Your application will be deployed on every push to main


### Manual Deployment

You can also deploy to other platforms:

- **Netlify** - Configure build command: `npm run build`
- **AWS** - Use AWS Amplify or Elastic Beanstalk
- **Docker** - Create a Dockerfile for containerization

## ⚙️ Configuration

### Tailwind CSS

The project uses Tailwind CSS 4 with custom configuration in `tailwind.config.ts`. Modify this file to customize colors, fonts, and other design tokens.

### Theme Support

Theme configuration is managed in `components/theme-provider.tsx`. Currently supports light and dark modes with system preference detection.

### Portfolio Data

Portfolio content is defined in `app/api/chat/route.ts` and includes:

- Projects with descriptions, technologies, and links
- Skills organized by category
- Awards and recognitions
- Personal information

## 📸 Showcase

### Projects Featured

1. **AURA** - AI-powered RFP analysis and response generation platform
2. **3D Generator** - Three-dimensional content generation system
3. **Airline Bot** - Customer support chatbot for airline travel
4. **Breast Cancer Predictor** - ML-based disease prediction
5. **Football Analysis** - Sports analytics and performance tracking
6. **Fault Diagnosis** - Industrial process failure prediction

### Awards & Recognition

- 🥈 **Talan Tunisia Silver Prize** (2025) - AURA Project
- ⭐ **IPEIB Success Story** (2024) - Academic Excellence

## 📧 Contact & Links

- **GitHub** - [@asmamest](https://github.com/asmamest)
- **Email** - Contact through portfolio website
- **Portfolio** - View live at deployment URL

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Changelog

### Version 0.1.0

- Initial release
- Chat interface implementation
- Project showcase
- Skills display
- Awards section
- Theme support
- Responsive design

## 🙏 Acknowledgments

- Built with [v0.app](https://v0.app) - AI-powered design assistant
- Hosted on [Vercel](https://vercel.com) - Modern deployment platform
- Icons by [Lucide React](https://lucide.dev)
- UI Components from [Radix UI](https://www.radix-ui.com)
- Styling with [Tailwind CSS](https://tailwindcss.com)

---

<div align="center">

**[⬆ Back to top](#-ai-portfolio---interactive-chat--showcase-platform)**

Made with ❤️ by [Asma Mestaysser](https://github.com/asmamest)

</div>
