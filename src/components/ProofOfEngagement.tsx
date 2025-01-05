import React from 'react';

export const ProofOfEngagement = () => {
  const benefits = [
    {
      title: "Active Participation Rewards",
      description: "Earn rewards through meaningful engagement - from gaming activities to dApp development and network validation.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Sustainability",
      description: "Eco-friendly and efficient consensus mechanism, dramatically reducing the carbon footprint of blockchain operations.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Enhanced Decentralization",
      description: "Dynamic validator selection based on engagement scores ensures fair and distributed network control.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    }
  ];

  const useCases = [
    {
      title: "Gaming",
      description: "Players earn Cypher Gas Coins through in-game events, quest completion, and NFT trading.",
      icon: "🎮"
    },
    {
      title: "AI",
      description: "Rewards for contributing datasets, running AI models, and training machine learning systems.",
      icon: "🤖"
    },
    {
      title: "RWA",
      description: "Incentives for tokenizing real-world assets and maintaining transaction transparency.",
      icon: "🏢"
    }
  ];

  return (
    <section className="relative bg-white py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-block mb-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
              Revolutionary Consensus
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent 
            py-2 whitespace-nowrap px-4">
            Introducing PoE - Proof of Engagement
          </h2>
          <p className="text-xl text-gray-600 mt-8">
            More Than Participation – A Consensus Built on True Engagement
          </p>
        </div>

        {/* What is PoE */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">What is PoE?</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Proof of Engagement (PoE) is an innovative consensus mechanism designed to reward active and meaningful 
            participation in the Cypher Blockchain ecosystem. Unlike traditional consensus models that rely on 
            computing power (Proof of Work) or financial staking alone (Proof of Stake), PoE emphasizes engagement 
            as the key driver of trust and validation.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 bg-white rounded-2xl shadow-xl border border-purple-100 
              hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 
                flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-fuchsia-600 
            bg-clip-text text-transparent">
            PoE in Action
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl shadow-lg border border-purple-100 
                hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{useCase.title}</h4>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 