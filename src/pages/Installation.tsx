import React, { useState } from 'react';
import { LastUpdated } from '../components/LastUpdated';
import { docs } from '../data/docs';
import { motion } from 'framer-motion';

export function Installation() {
  const pageData = docs.find(doc => doc.id === 'installation');
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: 1,
      title: 'Prerequisites',
      content: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-0">System Requirements</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Node.js v16 or higher</li>
              <li>npm v7 or higher</li>
              <li>Git</li>
              <li>Modern web browser</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-0">Development Tools</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Visual Studio Code (recommended)</li>
              <li>React Developer Tools</li>
              <li>Git client</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      number: 2,
      title: 'Repository Setup',
      content: (
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-0">Clone Repository</h3>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
              git clone https://github.com/your-org/iverify.git
              cd iverify
            </pre>
          </div>
        </div>
      )
    },
    {
      number: 3,
      title: 'Dependencies',
      content: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-0">Install Dependencies</h3>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
              npm install
            </pre>
          </div>
        </div>
      )
    },
    {
      number: 4,
      title: 'Environment Setup',
      content: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-0">Configure Environment</h3>
            <p className="mb-4">Create a .env file in the root directory with the following variables:</p>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`VITE_APP_NAME=iVerify
VITE_APP_URL=http://localhost:5173
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key

# Optional Features
ENABLE_SMS_NOTIFICATIONS=true
ENABLE_EMAIL_NOTIFICATIONS=true`}
            </pre>
          </div>
        </div>
      )
    },
    {
      number: 5,
      title: 'Database Setup',
      content: (
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-0">Supabase Configuration</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Create a new Supabase project</li>
              <li>Run the database migrations</li>
              <li>Configure authentication settings</li>
              <li>Set up storage buckets</li>
            </ol>
          </div>
        </div>
      )
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose dark:prose-invert prose-indigo max-w-none"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-500 rounded-xl overflow-hidden">
        <div className="px-8 py-8 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold mb-3 text-white"
          >
            Installation Guide
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-white/90 leading-relaxed"
          >
            Follow this step-by-step guide to set up iVerify on your system
          </motion.p>
          {pageData && (
            <div className="mt-2 text-white/80 text-sm">
              <LastUpdated date={pageData.lastUpdated} />
            </div>
          )}
        </div>
      </div>

      {/* Installation Steps Navigation */}
      <div className="flex space-x-4 mt-6 overflow-x-auto pb-2">
        {steps.map((step) => (
          <button
            key={step.number}
            onClick={() => setActiveStep(step.number)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
              activeStep === step.number
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700/70'
            }`}
          >
            {step.number}. {step.title}
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 rounded-full h-2 mb-8">
        <div 
          className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
          style={{ width: `${(activeStep / steps.length) * 100}%` }}
        />
      </div>

      {/* Step Content */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {steps.find(step => step.number === activeStep)?.content}
      </motion.div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
          disabled={activeStep === 1}
          className={`px-6 py-3 rounded-lg transition-colors ${
            activeStep === 1
              ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
              : 'bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700'
          }`}
        >
          Previous Step
        </button>
        <button
          onClick={() => setActiveStep(prev => Math.min(steps.length, prev + 1))}
          disabled={activeStep === steps.length}
          className={`px-6 py-3 rounded-lg transition-colors ${
            activeStep === steps.length
              ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
        >
          Next Step
        </button>
      </div>

      {/* Troubleshooting Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-100 dark:border-yellow-900/50 p-8 rounded-lg mt-12"
      >
        <h2 className="text-2xl font-bold text-yellow-800 dark:text-yellow-200 mt-0">Troubleshooting</h2>
        <p className="text-yellow-700 dark:text-yellow-300">
          If you encounter any issues during installation, please check our troubleshooting guide or contact support.
        </p>
        <div className="flex gap-4 mt-6">
          <a href="/docs/troubleshooting" className="inline-flex items-center px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors">
            View Troubleshooting Guide
          </a>
          <a href="mailto:support@iveify.com" className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-yellow-600 dark:text-yellow-400 rounded-lg transition-colors hover:bg-yellow-50 dark:hover:bg-gray-700">
            Contact Support
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
