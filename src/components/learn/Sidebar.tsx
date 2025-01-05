import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// Navigation structure
const navigation = [
  {
    title: 'Getting Started',
    items: [
      { title: 'What is Blockchain?', href: '/learn/blockchain-guide' },
      { title: 'Why Cypher?', href: '/learn/why-cypher' },
    ]
  },
  {
    title: 'Core Concepts',
    items: [
      { title: 'Proof of Engagement', href: '/learn/poe' },
      { title: 'Architecture', href: '/learn/architecture' },
      { title: 'Consensus Mechanism', href: '/learn/consensus' },
    ]
  },
  {
    title: 'Use Cases',
    items: [
      { title: 'Gaming', href: '/learn/gaming' },
      { title: 'AI Integration', href: '/learn/ai' },
      { title: 'Real World Assets', href: '/learn/rwa' },
    ]
  },
  {
    title: 'Development',
    items: [
      { title: 'Token Economy', href: '/learn/token-economy' },
      { title: 'Security and Scalability', href: '/learn/security-scalability' },
      { title: 'Governance Model', href: '/learn/governance' },
    ]
  },
  {
    title: 'Resources',
    items: [
      { title: 'FAQ', href: '/learn/faq' }
    ]
  }
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out
          lg:relative lg:translate-x-0 lg:z-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="h-full overflow-y-auto px-4 py-8">
          {/* Mobile close button */}
          <div className="flex justify-between items-center mb-8 lg:hidden">
            <h2 className="text-lg font-semibold text-gray-900">Cypher Learn Hub</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-500 hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Desktop header */}
          <div className="hidden lg:block mb-8">
            <h2 className="text-lg font-semibold text-gray-900">Cypher Learn Hub</h2>
            <p className="text-sm text-gray-600">Documentation & Resources</p>
          </div>

          {/* Navigation */}
          <nav className="space-y-8">
            {navigation.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{section.title}</h3>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (window.innerWidth < 1024) {
                            onClose();
                          }
                        }}
                        className={`block px-3 py-2 text-sm rounded-lg ${
                          router.pathname === item.href
                            ? 'bg-purple-50 text-purple-600 font-medium'
                            : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50/50'
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}; 