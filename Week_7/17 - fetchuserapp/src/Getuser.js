import React from 'react';

class Getuser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      person: null,
    };
  }

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
    console.log(data.results[0]);
  }

  render() {
    if (this.state.loading) {
      return <div>Loading user...</div>;
    }
    if (!this.state.person) {
      return <div>Failed to fetch user data.</div>;
    }
    return (
      <div>
        <h1>{this.state.person.name.title} {this.state.person.name.first} {this.state.person.name.last}</h1>
        <img src={this.state.person.picture.large} alt="User" />
      </div>
    );
  }
}

export default Getuser;