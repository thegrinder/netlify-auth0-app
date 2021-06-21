import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

type ContainerSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl';

const sizes: { [key in ContainerSize]: string } = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
};

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: ContainerSize;
};

export const Container = ({
  size = '5xl',
  className,
  ...rest
}: ContainerProps) => (
  <div
    className={classNames(
      'w-full',
      'mr-auto',
      'ml-auto',
      'px-4',
      'sm:px-8',
      sizes[size],
      className
    )}
    {...rest}
  />
);
