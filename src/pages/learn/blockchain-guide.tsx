import React from 'react';
import { DocTemplate } from '../../components/learn/DocTemplate';
import Head from 'next/head';

const BlockchainGuide = () => {
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

        {/* Advanced Concepts */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Advanced Concepts</h3>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Smart Contracts</h4>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    Self-executing contracts with terms directly written into code, enabling automated and 
                    trustless execution of agreements.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-3">Key Features</h5>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Automated execution</li>
                        <li>• Immutable logic</li>
                        <li>• Transparent rules</li>
                        <li>• Composability</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Applications</h5>
                      <ul className="space-y-2 text-gray-600">
                        <li>• DeFi protocols</li>
                        <li>• NFT marketplaces</li>
                        <li>• DAO governance</li>
                        <li>• Automated systems</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Scalability Solutions</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h5 className="font-semibold mb-3">Layer 2 Solutions</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Rollups (Optimistic & ZK)</li>
                      <li>• State channels</li>
                      <li>• Plasma chains</li>
                      <li>• Sidechains</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h5 className="font-semibold mb-3">Sharding</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Data partitioning</li>
                      <li>• Parallel processing</li>
                      <li>• Cross-shard communication</li>
                      <li>• Beacon chain coordination</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Considerations */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Security Considerations</h3>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">Network Attacks</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 51% attacks</li>
                    <li>• Sybil attacks</li>
                    <li>• Eclipse attacks</li>
                    <li>• DDoS protection</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">Smart Contract Security</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Reentrancy attacks</li>
                    <li>• Integer overflow/underflow</li>
                    <li>• Access control</li>
                    <li>• Oracle manipulation</li>
                  </ul>
                </div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Best Practices</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="space-y-2 text-gray-600">
                    <li>• Code auditing</li>
                    <li>• Formal verification</li>
                    <li>• Multi-signature wallets</li>
                    <li>• Time locks</li>
                  </ul>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Emergency stops</li>
                    <li>• Upgrade patterns</li>
                    <li>• Testing frameworks</li>
                    <li>• Security monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Developments */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Future Developments</h3>
          <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-xl p-8">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold mb-4">Quantum Resistance</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Post-quantum cryptography</li>
                    <li>• Quantum-safe algorithms</li>
                    <li>• Migration strategies</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold mb-4">Interoperability</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Cross-chain bridges</li>
                    <li>• Atomic swaps</li>
                    <li>• Universal standards</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold mb-4">Sustainability</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Green consensus</li>
                    <li>• Energy efficiency</li>
                    <li>• Carbon neutrality</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold mb-4">Emerging Applications</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3">Web3 Integration</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Decentralized identity</li>
                      <li>• Social networks</li>
                      <li>• Content platforms</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Enterprise Solutions</h5>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Supply chain tracking</li>
                      <li>• Digital certificates</li>
                      <li>• Asset tokenization</li>
                    </ul>
                  </div>
                </div>
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

export default BlockchainGuide; 