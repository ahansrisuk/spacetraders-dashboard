import { Component } from 'react';
import ServerStatus from './components/ServerStatus';
import User from './components/User';
import CreateUser from './components/CreateUser';
import axios from 'axios';

interface AppProps {}
interface AppState {
  online: boolean;
}

export class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      online: false,
    };
  }

  componentDidMount() {
    axios.get('https://api.spacetraders.io/game/status').then((response) => {
      if (
        response.data.status ===
        'spacetraders is currently online and available to play'
      ) {
        this.setState({
          online: true,
        });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <CreateUser></CreateUser>
        <ServerStatus online={this.state.online} />
        <User />
      </div>
    );
  }
}

export default App;
