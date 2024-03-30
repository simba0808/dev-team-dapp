'use client';
import dynamic from 'next/dynamic';

import type React from 'react';

const withDynamic = <T>(Component: React.FC<T>) => {
  return dynamic(() => Promise.resolve(Component), {ssr: false});
};

export default withDynamic;