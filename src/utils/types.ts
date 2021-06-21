import { ReactNode } from 'react';

export type Styleable = {
  className?: string;
};

export type Testable = {
  'data-testid'?: string;
};

export type Parent = {
  children?: ReactNode;
};
