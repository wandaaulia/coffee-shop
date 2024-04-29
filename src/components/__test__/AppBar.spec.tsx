import { fireEvent, render } from "@testing-library/react";
import AppBar from "../AppBar";

describe("App Bar", () => {
  it("calls onClick handler when back button is clicked ", () => {
    const backToMenu = jest.fn();
    const { getByTestId } = render(<AppBar onClick={backToMenu} />);
    const appBar = getByTestId("back-btn-appbar");
    fireEvent.click(appBar);
    expect(backToMenu).toHaveBeenCalled();
  });
});
