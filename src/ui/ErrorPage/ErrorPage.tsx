import React from 'react';
import { useIntl } from 'react-intl';
import { ErrorMessage } from '@thegrinder/ui';

import { Container } from '../Container/Container';

import messages from './messages';

export type ErrorPageProps = {
  error?: string;
};

export const ErrorPage = ({ error = '' }: ErrorPageProps) => {
  const { formatMessage } = useIntl();
  return (
    <Container className="flex justify-center py-16 tc">
      <ErrorMessage
        title={formatMessage(messages.title)}
        text={error || formatMessage(messages.content)}
      />
    </Container>
  );
};
