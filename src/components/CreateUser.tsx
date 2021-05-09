import { FunctionComponent, useState } from 'react';
import axios from 'axios';

interface CreateUserState {
  requestedUsername: string;
  username: string;
  token: string;
}

export const CreateUser: FunctionComponent = () => {
  const [requestedUsername, setRequestedUsername] = useState('');

  const createUser = () => {
    axios
      .post(`https://api.spacetraders.io/users/${requestedUsername}/token`)
      .then((response) => {
        console.log(response);
      });
  };

  function handleChange(event: any) {
    setRequestedUsername(event.target.value);
  }

  return (
    <div>
      <input
        className="mr-2 text-black"
        onChange={handleChange}
        value={requestedUsername}
      />
      <button
        onClick={createUser}
        className="bg-blue-500 border border-white px-2 rounded-lg"
      >
        Create a new character
      </button>
    </div>
  );
};

export default CreateUser;
