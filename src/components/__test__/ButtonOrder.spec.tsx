import useShoppingCart from "@/states/cart.state";
import { useRouter } from "next/navigation";
import ButtonOrder from "../ButtonOrder";
import { fireEvent, render, waitFor } from "@testing-library/react";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Button Order", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const { getByText } = render(<ButtonOrder />);
    const btnOrder = getByText("Buy Now");
    expect(btnOrder).toBeInTheDocument();
  });

  it("default total price is 0", async () => {
    const defaultValue = "$0.00";
    const { getByText } = render(<ButtonOrder />);
    expect(getByText(defaultValue)).toBeInTheDocument();
  });

  it("calls clearCart when Buy Now is clicked", async () => {
    const mock = jest.fn();

    const { getByTestId } = render(<ButtonOrder />);
    const btnOrder = getByTestId("btn-order");
    btnOrder.onclick = mock;

    fireEvent.click(btnOrder);

    await waitFor(() => {
      setTimeout(() => {
        expect(useShoppingCart().clearCart).toHaveBeenCalled();
      }, 1100);
    });
  });

  it("redirect to Home page", async () => {
    const mock = jest.fn();

    const { getByTestId } = render(<ButtonOrder />);
    const btnOrder = getByTestId("btn-order");
    btnOrder.onclick = mock;

    fireEvent.click(btnOrder);

    (useRouter as jest.Mock).mockReturnValue({ push: jest.fn() });

    await waitFor(() => {
      expect(mock).toHaveBeenCalledTimes(1);

      setTimeout(() => {
        expect(useRouter().push).toHaveBeenCalledWith("/");
      }, 1000);
    });
  });
});
