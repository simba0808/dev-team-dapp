import {useCallback, useLayoutEffect, useRef, useState} from 'react';
import {ChevronDownIcon} from '@chakra-ui/icons';

import tokenList from '@/app/(main)/swap/SwapWidget/tokenList';

import type {TokenField} from '@/app/(main)/swap/SwapWidget/tokenList';

const Selector = () => {
  const selectorRef = useRef<HTMLUListElement>(null);
  const expandRef = useRef<HTMLUListElement>(null);

  const [isExpaned, setExpaned] = useState(false);
  const [selectedToken, setSelectedToken] = useState(0);

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
        className='flex justify-between px-2 py-2 bg-light-blue rounded-md shadow-md hover:cursor-pointer'
        onClick={() => setExpaned(!isExpaned)}
      >
        <img
          src={tokenList[selectedToken]?.tokenURI}
          onError={({currentTarget}) => {
            currentTarget.onerror = null; // prevents looping
          }}
          className='h-[25px] w-[25px]'
          alt='token'
        />
        <div className='flex flex-row items-center'>
          <span className='ml-3 text-lg font-bold text-white'>
            {tokenList[selectedToken].tokenSymbol}
          </span>
          <ChevronDownIcon className='ml-2' fontSize='1.45rem' color='#fff' />
        </div>
      </li>
      {
        isExpaned &&
            <ul ref={expandRef} className='z-20 absolute top-12 rounded-xl min-w-[200px] px-4 py-2 bg-[#05111C] bg-opacity-70 shadow-md w-full divide-y-[1px]'>
              {tokenList.filter((item, index) => index != selectedToken).map((item: TokenField, index) => {
                return (
                  <li
                    key={item.id}
                    className='flex px-2 py-1.5 hover:bg-slate-900 hover:cursor-pointer'
                    onClick={() => {
                      setExpaned(false);
                      setSelectedToken(item.id);
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
                      <span className='ml-3 text-lg font-bold text-white'>
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
