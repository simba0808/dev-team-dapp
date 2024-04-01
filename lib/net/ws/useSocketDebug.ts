'use client';
import {useEffect} from 'react';

import useAppSocket from '@/lib/net/ws/useAppSocket';

const useSocketDebug = () => {
  const {lastJsonMessage} = useAppSocket();

  useEffect(() => {
    if (lastJsonMessage !== null && process.env.NODE_ENV === 'development') {
      console.debug('WS message received', lastJsonMessage);
    }
  }, [lastJsonMessage]);
};

export default useSocketDebug;