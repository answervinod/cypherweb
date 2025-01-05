import React from 'react';
import { DocTemplate } from '../../components/learn/DocTemplate';
import Head from 'next/head';

const TokenEconomy = () => {
  const content = (
    <>
      <section>
        <h2>Token Economy Overview</h2>
        <p className="lead text-xl text-gray-600 mb-8">
          The Proof of Engagement (PoE) blockchain network introduces a novel approach to token utility and 
          distribution, central to incentivizing and rewarding user engagement and contributions.
        </p>

        {/* Token Distribution Model */}
        <div className="bg-purple-50 rounded-xl p-8 mt-8">
          <h3 className="text-2xl font-semibold mb-4">Token Distribution Model</h3>
          <p className="text-gray-700 mb-6">
            The strategy behind token distribution focuses on incentivizing engagement and participation through PoE.
            For detailed tokenomics please refer to: <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">Cypher Tokenomics</a>
          </p>
        </div>

        {/* Network Engagement Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Facilitating Network Engagement</h3>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-700 mb-6">
              Tokens serve as a primary mechanism for fostering user engagement, quantitatively measured through 
              predefined activities including transaction validation, consensus participation, and smart contract operations.
            </p>

            {/* Engagement Score Formula */}
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="font-mono text-gray-800 mb-2">
                Ei = α · Ti + β · Si + γ · Ci
              </p>
              <div className="text-sm text-gray-600 space-y-2 mt-4">
                <p>Where:</p>
                <ul className="space-y-1 pl-4">
                  <li>• Ti: Volume of transactions validated by node i</li>
                  <li>• Si: Support activities performed for network maintenance</li>
                  <li>• Ci: Contributions towards smart contract operations</li>
                  <li>• α, β, γ: Weighting coefficients for activity prioritization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Reward Distribution Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Rewarding Contributions</h3>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-700 mb-6">
              The distribution of tokens is intricately designed to reward nodes based on their engagement scores.
            </p>

            {/* Reward Formula */}
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="font-mono text-gray-800 mb-2">
                Ri = (Ei / ∑(j=1 to N) Ej) × TotalRewards
              </p>
              <p className="text-sm text-gray-600 mt-2">
                where Ri is the reward allocated to node i, and TotalRewards represents the total pool of tokens
                set aside for distribution
              </p>
            </div>
          </div>
        </div>

        {/* Consensus Integration */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Integration within Consensus Mechanism</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h4 className="text-lg font-semibold mb-4">Security Integration</h4>
              <p className="text-gray-600">
                Tokens play a critical role in the PoE network's consensus mechanism, intertwining token utility 
                with network security and integrity.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h4 className="text-lg font-semibold mb-4">Validator Selection</h4>
              <p className="text-gray-600">
                The PoE consensus algorithm leverages tokens to dynamically select validators based on their 
                engagement scores.
              </p>
            </div>
          </div>
        </div>

        {/* Token Dynamics */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Mathematical Model for Token Dynamics</h3>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Token Issuance",
                  description: "Algorithmically adjusted to match network growth and engagement levels"
                },
                {
                  title: "Distribution",
                  description: "Based on engagement scores and network participation metrics"
                },
                {
                  title: "Consumption",
                  description: "Governed by network utility and service access requirements"
                }
              ].map((aspect) => (
                <div key={aspect.title} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">{aspect.title}</h4>
                  <p className="text-sm text-gray-600">{aspect.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-12">
          <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
            <p className="text-gray-700">
              The utility of tokens within the Proof of Engagement (PoE) blockchain network is multifaceted, 
              driving engagement, rewarding contributions, and securing the network through a carefully crafted 
              economic model. The integration of tokens into the network's core mechanisms, supported by detailed 
              technical specifications and mathematical formulations, underscores their indispensable role in 
              achieving a self-sustaining, secure, and highly engaged blockchain ecosystem.
            </p>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <>
      <Head>
        <title>Token Economy - Cypher Learn Hub</title>
        <meta name="description" content="Understanding Cypher Blockchain's token economics and distribution model" />
      </Head>
      
      <DocTemplate
        title="Token Economy"
        description="Exploring the economic model and token utility in Cypher's PoE network"
        lastUpdated="2024-03-20"
        content={content}
        previousPage={{
          title: "Real World Assets",
          href: "/learn/rwa"
        }}
        nextPage={{
          title: "Security and Scalability",
          href: "/learn/security-scalability"
        }}
      />
    </>
  );
};

export default TokenEconomy; 