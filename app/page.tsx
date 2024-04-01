'use client';
import {useRouter} from 'next/navigation';
import {useCallback, useMemo} from 'react';

import Header from '@/lib/components/layout/Header';
import Footer from '@/lib/components/layout/Footer';
import Button from '@/lib/components/button/Button';

import Landing from './Landing';

export default function Home() {
  const router = useRouter();

  const onConnect = useCallback(() => {
    router.push('/signin');
  }, []);

  const headerTrailing = useMemo(() => (
    <Button variant='transparent' size='medium' onClick={onConnect}>
      Connect Wallet
    </Button>
  ), []);
  
  return (
    <div className='relative min-h-screen bg-dark-blue'>
      <Header trailing={headerTrailing} />
      <Landing />
      <Footer />
    </div>
  );
}
