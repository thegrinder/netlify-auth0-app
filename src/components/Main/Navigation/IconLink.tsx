import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import classNames from 'classnames';

import { IconLinkInner } from './IconLinkInner';

type IconLinkProps = NavLinkProps & {
  ariaLabel: string;
};

export const IconLink = ({
  to,
  ariaLabel,
  children,
  ...rest
}: IconLinkProps) => (
  <NavLink
    className="opacity-70"
    activeClassName={classNames('opacity-100', 'light:bg-primary-500')}
    to={to}
    aria-label={ariaLabel}
    {...rest}
  >
    <IconLinkInner>{children}</IconLinkInner>
  </NavLink>
);
