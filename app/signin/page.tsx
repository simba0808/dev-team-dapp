'use client';

import type { FC } from 'react';

const SigninPage: FC<{searchParams: Record<string, string | undefined>}> = ({searchParams}) => {
  return (
    <div className='flex flex-col text-white'>
      <h1 className="text-center mb-1">
        Log in to Actocracy
      </h1>
    </div>
  );
};

export default SigninPage;