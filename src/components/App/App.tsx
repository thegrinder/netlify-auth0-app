import React from 'react';
import Modal from 'react-modal';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { NotificationsProvider } from '@thegrinder/notifications';
import { PreferredLanguageProvider } from '@thegrinder/preferred-language';
import { ColorModeProvider } from '@thegrinder/color-mode';

import { supportedLanguages, defaultLanguage } from '~/lang/constants';

import Main from '../Main/Main';

import { Auth0ProviderWithHistory } from './Auth0ProviderWithHistory';

import '../../index.css';

Modal.setAppElement('#app');

const importLanguage = (language: string) =>
  import(`../../lang/data/${language}`);

const App = () => (
  <ColorModeProvider localStorageKey="netlify-auth0-color-mode">
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <PreferredLanguageProvider
          defaultLanguage={defaultLanguage}
          supportedLanguages={supportedLanguages}
          localStorageKey="netlify-auth0-app-language"
          fetchTranslations={importLanguage}
        >
          <NotificationsProvider>
            <Switch>
              <Route path="/" component={Main} />
            </Switch>
          </NotificationsProvider>
        </PreferredLanguageProvider>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </ColorModeProvider>
);

export default hot(App);
