
import {useCallback} from 'react';
import {useWeb3Modal} from '@web3modal/react';
import {useAccount, useBalance, useNetwork} from 'wagmi';
import {Logout} from '@mui/icons-material';

//import {useAppSelector} from '@/lib/store/hooks';
import tokenList from '@/lib/wallet/TokenList';

import WalletHeader from './WalletHeader';

const WalletMenu = () => {
  //const user = useAppSelector(state => state.auth.user);
  const {chain} = useNetwork();
  const {address, isConnected} = useAccount();

  const {data: dimpOnWallet} = useBalance({
    address: '0x0955767D3Eb443EA8E6E149BC492a7AfaD993e1f',
    token: tokenList[0]?.tokenAddress,
  });

  const {data: usdtOnWallet} = useBalance({
    address: '0x0955767D3Eb443EA8E6E149BC492a7AfaD993e1f',
    token: tokenList[1]?.tokenAddress,
  });

  const {data: usdcOnWallet} = useBalance({
    address: '0x0955767D3Eb443EA8E6E149BC492a7AfaD993e1f',
    token: tokenList[2]?.tokenAddress,
  });
  
  const {open} = useWeb3Modal();

  const onDisconnect = useCallback(async () => {
    if (isConnected) {
      open();
      return;
    }
  }, [address, chain]);

  return (
    <div className='max-w-80'>
      <div className='min-w-72'>
        <WalletHeader />
        <div className='flex justify-start items-center gap-2 px-4 py-2.5 rounded-none bg-black/70'>
          <img src={tokenList[0].tokenURI} height={24} width={24} alt='dimp' />
          <p className='text-white font-normal text-base mr-14'>
            DIMP
          </p>
          <p className='text-white/80 font-normal text-base absolute right-4'>
            {Number(dimpOnWallet?.formatted || 0).toLocaleString(undefined, {minimumFractionDigits: 3})}
          </p>
        </div>

        <div className='flex justify-start items-center gap-2 px-4 py-2.5 rounded-none bg-black/70'>
          <img src={tokenList[1].tokenURI} height={24} width={24} alt='dimp' />
          <p className='text-white font-normal text-base mr-14'>
            USDT
          </p>
          <p className='text-white/80 font-normal text-base absolute right-4'>
            {Number(usdtOnWallet?.formatted || 0).toLocaleString(undefined, {minimumFractionDigits: 3})}
          </p>
        </div>

        <div className='flex justify-start items-center gap-2 px-4 py-2.5 rounded-none bg-black/70'>
          <img src={tokenList[2].tokenURI} height={24} width={24} alt='dimp' />
          <p className='text-white font-normal text-base mr-14'>
            USDC
          </p>
          <p className='text-white/80 font-normal text-base absolute right-4'>
            {Number(usdcOnWallet?.formatted || 0).toLocaleString(undefined, {minimumFractionDigits: 3})}
          </p>
        </div>

        <div onClick={onDisconnect} className='flex justify-start gap-2 items-center px-4 py-2.5 rounded-b-xl bg-black/70 cursor-pointer'>
          <Logout className='text-white' fontSize='small'/>
          <h3 className='text-white font-normal text-base'>
            Disconnect Wallet
          </h3>
        </div>
      </div>
    </div>
  );
};

export default WalletMenu;