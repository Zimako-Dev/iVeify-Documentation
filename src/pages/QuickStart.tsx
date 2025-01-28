import React from 'react';
import { LastUpdated } from '../components/LastUpdated';
import { docs } from '../data/docs';

export function QuickStart() {
  const pageData = docs.find(doc => doc.id === 'quickstart');

  return (
    <div className="prose dark:prose-invert prose-indigo max-w-none">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Quick Start Guide</h1>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {pageData && <LastUpdated date={pageData.lastUpdated} />}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">System Access</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">Admin Portal</h3>
          <ul className="mt-4 space-y-2">
            <li>User management</li>
            <li>System configuration</li>
            <li>Municipality settings</li>
            <li>Report generation</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">Staff Portal</h3>
          <ul className="mt-4 space-y-2">
            <li>Application processing</li>
            <li>Document verification</li>
            <li>Status updates</li>
            <li>Applicant communication</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">Applicant Portal</h3>
          <ul className="mt-4 space-y-2">
            <li>Application submission</li>
            <li>Status tracking</li>
            <li>Document upload</li>
            <li>Profile management</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Common Workflows</h2>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">1. Processing New Applications</h3>
      <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg my-4">
        <ol className="space-y-4">
          <li>
            <strong className="text-gray-900 dark:text-white">Submission:</strong>
            <ul>
              <li>Applicant fills out the application form</li>
              <li>Uploads required documents</li>
              <li>Submits for review</li>
            </ul>
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">Initial Review:</strong>
            <ul>
              <li>Staff verifies document completeness</li>
              <li>Checks for duplicates</li>
              <li>Validates basic eligibility</li>
            </ul>
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">Verification:</strong>
            <ul>
              <li>Income verification</li>
              <li>Property ownership check</li>
              <li>Household composition validation</li>
            </ul>
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">Decision:</strong>
            <ul>
              <li>Application approval/rejection</li>
              <li>Notification to applicant</li>
              <li>Status update in system</li>
            </ul>
          </li>
        </ol>
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">2. Document Management</h3>
      <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg my-4">
        <ul className="space-y-2">
          <li>Upload documents via drag-and-drop or file selection</li>
          <li>Automatic file type and size validation</li>
          <li>Secure storage in Supabase</li>
          <li>Document categorization and tagging</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">3. Status Updates and Notifications</h3>
      <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg my-4">
        <ul className="space-y-2">
          <li>Real-time status updates</li>
          <li>Automated email notifications</li>
          <li>In-app notifications</li>
          <li>SMS notifications (if configured)</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Best Practices</h2>
      <div className="space-y-4">
        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-900/50 rounded-lg p-4">
          <h4 className="text-blue-800 dark:text-blue-200 mt-0">Document Verification</h4>
          <ul className="text-blue-700 dark:text-blue-300">
            <li>Always verify document authenticity</li>
            <li>Check for document expiration</li>
            <li>Ensure all required documents are present</li>
            <li>Maintain document confidentiality</li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-900/50 rounded-lg p-4">
          <h4 className="text-green-800 dark:text-green-200 mt-0">Application Processing</h4>
          <ul className="text-green-700 dark:text-green-300">
            <li>Process applications in order of submission</li>
            <li>Document all verification steps</li>
            <li>Follow up on incomplete applications</li>
            <li>Maintain clear communication with applicants</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Next Steps</h2>
      <p>
        For more detailed information about specific features and configurations, please refer to:
      </p>
      <ul>
        <li><a href="/docs/configuration" className="text-gray-900 dark:text-white">Configuration Guide</a> - For system setup and customization</li>
        <li><a href="/docs/architecture" className="text-gray-900 dark:text-white">Architecture Guide</a> - For technical details and integration</li>
      </ul>
    </div>
  );
}
