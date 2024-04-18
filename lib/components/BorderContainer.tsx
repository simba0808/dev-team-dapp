'use client';
import {twMerge} from 'tailwind-merge';

import type {FC, ReactNode} from 'react';

type Props = {
  className?: string;
  children: ReactNode;
};

const BorderContainer: FC<Props> = ({className, children}) => {
  return (
    <div className={twMerge(
      'w-full p-[1px] relative bg-gradient-to-r from-sky-800/20 via-gray-200 via-[50%] to-sky-800/20 rounded-2xl',
      className
    )}>
      <div className='z-10 rounded-2xl'>
        {
          children
        }
      </div>
    </div>
  );
};

export default BorderContainer;