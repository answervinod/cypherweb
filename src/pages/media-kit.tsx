import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Head from 'next/head';
import Image from 'next/image';

export default function MediaKit() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [downloadCounts, setDownloadCounts] = useState<{ [key: string]: number }>({});
  const [imageError, setImageError] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // Copy to clipboard function
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(label);
      setTimeout(() => setCopiedText(null), 2000);
    });
  };

  // Track downloads function
  const trackDownload = async (assetName: string, format: string) => {
    setDownloadCounts(prev => ({
      ...prev,
      [`${assetName}-${format}`]: (prev[`${assetName}-${format}`] || 0) + 1
    }));
  };

  const logoAssets = [
    {
      name: 'Primary Logo',
      preview: '/assets/Cypher Blockchain Logo.png',
      downloads: [
        { format: 'PNG', url: '/assets/Cypher Blockchain Logo.png' },
        { format: 'SVG', url: '/assets/Cypher Blockchain.svg' },
        { format: 'JPG', url: '/assets/Cypher Blockchain Logo.jpg' }
      ]
    },
    {
      name: 'Logo Black',
      preview: '/assets/Cypher Blockchain Logo black.jpg',
      downloads: [
        { format: 'JPG', url: '/assets/Cypher Blockchain Logo black.jpg' }
      ]
    },
    {
      name: 'Icon Full Color',
      preview: '/assets/Cypher Blockchain icon.png',
      downloads: [
        { format: 'PNG', url: '/assets/Cypher Blockchain icon.png' }
      ]
    },
    {
      name: 'Icon White',
      preview: '/assets/Cypher Blockchain icon white.jpg',
      bgColor: 'bg-gray-800',
      downloads: [
        { format: 'JPG', url: '/assets/Cypher Blockchain icon white.jpg' }
      ]
    },
    {
      name: 'Icon Black',
      preview: '/assets/Cypher Blockchain icon black.jpg',
      downloads: [
        { format: 'JPG', url: '/assets/Cypher Blockchain icon black.jpg' }
      ]
    }
  ];

  // For the color palette image
  const colorPaletteImage = '/assets/Cypher Color Pallets.png';

  // Add color palette data
  const colorPalette = [
    { 
      name: 'Primary Purple', 
      hex: '#9333EA', 
      rgb: 'rgb(147, 51, 234)',
      description: 'Main brand color, used for primary actions and emphasis'
    },
    { 
      name: 'Secondary Fuchsia', 
      hex: '#D946EF', 
      rgb: 'rgb(217, 70, 239)',
      description: 'Used for gradients and secondary elements'
    },
    { 
      name: 'Dark Gray', 
      hex: '#111827', 
      rgb: 'rgb(17, 24, 39)',
      description: 'Used for text and dark backgrounds'
    },
    { 
      name: 'Light Gray', 
      hex: '#F3F4F6', 
      rgb: 'rgb(243, 244, 246)',
      description: 'Used for backgrounds and subtle elements'
    }
  ];

  const getTotalSize = () => {
    // Approximate size in MB
    return '8.2 MB';
  };

  const handleDownloadAll = async () => {
    setIsDownloading(true);
    try {
      await trackDownload('All Assets', 'ZIP');
      // Simulate a delay to show loading state
      await new Promise(resolve => setTimeout(resolve, 1000));
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Media Kit - Cypher Blockchain</title>
        <meta name="description" content="Download official Cypher Blockchain logos and brand assets" />
      </Head>

      <Header />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                Media Kit
              </span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Official brand assets and guidelines for Cypher Blockchain. Download logos, icons, and access our color palette.
            </p>
          </div>

          {/* Logo Assets Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">Logo Assets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {logoAssets.map((asset) => (
                <div key={asset.name} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className={`${asset.bgColor || 'bg-white'} rounded-lg p-8 mb-4 flex items-center justify-center h-[200px]`}>
                    <Image
                      src={asset.preview}
                      alt={asset.name}
                      width={300}
                      height={120}
                      className="w-auto h-auto max-w-full max-h-full object-contain"
                      priority
                      onError={() => setImageError(true)}
                    />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-3">{asset.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {asset.downloads.map((download) => (
                      <a
                        key={download.format}
                        href={download.url}
                        download
                        onClick={() => trackDownload(asset.name, download.format)}
                        className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:text-purple-600 hover:border-purple-600 transition-colors"
                      >
                        Download {download.format}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Color Palette Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">Color Palette</h2>
            <div className="mb-8">
              <Image
                src={colorPaletteImage}
                alt="Cypher Color Palette"
                width={1200}
                height={600}
                className="rounded-lg shadow-lg mx-auto w-full h-auto"
                priority
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {colorPalette.map((color) => (
                <div key={color.name} className="bg-gray-50 rounded-lg p-6">
                  <div 
                    className="w-full h-24 rounded-lg mb-4 relative group cursor-pointer"
                    style={{ backgroundColor: color.hex }}
                    onClick={() => copyToClipboard(color.hex, `${color.name}-hex`)}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 rounded-lg">
                      <span className="text-white text-sm font-medium">Click to copy HEX</span>
                    </div>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">{color.name}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-between">
                      <p>HEX:</p>
                      <button
                        onClick={() => copyToClipboard(color.hex, `${color.name}-hex`)}
                        className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded"
                      >
                        {color.hex}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        {copiedText === `${color.name}-hex` && (
                          <span className="text-green-500 text-xs">Copied!</span>
                        )}
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>RGB:</p>
                      <button
                        onClick={() => copyToClipboard(color.rgb, `${color.name}-rgb`)}
                        className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded"
                      >
                        {color.rgb}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        {copiedText === `${color.name}-rgb` && (
                          <span className="text-green-500 text-xs">Copied!</span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Download All Section */}
          <section className="mt-16 text-center">
            <a
              href="/assets/cypher-brand-assets.zip"
              download
              onClick={handleDownloadAll}
              className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-purple-500/20 ${
                isDownloading ? 'opacity-75 cursor-wait' : ''
              }`}
            >
              {isDownloading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              )}
              {isDownloading ? 'Preparing Download...' : 'Download All Assets (ZIP)'}
              <span className="text-sm opacity-75 ml-1">({getTotalSize()})</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Contains all logos, icons, and color palette in various formats
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
} 