import {zeroAddress} from 'viem';

export type TokenField = {
  id: number;
  tokenURI: string;
  tokenAddress: `0x${string}`;
  tokenName: string;
  tokenSymbol: string;
  decimals: number;
};

const tokenList: TokenField[] = [
  {
    id: 0,
    tokenURI: '/img/coin/icon-dimp.svg',
    tokenAddress: (process.env.NEXT_PUBLIC_DIMP_CONTRACT_ADDRESS ||
      zeroAddress) as `0x${string}`,
    tokenName: 'Direct Impact Monetary Piece',
    tokenSymbol: 'DIMP',
    decimals: 6,
  },
  {
    id: 1,
    tokenURI: '/img/coin/icon-usdt.svg',
    tokenAddress: '0x55d398326f99059ff775485246999027b3197955',
    tokenName: 'Tether USDt',
    tokenSymbol: 'USDT',
    decimals: 6,
  },
  {
    id: 2,
    tokenURI: '/img/coin/icon-usdc.svg',
    tokenAddress: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
    tokenName: 'USD Coin',
    tokenSymbol: 'USDC',
    decimals: 6,
  },
];

export default tokenList;