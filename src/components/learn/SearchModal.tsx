import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Dialog } from '@headlessui/react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const router = useRouter();

  // Mock search results - replace with actual search implementation
  useEffect(() => {
    if (query.length > 2) {
      // Implement actual search logic here
      setResults([
        { title: 'What is Blockchain?', href: '/learn/blockchain-basics' },
        { title: 'Proof of Engagement', href: '/learn/poe' },
        // ... more results
      ]);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <div className="min-h-screen px-4 text-center">
        <div className="fixed inset-0 bg-black opacity-30" />

        <Dialog.Panel className="inline-block w-full max-w-2xl my-8 p-6 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search documentation..."
              className="w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
            />
            <kbd className="absolute right-3 top-3 px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-200 rounded">
              ESC
            </kbd>
          </div>

          {results.length > 0 && (
            <div className="mt-4 max-h-96 overflow-y-auto">
              {results.map((result) => (
                <button
                  key={result.href}
                  onClick={() => {
                    router.push(result.href);
                    onClose();
                  }}
                  className="block w-full px-4 py-3 text-left hover:bg-purple-50 rounded-lg"
                >
                  <h4 className="font-medium text-gray-900">{result.title}</h4>
                </button>
              ))}
            </div>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}; 