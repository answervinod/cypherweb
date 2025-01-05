import { useEffect } from 'react';
import { useRouter } from 'next/router';

const LearnIndex = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/learn/introduction');
  }, [router]);

  return null;
};

export default LearnIndex; 