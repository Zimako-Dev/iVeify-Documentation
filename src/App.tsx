import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence } from 'framer-motion';

import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';

import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { PageTransition } from './components/PageTransition';
import { SearchProvider } from './hooks/useSearch';
import { Architecture } from './pages/Architecture';
import { Configuration } from './pages/Configuration';
import { Installation } from './pages/Installation';
import { Introduction } from './pages/Introduction';
import { QuickStart } from './pages/QuickStart';
import './styles/prism-custom.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/docs/introduction"
          element={
            <PageTransition>
              <Introduction />
            </PageTransition>
          }
        />
        <Route
          path="/docs/installation"
          element={
            <PageTransition>
              <Installation />
            </PageTransition>
          }
        />
        <Route
          path="/docs/quickstart"
          element={
            <PageTransition>
              <QuickStart />
            </PageTransition>
          }
        />
        <Route
          path="/docs/architecture"
          element={
            <PageTransition>
              <Architecture />
            </PageTransition>
          }
        />
        <Route
          path="/docs/configuration"
          element={
            <PageTransition>
              <Configuration />
            </PageTransition>
          }
        />
        <Route
          path="/"
          element={
            <PageTransition>
              <Introduction />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <SearchProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <Header
            onMenuClick={() => setSidebarOpen(true)}
            className="fixed left-0 right-0 top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-900/80"
          />

          {/* Mobile sidebar */}
          <div className="lg:hidden">
            {sidebarOpen && (
              <div className="fixed inset-0 z-50 bg-gray-800/40 backdrop-blur-sm dark:bg-black/80">
                <div className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-6 pb-6 dark:bg-gray-900 sm:max-w-sm sm:px-6">
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <Navigation mobile onNavigate={() => setSidebarOpen(false)} />
                </div>
              </div>
            )}
          </div>

          <div className="flex min-h-screen">
            {/* Desktop sidebar */}
            <div className="hidden lg:block w-64 shrink-0 border-r border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
              <div className="fixed top-16 w-64 h-[calc(100vh-4rem)] overflow-y-auto">
                <Navigation />
              </div>
            </div>

            {/* Main content */}
            <main className="flex-1">
              <div className="max-w-[1400px] mx-auto p-4">
                <AnimatedRoutes />
              </div>
            </main>
          </div>
        </div>
      </SearchProvider>
    </Router>
  );
}

export default App;
