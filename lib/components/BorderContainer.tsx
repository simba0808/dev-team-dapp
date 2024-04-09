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
      <div className='-z-10 absolute left-0 w-[50px] rounded-l-2xl top-[10px] max-h-[90%] h-full bg-gradient-to-b from-dark-blue via-gray-200 to-dark-blue'>

      </div>
      <div className='z-10 rounded-2xl'>
        {
          children
        }
      </div>
      <div className='-z-10 absolute right-0 w-[50px] rounded-l-2xl top-[15px] max-h-[80%] h-full bg-gradient-to-b from-sky-800/20 via-[20%] via-gray-200 to-sky-800/20'>

      </div>
    </div>
  );
};

export default BorderContainer;