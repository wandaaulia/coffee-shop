import { render } from "@testing-library/react";
import SliderMenu from "../SliderMenu";

describe("Slider Menu", () => {
  const props = {
    id: 1,
    _id: "1",
    image_url: "/image/slider",
    name: "Earl Grey Coffee",
    region: "English",
    price: 5,
    weight: 500,
    description: "Lorem ipsum",
    flavor_profile: ["Vanilla"],
    grind_option: ["Medium"],
    roast_level: 3,
  };

  it("should have active coffee slider", () => {
    const { container } = render(<SliderMenu {...props} />);
    const activeSlider = container.querySelector(".active-caption-slider");
    expect(activeSlider).toBeInTheDocument();
  });

  it("should have coffee slider", () => {
    const { container } = render(<SliderMenu {...props} />);
    const coffeeSlider = container.querySelector(".caption-slider");
    expect(coffeeSlider).toBeInTheDocument();
  });
});
