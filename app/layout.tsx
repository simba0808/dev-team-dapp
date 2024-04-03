
import './globals.css';

import {Inter} from 'next/font/google';
import {getServerSession} from 'next-auth';

import ReduxProvider from '@/lib/store/ReduxProvider';
import AuthSessionProvider from '@/lib/auth/AuthSessionProvider';
import QueryProvider from '@/lib/net/react-query/QueryProvider';
import Web3Client from '@/lib/web3/Web3Client';
import authConfig from '@/lib/auth/authConfig';

import type {Metadata} from 'next';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'ProgFi Group System',
  description: 'Start receiving Daily Income Today.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authConfig);
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <QueryProvider>
            <AuthSessionProvider session={session}>
              <Web3Client>
                {children}
              </Web3Client>
            </AuthSessionProvider>
          </QueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
