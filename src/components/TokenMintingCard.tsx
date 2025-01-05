import React from 'react';

interface TokenMintingCardProps {
  title?: string;
  content?: string;
}

export const TokenMintingCard: React.FC = () => {
  return (
    <div className="p-10 rounded-2xl bg-white border border-purple-100 hover:border-purple-200 shadow-lg shadow-purple-500/5 hover:shadow-purple-500/10 transition-all duration-300">
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-6 mb-2">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="text-left">
            <h3 className="text-3xl font-bold text-gray-800">Token Platform</h3>
            <p className="text-xl text-purple-600 font-medium">Create and deploy tokens with no code required.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-8 rounded-xl bg-purple-50/50 border border-purple-100">
            <h4 className="font-semibold text-gray-800 mb-4">No-Code Creation</h4>
            <p className="text-gray-600">
              Launch your tokens without writing a single line of code. Simple, intuitive interface for token creation and management.
            </p>
          </div>
          
          <div className="p-8 rounded-xl bg-purple-50/50 border border-purple-100">
            <h4 className="font-semibold text-gray-800 mb-4">Multiple Standards</h4>
            <p className="text-gray-600">
              Support for various token standards including ERC-20, ERC-721 (NFTs), and ERC-1155 with customizable parameters.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-8 rounded-xl bg-purple-50/50 border border-purple-100">
            <h4 className="font-semibold text-gray-800 mb-4">Built-in Templates</h4>
            <p className="text-gray-600">
              Pre-built, audited templates for different use cases including gaming tokens, NFT collections, and utility tokens.
            </p>
          </div>
          
          <div className="p-8 rounded-xl bg-purple-50/50 border border-purple-100">
            <h4 className="font-semibold text-gray-800 mb-4">Advanced Features</h4>
            <p className="text-gray-600">
              Access advanced features like vesting schedules, governance mechanisms, and automated distributions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenMintingCard; 