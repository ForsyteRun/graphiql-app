import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Docs } from '../components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store';

describe('Docs component', () => {
  it('should match Docs snapshot without data', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Docs />
        </BrowserRouter>
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it('should match Docs snapshot with data', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Docs />
        </BrowserRouter>
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
