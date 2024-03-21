'use client';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';

import PrimaryButton from '../buttons/PrimaryButton';
import Image from 'next/image';

import type { FC } from 'react';


const Footer: FC = () => {
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
          width={150} 
          height={73}
          alt='logo'
          priority
          onClick={onLogo}
        />
      </>
    );
  }, []);

  return (
    <div className='relative z-10 pt-6 pb-2 h-[150px] bg-transparent'>
      <div className='absolute top-0 w-full h-[150px] bg-black opacity-40'></div>
      <div className='max-w-screen-xl w-full h-full mx-auto px-4 flex flex-col justify-between'>
        <div className='z-20 flex justify-between items-center'>
          { logoElement }
          <ul className='flex gap-8 text-white text-xl font-thin'>
              {
                ['Invest', 'Real Estate', 'Crypto', 'Travel', 'Academy'].map((item, index) => {
                  return (
                    <li key={index}>
                      {item}
                    </li>
                  )
                })
              }
            </ul>
            <PrimaryButton size='small'>
              Items
            </PrimaryButton>
        </div>
        <div className='w-full h-[1px] bg-gradient-to-r from-transparent from-0% via-30% via-white to-100% to-transparent'></div>
        <div className='flex justify-between items-center text-white'>
          <p>All rights reserved 2024&copy;</p>
          <div className='flex gap-2'>
            <span className='p-1 rounded-full border-2 border-light-blue'>
              <Image src='/img/Telegram.svg' width={30} height={30} alt='Tele' />
            </span>
            <span className='p-1 rounded-full border-2 border-light-blue'>
              <Image src='/img/Instagram.svg' width={30} height={30} alt='Insta' />
            </span>
          </div>
          <ul className='flex gap-6'>
            {
              ['Terms of use', 'Aml policy', 'KYC policy', 'Privacy policy'].map((item, index) => {
                return (
                  <li key={index} className='underline underline-offset-4'>
                    {item}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;