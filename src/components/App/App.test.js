import { render, screen } from '@testing-library/react';
import App from '.';

test('renders app header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Vendor Status Page/i);
  expect(linkElement).toBeInTheDocument();
});
