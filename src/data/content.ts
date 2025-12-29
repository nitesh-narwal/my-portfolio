import type { Experience, Certification, ContactInfo, NavItem } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'backend-developer-intern',
    title: 'Backend Developer Intern',
    company: 'TechCorp Solutions',
    location: 'Bangalore, India',
    type: 'internship',
    startDate: '2024-01',
    endDate: '2024-06',
    description:
      'Contributed to backend development of enterprise SaaS platform serving 50K+ users. Worked on REST API development, database optimization, and cloud deployment.',
    achievements: [
      {
        description: 'Improved API response time by 40%',
        metric: '40%',
        impact: 'through query optimization and Redis caching implementation',
      },
      {
        description: 'Designed and implemented REST APIs',
        metric: '15 endpoints',
        impact: 'for user management module used by 10K+ daily active users',
      },
      {
        description: 'Reduced deployment time by 60%',
        metric: '60%',
        impact: 'by implementing CI/CD pipeline with GitHub Actions',
      },
      {
        description: 'Implemented JWT authentication',
        impact: 'with refresh token rotation for enhanced security',
      },
      {
        description: 'Migrated legacy SQL queries to JPA',
        metric: '30+ queries',
        impact: 'improving maintainability and reducing bugs',
      },
    ],
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
  },
  {
    id: 'freelance-backend',
    title: 'Freelance Backend Developer',
    company: 'Self-Employed',
    location: 'Remote',
    type: 'freelance',
    startDate: '2023-06',
    endDate: '2023-12',
    description:
      'Developed backend solutions for small businesses and startups, focusing on REST API development and database design.',
    achievements: [
      {
        description: 'Built inventory management system',
        metric: '3 clients',
        impact: 'reducing manual tracking errors by 90%',
      },
      {
        description: 'Developed e-commerce backend',
        metric: '1000+ products',
        impact: 'with order processing and payment integration',
      },
      {
        description: 'Created automated reporting system',
        impact: 'saving 20+ hours monthly for client operations team',
      },
    ],
    techStack: ['Java', 'Spring Boot', 'MySQL', 'AWS Lambda', 'S3'],
  },
  {
    id: 'university-projects',
    title: 'Computer Science Student',
    company: 'University',
    location: 'India',
    type: 'full-time',
    startDate: '2020-08',
    endDate: '2024-05',
    description:
      'Pursued Bachelor\'s degree in Computer Science with focus on distributed systems, algorithms, and software engineering.',
    achievements: [
      {
        description: 'Completed AWS Certified Developer certification',
        impact: 'demonstrating cloud expertise',
      },
      {
        description: 'Led team of 4 for capstone project',
        impact: 'delivering microservices-based e-commerce platform',
      },
      {
        description: 'Contributed to open-source projects',
        metric: '10+ PRs',
        impact: 'including Spring Boot ecosystem',
      },
      {
        description: 'Achieved top 5% ranking',
        impact: 'in Data Structures and Algorithms course',
      },
    ],
    techStack: ['Java', 'Python', 'C++', 'SQL', 'Git'],
  },
];

export const certifications: Certification[] = [
  {
    id: 'aws-developer-associate',
    name: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services',
    issueDate: '2024-03',
    expiryDate: '2027-03',
    credentialId: 'DVA-C02-XXXXXX',
    verificationUrl: 'https://www.credly.com/badges/xxxxx',
    badge: '/images/badges/aws-developer-associate.png',
    featured: true,
  },
];

export const contactInfo: ContactInfo = {
  email: 'narwalnitesh14@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nitesh-narwal-b896a218b/#main-content',
  github: 'https://github.com/mr-narwal',
  twitter: 'https://x.com/narwalnitesh14',
  resume: '/resume/Nitesh_Resume.pdf',
};

export const navItems: NavItem[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'system-design', label: 'Architecture', href: '#system-design' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const siteMetadata = {
  title: 'Nitesh | Backend Developer',
  description:
    'Backend developer building scalable systems with Java, Spring Boot, and AWS. AWS Certified Developer focused on cloud-native architecture and system design.',
  keywords: [
    'Backend Developer',
    'Java Developer',
    'Spring Boot',
    'AWS',
    'Cloud Native',
    'Microservices',
    'System Design',
    'REST API',
    'Software Engineer',
  ],
  author: 'Nitesh',
  siteUrl: 'https://nitesh.dev',
  ogImage: '/images/og-image.png',
  twitterHandle: 'https://x.com/narwalnitesh14',
};

export const heroData = {
  headline: 'Backend developer building scalable systems with Java, Spring Boot, and AWS.',
  subheadline:
    'I design reliable, cost-efficient backend architectures that handle real-world traffic. AWS Certified Developer focused on performance and security.',
  techBadges: [
    { name: 'Java', icon: 'Coffee' },
    { name: 'Spring Boot', icon: 'Leaf' },
    { name: 'AWS', icon: 'Cloud' },
    { name: 'Docker', icon: 'Container' },
  ],
};

export const aboutData = {
  summary: `Backend engineer with hands-on experience building production-grade systems using Java and Spring Boot. I specialize in designing cloud-native applications on AWS that prioritize scalability, reliability, and cost-efficiency.

My approach is engineering-first: understanding the problem deeply before writing code, making deliberate architectural decisions with clear trade-offs, and building systems that are maintainable in the long term.`,
  highlights: [
    'Backend architecture design',
    'Cloud-native development on AWS',
    'Performance optimization',
    'Security-conscious engineering',
  ],
  timeline: [
    { year: '2022', event: 'Started CS degree, fell in love with backend systems' },
    { year: '2023', event: 'Built first microservices project' },
    { year: '2024', event: 'Started freelancing, worked with real clients' },
    { year: '2025', event: 'AWS Certified Developer, internship at TechCorp' },
    { year: 'Now', event: 'Ready for full-time backend role' },
  ],
};
