import React, { Suspense, LazyExoticComponent } from 'react';

import { TopLoadingBar } from '../TopLoadingBar/TopLoadingBar';

export const createLazyComponent =
  (Component: LazyExoticComponent<() => JSX.Element>) => () =>
    (
      <Suspense fallback={<TopLoadingBar />}>
        <Component />
      </Suspense>
    );
