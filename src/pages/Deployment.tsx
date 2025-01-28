import React from 'react';
import { LastUpdated } from '../components/LastUpdated';
import { docs } from '../data/docs';

export function Deployment() {
  const pageData = docs.find(doc => doc.id === 'deployment');

  return (
    <div className="prose dark:prose-invert prose-indigo max-w-none">
      <h1>Deployment Guide</h1>
      {pageData && <LastUpdated date={pageData.lastUpdated} />}

      <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-900/50 rounded-lg p-6 my-6">
        <h2 className="text-blue-800 dark:text-blue-200 mt-0">Pre-deployment Checklist</h2>
        <ul className="text-blue-700 dark:text-blue-300">
          <li>Environment configuration verified</li>
          <li>Database backups completed</li>
          <li>Security certificates updated</li>
          <li>Dependencies updated</li>
          <li>Test environment validated</li>
        </ul>
      </div>

      <h2>Infrastructure Setup</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm my-6">
        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-0">Server Requirements</h3>
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="font-semibold">Minimum Specifications</h4>
            <ul>
              <li>CPU: 4 cores</li>
              <li>RAM: 16GB</li>
              <li>Storage: 100GB SSD</li>
              <li>Network: 1Gbps</li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="font-semibold">Recommended Specifications</h4>
            <ul>
              <li>CPU: 8 cores</li>
              <li>RAM: 32GB</li>
              <li>Storage: 500GB SSD</li>
              <li>Network: 10Gbps</li>
            </ul>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-6">Network Configuration</h3>
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="font-semibold">Required Ports</h4>
            <ul>
              <li>HTTP: 80</li>
              <li>HTTPS: 443</li>
              <li>Database: 5432</li>
              <li>Redis: 6379</li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="font-semibold">Firewall Rules</h4>
            <ul>
              <li>Allow inbound HTTP/HTTPS traffic</li>
              <li>Restrict database access to application servers</li>
              <li>Enable monitoring ports</li>
              <li>Configure rate limiting</li>
            </ul>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-6">SSL/TLS Setup</h3>
        <ul>
          <li>Generate SSL certificate</li>
          <li>Configure SSL termination</li>
          <li>Set up automatic renewal</li>
          <li>Implement HSTS</li>
        </ul>
      </div>

      <h2>Deployment Process</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm my-6">
        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-0">Build Process</h3>
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h4 className="font-semibold">Production Build Steps</h4>
          <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`# Install dependencies
npm install --production

# Build application
npm run build

# Run tests
npm run test

# Generate documentation
npm run docs`}
          </pre>
        </div>

        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-6">Database Migration</h3>
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="font-semibold">Migration Steps</h4>
            <ol>
              <li>Backup existing database</li>
              <li>Run migration scripts</li>
              <li>Verify data integrity</li>
              <li>Update connection strings</li>
            </ol>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-6">Environment Configuration</h3>
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h4 className="font-semibold">Environment Variables</h4>
          <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`# Core Settings
VITE_APP_NAME=iVerify
VITE_APP_URL=https://app.iveify.com

# Database
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key

# Optional Features
ENABLE_SMS_NOTIFICATIONS=true
ENABLE_EMAIL_NOTIFICATIONS=true`}
          </pre>
        </div>
      </div>

      <h2>Monitoring</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm my-6">
        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-0">Performance Monitoring</h3>
        <ul>
          <li>Server metrics collection</li>
          <li>Application performance monitoring</li>
          <li>Error tracking</li>
          <li>User activity monitoring</li>
        </ul>

        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-6">Error Tracking</h3>
        <ul>
          <li>Error logging configuration</li>
          <li>Alert setup</li>
          <li>Error reporting</li>
          <li>Debug information collection</li>
        </ul>

        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-6">Usage Analytics</h3>
        <ul>
          <li>User behavior tracking</li>
          <li>Performance metrics</li>
          <li>Resource utilization</li>
          <li>Custom event tracking</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-100 dark:border-yellow-900/50 rounded-lg p-6 my-6">
        <h2 className="text-yellow-800 dark:text-yellow-200 mt-0">Post-deployment Checklist</h2>
        <ul className="text-yellow-700 dark:text-yellow-300">
          <li>Verify all services are running</li>
          <li>Check database connectivity</li>
          <li>Test critical functionality</li>
          <li>Monitor error logs</li>
          <li>Verify SSL certificates</li>
          <li>Test backup systems</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-900/50 rounded-lg p-6 my-6">
        <h2 className="text-green-800 dark:text-green-200 mt-0">Maintenance Procedures</h2>
        <ul className="text-green-700 dark:text-green-300">
          <li>Regular backups</li>
          <li>Security updates</li>
          <li>Performance optimization</li>
          <li>Log rotation</li>
          <li>Database maintenance</li>
        </ul>
      </div>
    </div>
  );
}
