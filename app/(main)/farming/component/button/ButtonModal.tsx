'use client';
import {useEffect, useRef} from 'react';
import {twMerge} from 'tailwind-merge';

import type {ReactNode} from 'react';

const ButtonModal = ({
  children,
  buttonText,
  buttonClass,
  visible,
  setVisible
}: {
  children: ReactNode;
  buttonText: string;
  buttonClass?: string;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutClick(event: MouseEvent) {
      if(modalRef && !modalRef.current?.contains(event.target as Node)) {
        setVisible(false);
      }
    }

    document.addEventListener('mousedown', handleOutClick);

    return () => {
      document.removeEventListener('mousedown', handleOutClick);
    };
  }, []);

  return (
    <>
      <button 
        type='button'
        className={twMerge(
          'box-shadow px-2 py-1 lg:py-3 lg:px-6 text-[6px] lg:text-[14px] !rounded-full bg-light-blue text-white font-semibold',
          buttonClass
        )}
        onClick={() => setVisible(true)}
      >
        {buttonText}
      </button>
      {
        visible && (
          <div className='modal z-50 fixed left-0 right-0 top-0 bottom-0 w-[100vw] h-[100%]'>
            <div 
              className='modal-box w-[100%] h-[100%] modal-box relative bg-black/20 backdrop-blur-sm'
            >
              <div 
                className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full max-w-[600px] px-8' 
                ref={modalRef}
              >
                {children}
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default ButtonModal;