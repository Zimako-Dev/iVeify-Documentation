import React from 'react';
import { LastUpdated } from '../components/LastUpdated';
import { docs } from '../data/docs';

export function SecurityGuide() {
  const pageData = docs.find(doc => doc.id === 'security');

  return (
    <div className="prose dark:prose-invert prose-indigo max-w-none">
      <h1>Security Guide</h1>
      {pageData && <LastUpdated date={pageData.lastUpdated} />}

      <div className="bg-red-50 dark:bg-red-900/30 border border-red-100 dark:border-red-900/50 rounded-lg p-6 my-6">
        <h2 className="text-red-800 dark:text-red-200 mt-0">Security Alert</h2>
        <p className="text-red-700 dark:text-red-300">
          This guide contains sensitive security information. Ensure that access to this documentation is restricted to authorized personnel only.
        </p>
      </div>

      <h2>Authentication Security</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm my-6">
        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-0">Password Policies</h3>
        <ul>
          <li>Minimum length: 12 characters</li>
          <li>Must contain uppercase and lowercase letters</li>
          <li>Must contain at least one number</li>
          <li>Must contain at least one special character</li>
          <li>Password history: last 5 passwords cannot be reused</li>
          <li>Maximum password age: 90 days</li>
        </ul>

        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-6">Multi-Factor Authentication (MFA)</h3>
        <ul>
          <li>Required for all administrative accounts</li>
          <li>Optional but recommended for standard users</li>
          <li>Supported methods:
            <ul>
              <li>SMS-based verification</li>
              <li>Email verification codes</li>
              <li>Authenticator apps (Google Authenticator, Microsoft Authenticator)</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-6">Session Management</h3>
        <ul>
          <li>Session timeout: 30 minutes of inactivity</li>
          <li>Concurrent session limit: 3 sessions per user</li>
          <li>Session invalidation on password change</li>
          <li>Secure session cookie attributes</li>
        </ul>
      </div>

      <h2>Data Protection</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm my-6">
        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-0">Encryption Standards</h3>
        <ul>
          <li>Data at rest:
            <ul>
              <li>AES-256 encryption for stored data</li>
              <li>Encrypted database backups</li>
              <li>Secure key management system</li>
            </ul>
          </li>
          <li>Data in transit:
            <ul>
              <li>TLS 1.3 for all communications</li>
              <li>Strong cipher suites only</li>
              <li>Perfect Forward Secrecy (PFS)</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-6">Access Controls</h3>
        <ul>
          <li>Role-Based Access Control (RBAC)</li>
          <li>Principle of least privilege</li>
          <li>Regular access reviews</li>
          <li>Automated account deactivation</li>
        </ul>

        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-6">Audit Logging</h3>
        <ul>
          <li>Comprehensive audit trails for all actions</li>
          <li>Tamper-evident logging</li>
          <li>Log retention period: 2 years</li>
          <li>Regular log analysis</li>
        </ul>
      </div>

      <h2>Compliance</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm my-6">
        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-0">POPIA Compliance</h3>
        <ul>
          <li>Data minimization principles</li>
          <li>Explicit consent management</li>
          <li>Data subject rights handling</li>
          <li>Privacy impact assessments</li>
        </ul>

        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-6">Data Retention</h3>
        <ul>
          <li>Automated data retention policies</li>
          <li>Secure data disposal procedures</li>
          <li>Regular data cleanup processes</li>
        </ul>

        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-6">Privacy Controls</h3>
        <ul>
          <li>Privacy by design principles</li>
          <li>Data masking for sensitive information</li>
          <li>Regular privacy audits</li>
        </ul>
      </div>

      <h2>Security Best Practices</h2>
      <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-900/50 rounded-lg p-6 my-6">
        <h3 className="text-blue-800 dark:text-blue-200 mt-0">For Administrators</h3>
        <ul className="text-blue-700 dark:text-blue-300">
          <li>Regular security assessments</li>
          <li>Prompt security patch management</li>
          <li>Regular backup verification</li>
          <li>Incident response plan maintenance</li>
        </ul>

        <h3 className="text-blue-800 dark:text-blue-200 mt-6">For Staff</h3>
        <ul className="text-blue-700 dark:text-blue-300">
          <li>Regular security awareness training</li>
          <li>Strong password practices</li>
          <li>Clean desk policy</li>
          <li>Secure communication practices</li>
        </ul>

        <h3 className="text-blue-800 dark:text-blue-200 mt-6">For System</h3>
        <ul className="text-blue-700 dark:text-blue-300">
          <li>Regular vulnerability scanning</li>
          <li>Automated security testing</li>
          <li>Security monitoring and alerting</li>
          <li>Disaster recovery testing</li>
        </ul>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-100 dark:border-yellow-900/50 rounded-lg p-6 my-6">
        <h2 className="text-yellow-800 dark:text-yellow-200 mt-0">Security Contacts</h2>
        <ul className="text-yellow-700 dark:text-yellow-300">
          <li>Security Team: security@iveify.com</li>
          <li>Privacy Officer: privacy@iveify.com</li>
          <li>24/7 Security Hotline: +27 (0) 800 123 456</li>
        </ul>
      </div>
    </div>
  );
}
