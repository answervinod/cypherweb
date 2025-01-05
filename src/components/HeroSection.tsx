import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section className="pt-[30vh] pb-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                Next-Gen Blockchain
              </span>
              <br />
              for Web3 Innovation
            </h1>
            
            <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
              Cypher Blockchain is an EVM-compatible Layer 1 blockchain designed for 
              high performance, security, and scalability. Built to power the 
              future of decentralized applications with lightning-fast transactions 
              and minimal fees.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">High Performance</h3>
                  <p className="text-gray-600">20,000+ TPS with instant finality</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-fuchsia-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-fuchsia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Enhanced Security</h3>
                  <p className="text-gray-600">Advanced PoE consensus mechanism</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Link
                href="/explore"
                className="px-8 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 
                  text-white hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              >
                Start Building
              </Link>
              <Link
                href="/learn/introduction"
                className="px-8 py-3 text-lg font-semibold rounded-lg border border-purple-200 text-purple-600 
                  hover:bg-purple-50 transition-all duration-300"
              >
                Read Docs
              </Link>
            </div>
          </div>

          {/* Right side - 3D Asset */}
          <div className="relative h-[480px] w-full rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center" style={{ height: '600px', top: '-60px' }}>
              <iframe 
                src='https://my.spline.design/chips-bca742f4d3761a1dc79256b9e2f845c1/' 
                frameBorder='0' 
                width='100%' 
                height='100%'
                style={{
                  border: 'none',
                  background: 'transparent',
                  pointerEvents: 'none',
                }}
                loading="lazy"
                title="Blockchain Chips Animation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};