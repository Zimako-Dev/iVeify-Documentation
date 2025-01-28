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
      className="max-w-full overflow-hidden"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 -mx-4 sm:mx-0 sm:rounded-xl">
        <div className="px-4 sm:px-8 py-6 sm:py-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-white break-words"
          >
            Welcome to iVerify
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed break-words"
          >
            A Comprehensive Indigent Management System for South African Municipalities
          </motion.p>
          {pageData && (
            <div className="mt-2 sm:mt-3 text-white/80 text-xs sm:text-sm">
              <LastUpdated date={pageData.lastUpdated} />
            </div>
          )}
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 mt-3 sm:mt-6 -mx-4 px-4 sm:mx-0 sm:px-0">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800/60 p-3 sm:p-6 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mt-0 mb-2">About iVerify</h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 break-words">
            iVerify is a modern, web-based platform that revolutionizes how municipalities handle indigent applications. 
            Built with the latest technology stack and following best practices, it provides a secure, efficient, and 
            user-friendly solution for processing and tracking indigent status applications.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800/60 p-3 sm:p-6 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mt-0 mb-2">Who It's For</h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 break-words">
            Designed specifically for South African municipalities, our platform streamlines the process of managing and 
            verifying indigent status applications, making it easier for both municipal staff and applicants.
          </p>
        </motion.div>
      </div>

      {/* Key Features Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-800/30 -mx-4 sm:mx-0 sm:rounded-xl mt-3 sm:mt-6">
        <div className="p-3 sm:p-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
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
                title: "Automated Notifications",
                description: "Keep all stakeholders informed with automated updates",
                icon: "🔔"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white dark:bg-gray-800/60 p-3 sm:p-6 rounded-lg sm:rounded-xl"
              >
                <div className="text-xl sm:text-2xl lg:text-3xl mb-2">{feature.icon}</div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 break-words">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Getting Started Section */}
      <div className="bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-900/50 rounded-lg sm:rounded-xl overflow-hidden mt-3 sm:mt-6">
        <div className="p-3 sm:p-8">
          <h2 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">Ready to Get Started?</h2>
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
