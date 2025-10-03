import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import "@testing-library/jest-dom";

it("Should render login button in header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button");

  // const loginButton = screen.getByText("Grocery");
  expect(loginButton).toBeInTheDocument();
});

it("Should render cart in my header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // const cartItems = screen.getByText("Cart-0");
  const cartItems = screen.getByText(/Cart/);
  expect(cartItems).toBeInTheDocument();
});

it("Should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginBtn = screen.getByRole("button", { name: /login/i });
  fireEvent.click(loginBtn);
  expect(loginBtn).toBeInTheDocument();

  const logoutBtn = screen.getByRole("button", { name: /logout/i });
  fireEvent.click(logoutBtn);
  expect(logoutBtn).toBeInTheDocument();
});
