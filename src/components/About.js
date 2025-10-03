import React from "react";
import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserClass2 from "./UserClass2";
import UserContext from "../../utils/UserContext";

class About extends Component {
  constructor() {
    super();
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent component Did Mount");
  }
  render() {
    console.log("Parent Render");
    return (
      <>
        {/* <div>
          <h1>About</h1>
          <UserContext.Consumer>
            {({ loggedInUser }) => <h2>{loggedInUser}</h2>}
          </UserContext.Consumer>
          <h3>This is React series</h3>
        </div> */}
        <div className="max-w-3xl mx-auto p-6 text-center">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-gray-700 mb-4">
            Welcome to <span className="font-semibold">Foodie's Paradise</span>{" "}
            – your one-stop destination for delicious meals made with love,
            care, and fresh ingredients.
          </p>
          <p className="text-gray-700 mb-4">
            Our journey started with a simple dream: to bring authentic,
            home-style flavors to everyone who loves good food. From traditional
            recipes passed down through generations to exciting new dishes
            crafted by our chefs, we serve meals that warm both your heart and
            stomach.
          </p>
          <p className="text-gray-700 mb-4">
            At Foodie's Paradise, quality is our top priority. Every dish is
            cooked fresh to order using carefully selected ingredients. Whether
            you’re here for a quick bite, a family meal, or a special
            celebration, we promise a delightful dining experience.
          </p>
          <p className="text-gray-700">
            Thank you for choosing us – we can’t wait to serve you your next
            favorite dish! 🍕🍔🥗
          </p>
        </div>
        {/* <UserClass name={"Jyoti Bhati"} location={"Jodhpur"} /> */}
        {/* <UserClass2 name={"Jiyo"} location={"Pune"} />
        <UserClass name={"Jyoti Bhati"} location={"Jodhpur"} /> */}
      </>
    );
  }
}

export default About;
