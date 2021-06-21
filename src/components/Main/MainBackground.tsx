import React from 'react';
import classNames from 'classnames';

import { Parent } from '~/utils/types';

export const MainBackground = ({ children }: Parent) => (
  <div className={classNames('flex', 'flex-col', 'min-h-full', 'bg-neutral-0')}>
    {children}
  </div>
);
