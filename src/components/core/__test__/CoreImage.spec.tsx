import { fireEvent, render } from "@testing-library/react";
import CoreImage from "../CoreImage";

describe("Core Image", () => {
  it("should have correct path", () => {
    const src = "/image/CoffeeLatte.jpg";

    const { getByAltText } = render(<CoreImage src={src} />);

    const imgPath = getByAltText("card-image").getAttribute("src");

    if (imgPath) {
      const splitPath = imgPath.split("?url=");
      const exactPath = decodeURIComponent(splitPath[1]).split("&")[0];
      expect(exactPath).toBe(src);
    }
  });

  it("should have clicked", () => {
    const src = "/image/CoffeeLatte.jpg";

    const detailCard = jest.fn();

    const { container } = render(<CoreImage src={src} onClick={detailCard} />);
    const btnImage = container.querySelector(".wrap-image")!;
    fireEvent.click(btnImage);
    expect(detailCard).toHaveBeenCalled();
  });
});
