import React from 'react';
import TokenMintingCard from './TokenMintingCard';

const FeatureCard = () => {
  return (
    <div className="p-10 rounded-2xl bg-white border border-purple-100 hover:border-purple-200 shadow-lg shadow-purple-500/5 hover:shadow-purple-500/10 transition-all duration-300">
      {/* Centered Header with Left Icon */}
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-6 mb-2">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <div className="text-left">
            <h3 className="text-3xl font-bold text-gray-800">EVM Compatibility</h3>
            <p className="text-xl text-purple-600 font-medium">Build dApps seamlessly with Solidity.</p>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="flex flex-col space-y-6">
        {/* First Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-8 rounded-xl bg-purple-50/50 border border-purple-100">
            <h4 className="font-semibold text-gray-800 mb-4">Smart Contract Compatibility</h4>
            <p className="text-gray-600">
              Cypher Blockchain is fully compatible with the Ethereum Virtual Machine (EVM), 
              enabling developers to deploy their existing smart contracts without any modifications.
            </p>
          </div>
          
          <div className="p-8 rounded-xl bg-purple-50/50 border border-purple-100">
            <h4 className="font-semibold text-gray-800 mb-4">Seamless Integration</h4>
            <p className="text-gray-600">
              Seamlessly integrate Solidity-based decentralized applications (dApps) with familiar 
              tools like MetaMask, Hardhat, and Truffle.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-8 rounded-xl bg-purple-50/50 border border-purple-100">
            <h4 className="font-semibold text-gray-800 mb-4">Developer Confidence</h4>
            <p className="text-gray-600">
              Build with confidence, leveraging the extensive Ethereum ecosystem while benefiting 
              from Cypher Blockchain's enhanced scalability and optimized gas mechanics.
            </p>
          </div>
          
          <div className="p-8 rounded-xl bg-purple-50/50 border border-purple-100">
            <h4 className="font-semibold text-gray-800 mb-4">Unlimited Potential</h4>
            <p className="text-gray-600">
              Unlock limitless possibilities for Gaming, AI, and RWA sectors by deploying smart 
              contracts on a network designed for next-generation innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const GasOptimizationCard = () => {
  return (
    <div className="p-10 rounded-2xl bg-white border border-purple-100 hover:border-purple-200 shadow-lg shadow-purple-500/5 hover:shadow-purple-500/10 transition-all duration-300">
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-6 mb-2">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="text-left">
            <h3 className="text-3xl font-bold text-gray-800">Gas Optimization</h3>
            <p className="text-xl text-purple-600 font-medium">Low-cost transactions designed for Gaming, AI, and RWA.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-8 rounded-xl bg-purple-50/50 border border-purple-100">
            <h4 className="font-semibold text-gray-800 mb-4">Minimal Gas Fees</h4>
            <p className="text-gray-600">
              Cypher Blockchain is engineered to minimize gas fees, making it ideal for 
              high-frequency transactions in gaming and AI-powered applications.
            </p>
          </div>
          
          <div className="p-8 rounded-xl bg-purple-50/50 border border-purple-100">
            <h4 className="font-semibold text-gray-800 mb-4">Predictable Pricing</h4>
            <p className="text-gray-600">
              Gamers, developers, and enterprises benefit from predictable and transparent 
              gas pricing that supports seamless scalability without compromising performance.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-8 rounded-xl bg-purple-50/50 border border-purple-100">
            <h4 className="font-semibold text-gray-800 mb-4">Advanced Techniques</h4>
            <p className="text-gray-600">
              Designed with batching and compression techniques, Cypher ensures affordable, 
              lightning-fast transactions for real-time use cases.
            </p>
          </div>
          
          <div className="p-8 rounded-xl bg-purple-50/50 border border-purple-100">
            <h4 className="font-semibold text-gray-800 mb-4">Economic Efficiency</h4>
            <p className="text-gray-600">
              Join a network optimized for economic efficiency, enabling innovation 
              without worrying about high operational costs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScalabilityCard = () => {
  return (
    <div className="p-10 rounded-2xl bg-white border border-purple-100 hover:border-purple-200 shadow-lg shadow-purple-500/5 hover:shadow-purple-500/10 transition-all duration-300">
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-6 mb-2">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </div>
          <div className="text-left">
            <h3 className="text-3xl font-bold text-gray-800">Scalability</h3>
            <p className="text-xl text-purple-600 font-medium">Built for high throughput and instant finality.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-6">
        {/* First Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-8 rounded-xl bg-purple-50/50 border border-purple-100">
            <h4 className="font-semibold text-gray-800 mb-4">High Throughput</h4>
            <p className="text-gray-600">
              Process over 20,000 transactions per second with instant finality, 
              ensuring smooth operation of high-demand applications.
            </p>
          </div>
          
          <div className="p-8 rounded-xl bg-purple-50/50 border border-purple-100">
            <h4 className="font-semibold text-gray-800 mb-4">Instant Finality</h4>
            <p className="text-gray-600">
              Transactions are confirmed and finalized within seconds, providing 
              immediate certainty for time-sensitive operations.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-8 rounded-xl bg-purple-50/50 border border-purple-100">
            <h4 className="font-semibold text-gray-800 mb-4">Elastic Architecture</h4>
            <p className="text-gray-600">
              Dynamic scaling capabilities adapt to network demands, ensuring 
              consistent performance during peak usage periods.
            </p>
          </div>
          
          <div className="p-8 rounded-xl bg-purple-50/50 border border-purple-100">
            <h4 className="font-semibold text-gray-800 mb-4">Future-Proof Design</h4>
            <p className="text-gray-600">
              Built to handle growing demands of Web3 applications, from gaming 
              to AI processing and real-world asset tokenization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SecurityCard = () => {
  return (
    <div className="p-10 rounded-2xl bg-white border border-purple-100 hover:border-purple-200 shadow-lg shadow-purple-500/5 hover:shadow-purple-500/10 transition-all duration-300">
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-6 mb-2">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div className="text-left">
            <h3 className="text-3xl font-bold text-gray-800">Security</h3>
            <p className="text-xl text-purple-600 font-medium">Robust Proof of Stake mechanism for enhanced security.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-6">
        {/* First Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-8 rounded-xl bg-purple-50/50 border border-purple-100">
            <h4 className="font-semibold text-gray-800 mb-4">Proof of Engagement</h4>
            <p className="text-gray-600">
              Advanced consensus mechanism that rewards active participation while 
              maintaining robust network security and decentralization.
            </p>
          </div>
          
          <div className="p-8 rounded-xl bg-purple-50/50 border border-purple-100">
            <h4 className="font-semibold text-gray-800 mb-4">Attack Prevention</h4>
            <p className="text-gray-600">
              Multi-layered security measures protect against common attack vectors, 
              ensuring the safety of network assets and transactions.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-8 rounded-xl bg-purple-50/50 border border-purple-100">
            <h4 className="font-semibold text-gray-800 mb-4">Cryptographic Security</h4>
            <p className="text-gray-600">
              State-of-the-art cryptography ensures the integrity and privacy of 
              transactions, smart contracts, and network communications.
            </p>
          </div>
          
          <div className="p-8 rounded-xl bg-purple-50/50 border border-purple-100">
            <h4 className="font-semibold text-gray-800 mb-4">Validator Network</h4>
            <p className="text-gray-600">
              Decentralized network of validators maintains consensus and security, 
              with economic incentives aligned with network health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FeaturesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Built for developers, designed for scale, and optimized for performance.
          </p>
        </div>

        {/* Feature Cards in 2-1-2 Layout with full width */}
        <div className="space-y-12">
          {/* First Row - 2 cards */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <FeatureCard />
            <GasOptimizationCard />
          </div>

          {/* Middle Row - 1 centered card */}
          <div className="xl:px-[12.5%]">
            <TokenMintingCard />
          </div>

          {/* Last Row - 2 cards */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <ScalabilityCard />
            <SecurityCard />
          </div>
        </div>
      </div>
    </section>
  );
}; 