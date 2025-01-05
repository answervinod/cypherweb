import React from 'react';
import { DocTemplate } from '../../components/learn/DocTemplate';
import Head from 'next/head';

const AIIntegration = () => {
  const content = (
    <>
      <section>
        <h2>AI on Cypher Blockchain</h2>
        <p className="lead text-xl text-gray-600 mb-8">
          Cypher Blockchain provides specialized infrastructure for AI applications, enabling decentralized 
          model training, secure data marketplaces, and transparent AI monetization.
        </p>
      </section>

      <section className="mt-12">
        <h2>Key Features for AI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {[
            {
              title: "Decentralized Computing",
              description: "Distributed AI model training and inference across the network",
              icon: "🧠"
            },
            {
              title: "Data Marketplaces",
              description: "Secure trading of AI training data and models",
              icon: "📊"
            },
            {
              title: "Model Verification",
              description: "On-chain verification of AI model authenticity and performance",
              icon: "✓"
            },
            {
              title: "Tokenized Access",
              description: "Granular access control for AI models and datasets",
              icon: "🔑"
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
        <h2>AI Infrastructure</h2>
        <div className="bg-purple-50 rounded-xl p-8 mt-6">
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                title: "Model Management",
                features: [
                  "Decentralized model storage and versioning",
                  "Automated model verification",
                  "Performance tracking and analytics",
                  "Access control and licensing"
                ]
              },
              {
                title: "Data Infrastructure",
                features: [
                  "Secure data sharing protocols",
                  "Privacy-preserving computation",
                  "Distributed dataset management",
                  "Data quality verification"
                ]
              },
              {
                title: "Developer Tools",
                features: [
                  "AI-specific smart contracts",
                  "Model deployment APIs",
                  "Integration with popular ML frameworks",
                  "Monitoring and analytics tools"
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
              title: "AI Marketplaces",
              description: "Create decentralized marketplaces for AI models and datasets",
              examples: [
                "Model trading platforms",
                "Dataset exchanges",
                "Compute resource sharing"
              ]
            },
            {
              title: "Federated Learning",
              description: "Enable collaborative model training while preserving data privacy",
              examples: [
                "Distributed training networks",
                "Privacy-preserving computation",
                "Incentivized participation"
              ]
            },
            {
              title: "AI Governance",
              description: "Implement transparent governance for AI systems",
              examples: [
                "Model auditing",
                "Bias detection",
                "Performance tracking"
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
        <h2>Get Started with AI Integration</h2>
        <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-xl p-8 mt-6">
          <p className="text-gray-700 mb-6">
            Ready to build decentralized AI applications? Join our community and start building 
            with Cypher Blockchain's AI infrastructure.
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
        <title>AI Integration - Cypher Learn Hub</title>
        <meta name="description" content="Learn how to build AI applications on Cypher Blockchain" />
      </Head>
      
      <DocTemplate
        title="AI Integration"
        description="Building decentralized AI solutions on Cypher"
        lastUpdated="2024-03-20"
        content={content}
        previousPage={{
          title: "Gaming Integration",
          href: "/learn/gaming"
        }}
        nextPage={{
          title: "RWA Integration",
          href: "/learn/rwa"
        }}
      />
    </>
  );
};

export default AIIntegration; 