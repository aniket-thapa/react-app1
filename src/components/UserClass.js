import React from 'react';
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: 'Dummy',
        location: 'Default',
      },
    };
  }
  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/aniket-thapa');
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name } = this.props;

    const { count } = this.state;
    const { name: gitName, location, bio } = this.state.userInfo;
    return (
      <div>
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>

        <h1>GitHub User Info:</h1>
        <h2>Name: {gitName}</h2>
        <h2>Location: {location}</h2>
        <h2>Bio: {bio}</h2>
      </div>
    );
  }
}

export default UserClass;
