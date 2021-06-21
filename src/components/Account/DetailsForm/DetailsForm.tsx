import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useAuth0 } from '@auth0/auth0-react';
import { InputLabel, Text, InputField } from '@thegrinder/ui';

import { SectionLayout } from '../SectionLayout/SectionLayout';

import messages from './messages';

export const DetailsForm = () => {
  const { user } = useAuth0();
  const email = user?.email || '';

  return (
    <SectionLayout
      renderHeader={
        <div className="flex items-center">
          <Text as="h4">
            <FormattedMessage {...messages.accountDetailsHeader} />
          </Text>
        </div>
      }
      renderLeftContent={
        <InputField
          className="mb-6"
          name="email"
          type="email"
          disabled
          value={email}
          label={
            <InputLabel htmlFor="email">
              <FormattedMessage {...messages.email} />
            </InputLabel>
          }
        />
      }
    />
  );
};
