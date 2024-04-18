'use client';
import {usePathname, useRouter} from 'next/navigation';
import {useCallback, useMemo} from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    <div className='z-20 absolute bottom-0 w-full py-8 text-white bg-black/80'>
      <div className='max-w-screen-2xl w-full h-full flex flex-col justify-between gap-4 mx-auto px-4 sm:px-10'>
        <div className='flex flex-col justify-center space-y-4 lg:flex-row lg:justify-between items-center'>
          { logoElement }
          <div>
            <div className='flex gap-2 justify-end'>
              <span className='p-1 rounded-full border-2 border-light-blue'>
                <Image src='/img/Twitter.svg' width={30} height={30} alt='Tweat' />
              </span>
              <span className='p-1 rounded-full border-2 border-light-blue'>
                <Image src='/img/Telegram.svg' width={30} height={30} alt='Tele' />
              </span>
              <span className='p-1 rounded-full border-2 border-light-blue'>
                <Image src='/img/Instagram.svg' width={30} height={30} alt='Insta' />
              </span>
            </div>
            <p className='mt-1 text-center'>Support@resolut.ai</p>
          </div>
          <ul className='hidden lg:flex w-full lg:w-auto justify-center gap-4 xs:gap-6 lg:gap-8 text-white text-sm sm:text-lg font-thin lg:order-1'>
            <Tab href='/sale' title='Private Sale' />
            <Tab href='/swap' title='Swap' />
            <Tab href='/farming' title='Farming' />
            <Tab href='/referral' title='Referral' />
            <Tab href='#' title='White Paper' />
          </ul>
        </div>
      
      </div>
    </div>
  );
};

export default Footer;