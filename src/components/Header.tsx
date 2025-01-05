import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import { useWallet } from '../contexts/WalletContext';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const { connectWallet, disconnectWallet, connected, connecting, account } = useWallet();
  const { t } = useLanguage();
  const [imageError, setImageError] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  const ComingSoonTooltip = ({ show }: { show: boolean }) => (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-xl relative">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rotate-45" />
            <div className="flex items-center space-x-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-400"></span>
              </span>
              <p className="text-sm font-medium">Coming Soon</p>
            </div>
            <p className="text-xs text-purple-200 mt-1">We're crafting something amazing!</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <header className="fixed w-full top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-28">
          {/* Left section - Logo */}
          <div className="flex-shrink-0 -ml-4">
            <Link href="/" className="flex items-center">
              <div className="relative w-[200px] h-[74px]">
                {!imageError ? (
                  <Image
                    src="/images/logo.png"
                    alt="CypherL1 Logo"
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-4xl font-bold text-purple-600">CypherL1</span>
                  </div>
                )}
              </div>
            </Link>
          </div>

          {/* Center section - Main Navigation */}
          <div className="flex-grow flex justify-center max-w-3xl">
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors whitespace-nowrap">
                <span className="inline-flex items-center space-x-2">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <motion.path
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: 2,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      />
                    </svg>
                  </motion.div>
                  <span>HOME</span>
                </span>
              </Link>
              <Link href="/explore" className="text-gray-600 hover:text-purple-600 transition-colors whitespace-nowrap">
                {t('navigation.explore')}
              </Link>
              <Link href="/learn/introduction" className="text-gray-600 hover:text-purple-600 transition-colors whitespace-nowrap">
                {t('navigation.learn')}
              </Link>
              <Link href="/developer" className="text-gray-600 hover:text-purple-600 transition-colors whitespace-nowrap">
                {t('navigation.developer')}
              </Link>
              <div className="relative group">
                <motion.div
                  onHoverStart={() => setHoveredItem('showcase')}
                  onHoverEnd={() => setHoveredItem(null)}
                  className="relative"
                >
                  <span className="text-gray-600 cursor-pointer transition-all duration-300 hover:text-purple-600 
                             inline-flex items-center space-x-1 group whitespace-nowrap">
                    <span>{t('navigation.showcase')}</span>
                    <motion.div
                      animate={{ rotate: hoveredItem === 'showcase' ? 180 : 0 }}
                      className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center"
                    >
                      <span className="text-xs text-purple-600">✨</span>
                    </motion.div>
                  </span>
                  <ComingSoonTooltip show={hoveredItem === 'showcase'} />
                </motion.div>
              </div>
              <div className="relative group">
                <motion.div
                  onHoverStart={() => setHoveredItem('governance')}
                  onHoverEnd={() => setHoveredItem(null)}
                  className="relative"
                >
                  <span className="text-gray-600 cursor-pointer transition-all duration-300 hover:text-purple-600 
                             inline-flex items-center space-x-1 group whitespace-nowrap">
                    <span>{t('navigation.governance')}</span>
                    <motion.div
                      animate={{ rotate: hoveredItem === 'governance' ? 180 : 0 }}
                      className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center"
                    >
                      <span className="text-xs text-purple-600">🏛️</span>
                    </motion.div>
                  </span>
                  <ComingSoonTooltip show={hoveredItem === 'governance'} />
                </motion.div>
              </div>
              <div className="relative group">
                <motion.div
                  onHoverStart={() => setHoveredItem('analytics')}
                  onHoverEnd={() => setHoveredItem(null)}
                  className="relative"
                >
                  <span className="text-gray-600 cursor-pointer transition-all duration-300 hover:text-purple-600 
                             inline-flex items-center space-x-1 group whitespace-nowrap">
                    <span>{t('navigation.analytics')}</span>
                    <motion.div
                      animate={{ rotate: hoveredItem === 'analytics' ? 180 : 0 }}
                      className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center"
                    >
                      <span className="text-xs text-purple-600">📊</span>
                    </motion.div>
                  </span>
                  <ComingSoonTooltip show={hoveredItem === 'analytics'} />
                </motion.div>
              </div>
              <Link href="/join" className="text-gray-600 hover:text-purple-600 transition-colors whitespace-nowrap">
                {t('navigation.joinUs')}
              </Link>
            </nav>
          </div>

          {/* Right section - Connect Button and Mobile Menu */}
          <div className="flex-shrink-0 w-[180px] flex justify-end">
            <button 
              onClick={connected ? disconnectWallet : connectWallet}
              className="hidden md:block px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 
                text-white hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              disabled={connecting}
            >
              {connecting ? (
                <div className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Connecting...
                </div>
              ) : connected ? (
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  {account?.slice(0, 6)}...{account?.slice(-4)}
                </div>
              ) : (
                t('navigation.connect')
              )}
            </button>
            
            <button className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}; 