// Test file for Navbar

import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar.js";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Projects from "../../Pages/Projects/Projects";
import Contact from "../../Pages/Contact/Contact.js";
import Homepage from "../../Pages/Homepage/Homepage.js";

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

  test("link to contact", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Navbar />
        <Routes>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </MemoryRouter>
    );

    const contactsLinkBtn = screen.getByRole("link", { name: "Contact" });

    fireEvent.click(contactsLinkBtn);

    const contactInput = screen.getByRole("textbox", { name: "Name" });

    expect(contactInput).toBeInTheDocument();
  });

  test("link to home, start on contact page", () => {
    render(
      <MemoryRouter initialEntries={["/contact"]}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
      </MemoryRouter>
    );

    const homeLinkBtn = screen.getByRole("link", { name: "< Home />" });

    fireEvent.click(homeLinkBtn);

    const homeHeader = screen.getByRole("heading", { name: "Hello, I'm Paul" });

    expect(homeHeader).toBeInTheDocument();
  });
});
