export interface DocPage {
  id: string;
  title: string;
  content: string;
  url: string;
  lastUpdated: string;
}

export const docs: DocPage[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: `Welcome to iVerify - A Comprehensive Indigent Management System for South African Municipalities.

    iVerify is a modern, web-based platform designed to streamline the management of indigent applications. Our system provides an efficient, transparent, and user-friendly solution for processing and tracking indigent status applications.

    Key Features:
    - Real-time application processing and tracking
    - Role-based access for administrators, staff, and applicants
    - Advanced verification systems
    - Document management
    - Statistical reporting and analytics
    - Municipality-specific customization`,
    url: '/docs/introduction',
    lastUpdated: '2025-01-28',
  },
  {
    id: 'installation',
    title: 'Installation',
    content: `Setting up iVerify requires the following prerequisites:

    Prerequisites:
    - Node.js (v16 or higher)
    - npm or yarn
    - PostgreSQL (via Supabase)
    
    Installation Steps:
    1. Clone the repository
    2. Install dependencies
    3. Configure environment variables
    4. Set up Supabase
    5. Start the development server
    
    Detailed instructions for each step are provided in this guide.`,
    url: '/docs/installation',
    lastUpdated: '2025-01-28',
  },
  {
    id: 'quickstart',
    title: 'Quick Start',
    content: `Get started with iVerify quickly:

    1. System Access:
    - Admin Portal: Manage users, applications, and system settings
    - Staff Portal: Process applications and handle verifications
    - Applicant Portal: Submit and track applications
    
    2. Basic Operations:
    - Processing new applications
    - Reviewing submitted documents
    - Updating application status
    - Generating reports
    
    3. Common Workflows:
    - Application submission process
    - Verification workflow
    - Status updates and notifications
    - Document management`,
    url: '/docs/quickstart',
    lastUpdated: '2025-01-28',
  },
  {
    id: 'architecture',
    title: 'Architecture',
    content: `iVerify System Architecture:

    Frontend Architecture:
    - React 18 with TypeScript
    - Redux Toolkit for state management
    - Tailwind CSS for styling
    - Radix UI for components
    - Framer Motion for animations

    Backend Architecture:
    - Supabase for backend services
    - PostgreSQL database
    - Row Level Security
    - Real-time subscriptions
    
    Security Features:
    - Role-based access control
    - Secure authentication
    - Data encryption
    - Audit logging
    
    Core Components:
    - Authentication System
    - Application Processing Engine
    - Document Management System
    - Reporting Module
    - Municipality Management
    - Notification Service`,
    url: '/docs/architecture',
    lastUpdated: '2024-01-29',
  },
  {
    id: 'subsystems',
    title: 'Subsystems',
    content: `iVerify Subsystems:

    1. Authentication Subsystem:
    - User authentication
    - Role-based access control
    - Session management

    2. Application Processing Subsystem:
    - New application processing
    - Application status updates
    - Document verification

    3. Document Management Subsystem:
    - Document upload and storage
    - Document retrieval and download
    - Document version control

    4. Reporting Subsystem:
    - Statistical data generation
    - Custom report creation
    - Data export

    5. Municipality Management Subsystem:
    - Municipality configuration
    - User role management
    - Customization options`,
    url: '/docs/subsystems',
    lastUpdated: '2024-01-29',
  },
  {
    id: 'configuration',
    title: 'Configuration',
    content: `Configuring iVerify for Your Municipality:

    Environment Setup:
    - Supabase configuration
    - Authentication settings
    - Storage configuration
    - API endpoints
    
    Municipality Settings:
    - Branding customization
    - Workflow configuration
    - User role management
    - Document requirements
    - Verification rules
    
    System Customization:
    - Custom fields configuration
    - Workflow automation rules
    - Notification templates
    - Report customization
    - Integration settings`,
    url: '/docs/configuration',
    lastUpdated: '2025-01-28',
  },
  {
    id: 'user-guide',
    title: 'User Guide',
    content: `Comprehensive guide for different user roles in iVerify:

    1. Administrator Guide:
    - User management
    - System configuration
    - Report generation
    - Audit trail monitoring

    2. Staff Guide:
    - Processing applications
    - Document verification
    - Status updates
    - Communication management

    3. Applicant Guide:
    - Application submission
    - Document upload
    - Status tracking
    - Profile management`,
    url: '/docs/user-guide',
    lastUpdated: '2025-01-28',
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    content: `Complete API documentation for iVerify system integration:

    1. Authentication APIs
    - Login endpoints
    - Token management
    - Role-based access

    2. Application APIs
    - CRUD operations
    - Status management
    - Document handling

    3. Reporting APIs
    - Statistical data
    - Custom report generation
    - Data export`,
    url: '/docs/api-reference',
    lastUpdated: '2025-01-28',
  },
  {
    id: 'security',
    title: 'Security Guide',
    content: `Security implementation and best practices:

    1. Authentication Security
    - Password policies
    - MFA setup
    - Session management

    2. Data Protection
    - Encryption standards
    - Access controls
    - Audit logging

    3. Compliance
    - POPIA compliance
    - Data retention
    - Privacy controls`,
    url: '/docs/security',
    lastUpdated: '2025-01-28',
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    content: `Common issues and solutions:

    1. Installation Issues
    - Database connection
    - Environment setup
    - Dependency conflicts

    2. Runtime Issues
    - Performance optimization
    - Error handling
    - Debug procedures

    3. Common Problems
    - User access issues
    - Document upload problems
    - Integration errors`,
    url: '/docs/troubleshooting',
    lastUpdated: '2025-01-28',
  },
  {
    id: 'deployment',
    title: 'Deployment Guide',
    content: `Production deployment guidelines:

    1. Infrastructure Setup
    - Server requirements
    - Network configuration
    - SSL/TLS setup

    2. Deployment Process
    - Build process
    - Database migration
    - Environment configuration

    3. Monitoring
    - Performance monitoring
    - Error tracking
    - Usage analytics`,
    url: '/docs/deployment',
    lastUpdated: '2025-01-28',
  },
  {
    id: 'authentication',
    title: 'Authentication',
    content: `Authentication and Authorization:

    1. Authentication System:
    - JWT-based authentication
    - Secure password management
    - Email verification
    - Password reset functionality
    - Session management

    2. Role-Based Access Control:
    - Admin: Full system access
    - Staff: Application processing
    - Customer: Basic access

    3. Security Features:
    - Password requirements
    - Session management
    - Security headers
    - CSRF protection
    - XSS prevention`,
    url: '/docs/authentication',
    lastUpdated: '2024-01-29',
  }
];
