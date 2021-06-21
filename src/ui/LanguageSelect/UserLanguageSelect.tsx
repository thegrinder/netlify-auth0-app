import React from 'react';
import { useIntl } from 'react-intl';
import { Select, SelectProps } from '@thegrinder/ui';

import { languageLabels } from '~/utils/language-labels';
import { supportedLanguages } from '~/lang/constants';

export type UserLanguageSelectProps = Omit<SelectProps, 'options'>;

export const UserLanguageSelect = (props: UserLanguageSelectProps) => {
  const { formatMessage } = useIntl();
  return (
    <Select
      options={supportedLanguages.map((language) => ({
        value: language,
        label: formatMessage(languageLabels[language]),
      }))}
      {...props}
    />
  );
};
