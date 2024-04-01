'use client';
import useWebSocket from 'react-use-websocket';

import {useAppSelector} from '@/lib/store/hooks';

import type {Options} from 'react-use-websocket';

type BaseSocketMessageData = {
  id: number;  // Assuming this is the unique identifier for each message
  message: string;
  url: string;
  dimp: number;
  rating: number;
}

export type BaseSocketMessage = {
  target: string;
  data: BaseSocketMessageData;
  user: {
    id: number;
    dimp: number;
    rewards: number;
    dimp_earned: number;
    dimp_spent: number;
    address: `0x${string}`;
    hash: string;
    ref_slug: string;
  };
  app_config: {
    dimp_usd_rate: number;
  };
};

const useAppSocket = <T extends BaseSocketMessage = BaseSocketMessage, >(options?: Options) => {
  const jwt = useAppSelector(state => state.auth.token);
  const url = jwt ? `${process.env.NEXT_PUBLIC_SOCKET_SERVER}?token=${jwt}` : null;

  // explicit null is required, since react-use-websocket incorrectly types lastJsonMessage as strictly T
  return useWebSocket<T | null>(url, {
    share: true,
    // onOpen: (event) => {},
    shouldReconnect: (closeEvent) => true,
    reconnectAttempts: 99999,
    //attemptNumber will be 0 the first time it attempts to reconnect, so this equation results in a reconnect pattern of 1 second, 2 seconds, 4 seconds, 8 seconds, and then caps at 10 seconds until the maximum number of attempts is reached
    reconnectInterval: 2000,
    ...options,
  });
};

export default useAppSocket;
