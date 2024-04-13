// Test file for Projects Page

import { render, screen } from "@testing-library/react";
import Projects from "./Projects";

test("project renders", () => {
  render(<Projects />);

  expect(
    screen.getByRole("heading", { name: "My Projects" })
  ).toBeInTheDocument();
});
