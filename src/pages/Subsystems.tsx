import React from 'react';
import { LastUpdated } from '../components/LastUpdated';
import { docs } from '../data/docs';
import { motion } from 'framer-motion';
import { MermaidDiagram } from '../components/MermaidDiagram';

export function Subsystems() {
  const pageData = docs.find(doc => doc.id === 'subsystems');

  const frontendArchitecture = `
    graph TD
      A[React 18 + TypeScript] --> B[State Management]
      A --> C[UI Framework]
      A --> D[Form Validation]
      B --> B1[Redux Toolkit]
      C --> C1[Tailwind CSS]
      C --> C2[Radix UI]
      C --> C3[Framer Motion]
      D --> D1[Zod Schema]
  `;

  const backendIntegration = `
    graph TD
      A[Supabase Backend] --> B[Authentication]
      A --> C[Database Operations]
      A --> D[File Storage]
      B --> B1[JWT Auth]
      B --> B2[Role-based Access]
      C --> C1[Real-time Updates]
      C --> C2[Type-safe APIs]
      D --> D1[Document Storage]
      D --> D2[Secure Upload/Download]
  `;

  const applicationWorkflow = `
    stateDiagram-v2
      [*] --> New
      New --> Pending: Submit
      Pending --> Approved: Review Pass
      Pending --> Rejected: Review Fail
      Pending --> Duplicate: Duplicate Check
      Approved --> [*]
      Rejected --> [*]
      Duplicate --> [*]
  `;

  const coreComponents = `
    classDiagram
      class ApplicationTable {
        +displayApplications()
        +handleSort()
        +handleFilter()
      }
      class DuplicatesModal {
        +showDuplicate()
        +handleResolution()
      }
      class StatsCard {
        +displayMetrics()
        +updateRealTime()
      }
      class UserMenu {
        +showProfile()
        +handleLogout()
      }
      class ThemeToggle {
        +toggleTheme()
        +persistPreference()
      }
  `;

  const securityFeatures = `
    graph TD
      A[Security Layer] --> B[Authentication]
      A --> C[Authorization]
      A --> D[Data Protection]
      B --> B1[JWT Tokens]
      B --> B2[Session Management]
      C --> C1[Role-based Access]
      C --> C2[Protected Routes]
      D --> D1[Input Validation]
      D --> D2[Data Encryption]
  `;

  return (
    <div className="prose dark:prose-invert prose-indigo max-w-none">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">System Components and Subsystems</h1>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {pageData && <LastUpdated date={pageData.lastUpdated} />}
        </div>
      </div>

      {/* Frontend Architecture */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frontend Architecture</h2>
        <div className="mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <MermaidDiagram definition={frontendArchitecture} />
        </div>
        <ul className="list-disc pl-6 mb-6">
          <li>Built with React 18 and TypeScript for type safety</li>
          <li>State management using Redux Toolkit</li>
          <li>UI components built with Tailwind CSS and Radix UI</li>
          <li>Animations powered by Framer Motion</li>
          <li>Form validation using Zod schema</li>
        </ul>
      </section>

      {/* Backend Integration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Backend Integration</h2>
        <div className="mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <MermaidDiagram definition={backendIntegration} />
        </div>
        <ul className="list-disc pl-6 mb-6">
          <li>Supabase for backend services</li>
          <li>Authentication and authorization</li>
          <li>Database operations with real-time updates</li>
          <li>Secure file storage for documents</li>
        </ul>
      </section>

      {/* Application Workflow */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Application Workflow</h2>
        <div className="mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <MermaidDiagram definition={applicationWorkflow} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">User Flows</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h4 className="font-bold mb-2">Customer Flow</h4>
            <ul className="list-disc pl-4">
              <li>Submit applications</li>
              <li>Track status</li>
              <li>View notifications</li>
              <li>Upload documents</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h4 className="font-bold mb-2">Staff Flow</h4>
            <ul className="list-disc pl-4">
              <li>Review applications</li>
              <li>Process submissions</li>
              <li>Handle duplicates</li>
              <li>Update status</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h4 className="font-bold mb-2">Admin Flow</h4>
            <ul className="list-disc pl-4">
              <li>Manage staff</li>
              <li>View statistics</li>
              <li>Configure system</li>
              <li>Handle escalations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Components */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Core Components</h2>
        <div className="mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <MermaidDiagram definition={coreComponents} />
        </div>
        <ul className="list-disc pl-6 mb-6">
          <li>ApplicationTable: Manages application listings and data display</li>
          <li>DuplicatesModal: Handles duplicate application detection and resolution</li>
          <li>StatsCard: Displays statistical information and metrics</li>
          <li>UserMenu: Manages user profile and settings</li>
          <li>ThemeToggle: Controls dark/light mode preferences</li>
        </ul>
      </section>

      {/* Security Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Security Features</h2>
        <div className="mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <MermaidDiagram definition={securityFeatures} />
        </div>
        <ul className="list-disc pl-6">
          <li>JWT-based authentication system</li>
          <li>Role-based access control</li>
          <li>Protected routes with role verification</li>
          <li>Secure environment variables</li>
          <li>Input validation and sanitization</li>
          <li>Data encryption in transit and at rest</li>
        </ul>
      </section>
    </div>
  );
}
