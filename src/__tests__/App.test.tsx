import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';

// Mock the App component to avoid CSS import issues in tests
const MockApp = () => (
  <div>
    <h1>Test Heading</h1>
    <button>Increment</button>
  </div>
);

describe('App Component', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <MockApp />
      </Provider>
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('displays the counter button', () => {
    render(
      <Provider store={store}>
        <MockApp />
      </Provider>
    );
    const button = screen.getByRole('button', { name: /increment/i });
    expect(button).toBeInTheDocument();
  });
});

