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
      'box-border relative p-[1px] rounded-2xl',
      className
    )}>
      <div className='z-10 w-full h-full bg-dark-blue rounded-2xl'>
        {
          children
        }
      </div>
    </div>
  );
};

export default BorderContainer;