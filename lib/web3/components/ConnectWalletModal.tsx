import {useEffect, useState} from 'react';

import TabHeader from './TabHeader';
import TabConnectWallet from './TabConnectWallet';
import TabLearn from './TabLearn';

import type {FC} from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ConnectWalletModal: FC<Props> = ({
  isOpen=true,
  onClose
}) => {
  const [active, setActive] = useState('');
  const tabs = ['CONNECT WALLET', /* eslint-disable quotes */ `WHAT'S A WEB3 WALLET?`];
  
  useEffect(() => {
    const handleClickOutSide = (e: MouseEvent) => {
      if(isOpen && (e.target as HTMLElement).classList.contains('overlay')) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutSide);

    return () => {
      document.removeEventListener('click', handleClickOutSide);
    };
  }, [isOpen, onClose]);

  const tabClick = (type: string) => {
    setActive(type);
  };

  return (
    <>
      {
        isOpen && (
          <div className='z-20 fixed w-screen h-screen top-0 left-0 flex items-center justify-center'>
            <div className='absolute inset-0 backdrop-blur-sm z-0 overlay'></div>
            <div className='z-10 max-w-[90%] max-h-[70vh] md:max-w-screen-lg w-full h-full px-4 m-auto'>
              <TabHeader active={active} tabs={tabs} onClick={tabClick} />
              {
                active===tabs[0] ? <TabConnectWallet /> : <TabLearn />
              }
            </div>
          </div>
        )
      }
    </>
  );
};

export default ConnectWalletModal;