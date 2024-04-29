import { fireEvent, render } from "@testing-library/react";
import Categories from "../Categories";
import useCategoriesState from "@/states/categories.state";

describe("Categories", () => {
  it("should have render correctly", () => {
    const { getByText } = render(<Categories />);

    const category1 = "Coffee";
    const category2 = "Pasta";

    expect(getByText(category1)).toBeInTheDocument();
    expect(getByText(category2)).toBeInTheDocument();
  });

  it("should have change background color if click categories", () => {
    const { getByTestId } = render(<Categories />);

    const categoryName = "Coffee";

    const categoryCoffeeElement = getByTestId(`background-${categoryName}`);

    fireEvent.click(categoryCoffeeElement);

    expect(getByTestId(`background-${categoryName}`)).toHaveStyle({
      backgroundColor: "#AFD6C9",
    });
  });
});
