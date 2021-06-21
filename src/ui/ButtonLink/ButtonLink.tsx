import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Link, LinkProps } from 'react-router-dom';
import { ButtonSize, ButtonEmphasis, ButtonVariant } from '@thegrinder/ui';

export type ButtonLinkProps = LinkProps & {
  size?: ButtonSize;
  variant?: ButtonVariant;
  emphasis?: ButtonEmphasis;
  square?: boolean;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
};

export const ButtonLink = ({
  size = 'md',
  variant = 'primary',
  emphasis = 'medium',
  square = false,
  className,
  children,
  iconStart,
  iconEnd,
  ...rest
}: ButtonLinkProps) => (
  <Link
    className={classNames(
      'btn',
      `btn-variant-${variant}--${emphasis}`,
      square ? `btn-square-size-${size}` : `btn-size-${size}`,
      className
    )}
    {...rest}
  >
    <span className="inline-flex items-center">
      {iconStart && (
        <span className="inline-block leading-0 mr-2">{iconStart}</span>
      )}
      {square ? <span className="leading-0">{children}</span> : children}
      {iconEnd && (
        <span className="inline-block leading-0 ml-2">{iconEnd}</span>
      )}
    </span>
  </Link>
);
