import React from 'react';
import { LastUpdated } from '../components/LastUpdated';
import { docs } from '../data/docs';
import { motion } from 'framer-motion';

export function Introduction() {
  const pageData = docs.find(doc => doc.id === 'introduction');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose dark:prose-invert prose-indigo max-w-none"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl overflow-hidden">
        <div className="px-8 py-10 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold mb-3 text-white"
          >
            Welcome to iVerify
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl text-white/90 leading-relaxed"
          >
            A Comprehensive Indigent Management System for South African Municipalities
          </motion.p>
          {pageData && (
            <div className="mt-3 text-white/80 text-sm">
              <LastUpdated date={pageData.lastUpdated} />
            </div>
          )}
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mt-0 mb-3">About iVerify</h2>
          <p className="text-gray-600 dark:text-gray-300">
            iVerify is a modern, web-based platform that revolutionizes how municipalities handle indigent applications. 
            Built with the latest technology stack and following best practices, it provides a secure, efficient, and 
            user-friendly solution for processing and tracking indigent status applications.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mt-0 mb-3">Who It's For</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Designed specifically for South African municipalities, our platform streamlines the process of managing and 
            verifying indigent status applications, making it easier for both municipal staff and applicants.
          </p>
        </motion.div>
      </div>

      {/* Key Features Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-800/30 rounded-xl overflow-hidden mt-6">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Real-time Processing",
                description: "Track and process applications in real-time with instant updates",
                icon: "⚡"
              },
              {
                title: "Role-based Access",
                description: "Secure access control for administrators, staff, and applicants",
                icon: "🔒"
              },
              {
                title: "Document Management",
                description: "Efficient handling and verification of application documents",
                icon: "📄"
              },
              {
                title: "Advanced Verification",
                description: "Robust verification systems to ensure accuracy",
                icon: "✓"
              },
              {
                title: "Statistical Reporting",
                description: "Comprehensive reporting and analytics tools",
                icon: "📊"
              },
              {
                title: "Municipality Settings",
                description: "Customizable settings for each municipality",
                icon: "⚙️"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Getting Started Section */}
      <div className="bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-900/50 rounded-xl overflow-hidden mt-6">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-4">Ready to Get Started?</h2>
          <p className="text-indigo-700 dark:text-indigo-300 mb-6">
            Follow our step-by-step guide to set up iVerify for your municipality.
          </p>
          <div className="flex gap-4">
            <a href="/docs/installation" className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
              Installation Guide
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a href="/docs/quick-start" className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-700">
              Quick Start
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
