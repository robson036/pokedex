import { render } from "@testing-library/react";
import App from "../src/App";

test("sum", () => {
  const { getByText } = render(<App />);
  expect(getByText("Hello World")).toBeInTheDocument();
});
