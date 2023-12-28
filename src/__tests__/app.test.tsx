import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../store/store';
import { LocalizationProvider } from '../context/LocalContext';

const intersectionObserverMock = () => ({
  observe: () => null,
  disconnect: jest.fn(),
  unobserve: jest.fn(),
});

window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);

describe('App component', () => {
  test('should match snapshot', () => {
    const { asFragment } = render(
      <LocalizationProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </LocalizationProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
