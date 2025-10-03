import RestaurantCard, { PromotedRestaurants } from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "./mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

it("Should render RestaurantCards component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Olio - The Wood Fired Pizzeria");
  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCards component with Promoted Label if rating > 4.5", () => {
  const PromotedCard = PromotedRestaurants(RestaurantCard);
  render(<PromotedCard resData={MOCK_DATA} />);

  const promoted = screen.getByText("Promoted");
  expect(promoted).toBeInTheDocument();
});
