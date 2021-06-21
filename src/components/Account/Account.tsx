import React from 'react';

import { Container } from '~/ui';

import { DetailsForm } from './DetailsForm/DetailsForm';
import { PasswordForm } from './PasswordForm/PasswordForm';
import { Settings } from './Settings/Settings';

const Account = () => (
  <Container className="py-16" data-testid="account">
    <DetailsForm />
    <PasswordForm />
    <Settings />
  </Container>
);

export default Account;
