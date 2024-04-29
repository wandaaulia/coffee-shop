import { render, screen } from "@testing-library/react";
import CaptionSlider from "../CaptionSlider";
describe("Caption Slider", () => {
  it("renders with correct value", () => {
    render(<CaptionSlider name="Peach Blossom" price={5000} />);
    expect(screen.getByText("Peach Blossom...")).toBeInTheDocument();
    expect(screen.getByText("5000")).toBeInTheDocument();
  });
});
