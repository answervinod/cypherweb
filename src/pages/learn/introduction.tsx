import React from 'react';
import { DocTemplate } from '../../components/learn/DocTemplate';
import Head from 'next/head';

const Introduction = () => {
  const content = (
    <>
      <section>
        <h2>The Genesis of a New Consensus Paradigm</h2>
        <p className="lead text-xl text-gray-600 mb-8">
          The inception of blockchain technology heralded a new era of digital transactions, predicated on 
          decentralization and cryptographic security.
        </p>

        {/* Traditional Consensus Challenges */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Traditional Consensus Challenges</h3>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-700 mb-6">
              Traditional consensus mechanisms, while foundational, have manifested significant drawbacks—most notably, 
              energy inefficiency, scalability constraints, and centralization tendencies.
            </p>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Proof of Work Limitations</h4>
              <p className="text-gray-700 mb-4">
                In the contemporary digital ecosystem, the Proof of Work (PoW) paradigm has been predominant, yet 
                it is beleaguered by significant impediments:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Egregious energy consumption</li>
                <li>• Incessant execution of the SHA256 algorithm</li>
                <li>• Computational centralization trends</li>
              </ul>
            </div>
          </div>
        </div>

        {/* PoE Solution */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">The Paradigmatic Shift Towards Proof of Engagement (PoE)</h3>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-700 mb-6">
              In response to these pervasive challenges, the Proof of Engagement (PoE) consensus model emerges 
              as a transformative solution, aiming to realign blockchain with its foundational principles of 
              decentralization, sustainability, and equitable participation.
            </p>

            {/* Technical Foundations */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4">Technical Foundations of PoE</h4>
              <p className="text-gray-700 mb-4">
                PoE stands distinguished by its innovative utilization of user engagement as a critical metric for 
                consensus and reward distribution. This mechanism leverages a multifaceted engagement scoring system:
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-mono text-gray-800 mb-2">
                  EngagementScore(i) = λ1·ValidatorEngagement(i) + λ2·CommunityParticipation(i) + λ3·NetworkSupport(i)
                </p>
                <div className="text-sm text-gray-600 mt-4">
                  <p>Where:</p>
                  <ul className="space-y-1 pl-4">
                    <li>• λ1, λ2, λ3: Weighting coefficients reflecting relative importance</li>
                    <li>• ValidatorEngagement(i): Measure of validation activities</li>
                    <li>• CommunityParticipation(i): Governance and community involvement</li>
                    <li>• NetworkSupport(i): Contribution to network health</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits and Impact */}
        <div className="mt-12">
          <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Revolutionary Impact</h3>
            <p className="text-gray-700 mb-6">
              The PoE model emerges as a groundbreaking solution, reimagining consensus through the lens of 
              user engagement and contribution. This innovative approach not only addresses the aforementioned 
              limitations but also aligns the incentives of network participants with the overarching health 
              and security of the blockchain.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold mb-2">Sustainability</h4>
                <p className="text-sm text-gray-600">
                  Dramatically reduced energy consumption compared to traditional PoW systems
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold mb-2">Decentralization</h4>
                <p className="text-sm text-gray-600">
                  Enhanced network participation through engagement-based incentives
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold mb-2">Scalability</h4>
                <p className="text-sm text-gray-600">
                  Improved transaction throughput without compromising security
                </p>
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
        <title>Introduction - Cypher Learn Hub</title>
        <meta name="description" content="Introduction to Cypher Blockchain and Proof of Engagement" />
      </Head>
      
      <DocTemplate
        title="Introduction"
        description="Understanding the evolution and innovation of Proof of Engagement consensus"
        lastUpdated="2024-03-20"
        content={content}
        nextPage={{
          title: "What is Blockchain?",
          href: "/learn/blockchain-guide"
        }}
      />
    </>
  );
};

export default Introduction; 