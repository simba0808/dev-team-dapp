import {useCallback, useEffect, useRef, useState} from 'react';
import {useAccount} from 'wagmi';
import {useWeb3Modal} from '@web3modal/react';

import useAuthSession from '@/lib/auth/hooks/useAuthSession';
import Selector from '@/lib/components/selector/Selector';
import Button from '@/lib/components/button/Button';
import SiweButton from '@/app/signin/SiweButton';
import BorderContainer from '@/lib/components/BorderContainer';

import tokenList from '../tokenList';

import {Balance} from './Balance';


const JupiterForm = () => {
  const {session} = useAuthSession('siwe');
  const {address, isConnected} = useAccount();

  const [selected, setSelected] = useState(0);
  const [outSelected, setOutSelected] = useState(1);

  const[inputToken, setInputToken] = useState(tokenList[selected]);
  const [outputToken, setOutputToken] = useState(tokenList[outSelected]);

  const {open} = useWeb3Modal();

  const modalOpened = useRef(false);

  useEffect(() => {
    setInputToken(tokenList[selected]);
    setOutputToken(tokenList[outSelected]);
  }, [selected, outSelected]);

  const handleSwitch = () => {
    const temp = inputToken;
    setInputToken(outputToken);
    setOutputToken(temp);
  };

  const onReconnect = useCallback(async () => {
    if (!address) {
      // Clear WalletConnect and wagmi related data from localStorage
      localStorage.removeItem('walletconnect');
      localStorage.removeItem('wagmi.wallet');
      localStorage.removeItem('wagmi.store');
      localStorage.removeItem('wagmi.connected');
  
      modalOpened.current = true;
      await open(); // This should now prompt for connection as the previous session data is cleared
      return;
    }
  }, [address, open]);

  return (
    <BorderContainer>
      <div className='py-8 flex flex-col gap-4 bg-dark-blue rounded-2xl'>
        <div className='w-full px-4 sm:px-10'>
          <h2 className='text-[12px] lg:text-[32px] font-bold uppercase'>RFT Swap</h2>
          <div>
            <div className='flex justify-between text-landing-content font-bold'>
              <span>You PAY</span>
              <Balance token={inputToken} />
            </div>
            <div className='flex justify-between items-center w-full shadow-lg px-3 sm:px-8 py-4 my-2 rounded-xl bg-[#05111C]'>
              <Selector selected={selected} setSelect={setSelected} />
              <div className='w-[100px] h-full rounded-xl bg-[#05111C]'>
                <input type='text' className='w-full h-full inset-0 px-2 text-right text-[12px] lg:text-[24px] font-semibold bg-transparent outline-none' />
              </div>
            </div>
          </div>
          <div className='my-2 lg:my-4 flex justify-center'>
            <span className='flex flex-col gap-2 p-2'>
              <span>
                <img className='w-4 lg:w-8' src='/img/ArrowUp.svg' alt='up' />
              </span>
              <span>
                <img className='w-4 lg:w-8' src='/img/ArrowDown.svg' alt='down' />
              </span>
            </span>
          </div>
          <div className='mb-8'>
            <div className='flex justify-between text-landing-content font-bold'>
              <span>You Receive</span>
              <Balance token={outputToken} />
            </div>
            <div className='flex justify-between items-center w-full shadow-lg px-3 sm:px-8 py-4 my-2 rounded-xl bg-[#05111C]'>
              <Selector selected={outSelected} setSelect={setOutSelected} />
              <div className='w-[100px] h-full rounded-xl bg-[#05111C]'>
                <input type='text' className='w-full h-full inset-0 px-2 text-[12px] lg:text-[24px] font-semibold text-right bg-transparent outline-none' />
              </div>
            </div>
          </div>
          <div className='mt-4'>
            {
              isConnected && session ? (
                <Button 
                  className='box-shadow text-[12px] lg:text-xl px-8 py-3 lg:py-5 lg:px-20 rounded-md lg:rounded-2xl' 
                  variant='transparent' 
                  size='large'
                >
                  Swap
                </Button>
              ) : (
                session ?
                  <Button 
                    className='box-shadow text-[12px] lg:text-xl px-8 py-3 lg:py-5 lg:px-20 rounded-md lg:rounded-2xl' 
                    variant='transparent' 
                    size='large' 
                    onClick={onReconnect}
                  >
                    Connect Wallet
                  </Button> :
                  <SiweButton className='box-shadow text-[12px] lg:text-xl px-8 py-3 lg:py-5 lg:px-20 rounded-md lg:rounded-2xl' />
              )
            }
          </div>
        </div>
      </div>
    </BorderContainer>
  );
};

export default JupiterForm;