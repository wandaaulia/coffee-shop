import { render, screen } from "@testing-library/react";
import ActiveCaptionSlider from "../ActiveCaptionSlider";

describe("Active Caption Slider", () => {
  it("renders with correct value", () => {
    render(
      <ActiveCaptionSlider
        name="Peach Blossom"
        region="Africa"
        price={5000}
        weight={500}
      />
    );
    expect(screen.getByText("Peach Blossom")).toBeInTheDocument();
    expect(screen.getByText("Africa")).toBeInTheDocument();
    expect(screen.getByText(5000)).toBeInTheDocument();
    expect(screen.getByText("500gr")).toBeInTheDocument();
  });
});
