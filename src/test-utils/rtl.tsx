/* eslint-disable import/no-extraneous-dependencies */
import React, { ReactElement } from 'react';
import { IntlProvider } from 'react-intl';
import * as RTL from '@testing-library/react';
import { NotificationsProvider } from '@thegrinder/notifications';
import { ColorModeProvider } from '@thegrinder/color-mode';

import { Parent } from '~/utils/types';
import messages from '~/lang/data/en.json';

const Providers = ({ children }: Parent) => (
  <ColorModeProvider localStorageKey="color-mode-storage-key">
    <IntlProvider locale="en" messages={messages}>
      <NotificationsProvider>{children}</NotificationsProvider>
    </IntlProvider>
  </ColorModeProvider>
);

export const render = (ui: ReactElement, options?: RTL.RenderOptions) =>
  RTL.render(ui, { wrapper: Providers, ...options });

export const { fireEvent, act, waitFor } = RTL;
