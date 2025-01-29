import React from 'react';
import { LastUpdated } from '../components/LastUpdated';
import { docs } from '../data/docs';
import { MermaidDiagram } from '../components/MermaidDiagram';

export function Authentication() {
  const pageData = docs.find(doc => doc.id === 'authentication');

  const authFlowDiagram = `
    sequenceDiagram
      participant U as User
      participant F as Frontend
      participant S as Supabase Auth
      participant D as Database

      U->>F: Enter Credentials
      F->>S: Login Request
      S-->>F: JWT Token
      F->>D: Fetch User Data
      D-->>F: User Profile
      F-->>U: Access Granted
  `;

  const roleBasedDiagram = `
    graph TD
      A[User Request] --> B{Role Check}
      B -->|Admin| C[Full Access]
      B -->|Staff| D[Limited Access]
      B -->|Customer| E[Basic Access]
      C --> F[Manage Users]
      C --> G[Configure System]
      D --> H[Process Applications]
      D --> I[View Reports]
      E --> J[Submit Applications]
      E --> K[Track Status]
  `;

  const authComponentsDiagram = `
    classDiagram
      class AuthProvider {
        +login(email, password)
        +logout()
        +resetPassword()
        +updateProfile()
      }
      class RoleBasedRoute {
        +allowedRoles: string[]
        +checkAccess()
        +redirect()
      }
      class UserContext {
        +user: User
        +isAuthenticated: boolean
        +role: string
      }
      AuthProvider --> UserContext
      RoleBasedRoute --> UserContext
  `;

  return (
    <div className="prose dark:prose-invert prose-indigo max-w-none">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Authentication and Authorization</h1>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {pageData && <LastUpdated date={pageData.lastUpdated} />}
        </div>
      </div>

      {/* Authentication Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Authentication Flow</h2>
        <div className="mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <MermaidDiagram definition={authFlowDiagram} />
        </div>
        <p className="mb-4">
          iVerify implements a secure authentication system using Supabase Auth, providing:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>JWT-based authentication</li>
          <li>Secure password hashing</li>
          <li>Email verification</li>
          <li>Password reset functionality</li>
          <li>Session management</li>
        </ul>
      </section>

      {/* Role-Based Access Control */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Role-Based Access Control</h2>
        <div className="mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <MermaidDiagram definition={roleBasedDiagram} />
        </div>
        <h3 className="text-xl font-bold mb-4">User Roles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h4 className="font-bold mb-2">Admin</h4>
            <ul className="list-disc pl-4">
              <li>User management</li>
              <li>System configuration</li>
              <li>Access all features</li>
              <li>Generate reports</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h4 className="font-bold mb-2">Staff</h4>
            <ul className="list-disc pl-4">
              <li>Process applications</li>
              <li>View reports</li>
              <li>Handle duplicates</li>
              <li>Update records</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h4 className="font-bold mb-2">Customer</h4>
            <ul className="list-disc pl-4">
              <li>Submit applications</li>
              <li>Track status</li>
              <li>Update profile</li>
              <li>View history</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Authentication Components */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Authentication Components</h2>
        <div className="mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <MermaidDiagram definition={authComponentsDiagram} />
        </div>
        <h3 className="text-xl font-bold mb-4">Key Components</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>AuthProvider:</strong> Central authentication context provider that manages user sessions and auth state
          </li>
          <li>
            <strong>RoleBasedRoute:</strong> Protected route component that handles role-based access control
          </li>
          <li>
            <strong>UserContext:</strong> React context that provides user information throughout the application
          </li>
        </ul>
      </section>

      {/* Security Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Security Best Practices</h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Password Requirements:</strong>
              <ul className="list-disc pl-6 mt-2">
                <li>Minimum 8 characters</li>
                <li>At least one uppercase letter</li>
                <li>At least one number</li>
                <li>At least one special character</li>
              </ul>
            </li>
            <li>
              <strong>Session Management:</strong>
              <ul className="list-disc pl-6 mt-2">
                <li>Automatic session expiration</li>
                <li>Secure session storage</li>
                <li>Cross-tab session synchronization</li>
              </ul>
            </li>
            <li>
              <strong>Security Headers:</strong>
              <ul className="list-disc pl-6 mt-2">
                <li>CSRF protection</li>
                <li>XSS prevention</li>
                <li>Content Security Policy</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
