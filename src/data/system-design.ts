import type { SystemDesign } from '@/types';

export const systemDesigns: SystemDesign[] = [
  {
    id: 'scalable-order-system',
    title: 'Scalable Order Processing System',
    description:
      'Architecture for handling high-throughput e-commerce orders with consistency guarantees and real-time inventory management.',
    components: [
      {
        name: 'API Gateway',
        type: 'gateway',
        description: 'Entry point for all order requests with rate limiting and authentication',
        awsService: 'Amazon API Gateway',
      },
      {
        name: 'Order Service',
        type: 'service',
        description: 'Validates and creates orders, publishes events for async processing',
        awsService: 'ECS Fargate',
      },
      {
        name: 'Inventory Service',
        type: 'service',
        description: 'Manages stock levels with distributed locking for reservations',
        awsService: 'ECS Fargate',
      },
      {
        name: 'Order Queue',
        type: 'queue',
        description: 'Decouples order creation from downstream processing',
        awsService: 'Amazon SQS',
      },
      {
        name: 'Primary Database',
        type: 'database',
        description: 'Source of truth for order data with ACID transactions',
        awsService: 'Amazon RDS PostgreSQL',
      },
      {
        name: 'Cache Layer',
        type: 'cache',
        description: 'Inventory cache and distributed locks',
        awsService: 'Amazon ElastiCache Redis',
      },
      {
        name: 'Notification Service',
        type: 'service',
        description: 'Sends order confirmations via email/SMS',
        awsService: 'Lambda + SES/SNS',
      },
    ],
    scalabilityApproach: `
**Horizontal Scaling**: All services are stateless and run on ECS with auto-scaling based on CPU/memory and custom metrics (queue depth).

**Database Scaling**: Read replicas for query-heavy operations. Connection pooling with PgBouncer. Consider sharding if single database becomes bottleneck.

**Queue-Based Load Leveling**: SQS absorbs traffic spikes. Workers scale based on queue depth, preventing database overload.

**Caching Strategy**: Redis caches hot inventory data with 5-second TTL. Cache-aside pattern ensures freshness without sacrificing read performance.
    `,
    reliabilityFeatures: [
      'Multi-AZ deployment for all critical services',
      'Dead Letter Queue for failed order processing with alerting',
      'Idempotent order creation using client-provided idempotency keys',
      'Circuit breaker pattern for downstream service calls',
      'Automated health checks and instance replacement',
    ],
    securityMeasures: [
      'JWT authentication validated at API Gateway',
      'VPC isolation with private subnets for services and databases',
      'Encryption at rest using AWS KMS customer-managed keys',
      'WAF rules protecting against common attack patterns',
      'IAM roles with least-privilege access for each service',
    ],
    costOptimizations: [
      'Spot instances for non-critical background workers (70% savings)',
      'Reserved capacity for predictable baseline load',
      'S3 Intelligent-Tiering for order documents and receipts',
      'Right-sizing instances based on CloudWatch metrics',
      'SQS long polling to reduce API calls',
    ],
    evolutionStages: [
      {
        version: 'v1',
        title: 'Monolithic Start',
        changes: [
          'Single Spring Boot application',
          'PostgreSQL database',
          'Synchronous order processing',
        ],
        reason: 'Quick to market, simple deployment, manageable complexity',
      },
      {
        version: 'v2',
        title: 'Async Processing',
        changes: [
          'Added SQS for order processing',
          'Separated notification logic',
          'Introduced Redis caching',
        ],
        reason: 'Handle growing traffic, improve response times, add reliability',
      },
      {
        version: 'v3',
        title: 'Full Microservices',
        changes: [
          'Split into Order, Inventory, Notification services',
          'Event-driven communication',
          'Independent scaling per service',
        ],
        reason: 'Team scaling, independent deployments, fault isolation',
      },
    ],
  },
  {
    id: 'url-shortener-architecture',
    title: 'High-Performance URL Shortener',
    description:
      'Globally distributed URL shortening service optimized for minimal redirect latency and high availability.',
    components: [
      {
        name: 'CDN Edge',
        type: 'cdn',
        description: 'Caches redirects at edge locations for sub-50ms latency',
        awsService: 'Amazon CloudFront',
      },
      {
        name: 'API Service',
        type: 'service',
        description: 'Handles URL creation and analytics queries',
        awsService: 'ECS Fargate',
      },
      {
        name: 'URL Database',
        type: 'database',
        description: 'Stores URL mappings with single-digit ms reads',
        awsService: 'Amazon DynamoDB',
      },
      {
        name: 'Hot Cache',
        type: 'cache',
        description: 'Caches frequently accessed URLs',
        awsService: 'Amazon ElastiCache Redis',
      },
      {
        name: 'Analytics Stream',
        type: 'queue',
        description: 'Streams click events for real-time analytics',
        awsService: 'Amazon Kinesis',
      },
      {
        name: 'Analytics Store',
        type: 'database',
        description: 'Time-series data for click analytics',
        awsService: 'Amazon Timestream',
      },
    ],
    scalabilityApproach: `
**Edge Caching**: CloudFront caches redirects at 400+ edge locations. 94% cache hit rate means most requests never reach origin.

**DynamoDB On-Demand**: Automatic scaling handles traffic spikes without capacity planning. Consistent performance at any scale.

**Snowflake IDs**: Distributed unique ID generation without coordination. Each instance generates IDs independently using timestamp + machine ID + sequence.

**Read-Heavy Optimization**: Multi-layer caching (CloudFront → Redis → DynamoDB) optimizes for read-heavy workload pattern.
    `,
    reliabilityFeatures: [
      'CloudFront provides built-in DDoS protection',
      'DynamoDB global tables for multi-region failover',
      'Health checks with automatic origin failover',
      'Graceful degradation: serve from cache if origin unavailable',
    ],
    securityMeasures: [
      'URL validation prevents malicious redirects',
      'Rate limiting per API key prevents abuse',
      'HTTPS enforced on all endpoints',
      'Click fraud detection using IP fingerprinting',
    ],
    costOptimizations: [
      'CloudFront caching reduces origin requests by 94%',
      'DynamoDB on-demand pricing—pay only for actual usage',
      'S3 lifecycle policies for old analytics data',
      'Reserved capacity for CloudFront if predictable traffic',
    ],
    evolutionStages: [
      {
        version: 'v1',
        title: 'Simple Implementation',
        changes: [
          'Single EC2 instance',
          'PostgreSQL database',
          'Auto-increment IDs',
        ],
        reason: 'Validate concept, minimal infrastructure',
      },
      {
        version: 'v2',
        title: 'Scalable Backend',
        changes: [
          'Migrated to DynamoDB',
          'Implemented Snowflake IDs',
          'Added Redis caching',
        ],
        reason: 'Handle growth, eliminate single points of failure',
      },
      {
        version: 'v3',
        title: 'Global Distribution',
        changes: [
          'CloudFront for edge caching',
          'DynamoDB global tables',
          'Real-time analytics pipeline',
        ],
        reason: 'Global users need low latency, analytics for business value',
      },
    ],
  },
];

export function getSystemDesignById(id: string): SystemDesign | undefined {
  return systemDesigns.find((sd) => sd.id === id);
}
