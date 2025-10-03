import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "abc",
        location: "default",
      },
    };
    console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/JyotiBhati-123");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log("userInfo", json);
    console.log(this.props.name + " Child ComponentDidMount");

    this.timer = setInterval(() => {
      console.log("Learning React");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("child Component did update");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("child componentWillUnmount");
  }
  render() {
    console.log("Child Render");
    const { login, location, avatar_url } = this.state.userInfo;
    return (
      <div
        className="userClass"
        style={{ border: "1px solid red", marginTop: "5px" }}
      >
        <h1>
          Count: {this.state.count}
          <button
            onClick={() => {
              // Never update state variable directly
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Increase Count
          </button>
        </h1>
        <h1>
          Count2: {this.state.count2}
          <button
            onClick={() => {
              this.setState({
                count2: this.state.count2 - 1,
              });
            }}
          >
            Decrease count
          </button>
        </h1>
        <h2>Name: {login}</h2>
        <h3>Location: {location}</h3>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;
