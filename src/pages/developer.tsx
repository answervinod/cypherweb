import React from 'react';
import Head from 'next/head';
import Spline from '@splinetool/react-spline';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const DeveloperPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-fuchsia-50">
      <Head>
        <title>Developer - CypherL1</title>
        <meta name="description" content="Developer resources coming soon" />
      </Head>

      <Header />

      {/* Main content with Spline */}
      <main className="relative h-screen pt-28">
        {/* Spline container */}
        <div className="absolute inset-0 w-full h-full">
          <Spline
            scene="https://prod.spline.design/uFAZLeJimYPfXbMi/scene.splinecode"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DeveloperPage; 