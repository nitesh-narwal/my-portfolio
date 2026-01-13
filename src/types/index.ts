// ============================================
// Core Types for Portfolio
// ============================================

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problemStatement: string;
  techStack: TechStackItem[];
  architectureDescription: string;
  keyDecisions: Decision[];
  performanceMetrics: Metric[];
  securityFeatures: string[];
  outcomes: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: ProjectCategory;
  image?: string;
}

export interface TechStackItem {
  name: string;
  category: 'backend' | 'frontend' | 'database' | 'cloud' | 'devops' | 'tools';
  reason: string;
}

export interface Decision {
  title: string;
  description: string;
  tradeoffs: string;
}

export interface Metric {
  label: string;
  value: string;
  context?: string;
}

export type ProjectCategory = 
  | 'microservices'
  | 'api-design'
  | 'cloud-native'
  | 'data-processing'
  | 'authentication';

// ============================================
// Skills Types
// ============================================

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: '' | '' | '';
  usageContext: string;
  whyChosen?: string;
  problemSolved?: string;
}

// ============================================
// Experience Types
// ============================================

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'internship' | 'contract' | 'freelance';
  startDate: string;
  endDate: string | 'Present';
  description: string;
  achievements: Achievement[];
  techStack: string[];
}

export interface Achievement {
  description: string;
  metric?: string;
  impact?: string;
}

// ============================================
// Certification Types
// ============================================

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId: string;
  verificationUrl: string;
  badge?: string;
  featured: boolean;
  certificationType: 'verified' | 'course';
  skills?: string[];
}

// ============================================
// System Design Types
// ============================================

export interface SystemDesign {
  id: string;
  title: string;
  description: string;
  components: SystemComponent[];
  scalabilityApproach: string;
  reliabilityFeatures: string[];
  securityMeasures: string[];
  costOptimizations: string[];
  evolutionStages: EvolutionStage[];
}

export interface SystemComponent {
  name: string;
  type: 'service' | 'database' | 'cache' | 'queue' | 'gateway' | 'storage' | 'cdn';
  description: string;
  awsService?: string;
}

export interface EvolutionStage {
  version: string;
  title: string;
  changes: string[];
  reason: string;
}

// ============================================
// Navigation Types
// ============================================

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
}

// ============================================
// Contact Types
// ============================================

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  twitter?: string;
  resume: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ============================================
// SEO Types
// ============================================

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

// ============================================
// Animation Types
// ============================================

export interface AnimationVariants {
  hidden: object;
  visible: object;
  exit?: object;
}

// ============================================
// Theme Types
// ============================================

export type Theme = 'dark' | 'light' | 'system';

// ============================================
// Command Palette Types
// ============================================

export interface CommandItem {
  id: string;
  label: string;
  shortcut?: string;
  icon?: string;
  action: () => void;
  category: 'navigation' | 'action' | 'external';
}
