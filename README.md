# CV Maker

[![React](https://img.shields.io/badge/React-19.2-61dafb)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646cff)](https://vitejs.dev/)

## 📋 Description

**CV Maker** is a modern, free web application that allows users to create professional CVs (resumes) in minutes. Built with React and Vite, it provides an intuitive form-based interface with real-time preview, eliminating the need for complex document editors or paid templates.

**The problem it solves:** Creating a well-formatted CV can be time-consuming and frustrating. CV Maker simplifies this process by offering a clean, distraction-free environment where users fill in their information and instantly see a professional-looking result—ready to download as PDF.

## ✨ Key Features

- **Real-time preview** — See your CV update live as you type
- **PDF export** — Download your CV as PDF via the browser's print dialog (A4 format)
- **Modern UI** — Built with Tailwind CSS 4, featuring a polished slate color scheme

## 🚀 Quick Start

### Prerequisites

- **Node.js** — v18 or higher (recommended: v20+)
- **pnpm** — Package manager (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/SHOOTSTV/cv-maker.git
cd cv-maker

# Install dependencies
pnpm install
```

### Usage

```bash
# Start the development server
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📖 Documentation

### Project Structure

```
cv-maker/
├── public/              # Static assets
│   └── cvmaker.svg      # App icon
├── src/
│   ├── components/      # React components
│   │   ├── App.jsx
│   │   ├── Header.jsx
│   │   ├── Main.jsx
│   │   ├── CvPreview.jsx
│   │   ├── PersonalInfoForm.jsx
│   │   ├── EducationalExperienceSection.jsx
│   │   └── WorkExperienceSection.jsx
│   ├── constants/       # Shared constants
│   │   ├── constants.js
│   │   └── formStyles.js
│   ├── styles/
│   │   └── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

### Available Scripts

| Command     | Description              |
| ----------- | ------------------------ |
| `pnpm dev`  | Start development server |
| `pnpm lint` | Run ESLint               |

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         App.jsx                              │
│  ┌─────────────────┐  ┌──────────────────────────────────┐ │
│  │    Header       │  │            Main.jsx                │ │
│  └─────────────────┘  │  ┌──────────────────────────────┐ │ │
│                       │  │  Form Section (left column)   │ │ │
│                       │  │  • PersonalInfoForm           │ │ │
│                       │  │  • EducationalExperienceSection│ │ │
│                       │  │  • WorkExperienceSection       │ │ │
│                       │  └──────────────────────────────┘ │ │
│                       │  ┌──────────────────────────────┐ │ │
│                       │  │  CvPreview (right column)     │ │ │
│                       │  │  • Real-time CV display       │ │ │
│                       │  │  • PDF download button        │ │ │
│                       │  └──────────────────────────────┘ │ │
│                       └──────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

**Tech stack:** React 19 · Vite 7 · Tailwind CSS 4 · ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [React](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — Build tool and dev server
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
