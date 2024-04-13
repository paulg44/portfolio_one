// Test file for Contact Page

import { screen, render } from "@testing-library/react";
import Contact from "./Contact";

test("contact page renders", () => {
  render(<Contact />);

  expect(screen.getByTestId("submitBtn")).toBeInTheDocument();
});
