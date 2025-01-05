import React, { useState, useEffect } from 'react';

const FocusCard = ({ title, tagline, content, isVisible }: { 
  title: string; 
  tagline: string; 
  content: {
    title: string;
    description: string;
  }[];
  isVisible: boolean;
}) => {
  return (
    <div 
      className={`transform transition-all duration-700 absolute w-full
        ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
    >
      <div className="p-10 rounded-2xl bg-gradient-to-br from-purple-500/10 via-fuchsia-500/10 to-purple-500/10 backdrop-blur-sm border border-purple-100">
        {/* Header - Now centered */}
        <div className="mb-12 text-center">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">{title}</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{tagline}</p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {content.map((item, index) => (
            <div key={index} 
              className="p-8 rounded-xl bg-white/80 backdrop-blur-sm border border-purple-100 hover:shadow-lg transition-all duration-300"
            >
              <h4 className="font-semibold text-gray-800 mb-4">{item.title}</h4>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const OurFocusSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    {
      title: "Gaming",
      tagline: "Empowering the next level of immersive gaming experiences",
      content: [
        {
          title: "Real-Time Gaming Infrastructure",
          description: "Revolutionize gaming with real-time, low-latency transactions and seamless asset tokenization for next-gen experiences."
        },
        {
          title: "In-Game Economies",
          description: "Enable play-to-earn mechanics, NFT-based assets, and microtransactions at minimal gas costs."
        },
        {
          title: "Asset Tokenization",
          description: "Create in-game currencies, tokenize characters, weapons, or skins, and trade them securely on Cypher Blockchain."
        },
        {
          title: "Cross-Platform Integration",
          description: "Benefit from cross-platform compatibility, allowing assets to move freely between games and ecosystems."
        }
      ]
    },
    {
      title: "Artificial Intelligence",
      tagline: "Unleashing AI innovation with blockchain integration",
      content: [
        {
          title: "AI-Ready Infrastructure",
          description: "Support AI-based dApps and systems with secure data sharing, decentralized computation, and transparent decision-making."
        },
        {
          title: "Tokenized AI Services",
          description: "Tokenize AI-powered services like prediction models, machine learning APIs, and data streams for seamless monetization."
        },
        {
          title: "Data Integrity",
          description: "Leverage blockchain's immutability and transparency to ensure the integrity of AI models and their datasets."
        },
        {
          title: "Optimized Computation",
          description: "Benefit from scalable gas optimization, enabling affordable execution of complex AI computations."
        }
      ]
    },
    {
      title: "Real-World Assets",
      tagline: "Bringing real-world assets into the decentralized economy",
      content: [
        {
          title: "Asset Tokenization",
          description: "Easily tokenize real estate, financial instruments, intellectual property, and more with robust security."
        },
        {
          title: "Fractional Ownership",
          description: "Enable fractional ownership of high-value assets, making them accessible to a global audience."
        },
        {
          title: "Smart Contract Automation",
          description: "Create secure smart contracts to automate asset transfers, enforce compliance, and enable efficient governance."
        },
        {
          title: "Efficient Trading",
          description: "Benefit from low-cost transactions and transparent record-keeping for reliable RWA tokenization and trading."
        }
      ]
    }
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % sections.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            Our Focus
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Empowering innovation across multiple sectors
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative h-[600px] max-w-6xl mx-auto">
          {sections.map((section, index) => (
            <FocusCard 
              key={index}
              title={section.title}
              tagline={section.tagline}
              content={section.content}
              isVisible={index === activeIndex}
            />
          ))}

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {sections.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 
                  ${index === activeIndex 
                    ? 'bg-purple-600 scale-100' 
                    : 'bg-purple-300 scale-75 hover:bg-purple-400'}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 