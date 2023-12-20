import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/store';
import { Main } from '../pages';

const intersectionObserverMock = () => ({
  observe: () => null,
  disconnect: jest.fn(),
  unobserve: jest.fn(),
});

window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);

describe('main component', () => {
  test('should match snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
