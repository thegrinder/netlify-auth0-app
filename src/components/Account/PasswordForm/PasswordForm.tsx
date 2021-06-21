import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Text, Button } from '@thegrinder/ui';

import { SectionLayout } from '../SectionLayout/SectionLayout';

import messages from './messages';

export const PasswordForm = () => (
  <SectionLayout
    renderHeader={
      <Text as="h4">
        <FormattedMessage {...messages.passwordHeader} />
      </Text>
    }
    renderLeftContent={
      <Button>
        <FormattedMessage {...messages.button} />
      </Button>
    }
  />
);
