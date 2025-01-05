import React from 'react';
import AnimatedFeatureContent from './AnimatedFeatureContent';

export const TokenPlatform = () => {
  const features = {
    simplified: {
      title: "Simplified Token Creation",
      description: "Create tokens without writing a single line of code using our intuitive platform.",
      details: [
        "Choose from ERC-20, ERC-721 (NFTs), or ERC-1155 token standards",
        "Customize token name, symbol, supply, and other parameters",
        "One-click deployment to Cypher Blockchain",
        "Instant verification and listing on block explorers"
      ]
    },
    templates: {
      title: "Pre-Built Templates",
      description: "Start with battle-tested templates designed for specific use cases.",
      details: [
        "Gaming tokens with built-in reward mechanics",
        "NFT collections with royalty support",
        "Utility tokens with governance features",
        "Asset-backed tokens with compliance controls"
      ]
    },
    interface: {
      title: "User-Friendly Interface",
      description: "An intuitive platform that makes token creation accessible to everyone.",
      details: [
        "Drag-and-drop token feature configuration",
        "Real-time preview of your token",
        "Advanced tokenomics settings",
        "Built-in vesting and distribution tools"
      ]
    },
    security: {
      title: "Built-In Security",
      description: "Enterprise-grade security features to protect your tokens.",
      details: [
        "Pre-audited smart contract templates",
        "Real-time validation checks",
        "Immutable deployment records",
        "Multi-signature wallet support"
      ]
    }
  };

  const steps = [
    {
      title: "Register Account",
      description: "Register your account on Cypher Blockchain's token creation platform"
    },
    {
      title: "Select Token Type",
      description: "Select your desired token type and template"
    },
    {
      title: "Input Details",
      description: "Input token details (e.g., name, symbol, supply, decimals, etc.)"
    },
    {
      title: "Review Tokenomics",
      description: "Review your tokenomics and advanced options"
    },
    {
      title: "Deploy Token",
      description: "Deploy your token to Cypher Blockchain with one click"
    },
    {
      title: "Share & Integrate",
      description: "Share your token with your audience and integrate it into your ecosystem"
    }
  ];

  const industryContent = {
    'Gaming': {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      ),
      title: "For Gaming Studios",
      description: "Launch in-game currencies or NFTs that players can earn, trade, or use across multiple games. Create loyalty programs with tokenized rewards to boost player engagement.",
      features: [
        "In-game currency creation",
        "NFT marketplace integration",
        "Cross-game asset compatibility",
        "Player reward systems"
      ]
    },
    'AI': {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "For AI Innovators",
      description: "Monetize AI services by creating utility tokens for APIs or data subscriptions. Tokenize datasets or machine learning models for transparent access.",
      features: [
        "API access tokens",
        "Dataset monetization",
        "Model access control",
        "Usage tracking"
      ]
    },
    'Real-World Assets': {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "For Asset Managers",
      description: "Tokenize real estate or commodities, enabling fractional ownership and liquidity. Use smart contracts to automate transactions and streamline asset management.",
      features: [
        "Fractional ownership",
        "Automated compliance",
        "Liquidity pools",
        "Asset tracking"
      ]
    }
  };

  return (
    <section className="relative bg-white" style={{ minHeight: '80vh' }}>
      {/* Gradient Background - Lighter version */}
      <div className="absolute inset-0">
        {/* Primary gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-fuchsia-50 opacity-70" />
        
        {/* Subtle animated glow */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100/10 via-fuchsia-100/10 to-blue-100/10 animate-gradient-xy" />
        </div>
        
        {/* Subtle mesh overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.03)_0%,_transparent_100%)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 pt-8 pb-32">
          {/* Header */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-block mb-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
                No-Code Platform
              </div>
            </div>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              Build Your Token Platform
            </h2>
            <p className="text-xl text-gray-600">
              Create, customize, and deploy tokens effortlessly with our intuitive no-code platform
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-purple-100">
              <AnimatedFeatureContent content={features.simplified} />
            </div>
          </div>

          {/* How It Works */}
          <div className="mt-32">
            <h3 className="text-3xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                How It Works
              </span>
            </h3>

            <div className="max-w-6xl mx-auto relative">
              {/* Connecting Lines */}
              <div className="absolute inset-0 -z-10">
                {/* Horizontal Lines - Top Row */}
                <div className="absolute top-[25%] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-purple-600 to-fuchsia-600" />
                
                {/* Horizontal Lines - Bottom Row */}
                <div className="absolute top-[75%] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-purple-600 to-fuchsia-600" />
                
                {/* Vertical Connector between rows */}
                <div className="absolute right-[15%] top-[25%] w-0.5 h-[50%] bg-gradient-to-b from-purple-600 to-fuchsia-600" />
              </div>

              {/* Top Row: Steps 1-3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                {steps.slice(0, 3).map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white p-8 rounded-2xl shadow-lg h-48 flex flex-col items-center justify-center">
                      {/* Number */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2
                        w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-600 
                        flex items-center justify-center text-white font-bold z-10">
                        {index + 1}
                      </div>
                      
                      {/* Content */}
                      <div className="text-center">
                        <h4 className="text-lg font-bold text-gray-800 mb-3">{step.title}</h4>
                        <p className="text-sm text-gray-600 max-w-[250px]">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Row: Steps 6-5-4 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.slice(3).reverse().map((step, index) => (
                  <div key={index + 3} className="relative">
                    <div className="bg-white p-8 rounded-2xl shadow-lg h-48 flex flex-col items-center justify-center">
                      {/* Number */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2
                        w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-600 
                        flex items-center justify-center text-white font-bold z-10">
                        {6 - index}
                      </div>
                      
                      {/* Content */}
                      <div className="text-center">
                        <h4 className="text-lg font-bold text-gray-800 mb-3">{step.title}</h4>
                        <p className="text-sm text-gray-600 max-w-[250px]">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {Object.entries(industryContent).map(([key, content]) => (
              <div key={key} 
                className="p-8 rounded-2xl bg-white shadow-xl border border-purple-100 
                  hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 
                  flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                  {content.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{content.title}</h4>
                <p className="text-gray-600 mb-6">{content.description}</p>
                <ul className="space-y-3">
                  {content.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
