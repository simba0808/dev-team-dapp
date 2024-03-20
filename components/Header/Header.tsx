'use client';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';

import ConnectWalletButton from '@/lib/web3/components/ConnectWalletButton';

import Image from 'next/image';

import type { FC } from 'react';

export const Header: FC = () => {
  const router = useRouter();

  const onLogo = useCallback(() => {
    router.push('/');
  }, []);

  const logoElement = useMemo(() => {
    return (
      <>
        <Image
          className='cursor-pointer'
          src='/img/Logo.svg' 
          width={200} 
          height={83}
          alt='logo'
          priority
          onClick={onLogo}
        />
      </>
    );
  }, []);

  return (
    <div className='relative z-10 py-3 flex items-center bg-transparent'>
      <div className='fixed w-full h-[100px] bg-black opacity-40'></div>
      <div className='z-10 max-w-screen-xl w-full mx-auto px-4 flex justify-between items-center'>
        { logoElement }
        <div className='flex items-center gap-10'>
          <ul className='flex gap-8 text-white text-xl font-thin'>
            {
              ['Private Sale', 'Swap', 'Farming', 'Refferal', 'White Paper'].map((item, index) => {
                return (
                  <li key={index}>
                    {item}
                  </li>
                )
              })
            }
          </ul>
          <ConnectWalletButton />
        </div>
      </div>
    </div>
  );
};

export default Header;