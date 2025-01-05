import React from 'react';
import { DocTemplate } from '../../components/learn/DocTemplate';
import Head from 'next/head';
import Link from 'next/link';

const WhyCypher = () => {
  const content = (
    <>
      <section>
        <h2>Why Choose Cypher Blockchain?</h2>
        <p className="lead text-xl text-gray-600 mb-8">
          Cypher Blockchain is designed to address the key challenges faced by existing blockchain platforms while providing 
          specialized solutions for Gaming, AI, and Real-World Assets (RWA).
        </p>
      </section>

      <section className="mt-12">
        <h2>Core Advantages</h2>
        <div className="grid grid-cols-1 gap-6 mt-6">
          {[
            {
              title: "High Performance",
              description: "With 20,000+ TPS and 2-second block times, Cypher delivers the speed needed for real-world applications.",
              details: [
                "Lightning-fast transaction finality",
                "Optimized for high-frequency microtransactions",
                "Scalable architecture for growing demands"
              ]
            },
            {
              title: "Industry-Focused Design",
              description: "Purpose-built features for Gaming, AI, and RWA sectors.",
              details: [
                "Gaming: Low-latency infrastructure for seamless gameplay",
                "AI: Specialized data handling and model verification",
                "RWA: Compliant asset tokenization framework"
              ]
            },
            {
              title: "Developer-Friendly",
              description: "Full EVM compatibility with enhanced tooling.",
              details: [
                "Seamless migration from Ethereum",
                "Comprehensive SDKs and APIs",
                "No-code token creation platform"
              ]
            }
          ].map((advantage) => (
            <div key={advantage.title} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4">{advantage.title}</h3>
              <p className="text-gray-600 mb-6">{advantage.description}</p>
              <ul className="space-y-3">
                {advantage.details.map((detail) => (
                  <li key={detail} className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2>Innovation Through Proof of Engagement</h2>
        <div className="bg-purple-50 rounded-xl p-8 mt-6">
          <p className="mb-6">
            Our unique Proof of Engagement (PoE) consensus mechanism revolutionizes how network participants are rewarded, 
            ensuring fair distribution and active ecosystem participation.
          </p>
          <Link 
            href="/learn/poe"
            className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center"
          >
            Learn more about PoE
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <h2>Real-World Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: "Gaming Revolution",
              description: "Enable true ownership of in-game assets and seamless cross-game interoperability."
            },
            {
              title: "AI Democratization",
              description: "Create decentralized marketplaces for AI models and datasets."
            },
            {
              title: "Asset Accessibility",
              description: "Make real-world assets more accessible through fractional ownership."
            }
          ].map((impact) => (
            <div key={impact.title} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">{impact.title}</h3>
              <p className="text-gray-600">{impact.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );

  return (
    <>
      <Head>
        <title>Why Cypher? - Cypher Learn Hub</title>
        <meta name="description" content="Discover what makes Cypher Blockchain unique and powerful" />
      </Head>
      
      <DocTemplate
        title="Why Cypher?"
        description="Understanding the unique advantages and innovations of Cypher Blockchain"
        lastUpdated="2024-03-20"
        content={content}
        previousPage={{
          title: "Blockchain Basics",
          href: "/learn/blockchain-basics"
        }}
        nextPage={{
          title: "Proof of Engagement",
          href: "/learn/poe"
        }}
      />
    </>
  );
};

export default WhyCypher; 