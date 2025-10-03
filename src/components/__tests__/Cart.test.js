import { act, fireEvent } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
jest.mock("slick-carousel/slick/slick.css", () => ({}));
jest.mock("slick-carousel/slick/slick-theme.css", () => ({}));
import MOCK_MENU_DATA from "../__tests__/mocks/mockResMenuData.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import Cart from "../Cart";

beforeAll(() => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      };
    };
});

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_MENU_DATA),
  })
);

it("Should Load Restaurant Menu component", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <RestaurantMenu />
          <Header />
          <Cart />
        </BrowserRouter>
      </Provider>
    );
  });

  const menuItems = screen.getByText("Recommended (20)");
  fireEvent.click(menuItems);
  expect(menuItems).toBeInTheDocument();

  const items = screen.getAllByTestId("foodItems");
  expect(items.length).toBe(20);

  const AddBtn = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(AddBtn[0]);

  const cartInheader = screen.getByText("Cart-1");
  expect(cartInheader).toBeInTheDocument();

  const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCartBtn);

  expect(screen.getByText("Cart-0")).toBeInTheDocument();
});
