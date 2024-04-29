import { render } from "@testing-library/react";
import LoadingCardCatalog from "../LoadingCartCatalog";

describe("Loading Cart Catalog", () => {
  it("should have loading image skeleton", () => {
    const { container } = render(<LoadingCardCatalog />);
    const skeletonImg = container.querySelector(".skeleton-img-card");
    expect(skeletonImg).toBeInTheDocument();
  });

  it("should have loading title skeleton", () => {
    const { container } = render(<LoadingCardCatalog />);
    const skeletonTitle = container.querySelector(".skeleton-title-card");
    expect(skeletonTitle).toBeInTheDocument();
  });

  it("should have loading price skeleton", () => {
    const { container } = render(<LoadingCardCatalog />);
    const skeletonPrice = container.querySelector(".skeleton-price-card");
    expect(skeletonPrice).toBeInTheDocument();
  });

  it("should have loading cart skeleton", () => {
    const { container } = render(<LoadingCardCatalog />);
    const skeletonCart = container.querySelector(".skeleton-cart-card");
    expect(skeletonCart).toBeInTheDocument();
  });
});
