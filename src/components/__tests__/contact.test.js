import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  beforeAll(() => {
    // console.log("Before All");
  });

  beforeEach(() => {
    // console.log("Before Each");
  });

  afterAll(() => {
    // console.log("After All test cases");
  });

  afterEach(() => {
    // console.log("After Each");
  });
  test("Should load contact us component", () => {
    render(<Contact />);

    const headings = screen.getAllByRole("heading");

    expect(headings).toHaveLength(3);
  });

  test("Should load button inside in component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside Contact Component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Your Name");

    expect(inputName).toBeInTheDocument();
  });

  it("Should load textbox input inside Contact Component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes).toHaveLength(3);
  });
});
