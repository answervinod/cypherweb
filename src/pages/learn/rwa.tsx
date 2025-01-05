import React from 'react';
import { DocTemplate } from '../../components/learn/DocTemplate';
import Head from 'next/head';

const RWAIntegration = () => {
  const content = (
    <>
      <section>
        <h2>Real World Assets (RWA) on Cypher Blockchain</h2>
        <p className="lead text-xl text-gray-600 mb-8">
          Cypher Blockchain enables the tokenization and management of real-world assets, providing a secure 
          and efficient platform for fractional ownership, trading, and asset management.
        </p>
      </section>

      <section className="mt-12">
        <h2>Key Features for RWA</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {[
            {
              title: "Compliant Tokenization",
              description: "Regulatory-compliant framework for asset tokenization",
              icon: "📜"
            },
            {
              title: "Fractional Ownership",
              description: "Enable partial ownership of high-value assets",
              icon: "🏢"
            },
            {
              title: "Asset Management",
              description: "Comprehensive tools for managing tokenized assets",
              icon: "⚙️"
            },
            {
              title: "Automated Compliance",
              description: "Built-in regulatory compliance and reporting",
              icon: "✅"
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
        <h2>RWA Infrastructure</h2>
        <div className="bg-purple-50 rounded-xl p-8 mt-6">
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                title: "Tokenization Framework",
                features: [
                  "Customizable token standards for different asset types",
                  "Legal compliance templates",
                  "Multi-signature governance",
                  "Automated dividend distribution"
                ]
              },
              {
                title: "Asset Management Tools",
                features: [
                  "Real-time asset tracking and reporting",
                  "Automated compliance checks",
                  "Ownership transfer management",
                  "Revenue distribution system"
                ]
              },
              {
                title: "Trading Infrastructure",
                features: [
                  "Regulated trading platforms",
                  "KYC/AML integration",
                  "Secondary market support",
                  "Price discovery mechanisms"
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
        <h2>Asset Types & Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: "Real Estate",
              description: "Tokenize properties for fractional ownership and trading",
              examples: [
                "Commercial properties",
                "Residential developments",
                "Real estate funds"
              ]
            },
            {
              title: "Financial Assets",
              description: "Tokenize traditional financial instruments",
              examples: [
                "Bonds and securities",
                "Investment funds",
                "Revenue sharing rights"
              ]
            },
            {
              title: "Physical Assets",
              description: "Tokenize valuable physical assets",
              examples: [
                "Art and collectibles",
                "Precious metals",
                "Commodities"
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
        <h2>Compliance & Security</h2>
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Regulatory Compliance</h3>
              <ul className="space-y-3">
                {[
                  "Built-in KYC/AML checks",
                  "Automated compliance reporting",
                  "Jurisdiction-specific rules",
                  "Regular auditing support"
                ].map((item) => (
                  <li key={item} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Security Measures</h3>
              <ul className="space-y-3">
                {[
                  "Multi-signature authorization",
                  "Smart contract auditing",
                  "Real-time monitoring",
                  "Insurance integration options"
                ].map((item) => (
                  <li key={item} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2>Get Started with RWA</h2>
        <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-xl p-8 mt-6">
          <p className="text-gray-700 mb-6">
            Ready to tokenize real-world assets? Join our community and start building 
            with Cypher Blockchain's RWA infrastructure.
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
        <title>RWA Integration - Cypher Learn Hub</title>
        <meta name="description" content="Learn how to tokenize and manage real-world assets on Cypher Blockchain" />
      </Head>
      
      <DocTemplate
        title="RWA Integration"
        description="Tokenizing and managing real-world assets on Cypher"
        lastUpdated="2024-03-20"
        content={content}
        previousPage={{
          title: "AI Integration",
          href: "/learn/ai"
        }}
        nextPage={{
          title: "FAQ",
          href: "/learn/faq"
        }}
      />
    </>
  );
};

export default RWAIntegration; 