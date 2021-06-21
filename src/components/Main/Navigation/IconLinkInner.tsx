import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import { Icon } from '@thegrinder/ui';

import { Styleable } from '~/utils/types';

export const IconLinkInner = ({
  className,
  ...rest
}: PropsWithChildren<Styleable>) => (
  <Icon
    className={classNames(
      'p-4',
      'block',
      'text-2xl',
      'light:text-neutral-0',
      className
    )}
    {...rest}
  />
);
