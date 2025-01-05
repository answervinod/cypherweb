import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import BlockchainBackground from '../components/BlockchainBackground';

const ExplorePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Explore - Cypher Blockchain</title>
        <meta name="description" content="Discover the Vision. Shape the Future." />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-fuchsia-900">
        <BlockchainBackground />
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Explore the Foundation of a Decentralized Revolution
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-12">
            Cypher Blockchain is a new-generation Layer 1 platform designed for Gaming, AI, and Real-World Assets.
          </p>
          <div className="flex gap-6 justify-center">
            <Link
              href="https://t.me/CypherBlockchain"
              target="_blank"
              className="px-8 py-4 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Join the Journey
            </Link>
          </div>
        </div>
      </section>

      <main className="py-20">
        <div className="container mx-auto px-4 max-w-7xl space-y-40">
          {/* Vision Section */}
          <section className="relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Vision: Building a Blockchain for Real-World Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Cypher Blockchain is being designed to unlock the potential of decentralization in Gaming, Artificial Intelligence, and Real-World Assets.
              </p>
              <div className="max-w-4xl mx-auto text-left bg-gradient-to-r from-purple-50 to-fuchsia-50 rounded-xl p-8 mb-16">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We envision a future where blockchain technology seamlessly integrates with everyday applications, powering a new generation of decentralized solutions. Our mission is to build a blockchain infrastructure that bridges the gap between Web3 innovation and real-world utility.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Through our EVM-compatible platform, we're creating an ecosystem that prioritizes scalability, security, and user experience, making blockchain technology accessible to developers and users alike.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Gaming",
                  description: "Empowering game developers to create tokenized economies and engage players with play-to-earn mechanics.",
                  icon: "🎮",
                  features: [
                    "Instant finality for seamless gameplay",
                    "Low-cost microtransactions",
                    "Cross-game asset interoperability",
                    "Built-in NFT marketplace integration"
                  ]
                },
                {
                  title: "AI",
                  description: "Enabling AI developers to tokenize data, models, and algorithms in a decentralized marketplace.",
                  icon: "🤖",
                  features: [
                    "Decentralized AI model training",
                    "Secure data marketplaces",
                    "Tokenized AI computations",
                    "Cross-chain AI model sharing"
                  ]
                },
                {
                  title: "RWA",
                  description: "Tokenizing real-world assets like real estate, commodities, and intellectual property to make them accessible and tradable on-chain.",
                  icon: "🏢",
                  features: [
                    "Fractional ownership protocols",
                    "Automated compliance systems",
                    "Real-time settlement",
                    "Transparent asset tracking"
                  ]
                }
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <ul className="space-y-3">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg className="w-5 h-5 text-purple-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                      Coming Soon
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <Link
                href="https://t.me/CypherBlockchain"
                target="_blank"
                className="inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                Join Our Community
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </section>

          {/* Technical Vision Section */}
          <section className="relative bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-3xl p-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Building a Scalable, Decentralized Future
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Cypher Blockchain combines cutting-edge technology to deliver a secure, fast, and developer-friendly platform.
              </p>
              <div className="max-w-4xl mx-auto text-left bg-white/80 rounded-xl p-8 mb-16">
                <p className="text-gray-700 leading-relaxed">
                  Our architecture is designed to handle 20,000+ transactions per second while maintaining decentralization and security. Through innovative consensus mechanisms and optimized execution environments, we're building a blockchain that's ready for mass adoption.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Proof of Engagement (PoE)",
                  description: "A consensus mechanism that rewards active participation and engagement, ensuring fairness and decentralization.",
                  icon: (
                    <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  details: [
                    "Dynamic validator selection based on network contribution",
                    "Sybil-resistant participation metrics",
                    "Automated reward distribution",
                    "Stake-weighted voting power",
                    "Multi-layer security validation"
                  ]
                },
                {
                  title: "Gas Optimization",
                  description: "Low-cost transactions optimized for gaming microtransactions, AI computations, and RWA tokenization.",
                  icon: (
                    <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  details: [
                    "Dynamic fee adjustment based on network load",
                    "Batch transaction processing",
                    "Layer 2 integration ready",
                    "Gas-free meta-transactions support",
                    "Priority lanes for different transaction types"
                  ]
                },
                {
                  title: "EVM Compatibility",
                  description: "Seamlessly deploy Ethereum dApps while leveraging Cypher's improved scalability and security.",
                  icon: (
                    <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  ),
                  details: [
                    "100% Solidity smart contract compatibility",
                    "Enhanced EVM execution environment",
                    "Cross-chain bridge infrastructure",
                    "Optimized contract deployment",
                    "Advanced debugging tools"
                  ]
                },
                {
                  title: "Developer Tools",
                  description: "Comprehensive SDKs, APIs, and a no-code platform for token creation.",
                  icon: (
                    <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  ),
                  details: [
                    "GraphQL & REST APIs",
                    "Multiple SDK languages support",
                    "Automated smart contract testing",
                    "One-click token deployment",
                    "Real-time monitoring dashboard"
                  ]
                }
              ].map((feature) => (
                <div key={feature.title} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-start">
                        <svg className="w-5 h-5 text-purple-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <Link 
                      href="https://t.me/CypherBlockchain"
                      target="_blank"
                      className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center"
                    >
                      Join Development
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-8 bg-white rounded-full px-8 py-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="text-purple-600 font-semibold">20,000+ TPS</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-purple-600 font-semibold">2s Block Time</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-purple-600 font-semibold">EVM Compatible</span>
                </div>
              </div>
            </div>
          </section>

          {/* Community Section */}
          <section className="relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Help Us Shape the Future of Cypher Blockchain
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cypher Blockchain thrives on collaboration. Whether you're a developer, gamer, or blockchain enthusiast, your participation will drive the success of our ecosystem.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Join Discussions",
                  description: "Participate in governance and decision-making through our community channels.",
                  link: "https://t.me/CypherBlockchain",
                  linkText: "Join Telegram"
                },
                {
                  title: "Test & Feedback",
                  description: "Help test the Beta Testnet and provide valuable feedback for improvements.",
                  link: "#",
                  linkText: "Coming Soon"
                },
                {
                  title: "Build & Develop",
                  description: "Participate in hackathons and development challenges to build the future.",
                  link: "#",
                  linkText: "Coming Soon"
                }
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <Link
                    href={item.link}
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                  >
                    {item.linkText}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Future Vision Section */}
          <section className="relative bg-gradient-to-br from-purple-900 to-fuchsia-900 text-white rounded-3xl p-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Imagine the Possibilities with Cypher Blockchain
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                From tokenized gaming economies to decentralized AI marketplaces and fractionalized real estate ownership, Cypher Blockchain is poised to redefine what's possible with blockchain technology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Be Part of the Journey</h3>
                <p className="text-gray-200 mb-6">
                  Cypher Blockchain is more than just a platform—it's a movement toward decentralization and innovation. Join us as we build the future.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="https://t.me/CypherBlockchain"
                    className="px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
                  >
                    Join Community
                  </Link>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
                <p className="text-gray-200 mb-6">
                  Join our Telegram channel for the latest updates about Cypher Blockchain's development and upcoming features.
                </p>
                <Link
                  href="https://t.me/CypherBlockchain"
                  target="_blank"
                  className="inline-flex items-center text-white hover:text-gray-200 font-medium"
                >
                  Join Telegram Channel
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ExplorePage; 