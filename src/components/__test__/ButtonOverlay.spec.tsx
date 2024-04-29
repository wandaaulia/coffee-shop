import { fireEvent, render } from "@testing-library/react";
import ButtonOverlay from "../ButtonOverlay";

jest.mock("next/navigation");

describe("button overlay", () => {
  it("render correctly", () => {
    const product = {
      id: "1",
      name: "Peach Blossom",
      price: 2,
      image: "/image/peach.jpg",
      quantity: 1,
    };
    const { getByText } = render(<ButtonOverlay product={product} />);
    expect(getByText("Add to Cart")).toBeInTheDocument();
    expect(getByText("Order Now")).toBeInTheDocument();
  });

  it("calls onClick handler when button add to cart is clicked", () => {
    const mock = jest.fn();
    const product = {
      id: "1",
      name: "Peach Blossom",
      price: 2,
      image: "/image/peach.jpg",
      quantity: 1,
    };

    const { getByText } = render(<ButtonOverlay product={product} />);
    getByText("Add to Cart").onclick = mock;
    fireEvent.click(getByText("Add to Cart"));
    expect(mock).toHaveBeenCalled();
    expect(getByText("Successfully added to cart")).toBeInTheDocument();
  });

  it("calls onClick handler when button order now is clicked", () => {
    const mock = jest.fn();
    const product = {
      id: "1",
      name: "Peach Blossom",
      price: 2,
      image: "/image/peach.jpg",
      quantity: 1,
    };

    const { getByText } = render(<ButtonOverlay product={product} />);
    getByText("Order Now").onclick = mock;
    fireEvent.click(getByText("Order Now"));
    expect(mock).toHaveBeenCalled();
    expect(getByText("Successfully added to cart")).toBeInTheDocument();
  });
});
