import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Welcome } from '../pages';

describe('Welcome Page', () => {
  it('should be equal Welcome Page snapshot', () => {
    const { asFragment } = render(<Welcome />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should has tree images of developers', () => {
    render(<Welcome />);

    const imageElements = screen.getAllByRole('img');

    expect(imageElements.length).toBe(3);
  });

  it('should has tree names of developers', () => {
    render(<Welcome />);

    const imageElements = screen.getAllByRole('heading', { level: 3 });

    expect(imageElements.length).toBe(3);
  });
});
