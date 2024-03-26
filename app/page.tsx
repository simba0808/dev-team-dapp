'use client';
import Landing from './Landing';
import Header from '@/lib/components/layout/Header';
import Footer from '@/lib/components/layout/Footer';

export default function Home() {
  return (
    <div className='relative min-h-screen bg-dark-blue'>
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}
