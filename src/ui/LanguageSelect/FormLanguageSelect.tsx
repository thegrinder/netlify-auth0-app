import React from 'react';
import { useIntl } from 'react-intl';
import { FormSelectField, FormSelectFieldProps } from '@thegrinder/form';

import { getKeys } from '~/utils/helpers';
import { languageLabels } from '~/utils/language-labels';

import { messages } from './messages';

export type FormLanguageSelectProps = Omit<FormSelectFieldProps, 'options'> & {
  ignoredLanguages?: string[];
};

export const FormLanguageSelect = ({
  disabled = false,
  ignoredLanguages = [],
  ...rest
}: FormLanguageSelectProps) => {
  const { formatMessage } = useIntl();
  return (
    <FormSelectField
      id="language"
      disabled={disabled}
      options={[
        ...getKeys(languageLabels)
          .filter((language) => !ignoredLanguages.includes(language))
          .map((language) => ({
            value: language,
            label: formatMessage(languageLabels[language]),
          })),
        { value: '', label: formatMessage(messages.pickOne) },
      ]}
      {...rest}
    />
  );
};
