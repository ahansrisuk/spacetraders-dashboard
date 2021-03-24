import { render, screen } from '@testing-library/react';
import ServerStatus from '../../components/ServerStatus';

test('displays appropriate server status', () => {
  render(<ServerStatus />);
  const status = screen.getByText(/Server Status/i);
  expect(status).toBeInTheDocument();
});
