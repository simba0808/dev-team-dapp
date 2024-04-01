'use client';
import {useCallback, useState} from 'react';
import {useAccount} from 'wagmi';
import BlockiesSvg from 'blockies-react-svg';
import {CheckIcon, CopyIcon} from '@chakra-ui/icons';
import {toast} from 'react-toastify';

import BSCIcon from './assets/binance.svg';

function shortenAddress(address: string, chars = 4) {
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`;
}

const AddressDisplay = ({address}) => {
  const shortened = shortenAddress(address);
  return <span>{shortened}</span>;
};

const CopyLink = ({url}: {url: string}) => {
  const [copied, setCopied] = useState(false);

  const onClickHandler = useCallback(() => {
    window.navigator.clipboard.writeText(url);
    toast('Address Copied', {
      type: 'success',
      position: 'top-right',
      autoClose: 1000,
    });
    setCopied(true);
  }, [url]);

  return (
    <div 
      className='surface-compact cursor-pointer bg-transparent active:bg-block/40'
      onClick={onClickHandler}
    >
      <div className='flex items-center gap-2'>
        {
          copied ?
            <CheckIcon color="#8E9FAE" boxSize={20}/>
            :
            <CopyIcon color="#8E9FAE" boxSize={20}/>
        }
        <div className="text-base text-white text-wrap">
          <AddressDisplay address={url} />
        </div>
      </div>
    </div>
  );
};

const WalletHeader = () => {
  const {address} = useAccount();
  return (
    <div className='flex justify-between items-center px-5 py-2.5 rounded-t-xl bg-black/90'>
      <div className='overflow-auto rounded-full'>
        <BlockiesSvg
          address={address as string}
          size={15}
          scale={2}
        />
      </div>
      <span className="mx-6">
        <h3 className='text-white font-normal text-base'>
          <CopyLink url={address as string}/>
        </h3>
      </span>
      <a href={'https://bscscan.com/address/' + address} target='_blank' rel='noopener noreferrer'>
        <BSCIcon className='w-12 h-12' fill='#fff' />
      </a>
    </div>
  );
};

export default WalletHeader;