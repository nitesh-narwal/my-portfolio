import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend Development',
    icon: 'Server',
    skills: [
      {
        name: 'Java 17+',
        level: '',
        usageContext: 'Primary language for all backend services',
        whyChosen: 'Strong typing, mature ecosystem, excellent for enterprise applications',
        problemSolved: 'Built high-throughput order processing handling 10K+ orders/min',
      },
      {
        name: 'Spring Boot',
        level: '',
        usageContext: 'Framework for all microservices and REST APIs',
        whyChosen: 'Production-ready features, Spring Security, excellent documentation',
        problemSolved: 'Rapid development of authentication service with OAuth 2.0 support',
      },
      {
        name: 'Spring Security',
        level: '',
        usageContext: 'Authentication and authorization for all services',
        whyChosen: 'Comprehensive security framework with OAuth 2.0 and JWT support',
        problemSolved: 'Implemented enterprise-grade auth service with MFA and social login',
      },
      {
        name: 'Hibernate/JPA',
        level: '',
        usageContext: 'ORM for relational database interactions',
        whyChosen: 'Reduces boilerplate, provides caching, handles complex relationships',
        problemSolved: 'Optimized N+1 queries reducing page load time by 60%',
      },
      {
        name: 'REST API Design',
        level: '',
        usageContext: 'All service-to-service and client communication',
        whyChosen: 'Industry standard, tooling support, clear contracts',
        problemSolved: 'Designed versioned APIs used by 12+ internal applications',
      },
      {
        name: 'Microservices',
        level: '',
        usageContext: 'Architecture pattern for complex distributed systems',
        whyChosen: 'Independent scaling, team autonomy, fault isolation',
        problemSolved: 'Decomposed monolith into 8 services improving deployment frequency 5x',
      },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & AWS',
    icon: 'Cloud',
    skills: [
      {
        name: 'AWS Lambda',
        level: '',
        usageContext: 'Event-driven processing, webhooks, scheduled tasks',
        whyChosen: 'Zero server management, automatic scaling, pay-per-use',
        problemSolved: 'Built ETL pipeline processing 10GB+ daily at $120/month',
      },
      {
        name: 'Amazon API Gateway',
        level: '',
        usageContext: 'API management, rate limiting, request validation',
        whyChosen: 'Native Lambda integration, built-in caching, usage plans',
        problemSolved: 'Implemented API throttling protecting backend from abuse',
      },
      {
        name: 'Amazon S3',
        level: '',
        usageContext: 'Object storage, static hosting, data lake',
        whyChosen: 'Durability, lifecycle policies, event notifications',
        problemSolved: 'Designed data lake with intelligent tiering saving 40% on storage',
      },
      {
        name: 'Amazon DynamoDB',
        level: '',
        usageContext: 'High-throughput, low-latency data access',
        whyChosen: 'Single-digit ms latency at any scale, serverless',
        problemSolved: 'URL shortener achieving <30ms redirect latency globally',
      },
      {
        name: 'Amazon RDS',
        level: '',
        usageContext: 'Relational data requiring ACID compliance',
        whyChosen: 'Managed PostgreSQL with automated backups and failover',
        problemSolved: 'Multi-AZ deployment for authentication service with 99.99% uptime',
      },
      {
        name: 'Amazon SQS/SNS',
        level: '',
        usageContext: 'Async messaging and event distribution',
        whyChosen: 'Managed queues, dead letter support, fan-out capability',
        problemSolved: 'Decoupled order processing achieving reliable delivery',
      },
      {
        name: 'AWS IAM',
        level: '',
        usageContext: 'Access control and security policies',
        whyChosen: 'Fine-grained permissions, role-based access',
        problemSolved: 'Implemented least-privilege access for all services',
      },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'Database',
    skills: [
      {
        name: 'PostgreSQL',
        level: '',
        usageContext: 'Primary database for transactional workloads',
        whyChosen: 'ACID compliance, rich SQL features, excellent performance',
        problemSolved: 'Optimized queries with proper indexing reducing response time 70%',
      },
      {
        name: 'Redis',
        level: '',
        usageContext: 'Caching, session storage, rate limiting',
        whyChosen: 'Sub-millisecond latency, data structures, pub/sub',
        problemSolved: 'Distributed locking preventing inventory overselling',
      },
      {
        name: 'MongoDB',
        level: '',
        usageContext: 'Flexible schema for rapidly evolving data models',
        whyChosen: 'Schema flexibility, horizontal scaling, aggregation pipeline',
        problemSolved: 'Stored variable notification templates without migrations',
      },
      {
        name: 'Elasticsearch',
        level: '',
        usageContext: 'Full-text search and log analytics',
        whyChosen: 'Fast search, aggregations, Kibana integration',
        problemSolved: 'Implemented product search with faceted filtering',
      },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Tools',
    icon: 'Terminal',
    skills: [
      {
        name: 'Docker',
        level: '',
        usageContext: 'Containerization for all services',
        whyChosen: 'Consistent environments, isolation, easy deployment',
        problemSolved: 'Eliminated "works on my machine" issues across team',
      },
      {
        name: 'Git',
        level: '',
        usageContext: 'Version control for all projects',
        whyChosen: 'Industry standard, branching model, code review workflow',
        problemSolved: 'Implemented GitFlow improving release predictability',
      },
      {
        name: 'CI/CD (GitHub Actions)',
        level: '',
        usageContext: 'Automated testing and deployment',
        whyChosen: 'Native GitHub integration, matrix builds, marketplace actions',
        problemSolved: 'Reduced deployment time from 2 hours to 15 minutes',
      },
      {
        name: 'Linux',
        level: '',
        usageContext: 'Server administration and scripting',
        whyChosen: 'Production environment, shell scripting, troubleshooting',
        problemSolved: 'Automated server setup reducing provisioning time 80%',
      },
      {
        name: 'Terraform',
        level: '',
        usageContext: 'Infrastructure as Code for AWS resources',
        whyChosen: 'Declarative config, state management, module reuse',
        problemSolved: 'Reproducible infrastructure across dev/staging/prod',
      },
    ],
  },
  {
    id: 'system-design',
    title: 'System Design',
    icon: 'Network',
    skills: [
      {
        name: 'Distributed Systems',
        level: '',
        usageContext: 'Designing scalable multi-service architectures',
        whyChosen: 'Required for handling high traffic and fault tolerance',
        problemSolved: 'Designed order system handling 50K concurrent users',
      },
      {
        name: 'Caching Strategies',
        level: '',
        usageContext: 'Optimizing read performance and reducing database load',
        whyChosen: 'Essential for low-latency applications',
        problemSolved: 'Implemented multi-layer caching achieving 94% cache hit rate',
      },
      {
        name: 'Message Queues',
        level: '',
        usageContext: 'Async processing and service decoupling',
        whyChosen: 'Reliability, scalability, load leveling',
        problemSolved: 'Notification service handling 1M+ daily messages',
      },
      {
        name: 'Load Balancing',
        level: '',
        usageContext: 'Traffic distribution and high availability',
        whyChosen: 'Required for horizontal scaling',
        problemSolved: 'Implemented health-based routing for zero-downtime deployments',
      },
      {
        name: 'API Security',
        level: '',
        usageContext: 'Protecting APIs from common attack vectors',
        whyChosen: 'Essential for production systems',
        problemSolved: 'JWT authentication with rate limiting and input validation',
      },
    ],
  },
];

export function getSkillByName(name: string) {
  for (const category of skillCategories) {
    const skill = category.skills.find(
      (s) => s.name.toLowerCase() === name.toLowerCase()
    );
    if (skill) return { ...skill, category: category.title };
  }
  return null;
}
