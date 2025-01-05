import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function PrivacyPolicy() {
  const router = useRouter();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');

  // Handle scroll for back to top button and section highlighting
  useEffect(() => {
    const handleScroll = () => {
      // Back to top logic
      setShowBackToTop(window.scrollY > 300);

      // Section highlighting logic
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
    { id: 'information-collect', title: '1. Information We Collect' },
    { id: 'how-we-use', title: '2. How We Use Your Information' },
    { id: 'sharing', title: '3. Sharing Your Information' },
    { id: 'data-retention', title: '4. Data Retention' },
    { id: 'your-rights', title: '5. Your Rights' },
    { id: 'security', title: '6. Security of Your Information' },
    { id: 'international', title: '7. International Data Transfers' },
    { id: 'third-party', title: '8. Third-Party Links' },
    { id: 'children', title: "9. Children's Privacy" },
    { id: 'updates', title: '10. Updates to This Privacy Policy' },
    { id: 'contact', title: '11. Contact Us' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Privacy Policy - Cypher Blockchain</title>
        <meta name="description" content="Cypher Blockchain Privacy Policy" />
      </Head>

      <Header />

      {/* Back Button */}
      <div className="fixed top-32 left-4 z-40">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors bg-white rounded-lg shadow-sm border border-gray-100"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
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
              {/* Title Section */}
              <div className="text-center mb-12 pt-8">
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 mx-auto mb-8 rounded-full"></div>
                
                <h1 className="text-4xl font-bold text-gray-900 relative">
                  <span className="absolute -left-6 top-1/2 w-2 h-2 bg-purple-600 rounded-full transform -translate-y-1/2 opacity-50"></span>
                  <span className="absolute -right-6 top-1/2 w-2 h-2 bg-fuchsia-600 rounded-full transform -translate-y-1/2 opacity-50"></span>
                  Privacy Policy for Cypher Blockchain
                </h1>
                
                <div className="mt-6 mb-4 flex items-center justify-center">
                  <div className="w-12 h-px bg-gray-200"></div>
                  <span className="mx-4 text-gray-400 text-sm uppercase tracking-wider">Last Updated</span>
                  <div className="w-12 h-px bg-gray-200"></div>
                </div>
                
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Effective Date:</span> 01 October 2022
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Last Updated:</span> 24th December 2024
                  </p>
                </div>
                
                <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 mx-auto mt-8 rounded-full opacity-50"></div>
              </div>

              {/* Content Sections */}
              <div className="space-y-6 text-gray-600">
                <section id="introduction" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl font-semibold text-gray-800">Introduction</h2>
                  <p>
                    Cypher Blockchain ("we," "our," or "us") values your privacy and is committed to protecting your personal information. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, 
                    platform, and services. Please read this Privacy Policy carefully to understand our practices regarding your information 
                    and how we will treat it.
                  </p>
                </section>

                <section id="information-collect" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl font-semibold text-gray-800">1. Information We Collect</h2>
                  <p>We collect and process the following types of information:</p>
                  
                  <div className="space-y-4 pl-4">
                    <div>
                      <h3 className="font-medium text-gray-800">1.1 Information You Provide to Us</h3>
                      <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>Account Information: When you register or create an account on Cypher Blockchain, we may collect personal information such as your name, email address, and wallet address.</li>
                        <li>Contact Information: If you contact us via email, support channels, or other means, we may collect your name, email address, and any other information you choose to provide.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-800">1.2 Information We Collect Automatically</h3>
                      <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>Device Information: When you access our website or platform, we may collect information about your device, including your IP address, browser type, operating system, and device identifiers.</li>
                        <li>Usage Information: We may collect information about your interactions with our platform, such as the pages you visit, links you click, and the duration of your session.</li>
                        <li>Cookies and Tracking Technologies: We use cookies and similar technologies to track user activity and preferences. For more information, please refer to our Cookie Policy.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-800">1.3 Blockchain Activity</h3>
                      <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>Public Blockchain Data: Cypher Blockchain operates on a decentralized network. Any transactions or interactions you make on the blockchain are publicly visible and cannot be deleted. This includes your wallet address, token transfers, and other blockchain activity.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="how-we-use" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl font-semibold text-gray-800">2. How We Use Your Information</h2>
                  <p>We use your information for the following purposes:</p>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>To Provide Our Services: To enable access to and use of the Cypher Blockchain platform, including processing transactions, creating tokens, and managing smart contracts.</li>
                    <li>To Improve Our Platform: To analyze usage patterns and improve the functionality, security, and performance of our website and platform.</li>
                    <li>To Communicate with You: To respond to your inquiries, provide support, and send you important updates about our platform and services.</li>
                    <li>To Ensure Security: To monitor and prevent fraudulent activity, unauthorized access, or misuse of our platform.</li>
                    <li>To Comply with Legal Obligations: To comply with applicable laws, regulations, and legal processes.</li>
                  </ul>
                </section>

                <section id="sharing" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl font-semibold text-gray-800">3. Sharing Your Information</h2>
                  <p>We do not sell or rent your personal information to third parties. However, we may share your information in the following circumstances:</p>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>With Service Providers: We may share your information with trusted third-party service providers who assist us in operating our platform, such as hosting providers or analytics services.</li>
                    <li>For Legal Compliance: We may disclose your information if required to do so by law or in response to valid legal requests (e.g., court orders, subpoenas).</li>
                    <li>In Case of Business Transfers: If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</li>
                  </ul>
                </section>

                <section id="data-retention" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl font-semibold text-gray-800">4. Data Retention</h2>
                  <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. Public blockchain data is permanent and cannot be deleted due to the nature of blockchain technology.</p>
                </section>

                <section id="your-rights" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl font-semibold text-gray-800">5. Your Rights</h2>
                  <p>Depending on your jurisdiction, you may have certain rights regarding your personal information, including:</p>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>Access: The right to access the personal information we hold about you.</li>
                    <li>Correction: The right to request corrections to inaccurate or incomplete personal information.</li>
                    <li>Deletion: The right to request the deletion of your personal information (subject to legal and contractual obligations).</li>
                    <li>Data Portability: The right to request a copy of your personal information in a structured, machine-readable format.</li>
                    <li>Withdraw Consent: The right to withdraw your consent to processing, where consent is the basis for processing.</li>
                  </ul>
                  <p className="mt-2">To exercise any of these rights, please contact us at <a href="mailto:support@cypherchain.org" className="text-purple-600 hover:text-purple-700">support@cypherchain.org</a>.</p>
                </section>

                <section id="security" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl font-semibold text-gray-800">6. Security of Your Information</h2>
                  <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>
                </section>

                <section id="international" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl font-semibold text-gray-800">7. International Data Transfers</h2>
                  <p>If you are accessing our platform, please be aware that your information may be transferred to, stored, and processed in a country other than your own. By using our services, you consent to the transfer of your information to these countries.</p>
                </section>

                <section id="third-party" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl font-semibold text-gray-800">8. Third-Party Links</h2>
                  <p>Our website and platform may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party sites. Please review their privacy policies before sharing your information.</p>
                </section>

                <section id="children" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl font-semibold text-gray-800">9. Children's Privacy</h2>
                  <p>Cypher Blockchain is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it.</p>
                </section>

                <section id="updates" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl font-semibold text-gray-800">10. Updates to This Privacy Policy</h2>
                  <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. The updated policy will be posted on our website with the "Last Updated" date.</p>
                  <p className="mt-2">We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and protect your information.</p>
                </section>

                <section id="contact" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl font-semibold text-gray-800">11. Contact Us</h2>
                  <p>If you have any questions or concerns about this Privacy Policy, please write to us at:</p>
                  <div className="pl-4">
                    <p>Cypher Blockchain</p>
                    <p>Email: <a href="mailto:support@cypherchain.org" className="text-purple-600 hover:text-purple-700">support@cypherchain.org</a></p>
                  </div>
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
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>

      <Footer />
    </div>
  );
} 