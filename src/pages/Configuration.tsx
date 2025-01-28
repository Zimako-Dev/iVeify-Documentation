import React from 'react';
import { LastUpdated } from '../components/LastUpdated';
import { docs } from '../data/docs';

export function Configuration() {
  const pageData = docs.find(doc => doc.id === 'configuration');

  return (
    <div className="prose dark:prose-invert prose-indigo max-w-none">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Configuration Guide</h1>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {pageData && <LastUpdated date={pageData.lastUpdated} />}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Environment Setup</h2>
      <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-100 dark:border-amber-900/50 rounded-lg p-4 mb-6">
        <h3 className="text-xl font-bold text-amber-800 dark:text-amber-200 mt-0 mb-3">Required Environment Variables</h3>
        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm text-gray-300 whitespace-pre-wrap break-all">
            <code>
              # Supabase Configuration
              VITE_SUPABASE_URL=your_supabase_project_url
              VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

              # Application Settings
              VITE_APP_NAME=iVerify
              VITE_API_VERSION=v1
            </code>
          </pre>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Database Setup</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">1. Create Tables</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Run migration scripts:
          </p>
          <ul className="text-sm list-disc pl-4 mt-2 space-y-1">
            <li>001_create_users</li>
            <li>002_create_applications</li>
            <li>003_create_documents</li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">2. Security Policies</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Configure RLS policies:
          </p>
          <ul className="text-sm list-disc pl-4 mt-2 space-y-1">
            <li>Enable RLS on tables</li>
            <li>Set read/write policies</li>
            <li>Configure row filters</li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">3. Functions & Triggers</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Set up database functions:
          </p>
          <ul className="text-sm list-disc pl-4 mt-2 space-y-1">
            <li>Status update triggers</li>
            <li>Verification functions</li>
            <li>Notification triggers</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Authentication & Storage</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Authentication Setup</h3>
          <ul className="text-sm list-disc pl-4 space-y-1">
            <li>Email/Password auth</li>
            <li>OAuth providers</li>
            <li>SSO configuration</li>
            <li>Role-based access</li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Storage Buckets</h3>
          <ul className="text-sm list-disc pl-4 space-y-1">
            <li>documents - Application files</li>
            <li>avatars - Profile pictures</li>
            <li>temp - Temporary storage</li>
            <li>Access policies setup</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Email & Notifications</h2>
      <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Email Templates</h3>
            <ul className="text-sm list-disc pl-4 space-y-1">
              <li>Welcome emails</li>
              <li>Password reset</li>
              <li>Status updates</li>
              <li>Verification notices</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">SMS Configuration</h3>
            <ul className="text-sm list-disc pl-4 space-y-1">
              <li>Gateway setup</li>
              <li>Template configuration</li>
              <li>Delivery reports</li>
              <li>Opt-out handling</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Municipality Settings</h2>
      <div className="space-y-6">
        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-0">Branding Customization</h3>
          <ul>
            <li>Municipality logo and colors</li>
            <li>Custom email templates</li>
            <li>Portal customization</li>
            <li>Document templates</li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-0">Workflow Configuration</h3>
          <ul>
            <li>Application process steps</li>
            <li>Required documents</li>
            <li>Verification rules</li>
            <li>Approval workflows</li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-0">User Management</h3>
          <ul>
            <li>Role definitions</li>
            <li>Permission settings</li>
            <li>Department structure</li>
            <li>Access controls</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">System Customization</h2>
      <div className="space-y-6">
        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-900/50 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mt-0">Application Form Configuration</h3>
          <pre className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <code>{`{
  "fields": {
    "personal_info": {
      "required": ["id_number", "full_name", "contact"],
      "optional": ["alternative_contact"]
    },
    "address": {
      "required": ["street", "city", "postal_code"],
      "validation": "south_african_address"
    },
    "documents": {
      "required": ["id_copy", "proof_of_residence"],
      "optional": ["income_proof"]
    }
  }
}`}</code>
          </pre>
        </div>

        <div className="bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-900/50 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mt-0">Notification Templates</h3>
          <pre className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <code>{`{
  "templates": {
    "application_received": {
      "subject": "Application Received - {{reference_number}}",
      "body": "Dear {{applicant_name}},\\n\\nYour application has been received..."
    },
    "status_update": {
      "subject": "Status Update - {{reference_number}}",
      "body": "Your application status has been updated to {{status}}..."
    }
  }
}`}</code>
          </pre>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Integration Settings</h2>
      <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-0">Available Integrations</h3>
        <ul>
          <li>SMS Gateway Configuration</li>
          <li>Email Service Setup</li>
          <li>Payment Gateway Integration</li>
          <li>External API Connections</li>
        </ul>

        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
          <h4 className="font-bold mt-0">Example Integration Configuration</h4>
          <pre className="text-sm">
            <code>{`{
  "sms_gateway": {
    "provider": "clickatell",
    "api_key": "your_api_key",
    "sender_id": "iVerify"
  },
  "email_service": {
    "provider": "sendgrid",
    "api_key": "your_api_key",
    "from_email": "notifications@iverify.co.za"
  }
}`}</code>
          </pre>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Maintenance and Monitoring</h2>
      <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
        <ul>
          <li>System health monitoring</li>
          <li>Error logging and tracking</li>
          <li>Performance metrics</li>
          <li>Backup configuration</li>
          <li>Audit trail settings</li>
        </ul>
      </div>
    </div>
  );
}
