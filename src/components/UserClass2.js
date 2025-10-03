import React from "react";

class UserClass2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
    console.log("Child2 Constructor");
  }

  componentDidMount() {
    console.log("Child2 component Did Mount");
  }
  render() {
    console.log("Child2 Render");
    const { name } = this.props;
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
        <h2>Name: {name}(Class)</h2>
        <h3>Location: {this.props.location}</h3>
      </div>
    );
  }
}

export default UserClass2;
