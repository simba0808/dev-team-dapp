'use client';
import {usePathname, useRouter} from 'next/navigation';
import {useCallback, useMemo} from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Button from '../button/Button';

import type {FC} from 'react';

type TabProps = {
  title: string;
  href: string;
};

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

  const Tab: FC<TabProps> = ({
    href,
    title, 
  }) => {
    const pathname = usePathname();
    const active = pathname === href;

    return (
      <li className='py-2'>
        <Link href={href}>
          <span className={`${active?'font-light':'font-thin'}`}>{title}</span>
        </Link>
      </li>
    );
  };

  return (
    <div className='w-full pt-6 pb-4 text-white bg-black/40'>
      <div className='max-w-screen-xl w-full h-full flex flex-col justify-between gap-4 mx-auto px-4 sm:px-10'>
        <div className='flex flex-wrap justify-between items-center'>
          { logoElement }
          <Button className='lg:order-2' variant='transparent' size='small'>
            Вход
          </Button>
          <ul className='w-full lg:w-auto flex justify-center gap-4 xs:gap-6 lg:gap-8 mt-10 lg:mt-0 text-white text-sm xs:text-xl font-thin lg:order-1'>
            <Tab href='/sale' title='Private Sale' />
            <Tab href='/swap' title='Swap' />
            <Tab href='/farming' title='Farming' />
            <Tab href='/referral' title='Referral' />
            <Tab href='#' title='White Paper' />
          </ul>
        </div>
        
        <div className='w-full h-[1px] bg-gradient-to-r from-transparent from-0% via-30% via-white to-100% to-transparent'></div>
        
        <div className='relative flex flex-wrap justify-center lg:justify-between items-center text-gray-500 gap-4'>
          <p className=''>All rights reserved 2024&copy;</p>
          <ul className='w-full lg:w-auto grid lg:grid-cols-4 grid-cols-2 justify-end gap-6 lg:order-2'>
            {
              ['Terms of use', 'Aml policy', 'KYC policy', 'Privacy policy'].map((item, index) => {
                return (
                  <li key={index} className='text-center underline underline-offset-4 hover:cursor-pointer'>
                    {item}
                  </li>
                );
              })
            }
          </ul>
          <div className='flex gap-2 justify-end lg:order-1'>
            <span className='p-1 rounded-full border-2 border-light-blue'>
              <Image src='/img/Telegram.svg' width={30} height={30} alt='Tele' />
            </span>
            <span className='p-1 rounded-full border-2 border-light-blue'>
              <Image src='/img/Instagram.svg' width={30} height={30} alt='Insta' />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;