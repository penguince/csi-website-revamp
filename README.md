# CSI Computer Science Department Website Recreation

A modern, accessible redesign of the College of Staten Island Computer Science Department website built with React, TypeScript, and Tailwind CSS.

## 🎯 Project Overview

This project is a complete recreation of [https://www.cs.csi.cuny.edu/](https://www.cs.csi.cuny.edu/) with modern web technologies, focusing on clean design, accessibility, and responsive user experience.

### Key Features

- ✨ Modern, clean interface design
- ♿ WCAG AA accessibility compliance
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Built with React 19 and TypeScript
- 🎨 Styled with Tailwind CSS
- 🧭 Client-side routing with React Router
- 🚀 Optimized performance with Vite

## 🛠️ Tech Stack

- **Framework**: React 19.1.1
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite (Rolldown-Vite 7.1.14)
- **Styling**: Tailwind CSS 3.x
- **Routing**: React Router DOM 7.x
- **Icons**: Lucide React
- **Package Manager**: npm

## 📋 Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd csi-website-revamp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5174/` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

The optimized production build will be created in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
csi-website-revamp/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Header.tsx   # Main navigation header
│   │   ├── Footer.tsx   # Site footer
│   │   └── Layout.tsx   # Page layout wrapper
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── Undergraduate.tsx
│   │   ├── Graduate.tsx
│   │   ├── Courses.tsx
│   │   ├── Research.tsx
│   │   ├── Faculty.tsx
│   │   └── Resources.tsx
│   ├── data/           # Static data and content
│   ├── App.tsx         # Main app component with routing
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles and Tailwind imports
├── index.html          # HTML template
├── tailwind.config.js  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## 🎨 Design System

### Colors

- **CSI Blue**: `#2d88de` - Primary brand color
- **CSI Dark**: `#53626e` - Header background
- **CSI Gray**: `#f1f1f1` - Section backgrounds

### Typography

- Font Family: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, etc.)
- Headings: DarkSlateGray (`#2f4f4f`)

## ♿ Accessibility Features

- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`)
- ARIA labels and landmarks
- Keyboard navigation support
- Focus visible indicators
- Screen reader friendly
- Alt text for all images
- Color contrast compliance (WCAG AA)

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔍 SEO

- Proper meta tags
- Semantic HTML structure
- Descriptive page titles
- Clean URL structure

## 📄 Pages

1. **Home** - Welcome page with department overview and news
2. **Undergraduate** - Undergraduate program information (AAS, BS degrees)
3. **Graduate** - Graduate program details
4. **Courses** - Course catalog and descriptions
5. **Research** - Research areas and projects
6. **Faculty** - Faculty directory and profiles
7. **Resources** - Student resources and support

## 🧪 Testing

```bash
npm run lint
```

## 📝 License

This project is created as part of an academic assignment for the CSI Computer Science Department.

## 👥 Contributors

[Your Name] - Developer & Designer

## 📞 Contact

For questions or feedback:
- Email: [your-email]
- GitHub: [your-github]

## 🙏 Acknowledgments

- College of Staten Island Computer Science Department
- Original website: [https://www.cs.csi.cuny.edu/](https://www.cs.csi.cuny.edu/)

---

**Note**: This is a recreation project and does not replace the official CSI Computer Science website.

