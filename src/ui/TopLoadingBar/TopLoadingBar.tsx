import React from 'react';
import { LoadingBar as UILoadingBar } from '@thegrinder/ui';

export const TopLoadingBar = () => (
  <div className="fixed top-0 left-0 right-0 z-20">
    <UILoadingBar />
  </div>
);
