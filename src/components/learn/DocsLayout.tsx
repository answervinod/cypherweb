import React, { useState } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Sidebar } from './Sidebar';
import { SearchModal } from './SearchModal';
import { useRouter } from 'next/router';

interface DocsLayoutProps {
  children: React.ReactNode;
}

export const DocsLayout: React.FC<DocsLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setSearchOpen(false)} />

      {/* Mobile Menu Button */}
      <div className="fixed bottom-4 right-4 lg:hidden z-50">
        <button
          onClick={() => setSidebarOpen(true)}
          className="bg-purple-600 text-white p-4 rounded-full shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Search Button */}
      <div className="fixed bottom-4 right-20 z-50">
        <button
          onClick={() => setSearchOpen(true)}
          className="bg-white text-purple-600 p-4 rounded-full shadow-lg border border-purple-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      <div className="flex min-h-screen">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 pt-16">
          <div className="max-w-4xl mx-auto px-4 py-8">
            {children}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}; 