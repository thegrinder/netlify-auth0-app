import React from 'react';

import { render } from '~/test-utils/rtl';

import { SectionLayout } from '../SectionLayout';

const requiredProps = {
  renderHeader: <span>header</span>,
  renderLeftContent: <span>content</span>,
};

describe('<SectionLayout />', () => {
  it('should render correctly', () => {
    const { queryByText } = render(<SectionLayout {...requiredProps} />);
    expect(queryByText('header')).toBeTruthy();
    expect(queryByText('content')).toBeTruthy();
  });
});
