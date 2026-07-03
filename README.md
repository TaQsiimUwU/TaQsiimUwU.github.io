# Portfolio Website (v3.0)

A highly polished, interactive developer portfolio website styled with a **Dark Glassmorphism Theme** and built on a Bento Grid layout.

## Features

- **Dark Glassmorphism Theme**: Refined hierarchy, layered translucent panels, controlled backdrop blur, and subtle accent glow outlines.
- **Bento Grid Layout**: Custom 3x3 layout prioritizing information hierarchy, fully responsive for mobile screens.
- **Interactive background**: Immersive 3D directional light beams rendering dynamic particle motion, powered by `@react-three/fiber` and `@react-three/drei`.
- **Geist Typography**: Styled entirely using Geist typography including specialized Geist Pixel, Geist Mono, and Geist Sans fonts.
- **Custom Tooltips**: Mouse-tracking tooltips utilizing relative coordinate offset mapping to bypass context boundary bugs.
- **Infinite Scrolling Skills**: Categorized skills (Mobile, Web, Backend, Tools) scrolling dynamically using `react-fast-marquee`.
- **Services Showcase**: Revolving full-card slides displaying service specifications (Mobile, Web, Full System) and pricing structures.

## Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vite.dev/)
- **3D Renderers**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Styling**: Vanilla CSS with HSL/RGBA custom properties
- **Libraries**: `react-router-dom`, `lucide-react`, `react-fast-marquee`, `react-icons`

## Prerequisites

- **Node.js** (v18 or newer recommended)
- **npm** (comes with Node.js)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/TaQsiimUwU/TaQsiimtq.github.io.git
   cd TaQsiimtq.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   The site will be available at the address shown in your terminal (usually `http://localhost:5173`).

4. **Production Build**
   ```bash
   npm run build
   ```

## Project Structure

- `src/` - Core application source
  - `components/` - Interactive components & Bento cards
    - `BentoCards/` - Module card components (TaQsiim name, Projects, Services, Skills, Contacts)
    - `ReactBits/` - Visual effect modules (Beams background)
  - `Styles/` - Global themes and module styling sheets
  - `pages/` - Parent layouts and routing targets
- `public/` - Static assets (PDFs, local project screenshots)

## License

This project is for personal use.
