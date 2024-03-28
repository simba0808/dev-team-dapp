'use client';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {persistor, store} from '@/lib/store';

import type {ReactNode} from 'react';

const ReduxProvider: React.FC<{ children: ReactNode }> = ({children}) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
);

export default ReduxProvider;
