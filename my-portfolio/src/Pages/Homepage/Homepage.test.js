// Test file for Homepage

import { render, screen } from "@testing-library/react";
import Homepage from "./Homepage";
import { MemoryRouter } from "react-router-dom";

test("homepage renders", () => {
  render(
    <MemoryRouter>
      <Homepage />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", { name: "Hello, I'm Paul" })
  ).toBeInTheDocument();
});
