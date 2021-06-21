import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

import { Parent } from '~/utils/types';

export const Auth0ProviderWithHistory = ({ children }: Parent) => {
  const domain = process.env.AUTH0_DOMAIN || '';
  const clientId = process.env.AUTH0_CLIENT_ID || '';

  const { pathname, origin } = window.location;

  return (
    <Auth0Provider
      useRefreshTokens
      domain={domain}
      clientId={clientId}
      redirectUri={`${origin}${pathname}`}
    >
      {children}
    </Auth0Provider>
  );
};
