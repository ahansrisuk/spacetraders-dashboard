import { render, screen } from '@testing-library/react';
import User from '../../components/User';
import axios from 'axios';

jest.mock('axios');

test('displays user information', () => {
  render(<User />);
  axios.get.mockImplementation((request) => {
    if (request.includes(process.env.REACT_APP_USERNAME)) {
      return Promise.resolve({
        data: {
          user: {
            credits: 0,
            loans: [],
            ships: [],
            username: 'space-trader',
          },
        },
      });
    }
  });
  const username = screen.getByText(/space-trader/);
  expect(username).toBeVisible();
});
