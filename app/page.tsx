'use client';
import Landing from './Landing';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <div className='relative min-h-screen bg-dark-blue'>
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}
