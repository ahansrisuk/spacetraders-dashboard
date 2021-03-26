import { render, screen } from '@testing-library/react';
import ServerStatus from '../../components/ServerStatus';

test('displays online server status', () => {
  render(<ServerStatus online={true} />);
  const el = screen.getByText(/Server/i, { exact: false });
  expect(el.classList).toContain('bg-green-400');
});

test('displays offline server status', () => {
  render(<ServerStatus online={false} />);
  const el = screen.getByText(/Server/i, { exact: false });
  expect(el.classList).toContain('bg-red-400');
});
