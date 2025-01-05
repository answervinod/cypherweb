import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Disclaimer() {
  const router = useRouter();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);

      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'introduction';

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'general-info', title: '1. General Information' },
    { id: 'no-financial-advice', title: '2. No Financial Advice' },
    { id: 'risk-warning', title: '3. Risk Warning' },
    { id: 'technical-info', title: '4. Technical Information' },
    { id: 'third-party', title: '5. Third-Party Links' },
    { id: 'updates', title: '6. Updates' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Disclaimer - Cypher Blockchain</title>
        <meta name="description" content="Cypher Blockchain Disclaimer and Terms of Use" />
      </Head>

      <Header />

      {/* Back Button */}
      <div className="fixed top-32 left-4 z-40">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors bg-white rounded-lg shadow-sm border border-gray-100"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Home</span>
        </button>
      </div>

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex gap-8 max-w-7xl mx-auto">
            {/* Sticky Table of Contents */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Table of Contents</h2>
                <nav className="space-y-2">
                  {sections.map(({ id, title }) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className={`block transition-colors ${
                        activeSection === id
                          ? 'text-purple-600 font-medium bg-purple-50 rounded pl-2 py-1'
                          : 'text-gray-600 hover:text-purple-600 pl-2 py-1'
                      }`}
                    >
                      {title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow max-w-4xl">
              <div className="text-center mb-12 pt-8">
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 mx-auto mb-8 rounded-full"></div>
                <h1 className="text-4xl font-bold text-gray-900 relative">
                  <span className="absolute -left-6 top-1/2 w-2 h-2 bg-purple-600 rounded-full transform -translate-y-1/2 opacity-50"></span>
                  Disclaimer
                  <span className="absolute -right-6 top-1/2 w-2 h-2 bg-purple-600 rounded-full transform -translate-y-1/2 opacity-50"></span>
                </h1>
                
                {/* Add Last Updated section */}
                <div className="mt-6 text-gray-600">
                  <p className="text-sm">
                    <span className="font-medium">Effective Date:</span> 01 October 2022
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Last Updated:</span> 24th December 2024
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                {/* Sections with IDs for navigation */}
                <section id="introduction" className="scroll-mt-24">
                  <p className="text-gray-600 mb-8">
                    Please read this disclaimer carefully before using the Cypher Blockchain platform and associated services.
                  </p>
                </section>

                <section id="general-info" className="scroll-mt-24">
                  <h2 className="text-xl font-semibold text-gray-800">1. General Information</h2>
                  <p className="text-gray-600 mb-4">
                    The information provided on Cypher Blockchain is for general informational purposes only. All information 
                    is provided in good faith, however, we make no representation or warranty of any kind, express or implied, 
                    regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information.
                  </p>
                </section>

                <section id="no-financial-advice" className="scroll-mt-24">
                  <h2 className="text-xl font-semibold text-gray-800">2. No Financial Advice</h2>
                  <p className="text-gray-600 mb-4">
                    The information contained on this website is not intended as, and shall not be understood or construed as, 
                    financial advice. We are not a financial advisor, and we do not provide any financial advisory services. 
                    You should consult with a professional financial advisor before making any investment decisions.
                  </p>
                </section>

                <section id="risk-warning" className="scroll-mt-24">
                  <h2 className="text-xl font-semibold text-gray-800">3. Risk Warning</h2>
                  <p className="text-gray-600 mb-4">
                    Cryptocurrency investments are volatile and high-risk in nature. Do not invest more than you can afford to lose. 
                    We are not responsible for any losses you may incur through cryptocurrency trading or investments.
                  </p>
                </section>

                <section id="technical-info" className="scroll-mt-24">
                  <h2 className="text-xl font-semibold text-gray-800">4. Technical Information</h2>
                  <p className="text-gray-600 mb-4">
                    While we strive to keep the technical information about Cypher Blockchain up to date and correct, 
                    we make no representations or warranties of any kind about the completeness, accuracy, reliability, 
                    suitability, or availability of the information, products, services, or related graphics contained 
                    on the website.
                  </p>
                </section>

                <section id="third-party" className="scroll-mt-24">
                  <h2 className="text-xl font-semibold text-gray-800">5. Third-Party Links</h2>
                  <p className="text-gray-600 mb-4">
                    Our website may contain links to third-party websites. We have no control over the content, privacy policies, 
                    or practices of any third-party websites. You acknowledge and agree that we shall not be responsible or liable 
                    for any damage or loss caused by or in connection with the use of any such content, goods, or services 
                    available on or through any such websites.
                  </p>
                </section>

                <section id="updates" className="scroll-mt-24">
                  <h2 className="text-xl font-semibold text-gray-800">6. Updates</h2>
                  <p className="text-gray-600">
                    We reserve the right to modify this disclaimer at any time without prior notice. By using our website, 
                    you agree to be bound by the current version of this disclaimer.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      <Footer />
    </div>
  );
} 