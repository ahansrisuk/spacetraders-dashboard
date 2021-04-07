import { useState, useEffect } from 'react';
import ServerStatus from './components/ServerStatus';
import User from './components/User';
import CreateUser from './components/CreateUser';
import axios from 'axios';

function App() {
  const [online, setOnline] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('https://api.spacetraders.io/game/status').then((response) => {
      if (
        response.data.status ===
        'spacetraders is currently online and available to play'
      ) {
        setOnline(true);
      }
    });
    // array param shows dependencies that useEffect will update on
  }, []);

  const createUser = () => {
    axios.get(
      `https://api.spacetraders.io/users/${this.state.requestedUsername}`
    );
  };

  return (
    <div className="App">
      <CreateUser user={user}></CreateUser>
      <ServerStatus online={online} />
      <User />
    </div>
  );
}

export default App;
