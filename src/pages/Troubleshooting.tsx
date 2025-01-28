import React from 'react';
import { LastUpdated } from '../components/LastUpdated';
import { docs } from '../data/docs';

export function Troubleshooting() {
  const pageData = docs.find(doc => doc.id === 'troubleshooting');

  return (
    <div className="prose dark:prose-invert prose-indigo max-w-none">
      <h1>Troubleshooting Guide</h1>
      {pageData && <LastUpdated date={pageData.lastUpdated} />}

      <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-900/50 rounded-lg p-6 my-6">
        <h2 className="text-blue-800 dark:text-blue-200 mt-0">Quick Solutions</h2>
        <p className="text-blue-700 dark:text-blue-300">
          Before diving into specific issues, try these general troubleshooting steps:
        </p>
        <ol className="text-blue-700 dark:text-blue-300">
          <li>Clear your browser cache and cookies</li>
          <li>Try using a different browser</li>
          <li>Check your internet connection</li>
          <li>Ensure you're using the latest version of the application</li>
          <li>Verify your credentials and permissions</li>
        </ol>
      </div>

      <h2>Installation Issues</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm my-6">
        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-0">Database Connection</h3>
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="font-semibold">Issue: Unable to Connect to Database</h4>
            <p>Common causes:</p>
            <ul>
              <li>Incorrect database credentials</li>
              <li>Database server is down</li>
              <li>Network connectivity issues</li>
              <li>Firewall blocking connections</li>
            </ul>
            <p>Solution steps:</p>
            <ol>
              <li>Verify database credentials in .env file</li>
              <li>Check if database server is running</li>
              <li>Test network connectivity</li>
              <li>Check firewall settings</li>
            </ol>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-6">Environment Setup</h3>
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="font-semibold">Issue: Missing Environment Variables</h4>
            <p>Common causes:</p>
            <ul>
              <li>.env file not found</li>
              <li>Incorrect variable names</li>
              <li>Invalid variable values</li>
            </ul>
            <p>Solution steps:</p>
            <ol>
              <li>Copy .env.example to .env</li>
              <li>Verify all required variables are set</li>
              <li>Check variable naming convention</li>
              <li>Validate variable values</li>
            </ol>
          </div>
        </div>
      </div>

      <h2>Runtime Issues</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm my-6">
        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-0">Performance Issues</h3>
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="font-semibold">Issue: Slow Application Performance</h4>
            <p>Common causes:</p>
            <ul>
              <li>High database load</li>
              <li>Memory leaks</li>
              <li>Inefficient queries</li>
              <li>Resource constraints</li>
            </ul>
            <p>Solution steps:</p>
            <ol>
              <li>Monitor system resources</li>
              <li>Optimize database queries</li>
              <li>Implement caching</li>
              <li>Scale resources if needed</li>
            </ol>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-6">Error Handling</h3>
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="font-semibold">Issue: Common Error Messages</h4>
            <div className="space-y-2">
              <div>
                <p className="font-medium">Error: Authentication failed</p>
                <ul>
                  <li>Check credentials</li>
                  <li>Verify token expiration</li>
                  <li>Clear browser cache</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">Error: Permission denied</p>
                <ul>
                  <li>Verify user role</li>
                  <li>Check access permissions</li>
                  <li>Review audit logs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>Common Problems</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm my-6">
        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-0">User Access Issues</h3>
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="font-semibold">Issue: Account Lock-out</h4>
            <p>Solution steps:</p>
            <ol>
              <li>Wait for lock-out period to expire</li>
              <li>Contact system administrator</li>
              <li>Reset password if necessary</li>
              <li>Review security logs</li>
            </ol>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-6">Document Upload Problems</h3>
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="font-semibold">Issue: File Upload Failures</h4>
            <p>Common causes:</p>
            <ul>
              <li>File size too large</li>
              <li>Unsupported file type</li>
              <li>Network timeout</li>
              <li>Storage quota exceeded</li>
            </ul>
            <p>Solution steps:</p>
            <ol>
              <li>Check file size limits</li>
              <li>Verify supported formats</li>
              <li>Try uploading smaller files</li>
              <li>Clear storage space</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-900/50 rounded-lg p-6 my-6">
        <h2 className="text-green-800 dark:text-green-200 mt-0">Preventive Measures</h2>
        <ul className="text-green-700 dark:text-green-300">
          <li>Regular system maintenance</li>
          <li>Automated monitoring</li>
          <li>User training</li>
          <li>Backup procedures</li>
          <li>Performance optimization</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-100 dark:border-yellow-900/50 rounded-lg p-6 my-6">
        <h2 className="text-yellow-800 dark:text-yellow-200 mt-0">Support Contacts</h2>
        <ul className="text-yellow-700 dark:text-yellow-300">
          <li>Technical Support: support@iveify.com</li>
          <li>System Administrator: admin@iveify.com</li>
          <li>Help Desk: +27 (0) 800 123 457</li>
        </ul>
      </div>
    </div>
  );
}
