'use client';
import Button from '@/lib/components/button/Button';

import NetworkData from '../NetworkData.json';

const TabConnectWallet = () => {
  return (
    <div className='w-full h-full flex flex-col md:flex-row text-white border-[1px] border-gray-600 bg-dark-blue rounded-xl md:rounded-3xl shadow-xl'>
      <div className='md:order-2 basis-1/2 flex flex-col justify-between items-center px-4 md:px-20 py-8 pb-16'>
        <h3>Metamask is not Installed</h3>
        <div className='md:w-full p-12 bg-white rounded-[50px]'>
          <img className='w-full' src='/img/wallet/qr.svg' alt='QR' />
        </div>
        <Button variant='transparent' size='large' className='px-10 py-3'>
          Install
        </Button>
      </div>
      <div className='md:order-1 basis-1/2 relative p-8 pb-16 bg-slate-600/5 rounded-3xl overflow-hidden'>
        <div className='bg-transparent flex flex-col items-center px-10'>
          <h3 className='z-10'>Connect Your Wallet</h3>
          <p className='z-10 py-6 text-sm font-thin'>
            Start by connecting with one of the wallets below. 
            Be sure to store your private keys or seed phrase securely. 
            Never share them with anyone.
          </p>
          <div className='z-10 w-full grid grid-cols-3 py-4 gap-x-4'>
            {
              NetworkData.map((item) => {
                return (
                  <button className='flex justify-center p-2 rounded-xl hover:bg-black/20' key={item.name}>
                    <div className='flex flex-col justify-start items-center'>
                      <img className='w-16 h-16' src={`/img/wallet/${item.image}`} alt={item.name} />
                      <span className='mt-2 text-xs font-light'>{item.name}</span>
                    </div>
                  </button>
                );
              })
            }
          </div>
        </div>
        <div className='absolute left-0 top-0 w-[30%] h-full dark__green__gradient'>
        </div>
      </div>
    </div>
  );
};

export default TabConnectWallet;