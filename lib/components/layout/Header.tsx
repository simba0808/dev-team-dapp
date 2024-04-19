'use client';
import {usePathname, useRouter} from 'next/navigation';
import {useCallback, useEffect, useMemo, useState} from 'react';
import Link from 'next/link';

import ToggleMenu from '@/public/img/menu.svg';

import type {FC, ReactNode} from 'react';

type Props = {
  trailing?: ReactNode;
};

type TabProps = {
  title: string;
  href: string;
};

export const Header: FC<Props> = ({
  trailing
}) => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/signin');
  }, []);

  const [toggle, setToggle] = useState(false);

  const onLogo = useCallback(() => {
    router.push('/');
  }, []);

  const logoElement = useMemo(() => {
    return (
      <>
        <img
          className='w-[150px] h-[55px] sm:w-[280px] sm:h-[70px] cursor-pointer'
          src='/img/Logo.svg'
          alt='logo'
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
    <div className={`z-20 fixed top-0 w-[100%] flex items-center py-4 bg-black/80 backdrop-blur-sm ${toggle?'rounded-b-xl':'rounded-b-none'}`}>
      <div className='max-w-screen-2xl w-full flex flex-wrap justify-between items-center mx-auto px-4 sm:px-10'>
        { logoElement }
        <div className='flex gap-4 lg:order-2'>
          {
            trailing
          }
          <button className='lg:hidden mr-2' onClick={() => setToggle(!toggle)}>
            <ToggleMenu />
          </button>
        </div>
        <div className={`w-full lg:w-auto ${toggle?'flex':'hidden lg:flex'} items-center gap-10 lg:order-1`}>
          <ul className='w-full flex flex-col lg:flex-row lg:gap-8 mt-4 lg:mt-0 divide-y-[1px] divide-slate-700 lg:divide-y-0 text-white text-xl font-thin'>
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

export default Header;