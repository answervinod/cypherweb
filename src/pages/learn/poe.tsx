import React from 'react';
import { DocTemplate } from '../../components/learn/DocTemplate';
import Head from 'next/head';
import Link from 'next/link';

const ProofOfEngagement = () => {
  const content = (
    <>
      <section>
        <h2>Understanding Proof of Engagement (PoE)</h2>
        <p className="lead text-xl text-gray-600 mb-8">
          Proof of Engagement (PoE) is Cypher Blockchain's innovative consensus mechanism that rewards meaningful 
          participation and contribution to the network ecosystem.
        </p>
      </section>

      <section className="mt-12">
        <h2>Key Features of PoE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {[
            {
              title: "Merit-Based Rewards",
              description: "Rewards are distributed based on meaningful contributions rather than just computational power or stake size.",
              icon: "🏆"
            },
            {
              title: "Sybil Resistance",
              description: "Advanced mechanisms prevent gaming the system through multiple identities or automated interactions.",
              icon: "🛡️"
            },
            {
              title: "Energy Efficient",
              description: "No wasteful computational puzzles, making PoE environmentally sustainable.",
              icon: "🌱"
            },
            {
              title: "Fair Distribution",
              description: "Ensures equitable distribution of rewards across all types of network participants.",
              icon: "⚖️"
            }
          ].map((feature) => (
            <div key={feature.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2>How PoE Works</h2>
        <div className="bg-purple-50 rounded-xl p-8 mt-6">
          <h3 className="text-xl font-semibold mb-4">The PoE Process</h3>
          <ol className="space-y-6">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-purple-600 text-white font-semibold mr-4">1</span>
              <div>
                <h4 className="font-semibold mb-2">Engagement Tracking</h4>
                <p className="text-gray-600">The network monitors various forms of participation, including:</p>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>• Transaction validation</li>
                  <li>• Network security contributions</li>
                  <li>• Ecosystem development</li>
                  <li>• Community governance</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-purple-600 text-white font-semibold mr-4">2</span>
              <div>
                <h4 className="font-semibold mb-2">Scoring System</h4>
                <p className="text-gray-600">
                  Engagement scores are calculated based on quality, frequency, and impact of contributions.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-purple-600 text-white font-semibold mr-4">3</span>
              <div>
                <h4 className="font-semibold mb-2">Reward Distribution</h4>
                <p className="text-gray-600">
                  Network rewards are distributed proportionally to engagement scores, incentivizing valuable contributions.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="mt-12">
        <h2>Advantages Over Traditional Consensus</h2>
        <div className="mt-6 space-y-6">
          {[
            {
              title: "vs. Proof of Work (PoW)",
              comparisons: [
                "No massive energy consumption",
                "Rewards meaningful work instead of computational puzzles",
                "More inclusive participation model"
              ]
            },
            {
              title: "vs. Proof of Stake (PoS)",
              comparisons: [
                "Not biased towards wealthy participants",
                "Encourages active participation rather than passive holding",
                "Better distribution of network rewards"
              ]
            }
          ].map((comparison) => (
            <div key={comparison.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">{comparison.title}</h3>
              <ul className="space-y-3">
                {comparison.comparisons.map((item) => (
                  <li key={item} className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2>Participate in PoE</h2>
        <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-xl p-8 mt-6">
          <p className="text-gray-700 mb-6">
            Join the Cypher Blockchain network and start earning rewards through meaningful participation. 
            Various engagement opportunities will be available when the network launches.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
            Coming Soon
          </div>
        </div>
      </section>
    </>
  );

  return (
    <>
      <Head>
        <title>Proof of Engagement - Cypher Learn Hub</title>
        <meta name="description" content="Learn about Cypher Blockchain's innovative Proof of Engagement consensus mechanism" />
      </Head>
      
      <DocTemplate
        title="Proof of Engagement (PoE)"
        description="Understanding Cypher Blockchain's revolutionary consensus mechanism"
        lastUpdated="2024-03-20"
        content={content}
        previousPage={{
          title: "Why Cypher?",
          href: "/learn/why-cypher"
        }}
        nextPage={{
          title: "Architecture",
          href: "/learn/architecture"
        }}
      />
    </>
  );
};

export default ProofOfEngagement; 