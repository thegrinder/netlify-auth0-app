import React, { HTMLAttributes } from 'react';
import {
  Link as ReactRouterLink,
  LinkProps as ReactRouterLinkProps,
} from 'react-router-dom';
import classNames from 'classnames';

type LinkVariant = 'primary' | 'muted';

export type LinkProps = ReactRouterLinkProps &
  HTMLAttributes<HTMLSpanElement> & {
    variant?: LinkVariant;
  };

export const Link = ({
  variant = 'primary',
  className,
  ...rest
}: LinkProps) => (
  <ReactRouterLink
    className={classNames('link', `link-variant-${variant}`, className)}
    {...rest}
  />
);
