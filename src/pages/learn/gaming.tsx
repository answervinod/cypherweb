import React from 'react';
import { DocTemplate } from '../../components/learn/DocTemplate';
import Head from 'next/head';

const GamingIntegration = () => {
  const content = (
    <>
      <section>
        <h2>Gaming on Cypher Blockchain</h2>
        <p className="lead text-xl text-gray-600 mb-8">
          Cypher Blockchain provides a high-performance infrastructure for gaming applications, enabling true 
          ownership of in-game assets, seamless microtransactions, and cross-game interoperability.
        </p>
      </section>

      <section className="mt-12">
        <h2>Key Features for Gaming</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {[
            {
              title: "High Performance",
              description: "20,000+ TPS and 2s block time ensure smooth gameplay and instant transactions",
              icon: "⚡"
            },
            {
              title: "Low Fees",
              description: "Optimized gas fees for microtransactions and in-game purchases",
              icon: "💰"
            },
            {
              title: "Asset Standards",
              description: "Advanced NFT standards for complex in-game items and characters",
              icon: "🎮"
            },
            {
              title: "Interoperability",
              description: "Cross-game asset sharing and marketplace integration",
              icon: "🔄"
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
        <h2>Gaming Infrastructure</h2>
        <div className="bg-purple-50 rounded-xl p-8 mt-6">
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                title: "Asset Management",
                features: [
                  "Advanced NFT standards for complex game assets",
                  "Batch minting for efficient asset creation",
                  "Flexible metadata management",
                  "Asset evolution and upgradeability"
                ]
              },
              {
                title: "Game Economy Tools",
                features: [
                  "Token standards for in-game currencies",
                  "Marketplace integration APIs",
                  "Trading and auction mechanisms",
                  "Anti-fraud protection"
                ]
              },
              {
                title: "Developer Tools",
                features: [
                  "Game-specific SDKs",
                  "Unity and Unreal Engine plugins",
                  "Asset management dashboard",
                  "Analytics and monitoring tools"
                ]
              }
            ].map((component) => (
              <div key={component.title} className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">{component.title}</h3>
                <ul className="space-y-3">
                  {component.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg className="w-5 h-5 text-purple-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2>Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: "Play-to-Earn Games",
              description: "Create engaging economies where players earn real value through gameplay",
              examples: [
                "Token rewards for achievements",
                "NFT drops for rare items",
                "Marketplace trading fees"
              ]
            },
            {
              title: "Asset Trading",
              description: "Enable players to trade in-game items across different games and platforms",
              examples: [
                "Cross-game marketplaces",
                "P2P trading systems",
                "Auction mechanisms"
              ]
            },
            {
              title: "Game Universes",
              description: "Build interconnected game worlds with shared assets and economies",
              examples: [
                "Cross-game character usage",
                "Shared currency systems",
                "Universal inventories"
              ]
            }
          ].map((useCase) => (
            <div key={useCase.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
              <p className="text-gray-600 mb-4">{useCase.description}</p>
              <ul className="space-y-2">
                {useCase.examples.map((example) => (
                  <li key={example} className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2>Get Started with Gaming</h2>
        <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-xl p-8 mt-6">
          <p className="text-gray-700 mb-6">
            Ready to build the next generation of blockchain games? Join our community and start building 
            with Cypher Blockchain's gaming infrastructure.
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
        <title>Gaming Integration - Cypher Learn Hub</title>
        <meta name="description" content="Learn how to build blockchain games on Cypher Blockchain" />
      </Head>
      
      <DocTemplate
        title="Gaming Integration"
        description="Building the future of blockchain gaming on Cypher"
        lastUpdated="2024-03-20"
        content={content}
        previousPage={{
          title: "Architecture",
          href: "/learn/architecture"
        }}
        nextPage={{
          title: "AI Integration",
          href: "/learn/ai"
        }}
      />
    </>
  );
};

export default GamingIntegration; 