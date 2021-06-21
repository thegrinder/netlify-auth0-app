import React from 'react';
import { useIntl } from 'react-intl';
import { LoadingMessage } from '@thegrinder/ui';

import { Container } from '../Container/Container';

import messages from './messages';

export type LoadingPageProps = {
  error?: string;
};

export const LoadingPage = ({ error = '' }: LoadingPageProps) => {
  const { formatMessage } = useIntl();
  return (
    <Container className="flex justify-center py-16 tc">
      <LoadingMessage
        title={formatMessage(messages.title)}
        text={error || formatMessage(messages.content)}
      />
    </Container>
  );
};
