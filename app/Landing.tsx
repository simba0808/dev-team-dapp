'use client';
import {useMemo} from 'react';
import Image from 'next/image';

import CircleUtilCard from '@/lib/components/cards/CircleUtilCard';
import MainBackground from '@/lib/components/Background';
import BorderContainer from '@/lib/components/BorderContainer';
import Button from '@/lib/components/button/Button';

import type {FC} from 'react';

const Landing: FC = () => {
  const BackgroundMask = useMemo(() => {
    return (
      <Image
        src="/img/MaskBackground.svg"
        alt='mask'
        className='-z-10 object-cover'
        fill
      />
    );
  }, []);

  const BackgroundMask2 = useMemo(() => {
    return (
      <Image
        src='/img/MaskBackground2.svg'
        alt='mask2'
        className='-z-10 object-cover'
        fill
      />
    );
  }, []);

  return (
    <div className='relative w-full text-white'>
      <MainBackground />
      <section className='relative max-w-screen-2xl min-h-[100vh] flex items-center px-4 sm:px-10 pt-32 mx-auto'>
        <div className='w-full flex flex-col lg:flex-row justify-between items-center'>
          <div className='flex-1 flex justify-end lg:order-2'>
            <div className='relative max-w-[80%] mx-auto  lg:mx-0'>
              <div className='-z-10 absolute left-[50%] top-[40%] -translate-x-[50%] -translate-y-[50%] w-[100%] h-[100%] pink__gradient'></div>
              <img className='z-10' src='/img/HumanIntelligence.png' alt='human' />
            </div>
          </div>
          <div className='flex-1 flex md:justify-between items-center gap-8'>
            <div className=''>
              <img className='max-w-[80%] hidden lg:block' src='/img/Logo.svg' alt='' />
              <div className='mb-12 lg:mb-6 lg:text-left text-center'>
                <p className='lg:mt-6 text-landing-title leading-[150%] lg:leading-[110%]'>Participate in building AI-powered products with Resolute</p>
                <p className='mt-3 text-[12px] lg:text-[18px] font-light uppercase'>
                  <b>Resolut AI</b> aims to create innovative artificial intelligence-based solutions that improve the efficiency and security of blockchain and cryptocurrency transactions.
                </p>
              </div>
              <div className='lg:text-left text-center'>
                <p className='text-landing-title'>Our mission</p>
                <p className='mt-3 text-[12px] lg:text-[18px] font-light uppercase'>
                  We develop a wide range of products and services based on artificial intelligence.
                  Our mission is to make the world of cryptocurrencies more accessible and secure for all participants by providing them with advanced technologies and tools based on artificial intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='relative max-w-screen-2xl px-2 sm:px-10 mx-auto overflow-x-clip'>
        <div className='flex flex-col mt-20'>
          <div className='relative lg:order-2 px-4 lg:mt-10 overflow-clip'>
            <CircleUtilCard />
          </div>
          <p className='hidden lg:block text-center text-[20px] lg:text-[26px] font-semibold uppercase'>
            Resolut AI creates an entire ecosystem governed by <br /> advanced AI technologies of its own design.
          </p>
        </div>
        <img className='-z-10 absolute top-0 left-[50%] -translate-y-[25%] -translate-x-[50%] lg:scale-100 scale-125' src='/img/Frame.svg' alt='frame' />
      </section>

      <section className='relative max-w-screen-2xl lg:h-[100vh] flex items-center justify-center px-8 sm:px-10 mx-auto'>
        <div className='w-full flex items-center gap-4'>
          <div className='flex-1 flex justify-center items-center gap-8 py-10'>
            <div>
              <p className='text-landing-title text-center xs:text-left'>
                Application of artificial<br/>Resolut AI
              </p>
              <ul className='ml-4 mt-12 space-y-2 text-landing-content list-disc uppercase'>
                <li>Resolut Lab: research and experimentation</li>
                <li>Resolut DApp: access to blockchain services</li>
                <li>Resolut Blockchain: deploying decentralized applications and smart contracts</li>
                <li>Resolut Token: participation in the ecosystem</li>
                <li>Resolut Smart Contract: automating and securing transactions</li>
                <li>Resolut Dev: developing innovative solutions</li>
              </ul>
            </div>
          </div>
          <div className='flex-1 hidden lg:flex justify-center'>
            <img src='/img/Face.svg' alt='face' />
          </div>
        </div>
      </section>

      <section className='relative max-w-screen-2xl sm:h-[80vh] px-8 sm:px-10 mx-auto overflow-x-clip'>
        <div className='w-full flex flex-col lg:items-start lg:flex-row gap-10 lg:gap-40'>
          <div className='flex-1 relative flex flex-col justify-center text-center'>
            <p className='text-landing-title'>Internal token:</p>
            <span className='lg:py-2 text-landing-content'>Resolut Flow Token</span>
            <span className='pb-4 text-[40px] font-bold text-shadow-blue'>(RFT)</span>
            <div className='lg:text-left text-center'>
              <p className='text-normal-content lg:min-h-[250px] p-5 sm:p-10 bg-black/20 backdrop-blur-lg border border-slate-600 rounded-2xl'>
                RFT (Resolut Flow Token) is an internal token designed to enable transactions within the Resolut AI ecosystem. 
                RFT simplifies and optimizes internal transactions and exchanges within the platform.
              </p>
            </div>
            <img className='-z-10 absolute opacity-20 scale-125 lg:scale-100' src='/img/FrameBlue.png' alt='frame' />
          </div>
          <div className='flex-1 relative flex flex-col justify-center text-center'>
            <p className='text-landing-title'>Public Coin:</p>
            <span className='lg:py-2 text-landing-content'>Resolut Flow Coin (PFC)</span>
            <span className='pb-4 text-[40px] font-bold text-shadow-green'>(RFC)</span>
            <div className='lg:text-left text-center'>
              <p className='text-normal-content lg:min-h-[250px] p-5 sm:p-10 bg-black/20 backdrop-blur-lg border border-slate-600 rounded-2xl'>
                RFC (Resolut Flow Coin) is a public coin available for trading on various decentralized and centralized cryptocurrency exchanges (DEX/CEX). 
                RFC serves as an instrument for external transactions and can be used as an investment asset.
              </p>
            </div>
            <img className='-z-10 absolute opacity-20 scale-125 lg:scale-100' src='/img/FrameGreen.svg' alt='frame' />
          </div>
        </div>
        <p className='hidden lg:block mt-10 text-[18px] text-center font-semibold uppercase'>
          The price of Resolut Flow Token will grow daily and in exactly one year it will reach 300%. 
          After that you 
          will be able to exchange it for Resolut Flow Coin and start trading on the exchange, having fixed your profit.
          Accordingly, the earlier you participate in the Private Sale, the more you will earn.
        </p>
      </section>

      <section className='max-w-screen-2xl min-h-[100vh] px-8 sm:px-10 py-10 pb-[200px] mx-auto overflow-clip'>
        <p className='mb-16 text-landing-title text-center lg:text-[64px] lg:text-left'>Private Sale</p>
        <div className='border border-slate-400 rounded-3xl  bg-black/20 backdrop-blur-lg'>
          <div className='lg:max-w-[90%] px-4 py-8 lg:px-6 lg:py-16 mx-auto'>
            <p className='mb-8 lg:mb-16 text-landing-content text-center lg:text-left'>Private Sale</p>
            <BorderContainer className='rounded-md lg:rounded-2xl'>
              <div className='p-[2px] lg:p-2 bg-[#05111C] rounded-md lg:rounded-2xl'>
                <div className='w-[20%] h-[30px] lg:h-[50px] rounded-md lg:rounded-xl box-shadow bg-[#0D9BD2]'>
                    
                </div>
              </div>
            </BorderContainer>
            <div className='mt-8 lg:mt-14 flex justify-center lg:justify-end'>
              <Button className='px-10 py-3 box-shadow' variant='transparent' size='large'>
                Buy Tokens
              </Button>
            </div>
          </div>
        </div>

        <div className='relative'>
          <div className='flex flex-col mt-20 p-[24px] lg:p-16 bg-black/20 backdrop-blur-md border border-slate-400 rounded-3xl overflow-x-clip'>
            <p className='text-landing-title lg:text-[40px]'>RFT token price graph</p>
            <div className='my-2 h-[1px] bg-slate-50/20'></div>
            <p className='text-landing-content'>Income for the period amounted to XX$</p>
            <div className='mx-auto text-[10rem] md:text-[14rem] xl:text-[20rem] font-extrabold'>
              
            </div>
          </div>
          <img className='-z-10 absolute top-0 left-[50%] -translate-y-[25%] -translate-x-[50%] lg:scale-100 scale-125' src="/img/FrameBottom.svg" alt='frame-bottom' />

        </div>
      </section>
    </div>
  );
};

export default Landing;