import React from 'react';
import { LastUpdated } from '../components/LastUpdated';
import { docs } from '../data/docs';

export function UserGuide() {
  const pageData = docs.find(doc => doc.id === 'user-guide');

  return (
    <div className="prose dark:prose-invert prose-indigo max-w-none">
      <h1>User Guide</h1>
      {pageData && <LastUpdated date={pageData.lastUpdated} />}

      <h2>Administrator Guide</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm my-6">
        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-0">User Management</h3>
        <ul>
          <li>Creating and managing user accounts</li>
          <li>Assigning user roles and permissions</li>
          <li>Managing department access</li>
          <li>User activity monitoring</li>
        </ul>

        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-6">System Configuration</h3>
        <ul>
          <li>Setting up municipality preferences</li>
          <li>Configuring workflow rules</li>
          <li>Managing document templates</li>
          <li>Setting up notification rules</li>
        </ul>

        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-6">Report Generation</h3>
        <ul>
          <li>Creating custom reports</li>
          <li>Scheduling automated reports</li>
          <li>Exporting data in various formats</li>
          <li>Setting up dashboard metrics</li>
        </ul>
      </div>

      <h2>Staff Guide</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm my-6">
        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-0">Application Processing</h3>
        <ol className="space-y-4">
          <li>
            <strong>Receiving Applications</strong>
            <ul>
              <li>Reviewing submitted documents</li>
              <li>Verifying application completeness</li>
              <li>Initial eligibility check</li>
            </ul>
          </li>
          <li>
            <strong>Verification Process</strong>
            <ul>
              <li>Document authenticity verification</li>
              <li>Income verification</li>
              <li>Property ownership check</li>
            </ul>
          </li>
          <li>
            <strong>Decision Making</strong>
            <ul>
              <li>Applying verification criteria</li>
              <li>Recording verification results</li>
              <li>Making recommendations</li>
            </ul>
          </li>
        </ol>

        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-6">Communication Management</h3>
        <ul>
          <li>Sending notifications to applicants</li>
          <li>Managing queries and responses</li>
          <li>Recording communication history</li>
          <li>Setting up automated notifications</li>
        </ul>
      </div>

      <h2>Applicant Guide</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm my-6">
        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-0">Application Submission</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Step 1: Registration</h4>
            <ul>
              <li>Creating an account</li>
              <li>Verifying email address</li>
              <li>Completing profile information</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Step 2: Document Preparation</h4>
            <ul>
              <li>Required document checklist</li>
              <li>Document scanning guidelines</li>
              <li>File size and format requirements</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Step 3: Form Completion</h4>
            <ul>
              <li>Personal information</li>
              <li>Household details</li>
              <li>Income declaration</li>
            </ul>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-6">Application Tracking</h3>
        <ul>
          <li>Viewing application status</li>
          <li>Responding to queries</li>
          <li>Uploading additional documents</li>
          <li>Checking notification history</li>
        </ul>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-900/50 rounded-lg p-6 my-6">
        <h2 className="text-blue-800 dark:text-blue-200 mt-0">Best Practices</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-blue-800 dark:text-blue-200">For Administrators</h3>
            <ul className="text-blue-700 dark:text-blue-300">
              <li>Regular system audits</li>
              <li>User access reviews</li>
              <li>Performance monitoring</li>
              <li>Data backup verification</li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-800 dark:text-blue-200">For Staff</h3>
            <ul className="text-blue-700 dark:text-blue-300">
              <li>Consistent verification procedures</li>
              <li>Regular status updates</li>
              <li>Clear communication</li>
              <li>Accurate record keeping</li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-800 dark:text-blue-200">For Applicants</h3>
            <ul className="text-blue-700 dark:text-blue-300">
              <li>Regular status checks</li>
              <li>Prompt response to queries</li>
              <li>Document organization</li>
              <li>Profile updates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
