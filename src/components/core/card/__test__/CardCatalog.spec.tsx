import {
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react";
import CardCatalog from "../CardCatalog";
import { useRouter } from "next/navigation";

jest.mock("next/navigation");

describe("Card Catalog", () => {
  it("should have correct name, price and image", () => {
    let props = {
      name: "Peach Blossom",
      price: 5,
      image_url: "/image_peach_blossom.jpg",
      id: "IdCoffee1",
    };

    const { getByText, getByTestId, getByAltText } = render(
      <CardCatalog {...props} />
    );

    expect(getByText("Peach Blossom...")).toBeInTheDocument();
    expect(getByText("$5")).toBeInTheDocument();
    expect(getByTestId("card-catalog-image")).toBeInTheDocument();

    const path = getByAltText("card-image").getAttribute("src");

    if (path) {
      const splitPath = path.split("?url=");
      const exactPath = decodeURIComponent(splitPath[1].split("&")[0]);
      expect(exactPath).toBe(props.image_url);
    }
  });
  it("should have redirect to coffee detail page when image is clicked and price < 12", () => {
    let props = {
      name: "Peach Blossom",
      price: 5,
      image_url: "/images",
      id: "1",
    };

    (useRouter as jest.Mock).mockReturnValue({ push: jest.fn() });

    render(<CardCatalog {...props} />);
    fireEvent.click(screen.getByTestId("card-catalog-image"));
    expect(useRouter().push).toHaveBeenCalledWith("/Detail/Coffee/1");
  });
  it("should have redirect to pasta detail page when image is clicked and price = 12", () => {
    let props = {
      name: "Pasta Cambridge",
      price: 12,
      image_url: "/image_pasta_cambridge.jpg",
      id: "2",
    };

    (useRouter as jest.Mock).mockReturnValue({ push: jest.fn() });

    render(<CardCatalog {...props} />);
    fireEvent.click(screen.getByTestId("card-catalog-image"));
    expect(useRouter().push).toHaveBeenCalledWith("/Detail/Pasta/2");
  });
  it("should have add item to cart", async () => {
    let props = {
      name: "Pasta Cambridge",
      price: 12,
      image_url: "/image",
      id: "2",
    };
    const { getByTestId, getByText } = render(<CardCatalog {...props} />);

    fireEvent.click(getByTestId("add-cart-button"));

    await waitFor(() => {
      expect(getByText("Successfully added to cart")).toBeInTheDocument();
    });
  });
});
