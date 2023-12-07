/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PrivateWrapper from '../components/PrivateWrapper';

describe('PrivateWrapper component', () => {
  it('renders children', () => {
    const { container } = render(
      <PrivateWrapper>
        <div data-testid="child">Child Component</div>
      </PrivateWrapper>
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();

    expect(container.querySelector('Navigate')).not.toBeInTheDocument();
  });
});
