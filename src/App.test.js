import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders React API Demo title', async () => {
  render(<App />);
  
  // Wait for loading to complete
  await waitFor(() => {
    const titleElement = screen.getByText(/React API Demo - User List/i);
    expect(titleElement).toBeInTheDocument();
  });
});

test('renders user cards after loading', async () => {
  render(<App />);
  
  // Wait for user data to load
  await waitFor(() => {
    const userCard = screen.getByText(/Leanne Graham/i);
    expect(userCard).toBeInTheDocument();
  });
});
