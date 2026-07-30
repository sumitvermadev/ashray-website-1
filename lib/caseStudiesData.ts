export interface EngineeringPattern {
  id: number;
  icon: string;
  title: string;
  solution: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  badge: string;
  tags: string[];
  title: string;
  executiveChallenge: string;
  executiveSolution: string;
  entitySyncChain?: string[];
  metrics: {
    value: string;
    label: string;
  }[];
  techPalette?: {
    title: string;
    subtitle: string;
    patterns: EngineeringPattern[];
  };
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "cs-sanctions-screening",
    slug: "real-time-sanctions-screening-2gp",
    badge: "ENTERPRISE CASE STUDY",
    tags: ["2GP Managed Package", "AML & KYC Screening", "Event-Driven Telemetry"],
    title: "Native Real-Time Sanctions Screening & Compliance Workflow Engine",
    executiveChallenge:
      "Regulated enterprises faced severe customer onboarding friction. Off-platform sanctions screening required manual data export and re-keying into external verification portals, delaying onboarding by 24–48 hours, causing a 14% customer drop-off rate, and creating massive compliance audit vulnerabilities across disconnected web tools.",
    executiveSolution:
      "Architected a native Salesforce Second-Generation Managed Package (2GP) that embeds real-time identity screening, automated officer disposition workspaces, and continuous background watchlist monitoring directly into CRM record lifecycles—delivering sub-second verification, zero customer churn, and 100% audit-ready data persistence.",
    entitySyncChain: ["Platform Events", "HMAC-SHA256 Signatures", "Officer Workspace", "Audit Log Hashing"],
    metrics: [
      { value: "< 2 Secs", label: "Average Identity Verification Speed" },
      { value: "92%", label: "Reduction in Compliance Turnaround Time" },
      { value: "100%", label: "Audit-Ready CRM Compliance Telemetry" },
      { value: "80%", label: "Storage Footprint Reduction via Log Aggregation" },
    ],
    techPalette: {
      title: "Technical Architecture & Event-Driven Telemetry",
      subtitle: "[MULTI-TIERED 2GP ARCHITECTURE & CRYPTOGRAPHIC SECURITY]",
      patterns: [
        {
          id: 1,
          icon: "bug_report",
          title: "Decoupled Telemetry on Rollback",
          solution:
            "Integrated a Platform Event Bus framework that publishes diagnostic logs asynchronously outside primary transaction boundaries, guaranteeing 100% error persistence even when database DML transactions trigger a rollback.",
        },
        {
          id: 2,
          icon: "dataset",
          title: "Log Storage Bloat Prevention",
          solution:
            "Engineered an in-flight hashing algorithm (Details + Endpoint + Payload + StatusCode) within the event trigger that aggregates duplicate error bursts into single entries with count headers, reducing subscriber log storage consumption by 80%.",
        },
        {
          id: 3,
          icon: "schema",
          title: "Dynamic Runtime Namespace & Schema Adapter",
          solution:
            "Implemented dynamic class namespace inspection (Class.getName()) and runtime token injection (pkg__), ensuring zero-code package compatibility across standard, person account, and custom client CRM schemas.",
        },
        {
          id: 4,
          icon: "security",
          title: "HMAC-SHA256 Anti-Replay Security",
          solution:
            "Built a cryptographic authentication engine generating binary HMAC-SHA256 signatures over canonical URL paths, Unix epoch timestamps, and request bodies to block payload tampering and man-in-the-middle replay attacks.",
        },
        {
          id: 5,
          icon: "speed",
          title: "Selective SOQL Index Optimization",
          solution:
            "Structured all compliance history queries around indexed foreign-key lookup fields, eliminating un-indexed table scans and guaranteeing sub-second response times over enterprise data volumes.",
        },
        {
          id: 6,
          icon: "admin_panel_settings",
          title: "Tiered Multi-Tenant Security",
          solution:
            "Protected Custom Metadata stores global API endpoints and master key structures outside subscriber visibility, while Hierarchy Custom Settings isolate tenant-specific tokens.",
        },
      ],
    },
  },
  {
    id: "cs-usage-billing",
    slug: "usage-based-billing-2gp",
    badge: "ENTERPRISE CASE STUDY",
    tags: ["2GP Managed Package", "Usage-Based Billing", "Automated Data Sync"],
    title: "Next-Gen Usage Billing & Turnkey 2GP CRM Integration",
    executiveChallenge:
      "Sales teams closed hybrid usage-based contracts, but disconnected back-office billing systems required hundreds of hours of manual data re-entry. Onboarding was delayed by legacy data migration bottlenecks where thousands of historical accounts caused unbilled revenue leakage and compliance audit risks without platform limit safety.",
    executiveSolution:
      "Architected a turnkey 2nd Generation Managed Package (2GP) that seamlessly unifies Salesforce CRM with modern billing engines. Combines real-time bi-directional event streaming with an automated initial bulk data sync batch engine. Automatically provisions customer profiles upon Opportunity Closed-Won, auto-replenishes credit wallets based on usage thresholds, and embeds real-time invoice PDFs directly inside Salesforce account records.",
    entitySyncChain: ["GET Customers", "GET Plans", "GET Subscriptions", "GET Invoices & Credits"],
    metrics: [
      { value: "$20M+", label: "Billing Volume Processed" },
      { value: "80+", label: "Active Client Salesforce Orgs" },
      { value: "100%", label: "Revenue & Credit Accuracy" },
      { value: "Seconds", label: "Automated Customer Provisioning" },
    ],
    techPalette: {
      title: "Bi-Directional 2GP Architecture & State Machine Callout Engine",
      subtitle: "[TECHNICAL SPECIFICATION FOR CTOs & SYSTEM ARCHITECTS]",
      patterns: [
        {
          id: 1,
          icon: "published_with_changes",
          title: "Initial Bulk Data Sync & Sequential Entity Callout Chaining",
          solution:
            "Engineered a Database.Batchable Apex ingestion engine implementing Database.AllowsCallouts to process bulk historical accounts in controlled batch scopes (50-100 records per batch), executing sequential chained HTTP GET callouts across entities (GET Customers ➔ GET Plans ➔ GET Subscriptions ➔ GET Invoices) without hitting 100-callout Apex limits.",
        },
        {
          id: 2,
          icon: "sync_alt",
          title: "Dynamic Entity Request Mutator & State Machine",
          solution:
            "Built a dynamic HTTP Request State Machine that sequences multi-entity data retrieval callouts (GET Customers ➔ GET Plans ➔ GET Subscriptions) to construct dependent JSON payloads before executing DML record upserts.",
        },
        {
          id: 3,
          icon: "dataset",
          title: "Inbound Webhook Concurrency & Governor Limits",
          solution:
            "Built a two-tier event pipeline (HTTP Ingestion -> Staging Queue -> Platform Events -> Async Queueable Workers) to prevent Apex CPU timeouts and SOQL limit crashes during high-volume end-of-month billing surges.",
        },
        {
          id: 4,
          icon: "memory",
          title: '"Uncommitted Work Pending" Exceptions',
          solution:
            "Decoupled database DML mutations from external HTTP API calls using isolated Queueable Workers and @future(callout=true) execution threads.",
        },
        {
          id: 5,
          icon: "schema",
          title: "Schema Rigidity Across Client Orgs",
          solution:
            "Engineered a Runtime Metadata Reflection Engine using Custom Metadata Types to dynamically serialize client-custom CRM fields into API payloads without code deployments.",
        },
        {
          id: 6,
          icon: "lock_reset",
          title: "Transient Network Failures & Row Locking",
          solution:
            "Implemented a self-healing background Apex recovery batch engine that automatically catches UNABLE_TO_LOCK_ROW errors and retries transactions using exponential backoff logic.",
        },
        {
          id: 7,
          icon: "bug_report",
          title: "Rollback-Resilient Error Diagnostics Persistence",
          solution:
            "Error diagnostics are published over an independent Platform Event channel that persists securely in the database even when primary DML business transactions trigger a rollback.",
        },
        {
          id: 8,
          icon: "code_blocks",
          title: "Low-Code Invocable Serialization",
          solution:
            "Package-supplied Apex Data Transfer Objects (DTOs) expose typed variables to Salesforce Flow Builder via Invocable parameters for clean JSON array formatting.",
        },
      ],
    },
  },
  {
    id: "cs-travel-ops",
    slug: "automated-enterprise-travel-operations",
    badge: "ENTERPRISE CASE STUDY",
    tags: ["Native Data Sync", "Financial Ledger Alignment", "Self-Healing Batch Engine"],
    title: "Automated Enterprise Travel Operations & Data Synchronization",
    executiveChallenge:
      "Managing global travel operations involves coordinating complex, multi-segmented itineraries across flights, hotels, cruises, and tours. External booking platforms relied on manual data entry or delayed batch exports, creating 24–48 hour operational lags, financial reconciliation errors across multi-currency supplier invoices, and expensive middleware licensing costs.",
    executiveSolution:
      "Architected a custom, enterprise-grade data synchronization platform natively within Salesforce that continuously monitors external reservation engines. Automatically ingests multi-segment booking itineraries, aligns supplier cost allocations and agent commissions in real time, and handles global multi-currency conversions with $0 added middleware software costs.",
    entitySyncChain: ["Flight Staging Queue", "Hotel & Car Sync", "PNR State Machine", "Automated Booking"],
    metrics: [
      { value: "< 2 Mins", label: "Synchronization Latency Speed" },
      { value: "70%+", label: "Reduction in Manual Accounting Effort" },
      { value: "100%", label: "Automated Idempotent Record Matching" },
      { value: "$0", label: "Added Middleware Licensing Fees" },
    ],
    techPalette: {
      title: "Technical Architecture & Self-Healing Data Synchronization",
      subtitle: "[NATIVE MULTI-SEGMENT INGESTION & FAULT-TOLERANT BATCH LIFECYCLE]",
      patterns: [
        {
          id: 1,
          icon: "bug_report",
          title: "Decoupled Diagnostic Telemetry on Rollback",
          solution:
            "Implemented Platform Event Bus logging that captures diagnostic events in a separate transaction context, guaranteeing diagnostic log retention even when primary database DML transactions trigger a rollback.",
        },
        {
          id: 2,
          icon: "autorenew",
          title: "Dynamic Self-Healing Batch Lifecycle Management",
          solution:
            "Engineered an automated batch finish routine that inspects active queue schedules, terminates stale job handles, and dynamically reschedules continuous polling without job queue overflow.",
        },
        {
          id: 3,
          icon: "memory",
          title: "Governed Micro-Batch XML Parsing",
          solution:
            "Restricted processing scope to configurable micro-batches (20 records per batch scope), maintaining Apex heap allocation well below maximum platform limits during complex DOM parsing.",
        },
        {
          id: 4,
          icon: "shield",
          title: "Bulk Partial DML Isolation",
          solution:
            "Executed bulk database DML operations with allOrNone = false, ensuring valid records persist cleanly while individual failed payloads are logged and isolated.",
        },
        {
          id: 5,
          icon: "account_tree",
          title: "Record Type Polymorphism & Metadata Control",
          solution:
            "Employed metadata-driven record type mappings for line-item bookings, allowing new booking categories to be integrated with zero code redeployments.",
        },
        {
          id: 6,
          icon: "lock",
          title: "Secure Transport & Named Credentials",
          solution:
            "Encapsulated external endpoint URIs, OAuth tokens, and TLS/HTTPS transport security using Named Credentials with zero plain-text token exposure.",
        },
      ],
    },
  },
  {
    id: "cs-logistics",
    slug: "logistics-async-data-ingestion",
    badge: "ENTERPRISE CASE STUDY",
    tags: ["Experience Cloud", "Configurable CSV Engine", "Validation Layer"],
    title: "B2B Logistics Asynchronous CSV Ingestion & Configurable Validation Engine",
    executiveChallenge:
      "Operations teams spent thousands of manual hours parsing vendor CSV files and processing complex logistics manifests. Legacy systems lacked first-layer validation, causing invalid data ingestion and requiring expensive Apex code redeployments whenever vendor CSV template formats changed.",
    executiveSolution:
      "Architected an asynchronous, metadata-driven CSV ingestion engine natively inside Salesforce. Enforces strict first-layer data validation prior to manipulation, isolates invalid rows, and decouples CSV template mapping into configuration parameters—allowing instant template format adjustments without code deployments.",
    entitySyncChain: ["CSV Pre-Validation", "Zero-Code Mapping", "Micro-Batch Parser", "Ledger Reconciliation"],
    metrics: [
      { value: "80+", label: "Hours Saved Per Week" },
      { value: "100%", label: "First-Layer Validation Accuracy" },
      { value: "Zero", label: "Code Deployments for Template Changes" },
      { value: "10x", label: "Ingestion Performance Boost" },
    ],
    techPalette: {
      title: "Metadata-Driven CSV Ingestion & Dynamic Validation Pipeline",
      subtitle: "[FIRST-LAYER VALIDATION & ZERO-CODE TEMPLATE ADAPTABILITY]",
      patterns: [
        {
          id: 1,
          icon: "verified_user",
          title: "First-Layer Schema & Field Validation",
          solution:
            "Enforces pre-ingestion field data type, syntax, and required parameter checks at the ingestion boundary before any database DML manipulation or downstream automation executes.",
        },
        {
          id: 2,
          icon: "settings_suggest",
          title: "Metadata-Driven Dynamic CSV Field Mapping",
          solution:
            "Maps CSV columns to Salesforce SObject fields via Custom Metadata Types—enabling instant template format updates via simple configuration changes without code deployments.",
        },
        {
          id: 3,
          icon: "memory",
          title: "Asynchronous Chunking & Heap Limit Governance",
          solution:
            "Ingests large CSV files into memory-efficient Queueable chunks to process high-volume logistics manifests without hitting Apex heap limits.",
        },
        {
          id: 4,
          icon: "rule_folder",
          title: "Partial Processing & Row-Level Error Isolation",
          solution:
            "Uses allOrNone = false database operations, allowing valid CSV rows to process cleanly while isolating invalid rows into dedicated error staging logs.",
        },
        {
          id: 5,
          icon: "bolt",
          title: "Event-Driven Automation Execution",
          solution:
            "Triggers downstream record automation and Flow workflows asynchronously post-validation to preserve transaction execution speed.",
        },
        {
          id: 6,
          icon: "security",
          title: "Role-Based Portal Access & Security",
          solution:
            "Operates securely within Experience Cloud portals with encrypted file transport and strict org-wide sharing policy enforcement.",
        },
      ],
    },
  },
];
