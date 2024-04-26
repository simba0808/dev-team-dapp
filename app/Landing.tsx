'use client';
import ChartWidget from '@/app/(main)/sale/components/ChartWidget';
import CircleUtilCard from '@/lib/components/cards/CircleUtilCard';
import MainBackground from '@/lib/components/Background';
import BorderContainer from '@/lib/components/BorderContainer';
import Button from '@/lib/components/button/Button';


import type {FC} from 'react';

const Landing: FC = () => {
  

  return (
    <div className='relative w-full text-white'>
      <MainBackground />
      <section className='relative max-w-screen-2xl flex items-center px-8 sm:px-10 pt-32 mx-auto'>
        <div className='w-full flex flex-col lg:flex-row justify-between items-center'>
          <div className='lg:w-[55%] flex justify-end lg:order-2'>
            <div className='relative max-w-[80%] mx-auto  lg:mx-0'>
              <div className='-z-10 absolute left-[50%] top-[40%] -translate-x-[50%] -translate-y-[50%] w-[100%] h-[100%] pink__gradient'></div>
              <img className='z-10' src='/img/HumanIntelligence.png' alt='human' />
            </div>
          </div>
          <div className='lg:w-[45%] flex md:justify-between items-center gap-8'>
            <div className=''>
              <img className='max-w-[80%] hidden lg:block' src='/img/Logo.svg' alt='' />
              <div className='mb-12 lg:mb-6 lg:text-left text-center'>
                <p className='lg:mt-6 text-landing-title leading-[150%] lg:leading-[110%]'>
                  <span>P</span>articipate in building <span>AI</span>-powered products with <span>R</span>esolute
                </p>
                <p className='mt-3 text-landing-content'>
                  <span><b>Resolut AI</b></span> aims to create innovative artificial intelligence-based solutions that improve the efficiency and security of blockchain and cryptocurrency transactions.
                </p>
              </div>
              <div className='lg:text-left text-center'>
                <p className='text-landing-title'><span>O</span>ur mission</p>
                <p className='mt-3 text-landing-content'>
                  <span>W</span>e develop a wide range of products and services based on artificial intelligence.
                  &nbsp;<span>O</span>ur mission is to make the world of cryptocurrencies more accessible and secure for all participants by providing them with advanced technologies and tools based on artificial intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='relative max-w-screen-2xl px-2 sm:px-10 mx-auto mt-10 overflow-x-clip'>
        <div className='flex flex-col mt-20'>
          <div className='relative lg:order-2 px-4 lg:mt-10 overflow-clip'>
            <CircleUtilCard />
          </div>
          <p className='max-w-screen-lg mx-auto hidden lg:block text-center text-landing-title font-bold'>
            <span>R</span>esolut <span>AI</span> creates an entire ecosystem governed by advanced <span>AI</span> technologies of its own design.
          </p>
        </div>
        <img className='-z-10 absolute top-0 left-[50%] -translate-y-[25%] -translate-x-[50%] lg:scale-100 scale-125' src='/img/Frame.svg' alt='frame' />
      </section>

      <section className='relative max-w-screen-2xl lg:h-[100vh] flex items-center justify-center px-8 sm:px-10 mx-auto'>
        <div className='w-full flex items-center gap-4'>
          <div className='flex-1 flex justify-center items-center gap-8 py-10'>
            <div>
              <p className='text-landing-title text-center xs:text-left'>
                <span>A</span>pplication of artificial <span>R</span>esolut <span>AI</span>
              </p>
              <ul className='ml-4 mt-12 space-y-2 text-landing-content list-disc uppercase'>
                <li><span>R</span>esolut <span>L</span>ab: research and experimentation</li>
                <li><span>R</span>esolut <span>D</span>App: access to blockchain services</li>
                <li><span>R</span>esolut <span>B</span>lockchain: deploying decentralized applications and smart contracts</li>
                <li><span>R</span>esolut <span>T</span>oken: participation in the ecosystem</li>
                <li><span>R</span>esolut <span>S</span>mart <span>C</span>ontract: automating and securing transactions</li>
                <li><span>R</span>esolut <span>D</span>ev: developing innovative solutions</li>
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
            <p className='text-landing-title'><span>I</span>nternal token:</p>
            <span className='lg:py-2 text-landing-content'><span>R</span>esolut <span>F</span>low <span>T</span>oken</span>
            <span className='pb-4 text-[40px] font-bold text-shadow-blue'>(RFT)</span>
            <div className='lg:text-left text-center'>
              <BorderContainer>
                <p className='text-normal-content lg:min-h-[220px] p-5 sm:px-16 sm:py-10 rounded-2xl'>
                  <span>RFT</span> (<span>R</span>esolut <span>F</span>low <span>T</span>oken) is an internal token designed to enable transactions within the <span>R</span>esolut <span>AI</span> ecosystem. 
                  <span> RFT </span> simplifies and optimizes internal transactions and exchanges within the platform.
                </p>
              </BorderContainer>
            </div>
            <img className='-z-10 absolute opacity-20 scale-125 lg:scale-100' src='/img/FrameBlue.png' alt='frame' />
          </div>
          <div className='flex-1 relative flex flex-col justify-center text-center'>
            <p className='text-landing-title'><span>P</span>ublic Coin:</p>
            <span className='lg:py-2 text-landing-content'><span>R</span>esolut <span>F</span>low <span>C</span>oin (PFC)</span>
            <span className='pb-4 text-[40px] font-bold text-shadow-green'>(RFC)</span>
            <div className='lg:text-left text-center'>
              <BorderContainer>
                <p className='text-normal-content lg:min-h-[220px] p-5 sm:px-20 sm:py-10 rounded-2xl'>
                  <span>RFC</span> (<span>R</span>esolut <span>F</span>low <span>C</span>oin) is a public coin available for trading on various decentralized and centralized cryptocurrency exchanges (<span>DEX/CEX</span>). 
                  <span> RFC </span> serves as an instrument for external transactions and can be used as an investment asset.
                </p>
              </BorderContainer>
            </div>
            <img className='-z-10 absolute opacity-20 scale-125 lg:scale-100' src='/img/FrameGreen.svg' alt='frame' />
          </div>
        </div>
        <p className='text-landing-content hidden lg:block mt-10 text-center font-bold'>
          <span>T</span>he price of <span>R</span>esolut <span>F</span>low <span>T</span>oken will grow daily and in exactly one year it will reach <span>300%</span>. 
          <span> A</span>fter that you 
          will be able to exchange it for Resolut Flow Coin and start trading on the exchange, having fixed your profit.
          <span> A</span>ccordingly, the earlier you participate in the Private Sale, the more you will earn.
        </p>
      </section>

      <section className='max-w-screen-2xl min-h-[100vh] px-4 sm:px-10 py-10 pb-[200px] mx-auto overflow-clip'>
        <p className='text-landing-title mb-4 lg:mb-16 text-center lg:text-[64px] lg:text-left'><span>P</span>rivate <span>S</span>ale</p>
        <div className='common-border  bg-black/20 backdrop-blur-lg'>
          <div className='lg:max-w-[90%] px-4 py-8 lg:px-6 lg:py-16 mx-auto'>
            <p className='mb-8 lg:mb-16 text-landing-content text-center lg:text-left'><span>P</span>rivate <span>S</span>ale</p>
            <BorderContainer className='rounded-md lg:rounded-2xl'>
              <div className='p-[2px] lg:p-2 bg-[#05111C] rounded-md lg:rounded-2xl'>
                <div className='w-[20%] h-[30px] lg:h-[50px] rounded-md lg:rounded-xl box-shadow bg-[#0D9BD2]'>
                    
                </div>
              </div>
            </BorderContainer>
            <div className='mt-8 lg:mt-14 flex justify-center lg:justify-end'>
              <Button className='px-10 py-3 box-shadow text-[12px] lg:text-[24px]' variant='transparent' size='large'>
                Buy Tokens
              </Button>
            </div>
          </div>
        </div>

        <div className='relative mt-20'>
          <ChartWidget />
          <img className='-z-10 absolute top-0 left-[50%] -translate-y-[25%] -translate-x-[50%] lg:scale-100 scale-125' src="/img/FrameBottom.svg" alt='frame-bottom' />

        </div>
      </section>
    </div>
  );
};

export default Landing;