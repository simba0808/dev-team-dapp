import {useCallback, useLayoutEffect, useRef, useState} from 'react';
import {ChevronDownIcon} from '@chakra-ui/icons';

import tokenList from '@/app/(main)/swap/SwapWidget/tokenList';

import type {TokenField} from '@/app/(main)/swap/SwapWidget/tokenList';

const Selector = ({selected, setSelect}) => {
  const selectorRef = useRef<HTMLUListElement>(null);
  const expandRef = useRef<HTMLUListElement>(null);

  const [isExpaned, setExpaned] = useState(false);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (expandRef.current && !expandRef.current.contains(event.target as Node)) {
      setExpaned(false);
    }
  }, []);

  useLayoutEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <ul className='relative text-sm rounded-md shadow-md' ref={selectorRef}>
      <li 
        className='p-[2px] bg-gradient-to-r from-sky-300 to-sky-900 rounded-md box-shadow shadow-md hover:cursor-pointer'
        onClick={() => setExpaned(!isExpaned)}
      >
        <div className='flex justify-between items-center px-1.5 lg:px-3.5 py-1.5 bg-light-blue rounded-md'>
          <img
            src={tokenList[selected]?.tokenURI}
            onError={({currentTarget}) => {
              currentTarget.onerror = null; // prevents looping
            }}
            className='h-[20px] w-[20px] lg:h-[45px] lg:w-[45px]'
            alt='token'
          />
          <div className='flex flex-row items-center'>
            <span className='ml-1.5 lg:ml-3 text-[12px] lg:text-[24px] font-semibold text-white'>
              {tokenList[selected].tokenSymbol}
            </span>
            <ChevronDownIcon className='lg:ml-2' fontSize='1.45rem' color='#fff' />
          </div>
        </div>
      </li>
      {
        isExpaned &&
            <ul ref={expandRef} className='z-20 absolute top-12 lg:top-16 rounded-xl min-w-[150px] lg:min-w-[200px] px-4 py-2 bg-[#05111C] bg-opacity-70 shadow-md w-full divide-y-[1px]'>
              {tokenList.filter((item, index) => index != selected).map((item: TokenField, index) => {
                return (
                  <li
                    key={item.id}
                    className='flex px-2 py-1.5 hover:bg-slate-900 hover:cursor-pointer'
                    onClick={() => {
                      setExpaned(false);
                      setSelect(item.id);
                    }
                    }
                  >
                    <img
                      src={item?.tokenURI}
                      onError={({currentTarget}) => {
                        currentTarget.onerror = null; // prevents looping
                      }}
                      className='h-[25px] w-[25px]'
                      alt='token'
                    />
                    <div className='flex flex-row items-center'>
                      <span className='ml-4 text-[12px] lg:text-[24px] font-semibold text-white'>
                        {item.tokenSymbol}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
      }
    </ul>
  );
};

export default Selector;
