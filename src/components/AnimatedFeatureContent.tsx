import React from 'react';

interface FeatureContentProps {
  content: {
    title: string;
    description: string;
    details: string[];
    image?: string;
  };
}

const AnimatedFeatureContent: React.FC<FeatureContentProps> = ({ content }) => {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <h3 className="text-3xl font-bold mb-4 text-gray-800">{content.title}</h3>
      <p className="text-gray-600 text-xl mb-12">{content.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {content.details.map((detail, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
              <span className="text-purple-600 text-sm">{index + 1}</span>
            </div>
            <p className="text-gray-600">{detail}</p>
          </div>
        ))}
      </div>
      {content.image && (
        <div className="mt-8">
          <img src={content.image} alt={content.title} className="rounded-lg shadow-lg mx-auto" />
        </div>
      )}
    </div>
  );
};

export default AnimatedFeatureContent; 