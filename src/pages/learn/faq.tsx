import React, { useState } from 'react';
import { DocTemplate } from '../../components/learn/DocTemplate';
import Head from 'next/head';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  category: 'general' | 'technical' | 'development' | 'enterprise';
}

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const faqItems: FAQItem[] = [
    {
      category: 'general',
      question: "What is Cypher Blockchain?",
      answer: (
        <div className="space-y-4">
          <p>
            Cypher Blockchain is a next-generation Layer 1 blockchain platform designed specifically for industries like:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Gaming</li>
            <li>Artificial Intelligence (AI)</li>
            <li>Real-World Assets (RWA)</li>
          </ul>
          <p>
            It leverages Proof of Engagement (PoE) consensus, ensuring scalability, low gas fees, and security 
            for decentralized applications (dApps) and projects.
          </p>
        </div>
      )
    },
    {
      category: 'technical',
      question: "What is Proof of Engagement (PoE) and how does it work?",
      answer: (
        <div className="space-y-4">
          <p>
            Proof of Engagement (PoE) is the unique consensus mechanism used by Cypher Blockchain. Unlike 
            traditional Proof of Work or Proof of Stake models, PoE rewards validators and network participants 
            based on their meaningful contributions and engagement within the ecosystem.
          </p>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Key Benefits:</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Fair and decentralized network</li>
              <li>Reduced energy consumption</li>
              <li>Prioritized active participation</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      category: 'technical',
      question: "Is Cypher Blockchain EVM-compatible?",
      answer: (
        <div className="space-y-4">
          <p>
            Yes, Cypher Blockchain is fully EVM-compatible. This means developers can seamlessly migrate their 
            Ethereum-based dApps and smart contracts to Cypher Blockchain without requiring extensive modifications.
          </p>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Compatible Development Tools:</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Solidity</li>
              <li>Hardhat</li>
              <li>Truffle</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      category: 'enterprise',
      question: "What industries does Cypher Blockchain target?",
      answer: (
        <div className="space-y-4">
          <p>Cypher Blockchain focuses on three key industries:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Gaming</h4>
              <ul className="text-sm space-y-1">
                <li>• Tokenized in-game assets</li>
                <li>• Play-to-earn ecosystems</li>
                <li>• Seamless microtransactions</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Artificial Intelligence</h4>
              <ul className="text-sm space-y-1">
                <li>• Decentralized AI marketplaces</li>
                <li>• Tokenized datasets</li>
                <li>• AI-powered dApps</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Real-World Assets</h4>
              <ul className="text-sm space-y-1">
                <li>• Fractional ownership</li>
                <li>• Asset tokenization</li>
                <li>• Real estate and IP</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      category: 'development',
      question: "How can I create my own token on Cypher Blockchain?",
      answer: (
        <div className="space-y-4">
          <p>
            Cypher Blockchain provides a no-code token minting platform that allows users to create their 
            own tokens effortlessly.
          </p>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Customizable Parameters:</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Token Name</li>
              <li>Token Ticker</li>
              <li>Decimals</li>
              <li>Total Supply</li>
              <li>Advanced features (burning, staking, minting)</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 italic">
            Note: Token creation will be available once the Testnet goes live.
          </p>
        </div>
      )
    },
    {
      category: 'general',
      question: "When will the Testnet and Mainnet of Cypher Blockchain be launched?",
      answer: (
        <div className="space-y-4">
          <p>
            Cypher Blockchain is currently in development, with the following launch phases:
          </p>
          <div className="space-y-2">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold">Alpha Testnet</h4>
              <p className="text-sm">Coming soon - Internal testing phase</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold">Beta Testnet</h4>
              <p className="text-sm">Following Alpha - External developer testing</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold">Mainnet</h4>
              <p className="text-sm">After thorough testing and community feedback</p>
            </div>
          </div>
        </div>
      )
    },
    {
      category: 'technical',
      question: "How are gas fees optimized on Cypher Blockchain?",
      answer: (
        <div className="space-y-4">
          <p>
            Cypher Blockchain optimizes gas fees through several advanced mechanisms:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Advanced transaction batching</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Lightweight data structures</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Scalability improvements</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      category: 'development',
      question: "How can I participate in the development of Cypher Blockchain?",
      answer: (
        <div className="space-y-4">
          <p>You can contribute to Cypher Blockchain's development in several ways:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Community Participation</h4>
              <ul className="text-sm space-y-1">
                <li>• Join discussions on Discord</li>
                <li>• Participate in Telegram groups</li>
                <li>• Engage in community forums</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Technical Contribution</h4>
              <ul className="text-sm space-y-1">
                <li>• Testnet participation</li>
                <li>• Code contributions</li>
                <li>• Bug reporting and testing</li>
              </ul>
            </div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Governance Participation</h4>
            <p className="text-sm">Help shape the future of Cypher Blockchain by contributing to governance decisions</p>
          </div>
        </div>
      )
    },
    {
      category: 'technical',
      question: "How is Cypher Blockchain different from other blockchains like Ethereum or Solana?",
      answer: (
        <div className="space-y-4">
          <p>Cypher Blockchain differentiates itself through several unique features:</p>
          <div className="space-y-2">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold">Proof of Engagement (PoE)</h4>
              <p className="text-sm">Rewards based on meaningful engagement rather than just staking or computational power</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold">Industry Focus</h4>
              <p className="text-sm">Specifically designed for Gaming, AI, and RWAs</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold">Developer Experience</h4>
              <p className="text-sm">No-code token creation platform and comprehensive SDKs</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold">Cost Efficiency</h4>
              <p className="text-sm">Optimized for high-frequency transactions with minimal costs</p>
            </div>
          </div>
        </div>
      )
    },
    {
      category: 'general',
      question: "How can I stay updated on Cypher Blockchain's development?",
      answer: (
        <div className="space-y-4">
          <p>Stay connected through our official channels:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Social Media</h4>
              <ul className="text-sm space-y-1">
                <li>• Twitter</li>
                <li>• LinkedIn</li>
                <li>• Telegram</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Community Channels</h4>
              <ul className="text-sm space-y-1">
                <li>• Discord community</li>
                <li>• Newsletter subscription</li>
                <li>• Official blog</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      category: 'development',
      question: "What tools and resources will Cypher Blockchain provide for developers?",
      answer: (
        <div className="space-y-4">
          <p>Cypher Blockchain offers a comprehensive development toolkit:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Development Tools</h4>
              <ul className="text-sm space-y-1">
                <li>• SDKs and APIs</li>
                <li>• No-code token minting platform</li>
                <li>• Developer dashboard</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Documentation</h4>
              <ul className="text-sm space-y-1">
                <li>• Detailed technical docs</li>
                <li>• Tutorials and guides</li>
                <li>• Code examples</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-600 italic">
            Note: These resources will be available during the Beta Testnet phase.
          </p>
        </div>
      )
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General' },
    { id: 'technical', name: 'Technical' },
    { id: 'development', name: 'Development' },
    { id: 'enterprise', name: 'Enterprise' }
  ];

  const filteredFAQs = faqItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (typeof item.answer === 'string' && item.answer.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const content = (
    <>
      <section>
        <h2>Frequently Asked Questions</h2>
        
        {/* Search and Filter */}
        <div className="mt-8 space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${activeCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="mt-8 space-y-6">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-6">
                  <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                  <svg
                    className="w-6 h-6 transform transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 pt-2">
                  <div className="prose prose-purple max-w-none">
                    {faq.answer}
                  </div>
                </div>
              </details>
            </div>
          ))}
        </div>
      </section>
    </>
  );

  return (
    <>
      <Head>
        <title>FAQ - Cypher Learn Hub</title>
        <meta name="description" content="Frequently asked questions about Cypher Blockchain" />
      </Head>
      
      <DocTemplate
        title="FAQ"
        description="Common questions about Cypher Blockchain and their answers"
        lastUpdated="2024-03-20"
        content={content}
        previousPage={{
          title: "Governance Model",
          href: "/learn/governance"
        }}
      />
    </>
  );
};

export default FAQPage; 