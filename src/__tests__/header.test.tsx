import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Header } from '../layout';
import { MemoryRouter } from 'react-router-dom';

describe('Header component', () => {
  it('should be equal Welcome Page snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
