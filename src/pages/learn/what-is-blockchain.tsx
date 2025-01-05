import React from 'react';
import { DocTemplate } from '../../components/learn/DocTemplate';
import Head from 'next/head';

const WhatIsBlockchain = () => {
  const content = (
    <>
      <section>
        <h2>Understanding Blockchain Technology</h2>
        <p className="lead text-xl text-gray-600 mb-8">
          A comprehensive guide to blockchain technology, its fundamental concepts, and its revolutionary impact 
          on digital transactions and decentralized systems.
        </p>

        {/* Core Concepts */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Core Concepts</h3>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-4">Decentralization</h4>
                <p className="text-gray-700">
                  Unlike traditional centralized systems, blockchain operates on a distributed network of nodes, 
                  eliminating single points of failure and control.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Immutability</h4>
                <p className="text-gray-700">
                  Once data is recorded on the blockchain, it cannot be altered without consensus from the network, 
                  ensuring data integrity and trust.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How Blockchain Works */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">How Blockchain Works</h3>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Block Structure</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Timestamp of creation</li>
                  <li>• Transaction data</li>
                  <li>• Hash of the previous block</li>
                  <li>• Cryptographic nonce</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Consensus Mechanisms</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Proof of Work (PoW)</li>
                  <li>• Proof of Stake (PoS)</li>
                  <li>• Proof of Engagement (PoE)</li>
                  <li>• Other consensus variations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-semibold mb-4">Transparency</h4>
              <p className="text-gray-600">
                All transactions are visible to network participants, ensuring accountability and traceability.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-semibold mb-4">Security</h4>
              <p className="text-gray-600">
                Cryptographic techniques ensure transaction security and data protection.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-semibold mb-4">Efficiency</h4>
              <p className="text-gray-600">
                Automated processes and smart contracts enable faster, more efficient transactions.
              </p>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Real-World Applications</h3>
          <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Current Applications</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Cryptocurrency and digital assets</li>
                  <li>• Supply chain management</li>
                  <li>• Healthcare records</li>
                  <li>• Digital identity verification</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Future Potential</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Decentralized finance (DeFi)</li>
                  <li>• Gaming and virtual worlds</li>
                  <li>• Government services</li>
                  <li>• Internet of Things (IoT)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <>
      <Head>
        <title>What is Blockchain? - Cypher Learn Hub</title>
        <meta name="description" content="Understanding blockchain technology fundamentals and its applications" />
      </Head>
      
      <DocTemplate
        title="What is Blockchain?"
        description="Understanding the fundamentals of blockchain technology"
        lastUpdated="2024-03-20"
        content={content}
        previousPage={{
          title: "Introduction",
          href: "/learn/introduction"
        }}
        nextPage={{
          title: "Why Cypher?",
          href: "/learn/why-cypher"
        }}
      />
    </>
  );
};

export default WhatIsBlockchain; 