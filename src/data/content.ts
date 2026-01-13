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
    id: 'oracle-certified-professional',
    name: 'Oracle Cloud Infrastructure – Developer Professional ',
    issuer: 'Oracle',
    issueDate: '2025-10',
    credentialId: '103034688OCID25CP',
    verificationUrl: 'https://drive.google.com/file/d/1fz8ay2-0tH7S3j2cvUzh_gDrM0pr_aBC/view?usp=drive_link',
    badge: '/images/projects/badge_developer-removebg-bg.png',
    featured: true,
    certificationType: 'verified',
    },
  // {
  //   id: 'aws-cloud-practitioner',
  //   name: 'AWS Certified Cloud Practitioner',
  //   issuer: 'Amazon Web Services',
  //   issueDate: '2024-03',
  //   expiryDate: '2027-03',
  //   credentialId: 'CLF-C02-XXXXXX',
  //   verificationUrl: 'https://www.credly.com/badges/xxxxx',
  //   badge: '/images/badges/aws-cloud-practitioner.png',
  //   featured: false,
  //   certificationType: 'verified',
  //   skills: ['AWS Core Services', 'Cloud Concepts', 'Security', 'Pricing'],
  // },
  // Udemy Course Certificates
  // {
  //   id: 'udemy-spring-boot-microservices',
  //   name: 'Master Microservices with Spring Boot and Spring Cloud',
  //   issuer: 'Udemy',
  //   issueDate: '2024-01',
  //   credentialId: 'UC-XXXXX-1',
  //   verificationUrl: 'https://www.udemy.com/certificate/UC-XXXXX/',
  //   featured: false,
  //   certificationType: 'course',
  //   skills: ['Spring Boot', 'Microservices', 'Spring Cloud', 'Docker', 'Kubernetes'],
  // },
  {
    id: 'udemy-aws-developer',
    name: 'Ultimate AWS Certified Developer Associate',
    issuer: 'Udemy',
    issueDate: '2025-01',
    credentialId: '-a2abafd9-2eae-4791-a8cc-cea7992acf6c',
    verificationUrl: 'https://drive.google.com/file/d/1HwEdpgJ74MLHQbJpETOLYiT165ut6Gfu/view?usp=drive_link',
    featured: false,
    certificationType: 'course',
    skills: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'S3', 'CloudFormation', 'ECS'],
  },
  // {
  //   id: 'udemy-docker-kubernetes',
  //   name: 'Docker and Kubernetes: The Complete Guide',
  //   issuer: 'Udemy',
  //   issueDate: '2023-11',
  //   credentialId: 'UC-XXXXX-3',
  //   verificationUrl: 'https://www.udemy.com/certificate/UC-XXXXX/',
  //   featured: false,
  //   certificationType: 'course',
  //   skills: ['Docker', 'Kubernetes', 'Container Orchestration', 'CI/CD'],
  // },
  // {
  //   id: 'udemy-system-design',
  //   name: 'System Design Interview: An Insider\'s Guide',
  //   issuer: 'Udemy',
  //   issueDate: '2024-04',
  //   credentialId: 'UC-XXXXX-4',
  //   verificationUrl: 'https://www.udemy.com/certificate/UC-XXXXX/',
  //   featured: false,
  //   certificationType: 'course',
  //   skills: ['System Design', 'Scalability', 'Distributed Systems', 'Load Balancing'],
  // },
  // {
  //   id: 'udemy-java-masterclass',
  //   name: 'Java Programming Masterclass covering Java 17',
  //   issuer: 'Udemy',
  //   issueDate: '2023-08',
  //   credentialId: 'UC-XXXXX-5',
  //   verificationUrl: 'https://www.udemy.com/certificate/UC-XXXXX/',
  //   featured: false,
  //   certificationType: 'course',
  //   skills: ['Java 17', 'OOP', 'Collections', 'Lambdas', 'Streams'],
  // },
];

export const contactInfo: ContactInfo = {
  email: 'narwalnitesh14@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nitesh-narwal-b896a218b/',
  github: 'https://github.com/nitesh-narwal',
  twitter: 'https://x.com/narwalnitesh14',
  resume: 'https://drive.google.com/file/d/1Y8a-jTTzHYvQ8cPE_0gaf2I0EKj4Wr8Q/view?usp=drivesdk',
};

export const navItems: NavItem[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'system-design', label: 'Architecture', href: '#system-design' },
  { id: 'certifications', label: 'Certifications', href: '#certifications' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const siteMetadata = {
  title: 'Nitesh | Backend & Cloud Developer',
  description:
    'Backend developer building scalable cloud-native systems with Java, Spring Boot, and AWS. Oracle Certified Java Developer focused on microservices and cloud architecture.',
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
    'Cloud Engineer',
  ],
  author: 'Nitesh',
  siteUrl: 'https://nitesh.dev',
  ogImage: '/images/og-image.png',
  twitterHandle: 'https://x.com/narwalnitesh14',
};

export const heroData = {
  headline: 'Backend developer specializing in AWS cloud and Spring Boot microservices.',
  subheadline:
    'I build scalable, cloud-native applications with a focus on reliability and performance. Oracle Certified Java Developer passionate about distributed systems and modern cloud architecture.',
  techBadges: [
    { name: 'Java', icon: 'Coffee' },
    { name: 'Spring Boot', icon: 'Leaf' },
    { name: 'AWS', icon: 'Cloud' },
    { name: 'Docker', icon: 'Container' },
  ],
};

export const aboutData = {
  summary: `Backend engineer passionate about cloud-native development on AWS and building scalable microservices with Spring Boot. I specialize in designing reliable, cost-efficient systems that handle real-world traffic while following best practices in security and performance.

My approach combines solid backend fundamentals with modern cloud architecture. I enjoy solving complex distributed systems problems and continuously learning new technologies in the AWS ecosystem.`,
  highlights: [
    'Cloud-native development on AWS',
    'Microservices with Spring Boot',
    'System design & architecture',
    'API development & security',
  ],
  timeline: [
    { year: '2022', event: 'Started CS degree' },
    { year: '2023', event: 'discovered passion for backend systems' },
    { year: '2024', event: 'Deep dive into Spring Boot and AWS service' },
    { year: '2025', event: 'Oracle Certified Cloud Developer' },
    { year: 'Now', event: 'Ready for backend/cloud engineering role' },
  ],
};
