import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'fitness-tips',
    title: 'Fitness Tech Microservices Platform',
    tagline: 'High-throughput order ',
    description:
      'A scalable fitness tracking service that enables secure activity logging, personalized workout recommendations, and real-time updates, designed to handle high traffic reliably through asynchronous processing and centralized control.',
    problemStatement:
      'Existing fitness platforms face challenges in securely managing user data, scaling with growing activity, and delivering real-time updates and personalized recommendations reliably. A scalable and resilient solution is required to address these limitations while maintaining performance and user experience',
    techStack: [
      {
        name: 'Java 22',
        category: 'backend',
        reason: 'Virtual threads for handling concurrent order processing efficiently',
      },
      {
        name: 'Spring Boot',
        category: 'backend',
        reason: 'Rapid development with production-ready features like actuator and security',
      },
      {
        name: 'PostgreSQL',
        category: 'database',
        reason: 'ACID compliance for order transactions; row-level locking for inventory',
      },
      {
        name: 'Redis',
        category: 'database',
        reason: 'Distributed locking and caching to prevent overselling',
      },
      {
        name: 'Amazon Kafka',
        category: 'cloud',
        reason: 'Decoupling order creation from downstream processing for reliability',
      },
      {
        name: 'AWS SNS',
        category: 'cloud',
        reason: 'Event-based pub/sub notifications for fan-out messaging across multiple consumers.',
      },
      {
        name: 'Docker',
        category: 'devops',
        reason: 'Consistent environments across development and production',
      },
    ],
    architectureDescription:
      'Cloud-native microservices architecture with centralized authentication and configuration management. Client requests flow through a unified API gateway that handles routing, security validation, and load balancing. Services register dynamically for discovery and communicate through asynchronous events to ensure loose coupling and scalability. Activity data and notifications are processed in an event-driven manner, while real-time updates are delivered through persistent connections. Each service independently manages its own data to maintain resilience, scalability, and fault isolation.',
    keyDecisions: [
      {
        title: 'CQRS for Order Queries',
        description:
          'Separated write models for recording user activities from read models optimized for analytics and dashboard queries, ensuring high write throughput without impacting read performance.',
        tradeoffs:
          'Increased complexity due to eventual consistency between models; mitigated through event-based state updates and replayable activity events.',
      },
      {
        title: 'Redis for Inventory Locking',
        description:
          'Used Redis distributed locks with TTL to reserve inventory during checkout flow.',
        tradeoffs:
          'Risk of lock expiration during slow payments; implemented reservation extension mechanism.',
      },
      {
        title: 'Kafka',
        description:
          'Chose Kafka for simpler operational overhead and AWS-native integration.',
        tradeoffs:
          'Limited replay capability; acceptable for order processing where idempotency handles retries.',
      },
    ],
    performanceMetrics: [
      // { label: 'Throughput', value: '10K+ orders/min', context: 'During load testing' },
      // { label: 'Latency P99', value: '< 200ms', context: 'Order creation API' },
      // { label: 'Availability', value: '99.9%', context: 'Over 6-month period' },
      // { label: 'Cost', value: '$0.02/1K orders', context: 'AWS infrastructure' },
    ],
    securityFeatures: [
      'JWT-based authentication with refresh token rotation',
      'Input validation at API gateway level',
      'Encrypted sensitive data at rest using AWS KMS',
      'Rate limiting per user to prevent abuse',
      'Audit logging for all order state changes',
    ],
    outcomes: [
      // 'Handled 50K concurrent users during simulated flash sale',
      // 'Zero overselling incidents in production',
      // 'Reduced order processing time by 60% compared to monolith',
      // 'Achieved PCI DSS compliance for payment handling',
    ],
    githubUrl: 'https://github.com/nitesh-narwal/fitness-details',
    liveUrl: 'https://fittech.niteshh.me',
    featured: true,
    category: 'microservices',
    image: '/images/projects/Fitness-Tips.png',
  },
  {
    id: 'url-shortener',
    title: 'Shortly URL Shortener',
    tagline: 'Scalable link management with analytics',
    description:
      'A high-availability URL shortening service handling 100K+ redirects daily with real-time click analytics and custom domain support.',
    problemStatement:
      'Marketing teams need branded short links with analytics but existing solutions are expensive at scale. Building in-house requires solving unique ID generation and redirect latency challenges.',
    techStack: [
      {
        name: 'Spring Boot',
        category: 'backend',
        reason: 'WebFlux for non-blocking redirect handling',
      },
      {
        name: 'DynamoDB',
        category: 'database',
        reason: 'Single-digit ms reads at any scale; perfect for redirect lookups',
      },
      {
        name: 'ElastiCache Redis',
        category: 'database',
        reason: 'Hot URL caching to reduce DynamoDB costs',
      },
      {
        name: 'CloudFront',
        category: 'cloud',
        reason: 'Edge caching for sub-50ms global redirect latency',
      },
      {
        name: 'API Gateway',
        category: 'cloud',
        reason: 'Request throttling and API key management',
      },
      {
        name: 'SES',
        category: 'cloud',
        reason: 'Transactional email delivery for account verification, notifications, and system-generated emails with high deliverability.',
      },
    ],
    architectureDescription:
      'Multi-tier architecture with CloudFront edge caching, ElastiCache for warm data, and DynamoDB for persistence. Snowflake IDs ensure globally unique short codes without coordination. Click events stream through Kinesis for real-time dashboard updates.',
    keyDecisions: [
      {
        title: 'Time-Based Distributed ID Strategy',
        description:
          'Implemented Twitter Snowflake-inspired IDs for distributed unique code generation.',
        tradeoffs:
          'Requires time synchronization across instances; used NTP with monitoring.',
      },
      {
        title: 'DynamoDB over PostgreSQL',
        description:
          'Chose DynamoDB for predictable latency at scale and zero operational overhead.',
        tradeoffs:
          'Limited query flexibility; designed access patterns upfront using GSIs.',
      },
      {
        title: 'Edge Caching Strategy',
        description:
          'Aggressive CloudFront caching with 1-hour TTL for redirects.',
        tradeoffs:
          'URL updates take time to propagate; implemented cache invalidation API.',
      },
    ],
    performanceMetrics: [
      // { label: 'Redirect Latency', value: '< 30ms', context: 'P95 globally via CloudFront' },
      // { label: 'Daily Redirects', value: '100K+', context: 'Production traffic' },
      // { label: 'Cache Hit Rate', value: '94%', context: 'CloudFront + Redis combined' },
      // { label: 'Monthly Cost', value: '$45', context: 'At current scale' },
    ],
    securityFeatures: [
      'URL validation to prevent malicious redirects',
      'Rate limiting per API key',
      'HTTPS enforced on all custom domains',
      'Click fraud detection using IP fingerprinting',
    ],
    outcomes: [
      // 'Reduced redirect latency by 80% with edge caching',
      // 'Saved $500/month compared to enterprise solutions',
      // 'Onboarded 5 internal marketing teams',
      // 'Open-sourced with 200+ GitHub stars',
    ],
    githubUrl: 'https://github.com/nitesh-narwal/shortly-springboot',
    liveUrl: 'https://shortly.niteshh.me',
    featured: true,
    category: 'cloud-native',
    image: '/images/projects/Shortly.png',
  },
  // {
  //   id: 'real-time-notification',
  //   title: 'Real-Time Notification Service',
  //   tagline: 'Multi-channel notifications at scale',
  //   description:
  //     'A unified notification platform delivering 1M+ daily notifications across email, SMS, push, and in-app channels with intelligent batching and user preferences.',
  //   problemStatement:
  //     'Applications need to notify users across multiple channels but building separate integrations is expensive. Handling user preferences, delivery tracking, and failover adds significant complexity.',
  //   techStack: [
  //     {
  //       name: 'Java 17',
  //       category: 'backend',
  //       reason: 'CompletableFuture for parallel channel delivery',
  //     },
  //     {
  //       name: 'Spring Boot',
  //       category: 'backend',
  //       reason: 'Modular channel adapters using Spring profiles',
  //     },
  //     {
  //       name: 'Amazon SES',
  //       category: 'cloud',
  //       reason: 'Cost-effective email delivery with bounce handling',
  //     },
  //     {
  //       name: 'Amazon SNS',
  //       category: 'cloud',
  //       reason: 'Fan-out pattern for multi-channel publishing',
  //     },
  //     {
  //       name: 'DynamoDB',
  //       category: 'database',
  //       reason: 'User preferences with low-latency lookups',
  //     },
  //     {
  //       name: 'WebSocket',
  //       category: 'backend',
  //       reason: 'Real-time in-app notifications via Spring WebSocket',
  //     },
  //   ],
  //   architectureDescription:
  //     'Fan-out architecture using SNS topics per notification type. Lambda functions handle channel-specific delivery with automatic retries. User preferences stored in DynamoDB with caching layer. WebSocket connections managed via API Gateway for in-app notifications.',
  //   keyDecisions: [
  //     {
  //       title: 'SNS Fan-Out Pattern',
  //       description:
  //         'Single notification triggers parallel delivery to all subscribed channels.',
  //       tradeoffs:
  //         'Added cost per message; offset by reduced coordination complexity.',
  //     },
  //     {
  //       title: 'Intelligent Batching',
  //       description:
  //         'Aggregated similar notifications with 5-minute windows to reduce user fatigue.',
  //       tradeoffs:
  //         'Slight delivery delay; configurable per notification type.',
  //     },
  //     {
  //       title: 'Dead Letter Queues',
  //       description:
  //         'Failed notifications routed to DLQ for manual review and replay.',
  //       tradeoffs:
  //         'Requires monitoring; built CloudWatch alarms for DLQ depth.',
  //     },
  //   ],
  //   performanceMetrics: [
  //     { label: 'Daily Volume', value: '1M+', context: 'Across all channels' },
  //     { label: 'Delivery Rate', value: '99.2%', context: 'First attempt success' },
  //     { label: 'Processing Time', value: '< 500ms', context: 'API to channel handoff' },
  //     { label: 'Cost/Notification', value: '$0.0001', context: 'Blended across channels' },
  //   ],
  //   securityFeatures: [
  //     'Encryption in transit and at rest',
  //     'User consent verification before delivery',
  //     'Unsubscribe token in every notification',
  //     'PII masking in logs',
  //   ],
  //   outcomes: [
  //     'Consolidated 4 separate notification systems',
  //     'Improved email deliverability to 98% (from 87%)',
  //     'Reduced notification-related complaints by 40%',
  //     'Saved 200+ engineering hours monthly',
  //   ],
  //   githubUrl: 'https://github.com/nitesh/notification-service',
  //   featured: true,
  //   category: 'microservices',
  //   image: '/images/projects/notification-service.png',
  // },
  // {
  //   id: 'auth-service',
  //   title: 'Enterprise Authentication Service',
  //   tagline: 'OAuth 2.0 + JWT authentication platform',
  //   description:
  //     'A secure, scalable authentication service supporting OAuth 2.0 flows, social login, MFA, and session management for enterprise applications.',
  //   problemStatement:
  //     'Each application building its own auth increases security risk and development time. A centralized service must be highly available and secure without becoming a bottleneck.',
  //   techStack: [
  //     {
  //       name: 'Spring Security',
  //       category: 'backend',
  //       reason: 'Battle-tested OAuth 2.0 authorization server',
  //     },
  //     {
  //       name: 'PostgreSQL',
  //       category: 'database',
  //       reason: 'ACID compliance for user credentials and audit logs',
  //     },
  //     {
  //       name: 'Redis',
  //       category: 'database',
  //       reason: 'Session storage with automatic expiration',
  //     },
  //     {
  //       name: 'AWS KMS',
  //       category: 'cloud',
  //       reason: 'Key rotation for JWT signing without downtime',
  //     },
  //     {
  //       name: 'AWS WAF',
  //       category: 'cloud',
  //       reason: 'Protection against credential stuffing attacks',
  //     },
  //     {
  //       name: 'Secrets Manager',
  //       category: 'cloud',
  //       reason: 'Secure storage of OAuth client secrets',
  //     },
  //   ],
  //   architectureDescription:
  //     'Stateless JWT authentication with Redis-backed session store for refresh tokens. Asymmetric keys stored in KMS with automatic rotation. Rate limiting at WAF level with gradual backoff. Multi-region deployment for disaster recovery.',
  //   keyDecisions: [
  //     {
  //       title: 'JWT with Short Expiry',
  //       description:
  //         '15-minute access tokens with sliding refresh tokens for security.',
  //       tradeoffs:
  //         'More frequent token refresh; offset by transparent client-side handling.',
  //     },
  //     {
  //       title: 'Asymmetric JWT Signing',
  //       description:
  //         'RSA keys allow token verification without sharing secrets.',
  //       tradeoffs:
  //         'Larger token size; acceptable for enterprise use cases.',
  //     },
  //     {
  //       title: 'Device Fingerprinting',
  //       description:
  //         'Refresh tokens bound to device fingerprint to prevent theft.',
  //       tradeoffs:
  //         'Legitimate device changes require re-authentication.',
  //     },
  //   ],
  //   performanceMetrics: [
  //     { label: 'Auth Latency', value: '< 50ms', context: 'Token validation P99' },
  //     { label: 'Availability', value: '99.99%', context: 'Multi-region deployment' },
  //     { label: 'Active Sessions', value: '500K+', context: 'Concurrent users' },
  //     { label: 'Security Score', value: 'A+', context: 'Security audit rating' },
  //   ],
  //   securityFeatures: [
  //     'PKCE flow for public clients',
  //     'Argon2id password hashing',
  //     'Brute force protection with exponential backoff',
  //     'TOTP and WebAuthn MFA support',
  //     'Comprehensive audit logging',
  //     'GDPR-compliant data handling',
  //   ],
  //   outcomes: [
  //     'Onboarded 12 internal applications within 3 months',
  //     'Zero security incidents since launch',
  //     'Reduced authentication implementation time by 90%',
  //     'Passed SOC 2 Type II audit',
  //   ],
  //   githubUrl: 'https://github.com/nitesh/auth-service',
  //   featured: true,
  //   category: 'authentication',
  //   image: '/images/projects/auth-service.png',
  // },
  {
    id: 'data-pipeline',
    title: 'Serverless Data Pipeline',
    tagline: 'ETL processing at scale with minimal cost',
    description:
      'An event-driven data pipeline processing 10GB+ daily from multiple sources with automatic scaling and near-real-time availability.',
    problemStatement:
      'Traditional ETL tools are expensive and require dedicated infrastructure. Business teams need fresh data for analytics but overnight batch processing is too slow.',
    techStack: [
      {
        name: 'AWS Lambda',
        category: 'cloud',
        reason: 'Pay-per-invocation for unpredictable workloads',
      },
      {
        name: 'AWS Glue',
        category: 'cloud',
        reason: 'Managed Spark for heavy transformation jobs',
      },
      {
        name: 'S3',
        category: 'cloud',
        reason: 'Cost-effective data lake storage with lifecycle policies',
      },
      {
        name: 'Amazon Athena',
        category: 'cloud',
        reason: 'Serverless SQL queries on S3 data',
      },
      {
        name: 'Step Functions',
        category: 'cloud',
        reason: 'Orchestration with built-in error handling and retries',
      },
      {
        name: 'EventBridge',
        category: 'cloud',
        reason: 'Schedule and event-driven pipeline triggers',
      },
    ],
    architectureDescription:
      'S3 event-driven architecture with Lambda for lightweight transforms and Glue for heavy lifting. Data organized in S3 using Hive partitioning for query efficiency. Step Functions orchestrate complex workflows with parallel branches and error handling.',
    keyDecisions: [
      {
        title: 'Lambda vs Glue Decision',
        description:
          'Lambda for files < 100MB, Glue for larger datasets requiring Spark.',
        tradeoffs:
          'Two codebases to maintain; unified with shared transformation logic.',
      },
      {
        title: 'Parquet File Format',
        description:
          'Columnar storage for 10x query performance improvement.',
        tradeoffs:
          'Write overhead; acceptable for read-heavy analytics workload.',
      },
      {
        title: 'Partition Strategy',
        description:
          'Partitioned by date and source for optimal Athena query pruning.',
        tradeoffs:
          'Risk of small files; implemented file compaction job.',
      },
    ],
    performanceMetrics: [
      { label: 'Daily Volume', value: '10GB+', context: 'From 8 data sources' },
      { label: 'Processing Time', value: '< 15min', context: 'End-to-end latency' },
      { label: 'Query Performance', value: '< 10s', context: 'Typical Athena query' },
      { label: 'Monthly Cost', value: '$120', context: 'All AWS services' },
    ],
    securityFeatures: [
      'S3 bucket encryption with customer-managed keys',
      'VPC endpoints for private data access',
      'IAM roles with least privilege',
      'Data masking for PII columns',
    ],
    outcomes: [
      'Reduced data freshness from 24h to 15min',
      'Saved $2,000/month vs previous ETL tool',
      'Enabled self-service analytics for business teams',
      'Processed 3TB during peak month without issues',
    ],
    githubUrl: 'https://github.com/nitesh/serverless-data-pipeline',
    featured: false,
    category: 'data-processing',
    image: '/images/projects/data-pipeline.png',
  },
  {
    id: 'api-gateway',
    title: 'Custom API Gateway',
    tagline: 'Intelligent request routing and rate limiting',
    description:
      'A lightweight API gateway with dynamic routing, rate limiting, request transformation, and observability for microservices architecture.',
    problemStatement:
      'Off-the-shelf API gateways add latency and cost. A custom solution provides exactly the features needed while maintaining full control over routing logic.',
    techStack: [
      {
        name: 'Spring Cloud Gateway',
        category: 'backend',
        reason: 'Non-blocking I/O for high-throughput routing',
      },
      {
        name: 'Redis',
        category: 'database',
        reason: 'Distributed rate limiting with sliding window',
      },
      {
        name: 'Consul',
        category: 'devops',
        reason: 'Dynamic service discovery and health checking',
      },
      {
        name: 'Micrometer',
        category: 'backend',
        reason: 'Prometheus-compatible metrics export',
      },
      {
        name: 'Resilience4j',
        category: 'backend',
        reason: 'Circuit breaker pattern for fault tolerance',
      },
    ],
    architectureDescription:
      'Reactive gateway built on Spring WebFlux with filter chain for cross-cutting concerns. Service discovery via Consul with health-based routing. Redis-backed rate limiter with configurable policies per API key and endpoint.',
    keyDecisions: [
      {
        title: 'Spring Cloud Gateway vs Nginx',
        description:
          'Chose Spring for Java ecosystem integration and custom filter development.',
        tradeoffs:
          'Higher memory footprint; acceptable for feature flexibility.',
      },
      {
        title: 'Sliding Window Rate Limiting',
        description:
          'Smoother rate limiting than fixed window with Redis sorted sets.',
        tradeoffs:
          'More Redis operations; optimized with Lua scripts.',
      },
      {
        title: 'Circuit Breaker per Service',
        description:
          'Isolated failure domains to prevent cascade failures.',
        tradeoffs:
          'Configuration complexity; centralized in config server.',
      },
    ],
    performanceMetrics: [
      { label: 'Added Latency', value: '< 5ms', context: 'Gateway overhead P99' },
      { label: 'Throughput', value: '50K RPS', context: 'Per gateway instance' },
      { label: 'Memory', value: '256MB', context: 'JVM heap per instance' },
    ],
    securityFeatures: [
      'JWT validation at edge',
      'Request body validation',
      'IP whitelisting for admin APIs',
      'Request/response logging with PII redaction',
    ],
    outcomes: [
      'Reduced downstream service authentication logic',
      'Centralized rate limiting across 15 microservices',
      'Improved API documentation with OpenAPI aggregation',
      'Enabled canary deployments with weighted routing',
    ],
    githubUrl: 'https://github.com/nitesh/api-gateway',
    featured: false,
    category: 'api-design',
    image: '/images/projects/api-gateway.png',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((p) => p.category === category);
}
