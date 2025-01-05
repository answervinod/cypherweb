import React from 'react';
import { DocTemplate } from '../../components/learn/DocTemplate';
import Head from 'next/head';

const GovernanceModel = () => {
  const content = (
    <>
      <section>
        <h2>Governance Model Overview</h2>
        <p className="lead text-xl text-gray-600 mb-8">
          The Governance Model of the Proof of Engagement (PoE) blockchain ensures a decentralized, 
          inclusive, and participatory approach to network governance, emphasizing stakeholder engagement 
          and active participation.
        </p>

        {/* Decentralized Structure Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Decentralized Governance Structure</h3>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-700 mb-6">
              The PoE blockchain introduces a governance framework that decentralizes authority and 
              decision-making power, distributing it among a diverse array of network participants.
            </p>

            {/* Role of Nodes */}
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold mb-4">Role of Nodes in Governance</h4>
              <p className="text-gray-700 mb-4">
                Each node's governance weight is calculated based on both stake and engagement:
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-mono text-gray-800 mb-2">
                  GovernanceWeight(i) = δ·Stake(i) + ϕ·EngagementScore(i)
                </p>
                <div className="text-sm text-gray-600 space-y-2 mt-4">
                  <p>Where:</p>
                  <ul className="space-y-1 pl-4">
                    <li>• GovernanceWeight(i): Weight of node i in governance decisions</li>
                    <li>• Stake(i): Stake amount of node i</li>
                    <li>• EngagementScore(i): Node's engagement quantification</li>
                    <li>• δ, ϕ: Coefficients balancing stake vs engagement importance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decision-Making Processes */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Decision-Making Processes</h3>
          
          {/* Proposal and Voting */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h4 className="text-xl font-semibold mb-4">Proposal and Voting Mechanism</h4>
            <p className="text-gray-700 mb-6">
              Proposals can be submitted by any node, with progression to voting requiring a threshold 
              of preliminary support measured in governance weight.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-mono text-gray-800 mb-2">
                Outcome = {
                  `{
  Approved if ∑(i=1 to N) VoteWeight(i) > ApprovalThreshold
  Rejected otherwise
}`}
              </p>
              <div className="text-sm text-gray-600 mt-4">
                <p>Where:</p>
                <ul className="space-y-1 pl-4">
                  <li>• VoteWeight(i): Weight of vote cast by node i</li>
                  <li>• ApprovalThreshold: Required metric for proposal approval</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Community Involvement */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Community Involvement</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Incentivizing Participation */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h4 className="text-lg font-semibold mb-4">Incentivizing Participation</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Token rewards for governance participation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Wide representation of interests</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Active stakeholder engagement</span>
                </li>
              </ul>
            </div>

            {/* Feedback and Iteration */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h4 className="text-lg font-semibold mb-4">Feedback and Iteration</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Community forums and polls</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Iterative improvement process</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Interactive platforms for engagement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-12">
          <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
            <p className="text-gray-700">
              The Governance Model of the Proof of Engagement (PoE) blockchain represents an innovative 
              approach to decentralized network governance. By integrating engagement directly into the 
              decision-making process and incentivizing broad community participation, PoE establishes a 
              framework that is both inclusive and effective. This model enhances the network's adaptability 
              and resilience while aligning closely with the principles of decentralized autonomy and 
              stakeholder empowerment.
            </p>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <>
      <Head>
        <title>Governance Model - Cypher Learn Hub</title>
        <meta name="description" content="Understanding Cypher Blockchain's governance model and decision-making processes" />
      </Head>
      
      <DocTemplate
        title="Governance Model"
        description="Exploring the decentralized governance structure of Cypher's PoE network"
        lastUpdated="2024-03-20"
        content={content}
        previousPage={{
          title: "Security and Scalability",
          href: "/learn/security-scalability"
        }}
        nextPage={{
          title: "FAQ",
          href: "/learn/faq"
        }}
      />
    </>
  );
};

export default GovernanceModel; 