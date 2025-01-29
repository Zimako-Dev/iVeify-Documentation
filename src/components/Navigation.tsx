import { motion } from 'framer-motion';

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface NavigationProps {
  mobile?: boolean;
  onNavigate?: () => void;
}

const navItems = [
  {
    name: 'Getting Started',
    items: [
      { name: 'Introduction', href: '/docs/introduction' },
      { name: 'Installation', href: '/docs/installation' },
      { name: 'Quick Start', href: '/docs/quickstart' },
    ],
  },
  {
    name: 'Core Concepts',
    items: [
      { name: 'Architecture', href: '/docs/architecture' },
      { name: 'Subsystems', href: '/docs/subsystems' },
      { name: 'Configuration', href: '/docs/configuration' },
      { name: 'Authentication', href: '/docs/authentication' },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export function Navigation({ mobile, onNavigate }: NavigationProps) {
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className={`${mobile ? '' : 'sticky top-20'}`}>
      <ul className="space-y-6">
        {navItems.map(section => (
          <li key={section.name} className="px-2">
            <h2 className="font-semibold text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
              {section.name}
            </h2>
            <motion.nav
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-0.5"
            >
              {section.items.map(item => (
                <motion.div key={item.name} variants={item}>
                  <NavLink
                    to={item.href}
                    onClick={onNavigate}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800/60 dark:hover:text-gray-300'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>
          </li>
        ))}
      </ul>
    </nav>
  );
}
