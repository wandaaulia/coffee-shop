import { Box, Typography } from "@mui/material";
import CoreCard from "../CoreCard";
import { fireEvent, render, screen } from "@testing-library/react";

describe("CoreCard", () => {
  it("should have click card", () => {
    const onClick = jest.fn();

    const { getByTestId } = render(
      <CoreCard onClick={onClick}>
        <Typography> Children </Typography>
      </CoreCard>
    );

    fireEvent.click(getByTestId("core-card"));
    expect(onClick).toHaveBeenCalled();
  });
  it("should have render children", () => {
    const { getByText } = render(
      <CoreCard>
        <Typography> Children </Typography>
      </CoreCard>
    );

    expect(getByText("Children")).toBeInTheDocument();
  });
});
