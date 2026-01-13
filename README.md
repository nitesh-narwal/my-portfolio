# Nitesh Portfolio

A production-grade, recruiter-focused developer portfolio built with Next.js 14, showcasing backend engineering expertise in Java, Spring Boot, and AWS.

![Portfolio Preview](public/images/og-image.png)

## 🎯 Design Philosophy

This portfolio is designed with a clear mission: **convert recruiters into interviewers**. Every element prioritizes clarity, depth, and engineering maturity over visual noise.

### Core Principles
- **Backend-first thinking** - Architecture diagrams, trade-off documentation, system design
- **Substance over style** - No flashy animations, no gimmicks, just clear information
- **Recruiter-optimized** - Scannable layout, clear CTAs, mobile-friendly
- **Performance-first** - Lighthouse 90+, minimal JS, fast initial load

## ✨ Features

### Information Architecture
- **Hero Section** - 5-second credibility test with clear headline and CTAs
- **About** - Engineering-focused summary with journey timeline
- **Skills** - Grouped with real context (where used, why chosen, problem solved)
- **Projects** - Full architecture documentation with trade-offs and outcomes
- **System Design** - Visual diagrams showing scalability thinking
- **Certifications** - AWS certification with verification
- **Experience** - Impact-focused with metrics
- **Contact** - Premium contact form with availability status

### Technical Features
- ⌘K Command palette for quick navigation
- Dark mode by default (premium, masculine aesthetic)
- Glassmorphism UI (subtle, restrained)
- Smooth animations via Framer Motion
- Full keyboard navigation
- Mobile-first responsive design
- SEO optimized with OpenGraph
- Privacy-friendly analytics (Vercel Analytics)

## 🛠 Tech Stack

### Frontend
- **Next.js 14** - App Router, Server Components
- **React 18** - TypeScript
- **Tailwind CSS** - Custom design system
- **Framer Motion** - Meaningful micro-interactions
- **cmdk** - Command palette

### Performance
- Lighthouse score > 90
- Optimized fonts (Inter, JetBrains Mono)
- Lazy loading images
- Minimal JavaScript bundle

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/nitesh/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm run start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # Custom 404 page
│   └── sitemap.ts          # Dynamic sitemap
├── components/
│   ├── layout/             # Header, Footer, CommandPalette
│   └── sections/           # Hero, About, Skills, Projects, etc.
├── data/                   # Content data files
│   ├── content.ts          # Site metadata, nav, about
│   ├── projects.ts         # Project details
│   ├── skills.ts           # Skills with context
│   └── system-design.ts    # Architecture documentation
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities and animations
├── styles/                 # Global CSS
└── types/                  # TypeScript types
```

## 🎨 Customization Guide

### 1. Personal Information

Edit `src/data/content.ts`:

```typescript
export const siteMetadata = {
  title: 'Your Name | Backend Developer',
  description: 'Your description...',
  author: 'Your Name',
  siteUrl: 'https://yoursite.dev',
  // ...
};

export const contactInfo = {
  email: 'your@email.com',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  // ...
};
```

### 2. Projects

Edit `src/data/projects.ts` to add your projects:

```typescript
export const projects: Project[] = [
  {
    id: 'your-project',
    title: 'Project Title',
    tagline: 'One-line description',
    description: 'Full description...',
    problemStatement: 'What problem does this solve?',
    techStack: [
      {
        name: 'Java',
        category: 'backend',
        reason: 'Why you chose this',
      },
      // ...
    ],
    keyDecisions: [
      {
        title: 'Decision Name',
        description: 'What you decided',
        tradeoffs: 'What trade-offs you accepted',
      },
    ],
    // ...
  },
];
```

### 3. Skills

Edit `src/data/skills.ts`:

```typescript
export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend Development',
    icon: 'Server',
    skills: [
      {
        name: 'Java',
        level: '',
        usageContext: 'Where you used it',
        whyChosen: 'Why you use it',
        problemSolved: 'What you achieved with it',
      },
      // ...
    ],
  },
];
```

### 4. Styling

The design system is in `tailwind.config.ts`:

```typescript
// Customize colors
colors: {
  primary: {
    DEFAULT: '#3b82f6',  // Change primary color
    hover: '#2563eb',
  },
  // ...
}
```

### 5. Resume

Place your resume PDF at:
```
public/resume/Your_Name_Resume.pdf
```

Update the path in `src/data/content.ts`.

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Environment Variables

Create `.env.local` for local development:

```env
# Optional: Add any API keys or secrets
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Custom Domain

1. Add domain in Vercel dashboard
2. Update `siteMetadata.siteUrl` in content.ts
3. Update `sitemap.ts` base URL

## 📊 Analytics

The portfolio uses [Vercel Analytics](https://vercel.com/analytics) for privacy-friendly metrics:

- Page views
- Unique visitors
- Web Vitals (Core Web Vitals)

No cookies, GDPR compliant.

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format with Prettier
npm run analyze      # Analyze bundle size
```

## 📱 Responsive Design

The portfolio is fully responsive:

- **Mobile** (<768px) - Single column, hamburger menu
- **Tablet** (768-1023px) - Adjusted grid layouts
- **Desktop** (≥1024px) - Full experience

## ♿ Accessibility

- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus indicators
- Reduced motion support
- Screen reader friendly

## 🎯 Tailoring for Specific Roles

### Backend Engineer Role
Emphasize in projects section:
- System design decisions
- API design patterns
- Database optimization
- Scalability solutions

### Cloud Engineer Role
Highlight:
- AWS service expertise
- Cost optimization strategies
- Infrastructure decisions
- Security implementations

### Full-Stack Role
Add:
- Frontend project sections
- UI/UX considerations
- End-to-end system ownership

## 📝 Content Writing Tips

### Project Descriptions
- Start with the **problem**, not the solution
- Include **measurable outcomes** (latency, cost, scale)
- Document **trade-offs** you made
- Show **security awareness**

### Skills Section
Avoid:
- Progress bars or percentages
- Generic skill lists
- Technologies you barely know

Include:
- Context of usage
- Why you chose it
- What you achieved

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 🙏 Credits

- Design inspired by modern SaaS landing pages
- Icons by [Lucide](https://lucide.dev)
- Fonts: Inter, JetBrains Mono

---

Built with ❤️ by Nitesh

**Remember:** A portfolio is a living document. Update it regularly with new projects, skills, and experiences.
