'use client';
import {useEffect} from 'react';

import {
  authAppConfigReceived,
  authUserDataReceived,
} from '@/lib/store/auth/auth-slice';
import {useAppDispatch} from '@/lib/store/hooks';
import useAppSocket from '@/lib/net/ws/useAppSocket';

import type {BaseSocketMessage} from '@/lib/net/ws/useAppSocket';

export type SocketMessageSync = BaseSocketMessage & {
  target: 'sync';
};

const isMessageSync = (message: SocketMessageSync | BaseSocketMessage): message is SocketMessageSync => {
  return message.target === 'sync';
};

const useSocketSync = () => {
  const dispatch = useAppDispatch();
  const {lastJsonMessage} = useAppSocket<SocketMessageSync | BaseSocketMessage>();

  useEffect(() => {
    if (lastJsonMessage === null) {
      return;
    }

    if (isMessageSync(lastJsonMessage)) {
      dispatch(authUserDataReceived(lastJsonMessage.user));
      dispatch(authAppConfigReceived(lastJsonMessage.app_config));
      return;
    }

    if(lastJsonMessage.user) {
      dispatch(authUserDataReceived(lastJsonMessage.user));
    }

    if (lastJsonMessage.app_config) {
      dispatch(authAppConfigReceived(lastJsonMessage.app_config));
    }
  }, [lastJsonMessage]);
};

const useSocketGlobalMessages = () => {
  useSocketSync();
};

export default useSocketGlobalMessages;