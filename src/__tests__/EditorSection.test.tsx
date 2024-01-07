import { render, screen } from '@testing-library/react';
import EditorSection from '../components/Editor/EditorSection';
import store from '../store/store';
import { Provider } from 'react-redux';
import { LocalizationProvider } from '../context/LocalContext';

describe('EditorSection component', () => {
  it('renders editor section with title', () => {
    render(
      <Provider store={store}>
        <LocalizationProvider>
          <EditorSection title="Test Title" />
        </LocalizationProvider>
      </Provider>
    );
    const titleElement = screen.getByText('Test Title');
    expect(titleElement).toBeInTheDocument();
  });
});
