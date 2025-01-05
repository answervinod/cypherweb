import React, { useState } from 'react';
import Link from 'next/link';
import { Sidebar } from './Sidebar';
import { Header } from '../Header';

interface DocTemplateProps {
  title: string;
  description: string;
  lastUpdated: string;
  content: React.ReactNode;
  previousPage?: {
    title: string;
    href: string;
  };
  nextPage?: {
    title: string;
    href: string;
  };
}

export const DocTemplate: React.FC<DocTemplateProps> = ({
  title,
  description,
  lastUpdated,
  content,
  previousPage,
  nextPage,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex pt-28">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        
        <main className="flex-1">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden mb-4 p-2 rounded-lg text-gray-500 hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Content header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
              <p className="mt-2 text-lg text-gray-600">{description}</p>
              <p className="mt-4 text-sm text-gray-500">Last updated: {lastUpdated}</p>
            </div>

            {/* Main content */}
            <div className="prose prose-purple max-w-none">
              {content}
            </div>

            {/* Navigation footer */}
            <div className="mt-12 border-t border-gray-200 pt-8">
              <div className="flex justify-between">
                {previousPage && (
                  <Link
                    href={previousPage.href}
                    className="text-purple-600 hover:text-purple-700"
                  >
                    ← {previousPage.title}
                  </Link>
                )}
                {nextPage && (
                  <Link
                    href={nextPage.href}
                    className="text-purple-600 hover:text-purple-700"
                  >
                    {nextPage.title} →
                  </Link>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}; 