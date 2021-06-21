import React, { ReactNode } from 'react';
import { Card } from '@thegrinder/ui';

type SectionLayoutProps = {
  renderHeader: ReactNode;
  renderLeftContent: ReactNode;
};

export const SectionLayout = ({
  renderHeader,
  renderLeftContent,
}: SectionLayoutProps) => (
  <Card className="mb-16 p-8 sm:p-12">
    <div className="mb-6">{renderHeader}</div>
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-6">{renderLeftContent}</div>
    </div>
  </Card>
);
