import { render, screen } from '@testing-library/react';
import ServerStatus from '../../components/ServerStatus';
import axios from 'axios';

jest.mock('axios');

test('displays online server status', () => {
  render(<ServerStatus />);
  axios.get.mockImplementation((request) => {
    if (request.endsWith('status')) {
      return Promise.resolve({
        status: 'spacetraders is currently online and available to play',
      });
    }
  });
  const status = screen.getByText(/Server Status/);
  expect(status).toBeInTheDocument();
});
