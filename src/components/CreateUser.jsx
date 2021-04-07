const CreateUser = () => {
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
};

export default CreateUser;
