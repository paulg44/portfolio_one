// Test file for Footer

import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("footer renders", () => {
  render(<Footer />);

  expect(screen.getByRole("contentinfo")).toBeInTheDocument();
});
