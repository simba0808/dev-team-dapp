'use client';
import Header from '@/lib/components/layout/Header';
import Footer from '@/lib/components/layout/Footer';

import Landing from './Landing';

export default function Home() {
  return (
    <div className='relative min-h-screen bg-dark-blue'>
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}
