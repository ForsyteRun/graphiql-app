import '@testing-library/jest-dom';
import { NavigationLayout } from '../layout';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/store';
import { BrowserRouter } from 'react-router-dom';

describe('NavigationLayout component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavigationLayout />
        </BrowserRouter>
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
