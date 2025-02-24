import React from 'react';
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { name } = this.props;

    const { count } = this.state;
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
        <h3>Location: Jammu, J&K</h3>
        <h3>Email Id: aniketthapa.dev@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
