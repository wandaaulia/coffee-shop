import { queryByText, render, waitFor } from "@testing-library/react";
import AppBarMain from "../AppBarMain";

jest.mock("next/navigation");

describe("AppBarMain", () => {
  it("should have render correctly", () => {
    const { getByText } = render(<AppBarMain />);
    const appBar = getByText("Good Morning");
    expect(appBar).toBeInTheDocument();
  });

  it("should not have good morning text, when it is not home", async () => {
    const greeting = "Good Morning";
    const props = "Product Detail";
    const { queryByText } = render(<AppBarMain home={false} name={props} />);
    expect(queryByText(greeting)).not.toBeInTheDocument();
  });

  it("should have correct menu name", async () => {
    const props = "Product Detail";
    const { getByText } = render(<AppBarMain home={false} name={props} />);
    expect(getByText(props)).toBeInTheDocument();
  });
});
