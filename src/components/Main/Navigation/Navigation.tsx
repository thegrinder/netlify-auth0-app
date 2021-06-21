import React from 'react';
import { useIntl } from 'react-intl';
import { LoginOutline, LogoutOutline, CogOutline } from '@thegrinder/icons';
import { useAuth0 } from '@auth0/auth0-react';

import { IconLinkInner } from './IconLinkInner';
import { IconLink } from './IconLink';
import messages from './messages';
import { NavigationBackground } from './NavigationBackground';

export const Navigation = () => {
  const intl = useIntl();

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="sticky z-10 top-0">
      <NavigationBackground className="flex justify-end">
        <div className="flex">
          {isAuthenticated && (
            <IconLink
              to="/user/account"
              ariaLabel={intl.formatMessage(messages.settings)}
            >
              <CogOutline />
            </IconLink>
          )}
          {isAuthenticated ? (
            <button
              type="button"
              onClick={() => logout()}
              className="opacity-70"
              aria-label={intl.formatMessage(messages.logout)}
            >
              <IconLinkInner>
                <LogoutOutline />
              </IconLinkInner>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => loginWithRedirect()}
              className="opacity-70"
              aria-label={intl.formatMessage(messages.logIn)}
            >
              <IconLinkInner>
                <LoginOutline />
              </IconLinkInner>
            </button>
          )}
        </div>
      </NavigationBackground>
    </div>
  );
};
