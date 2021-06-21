import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { usePreferredLanguage } from '@thegrinder/preferred-language';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import { TopLoadingBar, createLazyComponent } from '~/ui';

import { Navigation } from './Navigation/Navigation';
import { NavigationBackground } from './Navigation/NavigationBackground';
import { MainBackground } from './MainBackground';

const Account = lazy(() => import('../Account/Account'));
const LazyAccount = createLazyComponent(Account);

const Main = () => {
  const { language, messages } = usePreferredLanguage();

  if (!language) {
    return (
      <>
        <TopLoadingBar />
        <NavigationBackground className="h-1" />
      </>
    );
  }

  return (
    <IntlProvider locale={language} messages={messages}>
      <MainBackground>
        <Navigation />
        <Switch>
          <Route path="/user/account" component={LazyAccount} />
        </Switch>
      </MainBackground>
    </IntlProvider>
  );
};

export default withAuthenticationRequired(Main, {
  onRedirecting: () => (
    <>
      <TopLoadingBar />
      <NavigationBackground className="h-1" />
    </>
  ),
});
