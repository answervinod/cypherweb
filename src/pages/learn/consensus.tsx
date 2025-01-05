import React from 'react';
import { DocTemplate } from '../../components/learn/DocTemplate';
import Head from 'next/head';

const ConsensusPage = () => {
  const content = (
    <>
      <section>
        <h2>Consensus Mechanisms in Blockchain</h2>
        <p className="lead text-xl text-gray-600 mb-8">
          Consensus mechanisms are protocols that enable network participants to agree on the valid state 
          of the blockchain, ensuring security and consistency across the distributed network.
        </p>

        <div className="bg-purple-50 rounded-xl p-6 my-8">
          <h3 className="text-lg font-semibold mb-3">Key Functions</h3>
          <ul className="space-y-2">
            {[
              "Validate new transactions and blocks",
              "Maintain network security and integrity",
              "Ensure decentralized agreement",
              "Prevent double-spending and attacks"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-purple-600 text-white text-sm font-semibold mr-3">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <h2>Traditional Consensus Mechanisms</h2>
        <div className="mt-8 space-y-8">
          {/* Proof of Work */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold mb-4">Proof of Work (PoW)</h3>
            <p className="text-gray-600 mb-6">
              The original blockchain consensus mechanism, used by Bitcoin and other cryptocurrencies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">How it Works</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Miners compete to solve complex mathematical puzzles</li>
                  <li>• First to solve creates the next block</li>
                  <li>• Requires significant computational power</li>
                  <li>• Rewards miners with new coins and transaction fees</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Advantages & Disadvantages</h4>
                <div className="space-y-4">
                  <div>
                    <span className="text-green-600 font-medium">Pros:</span>
                    <ul className="mt-1 text-gray-600">
                      <li>• Proven security model</li>
                      <li>• Highly decentralized</li>
                    </ul>
                  </div>
                  <div>
                    <span className="text-red-600 font-medium">Cons:</span>
                    <ul className="mt-1 text-gray-600">
                      <li>• High energy consumption</li>
                      <li>• Limited scalability</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Proof of Stake */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold mb-4">Proof of Stake (PoS)</h3>
            <p className="text-gray-600 mb-6">
              A more energy-efficient alternative where validators stake tokens to participate.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">How it Works</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Validators stake tokens as collateral</li>
                  <li>• Block creators selected based on stake size</li>
                  <li>• Malicious behavior results in stake slashing</li>
                  <li>• Rewards distributed proportional to stake</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Advantages & Disadvantages</h4>
                <div className="space-y-4">
                  <div>
                    <span className="text-green-600 font-medium">Pros:</span>
                    <ul className="mt-1 text-gray-600">
                      <li>• Energy efficient</li>
                      <li>• Better scalability</li>
                    </ul>
                  </div>
                  <div>
                    <span className="text-red-600 font-medium">Cons:</span>
                    <ul className="mt-1 text-gray-600">
                      <li>• Potential centralization risks</li>
                      <li>• Initial distribution concerns</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2>Cypher's Proof of Engagement (PoE)</h2>
        <div className="mt-8">
          <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">The Paradigmatic Shift Towards PoE</h3>
            <p className="text-gray-700 mb-8">
              Proof of Engagement (PoE) emerges as a transformative solution to realign blockchain with its 
              foundational principles of decentralization, sustainability, and equitable participation.
            </p>

            <div className="space-y-8">
              {/* Technical Foundations */}
              <div>
                <h4 className="text-xl font-semibold mb-4">Technical Foundations</h4>
                <div className="bg-white rounded-xl p-6">
                  <p className="text-gray-700 mb-4">
                    PoE distinguishes itself through an innovative utilization of user engagement as a critical 
                    metric for consensus and reward distribution. The mechanism leverages a multifaceted 
                    engagement scoring system:
                  </p>
                  
                  {/* Mathematical Formula */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="font-mono text-gray-800">
                      EngagementScore(i) = λ1·ValidatorEngagement(i) + λ2·CommunityParticipation(i) + λ3·NetworkSupport(i)
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      where λ1, λ2, and λ3 are weighting coefficients reflecting the relative importance of each engagement aspect
                    </p>
                  </div>

                  {/* Detailed Scoring Components */}
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4">Engagement Score Components</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        {
                          component: "ValidatorEngagement(i)",
                          weight: "λ1 = 0.5",
                          metrics: [
                            "Block validation success rate",
                            "Transaction throughput",
                            "Network uptime",
                            "Response latency"
                          ],
                          formula: "VE = (α·SR + β·TP + γ·UT + δ·RL) / 4",
                          description: "Measures the technical performance and reliability of validator nodes"
                        },
                        {
                          component: "CommunityParticipation(i)",
                          weight: "λ2 = 0.3",
                          metrics: [
                            "Governance participation",
                            "Protocol improvement proposals",
                            "Community contributions",
                            "Development activity"
                          ],
                          formula: "CP = (ω·GP + ρ·PIP + σ·CC + τ·DA) / 4",
                          description: "Quantifies active participation in ecosystem development"
                        },
                        {
                          component: "NetworkSupport(i)",
                          weight: "λ3 = 0.2",
                          metrics: [
                            "Resource provision",
                            "Network stability contribution",
                            "Security enhancement",
                            "Infrastructure support"
                          ],
                          formula: "NS = (μ·RP + ν·NSC + ξ·SE + π·IS) / 4",
                          description: "Evaluates contributions to network infrastructure and security"
                        }
                      ].map((component) => (
                        <div key={component.component} className="bg-white rounded-xl p-6 shadow-sm">
                          <h5 className="font-semibold text-purple-600 mb-2">{component.component}</h5>
                          <p className="text-sm text-gray-500 mb-3">Weight: {component.weight}</p>
                          <div className="space-y-4">
                            <div>
                              <h6 className="font-medium mb-2">Metrics:</h6>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {component.metrics.map((metric) => (
                                  <li key={metric} className="flex items-start">
                                    <svg className="w-4 h-4 text-purple-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {metric}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <p className="text-sm font-mono">{component.formula}</p>
                            </div>
                            <p className="text-sm text-gray-600">{component.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Implementation Example */}
                  <div className="mt-12">
                    <h4 className="text-lg font-semibold mb-4">PoE Implementation Example</h4>
                    <div className="space-y-6">
                      <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                        <pre className="text-sm">
                          <code className="language-solidity text-gray-100">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProofOfEngagement {
    struct Validator {
        uint256 validatorEngagement;
        uint256 communityParticipation;
        uint256 networkSupport;
        uint256 totalStake;
        bool isActive;
    }

    mapping(address => Validator) public validators;
    uint256 public constant LAMBDA1 = 50; // 0.5 in percentage
    uint256 public constant LAMBDA2 = 30; // 0.3 in percentage
    uint256 public constant LAMBDA3 = 20; // 0.2 in percentage

    event EngagementScoreUpdated(
        address indexed validator,
        uint256 newScore
    );

    function calculateEngagementScore(address validator) 
        public 
        view 
        returns (uint256) 
    {
        Validator memory v = validators[validator];
        require(v.isActive, "Validator not active");

        uint256 score = 
            (v.validatorEngagement * LAMBDA1 +
             v.communityParticipation * LAMBDA2 +
             v.networkSupport * LAMBDA3) / 100;

        return score;
    }

    function updateMetrics(
        address validator,
        uint256 _validatorEngagement,
        uint256 _communityParticipation,
        uint256 _networkSupport
    ) external {
        // Update engagement metrics
        validators[validator].validatorEngagement = _validatorEngagement;
        validators[validator].communityParticipation = _communityParticipation;
        validators[validator].networkSupport = _networkSupport;

        uint256 newScore = calculateEngagementScore(validator);
        emit EngagementScoreUpdated(validator, newScore);
    }

    // Additional implementation details...
}`}
                          </code>
                        </pre>
                      </div>

                      <div className="bg-white rounded-xl p-6">
                        <h5 className="font-semibold mb-4">Implementation Notes</h5>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-purple-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Engagement scores are calculated using weighted components defined by λ values</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-purple-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Metrics are updated periodically based on validator performance and participation</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-purple-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Smart contract ensures transparent and verifiable scoring mechanism</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Features */}
              <div>
                <h4 className="text-xl font-semibold mb-4">Distinguishing Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Decentralization",
                      description: "Ensures dispersal of control across a broad spectrum of nodes, mitigating central points of failure and strengthening network defense against attacks.",
                      icon: "🌐"
                    },
                    {
                      title: "Scalability",
                      description: "Proactively addresses transaction throughput and latency limitations, enabling efficient management of increasing transaction volumes.",
                      icon: "📈"
                    },
                    {
                      title: "Security",
                      description: "Implements advanced cryptographic algorithms and consensus protocols to protect against fraudulent activities and unauthorized breaches.",
                      icon: "🔒"
                    },
                    {
                      title: "Sustainability",
                      description: "Emphasizes user engagement over computational power, significantly reducing energy consumption compared to PoW systems.",
                      icon: "🌱"
                    }
                  ].map((feature) => (
                    <div key={feature.title} className="bg-white rounded-xl p-6">
                      <div className="text-2xl mb-3">{feature.icon}</div>
                      <h5 className="font-semibold mb-2">{feature.title}</h5>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Layer Analysis */}
              <div>
                <h4 className="text-xl font-semibold mb-4">Layer 1 Integration & Analysis</h4>
                <div className="bg-white rounded-xl p-6">
                  <p className="text-gray-700 mb-6">
                    The integration of PoE within the Layer 1 framework marks a significant departure from 
                    conventional methodologies by prioritizing and incentivizing user engagement and contributions.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        layer: "Layer 1 (PoE)",
                        description: "Provides essential infrastructure and consensus through engagement-based validation"
                      },
                      {
                        layer: "Layer 2",
                        description: "Enhances scalability through state channels and sidechains, complementing PoE"
                      },
                      {
                        layer: "Layer 3",
                        description: "Delivers end-user applications leveraging the engagement-driven foundation"
                      }
                    ].map((layer) => (
                      <div key={layer.layer} className="bg-gray-50 p-4 rounded-lg">
                        <h6 className="font-semibold mb-2">{layer.layer}</h6>
                        <p className="text-sm text-gray-600">{layer.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparative Analysis Section */}
      <section className="mt-16">
        <h2>Comparative Analysis</h2>
        <div className="mt-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6">PoE vs Traditional Consensus</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Aspect</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">PoW</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">PoS</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">PoE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      aspect: "Resource Requirement",
                      pow: "High computational power",
                      pos: "Large token holdings",
                      poe: "Active network participation"
                    },
                    {
                      aspect: "Energy Consumption",
                      pow: "Very high",
                      pos: "Low",
                      poe: "Minimal"
                    },
                    {
                      aspect: "Decentralization",
                      pow: "Hardware-dependent",
                      pos: "Wealth-dependent",
                      poe: "Engagement-dependent"
                    },
                    {
                      aspect: "Barrier to Entry",
                      pow: "High (expensive hardware)",
                      pos: "High (large stake)",
                      poe: "Low (participation-based)"
                    }
                  ].map((row) => (
                    <tr key={row.aspect} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.aspect}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{row.pow}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{row.pos}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{row.poe}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <>
      <Head>
        <title>Consensus Mechanism - Cypher Learn Hub</title>
        <meta name="description" content="Understanding blockchain consensus mechanisms and Cypher's innovative PoE" />
      </Head>
      
      <DocTemplate
        title="Consensus Mechanism"
        description="Deep dive into blockchain consensus mechanisms and Cypher's Proof of Engagement"
        lastUpdated="2024-03-20"
        content={content}
        previousPage={{
          title: "Architecture",
          href: "/learn/architecture"
        }}
        nextPage={{
          title: "Gaming",
          href: "/learn/gaming"
        }}
      />
    </>
  );
};

export default ConsensusPage; 