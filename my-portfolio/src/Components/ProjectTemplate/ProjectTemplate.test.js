// Test file for Project Template

import { render, screen } from "@testing-library/react";
import ProjectTemplate from "./ProjectTemplate";

describe("all project elements render", () => {
  render(<ProjectTemplate />);

  test("project title renders", () => {
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
