import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import { Styleable } from '~/utils/types';

export const NavigationBackground = ({
  className,
  ...rest
}: PropsWithChildren<Styleable>) => (
  <div className={classNames('light:bg-primary-400', className)} {...rest} />
);
