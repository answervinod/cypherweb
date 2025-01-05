import React from 'react';
import { DocTemplate } from '../../components/learn/DocTemplate';
import Head from 'next/head';

const Architecture = () => {
  const content = (
    <>
      <section>
        <h2>Advanced Network Structure</h2>
        <p className="lead text-xl text-gray-600 mb-8">
          The Cypher blockchain, utilizing Proof of Engagement (PoE), exhibits a novel network structure 
          optimized for efficiency and security through complex graph theoretical models and cryptographic principles.
        </p>

        {/* Optimized Topology Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Optimized Decentralized Topology</h3>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-700 mb-6">
              The topology is optimized through a graph-based model G = (V,E), enhanced with a dynamic node 
              connection strategy to minimize latency and maximize data propagation speed.
            </p>
            
            {/* Mathematical Formula */}
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="font-mono text-gray-800 mb-2">
                Goptimized = arg minG∑(vi,vj)∈E d(vi, vj)
              </p>
              <p className="text-sm text-gray-600">
                where d(vi, vj) represents the distance metric between nodes vi and vj, 
                encapsulating both latency and reliability factors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Key Benefits</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Highly connected yet decentralized network</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Prevention of network bottlenecks</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Enhanced security through optimal resilience</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Technical Implementation</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Modified Minimum Spanning Tree (MST) algorithm</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dynamic node connection strategy</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Optimized data propagation paths</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* P2P Communication Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Enhanced Peer-to-Peer Communication</h3>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-700 mb-6">
              The P2P protocol incorporates advanced routing algorithms, including Kademlia for efficient data 
              lookup and retrieval, reducing the overall network latency.
            </p>

            {/* Communication Efficiency Formula */}
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="font-mono text-gray-800 mb-2">
                Ceff(vi, vj) = 1/(D(vi, vj) + λ · log(N))
              </p>
              <p className="text-sm text-gray-600">
                where N is the total number of nodes, and λ is a parameter that adjusts the impact 
                of the network's scale on communication efficiency
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Incentive Mechanism Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Dynamic Incentive Mechanism</h3>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-700 mb-6">
              The incentive mechanism is formalized through a dynamic algorithm that adjusts rewards based on 
              network conditions, participant contributions, and overall engagement levels.
            </p>

            {/* Reward Function Formula */}
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="font-mono text-gray-800 mb-2">
                f(v, t) = α(t) · C(v) + β(t) · S(v) + γ · P(v, t)
              </p>
              <p className="text-sm text-gray-600">
                where P(v, t) represents the participation index of node v at time t, incorporating factors such as uptime,
                network support activities, and quality of service (QoS). α(t) and β(t) are time-varying coefficients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Dynamic Parameters</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Time-varying coefficients (α(t), β(t))</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Participation index P(v, t)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Network support factor γ</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Adaptive Features</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Network condition responsiveness</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dynamic reward adjustment</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Sustainability optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Data Integrity and Security Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Robust Data Integrity and Security</h3>
          
          {/* Cryptographic Hash Functions */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-6">
            <h4 className="text-xl font-semibold mb-4">Cryptographic Hash Functions in PoE</h4>
            <p className="text-gray-700 mb-6">
              The blockchain employs a novel hash function designed for enhanced security and efficiency, 
              incorporating elements from cryptographic primitives.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="font-mono text-gray-800 mb-2">
                Hnew(x) = BLAKE2(SHA-3(x))
              </p>
              <p className="text-sm text-gray-600">
                Combines SHA-3's resistance to collision and preimage attacks with BLAKE2's speed
              </p>
            </div>
          </div>

          {/* Block Structure */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-6">
            <h4 className="text-xl font-semibold mb-4">Securing Block Structure</h4>
            <p className="text-gray-700 mb-6">
              Each block integrates advanced cryptographic techniques, including zk-SNARKs for privacy-preserving transactions.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="font-mono text-gray-800 mb-2">
                Bi = (Hnew(Ti), Hnew(Bi−1), Ti, σi, zkTi)
              </p>
              <p className="text-sm text-gray-600">
                where zkTi represents the zero-knowledge proof associated with transactions Ti
              </p>
            </div>
          </div>

          {/* Immutable Ledger */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h4 className="text-xl font-semibold mb-4">Immutable Ledger and Security</h4>
            <p className="text-gray-700 mb-6">
              Leveraging cryptographic accumulators, the blockchain enhances the traditional chaining of blocks 
              with additional verification layers.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="font-mono text-gray-800 mb-2">
                IC(Bi) = Hnew(Bi) + Accumulator(B1,B2,...,Bi−1)
              </p>
              <p className="text-sm text-gray-600">
                Cryptographic accumulator reinforces the immutability of the ledger
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold mb-3">Security Features</h5>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cryptographic accumulators</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Multi-layer verification</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Historical data protection</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-3">Benefits</h5>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Exponential difficulty increase for modifications</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Enhanced detection of tampering attempts</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Robust data integrity guarantees</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Continue with Dynamic Incentive Mechanism, Data Integrity, etc. */}
      </section>
    </>
  );

  return (
    <>
      <Head>
        <title>Architecture - Cypher Learn Hub</title>
        <meta name="description" content="Understanding Cypher Blockchain's advanced network architecture" />
      </Head>
      
      <DocTemplate
        title="Architecture"
        description="Deep dive into Cypher Blockchain's technical architecture and network structure"
        lastUpdated="2024-03-20"
        content={content}
        previousPage={{
          title: "Proof of Engagement",
          href: "/learn/poe"
        }}
        nextPage={{
          title: "Consensus Mechanism",
          href: "/learn/consensus"
        }}
      />
    </>
  );
};

export default Architecture; 