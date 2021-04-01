import { Component } from 'react';
import axios from 'axios';

interface CreateUserProps {}
interface CreateUserState {
  requestedUsername: string;
  username: string;
  token: string;
}

export class CreateUser extends Component<CreateUserProps, CreateUserState> {
  constructor(props: CreateUserProps) {
    super(props);
    this.state = {
      requestedUsername: '',
      username: '',
      token: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  createUser() {
    axios
      .get(`https://api.spacetraders.io/users/${this.state.requestedUsername}`)
      .then((response) => {
        if (
          response.data.status ===
          'spacetraders is currently online and available to play'
        ) {
          this.setState({});
        }
      });
  }

  handleChange(event: any) {
    this.setState({
      requestedUsername: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <input
          className="mr-2 text-black"
          onChange={this.handleChange}
          value={this.state.requestedUsername}
        />
        <button
          onClick={this.createUser}
          className="bg-blue-500 border border-white px-2 rounded-lg"
        >
          Create a new character
        </button>
      </div>
    );
  }
}

export default CreateUser;
