import React from 'react';
import { DocTemplate } from '../components/learn/DocTemplate';
import Head from 'next/head';

const TestPage = () => {
  const content = (
    <>
      <section>
        <h2>Test Page</h2>
        <p className="text-xl text-gray-600">
          This is a test page to verify routing.
        </p>
      </section>
    </>
  );

  return (
    <>
      <Head>
        <title>Test Page - Cypher Learn Hub</title>
        <meta name="description" content="Test page for routing verification" />
      </Head>
      
      <DocTemplate
        title="Test Page"
        description="Test page for routing verification"
        lastUpdated="2024-03-20"
        content={content}
        previousPage={{
          title: "Introduction",
          href: "/learn/introduction"
        }}
        nextPage={{
          title: "Why Cypher?",
          href: "/learn/why-cypher"
        }}
      />
    </>
  );
};

export default TestPage; 