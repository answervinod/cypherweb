import React from 'react';

const NetworkStats: React.FC<{ stats: Array<{ label: string; value: string }> }> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map(({ label, value }) => (
        <div key={label} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-gray-500 text-sm mb-2">{label}</h3>
          <p className="text-3xl font-bold text-purple-600">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default NetworkStats; 