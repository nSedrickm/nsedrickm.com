# Sedrick M. | Senior Full-Stack Engineering Showroom

This repository contains the complete frontend architecture and source code for my professional portfolio and engineering showroom: **[nsedrickm.com](https://nsedrickm.com)**.
---

## 🎯 Purpose & Engineering Objectives

This repository goes beyond a standard personal site. It is designed to prove four core senior engineering competencies to technical stakeholders:

1.  **Proof of Technical Execution:** Demonstration of clean, modular, and self-documenting React code structures.
2.  **Performance Engineering:** Real-world execution of Core Web Vitals optimization, asset compression, and efficient bundle sizes.
3.  **Architectural Case Study Hub:** A centralized, live-rendered archive detailing the system designs, problem statements, and outcomes of my past enterprise engineering roles.
4.  **Production Readiness:** Implementation of clean Git workflows, robust configuration management, and professional project hygiene.

---

## 🛠️ Technical Architecture & Stack

The site is built to be lightweight, incredibly fast, and easy to scale as I add deeper case studies of my work.

*   **Core Architecture:** React.js (Component-driven development)
*   **Design System & Styling:** Tailwind CSS (Utility-first tokens for strict responsive scaling)
*   **Build Automation:** Vite (For lightning-fast Hot Module Replacement and optimized chunk splitting)
*   **Deployment Pipeline:** Automated CI/CD edge hosting for instant global content delivery

---

## 💎 Key Implementation Highlights

### 🚀 Performance Optimization & Paint Speeds
*   **Zero Layout Shifts:** Engineered with strict container boundaries and asset loading strategies to eliminate Cumulative Layout Shift (CLS).
*   **Asset Pipeline:** Images and vector graphics are compressed and optimized for next-gen web delivery to keep First Contentful Paint (FCP) sub-second.
*   **Bundle Efficiency:** Leverages dependency tree-shaking via Vite to ensure clients download only the minimal required JavaScript payload.

### 📱 Responsive Fidelity & Semantic UX
*   **Fluid Breakpoints:** Uses Tailwind’s design tokens alongside advanced CSS Grid layouts to ensure pixel-perfect rendering from mobile viewports up to ultra-wide desktop monitors.
*   **Semantic Integrity:** Built using strict semantic HTML5 tags (`<section>`, `<article>`, `<header>`) rather than generic structural containers, facilitating optimal SEO indexing and screen-reader accessibility (a11y).

---

## 📂 Repository Layout

```text
├── public/             # Static production assets, favicons, and manifest files
├── src/
│   ├── components/     # Modular, reusable UI components (Layout, Cards, Buttons)
│   ├── assets/         # Optimized global styles, vector iconography, and imagery
│   ├── data/           # Structured JSON arrays holding project details & professional history
│   ├── App.jsx         # Component composition and structural setup
│   └── main.jsx        # DOM entry point and initialization
├── package.json        # Managed dependencies and automated build/run scripts
└── tailwind.config.js  # Customized design system tokens (colors, spacing, viewport overrides)
```

---

## 🔧 Local Development & Building

To clone the workspace and inspect the component implementation locally, ensure you have [Node.js](https://nodejs.org) installed.

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd nsedrickm.com
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Compile an optimized, minified production build bundle:**
   ```bash
   npm run build
   ```

---

## ✉️ Enterprise & Contract Inquiries

If you are a technical recruiter, hiring manager, or Enterprise platform scout evaluating my capabilities:
*   Review the code structure in `/src` to evaluate my pattern paradigms.
*   Check the live case studies directly at [nsedrickm.com](https://nsedrickm.com).
