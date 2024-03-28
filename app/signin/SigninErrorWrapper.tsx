'use client';
import {useEffect, useRef}  from 'react';
import {toast} from 'react-toastify';

import type {FC, ReactNode} from 'react';

export type SignInPageErrorParam =
  | 'Signin'
  | 'OAuthSignin'
  | 'OAuthCallback'
  | 'OAuthCreateAccount'
  | 'EmailCreateAccount'
  | 'Callback'
  | 'OAuthAccountNotLinked'
  | 'EmailSignin'
  | 'CredentialsSignin'
  | 'SessionRequired'

type Props = {
  error?: SignInPageErrorParam;
  children: ReactNode;
};

const SigninErrorWrapper: FC<Props> = ({error, children}) => {
  const handled = useRef(false);
  
  useEffect(() => {
    if (error && !handled.current) {
      handled.current = true;
      toast( `Unable to sign in: ${error} error`, {
        type: 'error',
        position: 'top-right',
        autoClose: 5000,
      });
    }
  }, [error]);

  return children;
};

export default SigninErrorWrapper;