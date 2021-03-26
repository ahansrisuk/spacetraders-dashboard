import axios from 'axios';
import { Component } from 'react';

interface UserState {
  credits: number;
  loans: Array<any>;
  ships: Array<any>;
  username: string;
}

export class User extends Component<{}, UserState> {
  constructor(props: any) {
    super(props);
    this.state = {
      credits: 0,
      loans: [],
      ships: [],
      username: '',
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://api.spacetraders.io/users/${process.env.REACT_APP_USERNAME}?token=${process.env.REACT_APP_TOKEN}`
      )
      .then((response) => this.setState(response.data.user));
  }
  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
      </div>
    );
  }
}

export default User;
