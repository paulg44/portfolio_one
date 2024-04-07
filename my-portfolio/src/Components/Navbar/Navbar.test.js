// Test file for Navbar

import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar.js";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Projects from "../../Pages/Projects/Projects";

describe("navbar tests", () => {
  test("navbar renders", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  test("link to projects", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Navbar />
        <Routes>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </MemoryRouter>
    );

    const projectsLinkBtn = screen.getByRole("link", { name: "Projects" });

    fireEvent.click(projectsLinkBtn);

    const projectsHeader = screen.getByRole("heading", { name: "My Projects" });

    expect(projectsHeader).toBeInTheDocument();
  });
});
