import React from 'react';
import { LastUpdated } from '../components/LastUpdated';
import { docs } from '../data/docs';

export function Architecture() {
  const pageData = docs.find(doc => doc.id === 'architecture');

  return (
    <div className="prose dark:prose-invert prose-indigo max-w-none">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">System Architecture</h1>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {pageData && <LastUpdated date={pageData.lastUpdated} />}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Overview</h2>
      <p>
        iVerify is built on a modern, scalable architecture that leverages the power of React for the frontend
        and Supabase for the backend. This architecture ensures high performance, security, and maintainability
        while providing a seamless user experience.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frontend Architecture</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm my-6">
        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-0">Core Technologies</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <li>
            <strong className="text-gray-900 dark:text-white">React 18</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Latest React version with concurrent features
            </p>
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">TypeScript</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Type-safe development environment
            </p>
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">Redux Toolkit</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              State management with modern Redux
            </p>
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">React Router</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Client-side routing and navigation
            </p>
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">UI Components</h3>
      <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg my-4">
        <ul>
          <li>
            <strong className="text-gray-900 dark:text-white">Tailwind CSS:</strong> Utility-first CSS framework for responsive design
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">Radix UI:</strong> Accessible component primitives
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">Framer Motion:</strong> Animation library for smooth transitions
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">Lucide React:</strong> Modern icon library
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Backend Architecture</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm my-6">
        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-0">Supabase Integration</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Database</h4>
            <ul>
              <li>PostgreSQL database with PostGIS extensions</li>
              <li>Real-time subscriptions for live updates</li>
              <li>Row Level Security for data protection</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Authentication</h4>
            <ul>
              <li>JWT-based authentication</li>
              <li>Role-based access control</li>
              <li>Multiple auth providers support</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Storage</h4>
            <ul>
              <li>Secure file storage for documents</li>
              <li>Image optimization and processing</li>
              <li>Access control policies</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Core Components</h2>
      <div className="space-y-6">
        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-0">Authentication System</h3>
          <ul>
            <li>Multi-factor authentication support</li>
            <li>Session management</li>
            <li>Password policies and recovery</li>
            <li>Role-based access control</li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-0">Application Processing Engine</h3>
          <ul>
            <li>Workflow management</li>
            <li>Status tracking</li>
            <li>Verification processes</li>
            <li>Automated checks</li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-0">Document Management</h3>
          <ul>
            <li>Secure document storage</li>
            <li>Version control</li>
            <li>Access logging</li>
            <li>Document validation</li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-0">Reporting Module</h3>
          <ul>
            <li>Statistical analysis</li>
            <li>Custom report generation</li>
            <li>Data export capabilities</li>
            <li>Dashboard analytics</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Security Features</h2>
      <div className="bg-red-50 dark:bg-red-900/30 border border-red-100 dark:border-red-900/50 rounded-lg p-6 my-6">
        <h3 className="text-red-800 dark:text-red-200 mt-0">Security Measures</h3>
        <ul className="text-red-700 dark:text-red-300">
          <li>End-to-end encryption for sensitive data</li>
          <li>Regular security audits and penetration testing</li>
          <li>GDPR and POPIA compliance measures</li>
          <li>Comprehensive audit logging</li>
          <li>Secure session management</li>
          <li>Input validation and sanitization</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Performance Optimization</h2>
      <div className="bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-900/50 rounded-lg p-6">
        <ul className="text-green-700 dark:text-green-300">
          <li>Code splitting and lazy loading</li>
          <li>Optimized database queries</li>
          <li>Caching strategies</li>
          <li>CDN integration for static assets</li>
          <li>Progressive web app capabilities</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Integration Points</h2>
      <p>
        iVerify provides several integration points for extending functionality:
      </p>
      <ul>
        <li>RESTful API endpoints</li>
        <li>Webhook support for notifications</li>
        <li>Custom authentication providers</li>
        <li>External service integrations</li>
      </ul>
    </div>
  );
}
