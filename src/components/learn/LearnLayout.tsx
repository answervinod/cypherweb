import React from 'react';
import { Sidebar } from './Sidebar';

interface LearnLayoutProps {
  children: React.ReactNode;
}

export const LearnLayout = ({ children }: LearnLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}; 