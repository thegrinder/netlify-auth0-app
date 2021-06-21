import React, { ChangeEvent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Text, InputLabel } from '@thegrinder/ui';
import { usePreferredLanguage } from '@thegrinder/preferred-language';

import { TopLoadingBar, UserLanguageSelect } from '~/ui';

import { SectionLayout } from '../SectionLayout/SectionLayout';

import messages from './messages';

export const Settings = () => {
  const { updateLanguage, language, loadingLanguage } = usePreferredLanguage();
  const handleUpdatingLocale = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    updateLanguage(target.value);
  };

  return (
    <SectionLayout
      renderHeader={
        <Text as="h4">
          <FormattedMessage {...messages.header} />
        </Text>
      }
      renderLeftContent={
        <>
          {loadingLanguage && <TopLoadingBar />}
          <div className="flex flex-row justify-between items-center pb-4">
            <InputLabel emphasis="low" htmlFor="language">
              <FormattedMessage {...messages.languageLabel} />
            </InputLabel>
            <div className="w-32">
              <UserLanguageSelect
                disabled
                id="language"
                data-testid="language-select"
                onChange={handleUpdatingLocale}
                value={language}
              />
            </div>
          </div>
        </>
      }
    />
  );
};
