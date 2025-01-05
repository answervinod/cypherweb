import React from 'react';
import { DocTemplate } from '../../components/learn/DocTemplate';
import Head from 'next/head';

const WhatIsBlockchain = () => {
  const content = (
    <>
      <section>
        <h2>Understanding Blockchain Technology</h2>
        {/* ... rest of the content remains the same ... */}
      </section>
    </>
  );

  return (
    <>
      <Head>
        <title>What is Blockchain? - Cypher Learn Hub</title>
        <meta name="description" content="Understanding blockchain technology fundamentals and its applications" />
      </Head>
      
      <DocTemplate
        title="What is Blockchain?"
        description="Understanding the fundamentals of blockchain technology"
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

export default WhatIsBlockchain; 