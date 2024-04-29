import StringUtil from "../string.util";

describe("function truncatedText", () => {
  it("truncates text if it exceeds 14 characters", () => {
    expect(StringUtil.TruncatedText("Rainforest Rhapsody")).toBe(
      "Rainforest Rha..."
    );
  });
  it("does not truncates text if it does not exceed 14 characters", () => {
    expect(StringUtil.TruncatedText("Wildfire")).toBe("Wildfire");
  });
});
