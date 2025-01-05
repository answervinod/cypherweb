import React from 'react';
import Link from 'next/link';

const quickStartItems = [
  {
    title: 'Blockchain Basics',
    description: 'Learn the fundamentals of blockchain technology and how it works.',
    icon: '🔗',
    href: '/learn/blockchain-basics'
  },
  {
    title: 'Why Cypher?',
    description: 'Discover what makes Cypher Blockchain unique and powerful.',
    icon: '🚀',
    href: '/learn/why-cypher'
  },
  {
    title: 'Start Building',
    description: 'Get ready to build on Cypher with our developer resources.',
    icon: '🛠️',
    href: '/learn/dev-prep'
  }
];

export const QuickStartCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {quickStartItems.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300"
        >
          <div className="text-3xl mb-4">{item.icon}</div>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600">{item.description}</p>
        </Link>
      ))}
    </div>
  );
}; 