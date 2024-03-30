import type {DefaultSession} from 'next-auth';
import type {DefaultJWT} from 'next-auth/jwt';
import type {RedirectableProviderType} from 'next-auth/providers/index';
import type {OAuthProviderType} from 'next-auth/providers/index';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    idToken?: string;
    accessToken: string;
    refreshToken?: string;
    provider: Provider;
    providerAccountId: string;
    username?: string;
  }
}

declare module 'next-auth/jwt' {
  export interface JWT extends Record<string, unknown>, DefaultJWT {
    idToken?: string;
    accessToken: string;
    refreshToken?: string;
    provider: Provider;
    providerAccountId: string;
    username?: string;
  }
}

declare module 'next-auth/providers' {
  export declare type BuiltInProviderType = OAuthProviderType | RedirectableProviderType | 'siwe';
}