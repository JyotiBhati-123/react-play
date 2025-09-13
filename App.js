import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement(JS Object) => HTMLElement(render)

// JSX (transpiled before it reaches the JS engine) - Parcel => Babel

// JSX => Babel transpiles it to React.createElement => ReactElement(JS object) => HTMLElement(render)
const Title = () => (
  <h1 className="heading" tabIndex="1">
    Namaste React using JSX 🚀
  </h1>
);

// React Components
// Class Based Component - old
// Functional Component - new
const SideBar2 = function () {
  return <h3>SIdebar</h3>;
};

const SideBar = () => {
  return <div>I am a sidebar</div>;
};

const elem = <span>React Element</span>;
const number = 100;
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <SideBar2 />
    {footer} {number} {90 + 10}
    <h1 className="header">React Functional Component</h1>
  </div>
);

const heading = (
  <div>
    <h1>Namaste react 🚀</h1>
    <HeadingComponent />
    {SideBar()}
  </div>
);

const footer = React.createElement(
  "h2",
  { id: "footer" },
  "this is the footer"
);

const e = React.createElement;

const mainHeading = e("h1", null, "Helllooo");

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(mainHeading);
