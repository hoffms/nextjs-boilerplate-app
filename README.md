# Sherry - Mini dApp Platform

A modern platform for publishing and discovering mini decentralized applications (dApps) built with Next.js 15, React 19, and Tailwind CSS.

## 🚀 Features

- **Template Marketplace**: Browse and use verified templates for common dApp types
- **Community Apps**: Discover amazing apps built by the community
- **Custom Avatars**: Beautiful, deterministic avatar generation system
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **TypeScript**: Fully typed for better developer experience

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI**: React 19, Tailwind CSS 4, shadcn/ui
- **Styling**: CSS-in-JS with Tailwind
- **Icons**: Lucide React
- **Development**: TypeScript, Turbopack

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nextjs-boilerplate-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── components/         # Page-specific components
│   ├── dashboard/          # Dashboard page
│   ├── templates/          # Template marketplace
│   └── ...
├── components/             # Reusable UI components
│   ├── ui/                # shadcn/ui components
│   ├── custom/            # Custom components (avatars, badges)
│   └── ...
├── lib/                   # Utility functions and hooks
└── public/                # Static assets
```

## 🎨 Custom Components

### Custom Avatar System
Generate beautiful, deterministic avatars from any text input. See `CUSTOM_AVATAR_GUIDE.md` for detailed usage.

### Verification Badges
Display verification status for templates and users with the `VerificationBadge` component.

## 🚀 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📚 Documentation

- [Custom Avatar Guide](./docs/CUSTOM_AVATAR_GUIDE.md) - How to use the avatar system
- [Sidebar Review](./docs/SIDEBAR_REVIEW.md) - shadcn/ui implementation notes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
