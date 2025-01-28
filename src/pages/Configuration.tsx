import React from 'react';
import { LastUpdated } from '../components/LastUpdated';
import { docs } from '../data/docs';

export function Configuration() {
  const pageData = docs.find(doc => doc.id === 'configuration');

  return (
    <div className="prose dark:prose-invert prose-indigo max-w-none">
      <h1>Configuration Guide</h1>
      {pageData && <LastUpdated date={pageData.lastUpdated} />}

      <h2>Environment Setup</h2>
      <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-100 dark:border-amber-900/50 rounded-lg p-6 my-6">
        <h3 className="text-amber-800 dark:text-amber-200 mt-0">Required Environment Variables</h3>
        <pre className="bg-white dark:bg-gray-800 p-4 rounded-lg">
          <code>
            # Supabase Configuration
            VITE_SUPABASE_URL=your_supabase_project_url
            VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

            # Application Settings
            VITE_APP_NAME=iVerify
            VITE_APP_URL=http://localhost:5173

            # Optional Features
            VITE_ENABLE_SMS_NOTIFICATIONS=true
            VITE_ENABLE_EMAIL_NOTIFICATIONS=true
          </code>
        </pre>
      </div>

      <h2>Supabase Configuration</h2>
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-0">Database Setup</h3>
          <ol className="space-y-2">
            <li>Create required tables using migration scripts</li>
            <li>Configure Row Level Security policies</li>
            <li>Set up database functions and triggers</li>
            <li>Enable PostGIS extensions if needed</li>
          </ol>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-0">Authentication</h3>
          <ol className="space-y-2">
            <li>Configure authentication providers</li>
            <li>Set up email templates</li>
            <li>Configure password policies</li>
            <li>Set up role management</li>
          </ol>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-0">Storage</h3>
          <ol className="space-y-2">
            <li>Create storage buckets for documents</li>
            <li>Configure access policies</li>
            <li>Set up file size limits</li>
            <li>Configure allowed file types</li>
          </ol>
        </div>
      </div>

      <h2>Municipality Settings</h2>
      <div className="space-y-6">
        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mt-0">Branding Customization</h3>
          <ul>
            <li>Municipality logo and colors</li>
            <li>Custom email templates</li>
            <li>Portal customization</li>
            <li>Document templates</li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mt-0">Workflow Configuration</h3>
          <ul>
            <li>Application process steps</li>
            <li>Required documents</li>
            <li>Verification rules</li>
            <li>Approval workflows</li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mt-0">User Management</h3>
          <ul>
            <li>Role definitions</li>
            <li>Permission settings</li>
            <li>Department structure</li>
            <li>Access controls</li>
          </ul>
        </div>
      </div>

      <h2>System Customization</h2>
      <div className="space-y-6">
        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-900/50 rounded-lg p-6">
          <h3 className="text-blue-800 dark:text-blue-200 mt-0">Application Form Configuration</h3>
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
          <h3 className="text-green-800 dark:text-green-200 mt-0">Notification Templates</h3>
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

      <h2>Integration Settings</h2>
      <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg space-y-4">
        <h3 className="text-lg font-semibold mt-0">Available Integrations</h3>
        <ul>
          <li>SMS Gateway Configuration</li>
          <li>Email Service Setup</li>
          <li>Payment Gateway Integration</li>
          <li>External API Connections</li>
        </ul>

        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
          <h4 className="font-semibold mt-0">Example Integration Configuration</h4>
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

      <h2>Maintenance and Monitoring</h2>
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
