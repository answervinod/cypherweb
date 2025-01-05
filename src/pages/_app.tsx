import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { LanguageProvider } from '../contexts/LanguageContext';
import { WalletProvider } from '../contexts/WalletContext';
import Head from 'next/head';

function MyApp({ Component, pageProps, router }: AppProps) {
  // Check if we're in the learn section
  const isLearnPage = router.pathname.startsWith('/learn');

  return (
    <WalletProvider>
      <LanguageProvider>
        <Head>
          <title>Cypher Blockchain</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#9333ea" />
          <meta name="description" content="Next Generation Blockchain for Web3 Innovation" />
          
          {/* Favicon Tags */}
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          
          {/* Traditional Favicon */}
          <link rel="shortcut icon" href="/favicon.ico" />
          
          {/* Multiple sizes */}
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        </Head>
        <Component {...pageProps} />
      </LanguageProvider>
    </WalletProvider>
  );
}

export default MyApp;
