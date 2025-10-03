import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../__tests__/mocks/mockRestaurantListData.json";
import { act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});
it("Should render Search functionality in Body Component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const resCardBeforeClick = screen.getAllByTestId("restaurantCards");
  expect(resCardBeforeClick.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchFilter");

  fireEvent.change(searchInput, { target: { value: "Burger" } });
  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("restaurantCards");

  expect(cards.length).toBe(1);
});

it("Should render top rated reastaurant from restaurant card", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const restaurantBeforeFilter = screen.getAllByTestId("restaurantCards");
  expect(restaurantBeforeFilter.length).toBe(20);

  const topRatedRes = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedRes);

  const cardsAfterClick = screen.getAllByTestId("restaurantCards");

  expect(cardsAfterClick).toHaveLength(3);
});
