# Mohammed Sofi Sarmad - DevOps & Cloud Engineering Portfolio

A modern, high-contrast, recruiter-focused personal portfolio website engineered specifically for DevOps, Cloud, and Infrastructure roles.

Built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Lucide Icons**. Strictly derived from authentic resume credentials and verified GitHub repositories.

---

## 🚀 Quick Start

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your system.

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
This generates an optimized static build in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```
Open [http://localhost:4173](http://localhost:4173) to preview the production site.

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg                          # Terminal & cloud DevOps favicon
│   └── Mohammed_Sofi_Sarmad_Resume.pdf      # Official resume served directly
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                       # Sticky navigation with scroll-spy & mobile drawer
│   │   ├── Hero.tsx                         # Recruiter elevator pitch, status badge & CTAs
│   │   ├── HeroVisual.tsx                   # DevOps pipeline workflow visual with console tabs
│   │   ├── About.tsx                        # Academic foundation, VTU, 8.0 CGPA & DevOps focus
│   │   ├── Skills.tsx                       # 8 categorized skill cards matching resume
│   │   ├── DevOpsPipeline.tsx               # Visual DevOps toolchain ("Technologies & Workflow")
│   │   ├── Experience.tsx                   # DevOps Academy & Learners Byte timeline
│   │   ├── Projects.tsx                     # CI/CD platform, Ansible web deploy & AI R&D
│   │   ├── Certifications.tsx               # AWS Cloud Practitioner, Infosys, Forage simulations
│   │   ├── Education.tsx                    # B.Tech Electronics & Computer Engineering, 8.0 CGPA
│   │   ├── GitHubSection.tsx                # "Engineering on GitHub" with real repositories
│   │   ├── Contact.tsx                      # Copyable email, phone, location & message form
│   │   ├── Footer.tsx                       # Engineering footer with recruiter links
│   │   └── Icons.tsx                        # SVG brand icons
│   ├── data/
│   │   └── portfolio.ts                     # Single source of truth for all portfolio data
│   ├── index.css                            # Custom devops styles, scrollbars, glowing borders
│   ├── App.tsx                              # Main layout organizing all sections
│   └── main.tsx                             # Application entry point
├── dist/                                    # Ready-to-deploy production build
├── index.html                               # SEO meta tags, OpenGraph & JetBrains Mono font
├── package.json                             # Dependencies and build scripts
├── tailwind.config.js                       # Dark theme colors and utilities
├── tsconfig.json                            # TypeScript configuration
└── vite.config.ts                           # Vite build configuration
```

---

## 🛠️ How to Update Content

All content is centralized in **`src/data/portfolio.ts`**:
- Contact details, LinkedIn, GitHub, phone, email
- Target roles & availability status
- Skill categories & technologies
- Internship experience & bullet points
- Featured projects, execution sequences & terminal logs
- Certifications & educational achievements

Updating `portfolio.ts` automatically updates every section across the portfolio.

---

## 🌐 Free One-Click Deployment Options

### Deploy to Vercel
1. Push this codebase to a repository on [GitHub](https://github.com/).
2. Go to [vercel.com](https://vercel.com/) and click **"Add New Project"**.
3. Select your repository. Vercel automatically detects Vite and deploys in seconds.

### Deploy to GitHub Pages
1. In `vite.config.ts`, add `base: '/<repository-name>/'`.
2. Build with `npm run build`.
3. Deploy the `dist/` directory using GitHub Actions or `gh-pages`.

### Deploy to Netlify
1. Drag and drop the `dist/` folder directly into [app.netlify.com/drop](https://app.netlify.com/drop) for instant deployment without even creating an account!
