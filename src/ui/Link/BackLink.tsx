import React from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { ArrowLeftOutline } from '@thegrinder/icons';
import { Icon, Text } from '@thegrinder/ui';

import { Link, LinkProps } from './Link';
import messages from './messages';

export const BackLink = ({ className, to, ...rest }: LinkProps) => {
  return (
    <Link
      className={classNames(
        'leading-0 p-3 inline-flex items-center',
        className
      )}
      to={to}
      {...rest}
    >
      <Icon variant="neutral" className="text-xl">
        <ArrowLeftOutline />
      </Icon>
      <Text className="ml-2">
        <FormattedMessage {...messages.back} />
      </Text>
    </Link>
  );
};
