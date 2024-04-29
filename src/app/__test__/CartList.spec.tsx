import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CartList from "../CartList/page";
import useShoppingCart from "@/states/cart.state";
import ButtonOverlay from "@/components/ButtonOverlay";

jest.mock("next/navigation");

describe("Cart List Page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("cart list is empty when there is no item in cart", () => {
    const { getByText } = render(<CartList />);
    const emptyCart = getByText("Your Cart is empty");
    expect(emptyCart).toBeInTheDocument();
  });

  it("render correctly ", () => {
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

    render(<CartList />);
    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
  });

  it("calls remove item handler when remove icon is clicked", async () => {
    const mock = jest.fn();
    const removeMock = jest.fn();

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

    const { getByTestId } = render(<CartList />);
    getByTestId("remove-item-cart").onclick = removeMock;
    fireEvent.click(getByTestId("remove-item-cart"));

    await waitFor(async () => {
      expect(screen.getByText("Delete this item ?")).toBeInTheDocument();
    });

    expect(screen.getByText("Delete")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Delete"));

    await waitFor(() => {
      expect(
        screen.getByText("Successfully remove from cart")
      ).toBeInTheDocument();
    });
  });

  it("add and remove cart when add icon is clicked", () => {
    const addToCart = jest.fn();
    const removeCart = jest.fn();
    const addOneCart = jest.fn();

    const product = {
      id: "2",
      name: "Early Grey Tea",
      prices: 2,
      image: "/image/peach.jpg",
      quantity: 1,
    };

    const { getByText } = render(<ButtonOverlay product={product} />);
    getByText("Add to Cart").click = addToCart;
    fireEvent.click(getByText("Add to Cart"));
    expect(getByText("Successfully added to cart")).toBeInTheDocument();

    const { getByTestId } = render(<CartList />);
    getByTestId("remove-one-cart").click = removeCart;
    getByTestId("add-one-cart").click = addOneCart;
    fireEvent.click(getByTestId("add-one-cart"));
    expect(getByTestId("quantity-one-cart")).toHaveTextContent("2");
    fireEvent.click(getByTestId("remove-one-cart"));
    expect(getByTestId("quantity-one-cart")).toHaveTextContent("1");
  });
});
