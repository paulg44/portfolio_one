// Test file for contact form

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactForm from "./Form";
import nock from "nock";

test("form submits", async () => {
  render(<ContactForm />);

  //   const nameInput = screen.getByRole("textbox", { name: "Name" });
  //   const emailInput = screen.getByRole("textbox", { name: "Email" });
  //   const phoneInput = screen.getByRole("spinbutton", { name: "Phone" });
  //   const textInput = screen.getByRole("textbox", {
  //     name: "Anything to add...",
  //   });

  //   fireEvent.change(nameInput, { target: { value: "Paul Garton" } });
  //   fireEvent.change(emailInput, { target: { value: "pg@test.com" } });
  //   fireEvent.change(phoneInput, { target: { value: "07806602234" } });
  //   fireEvent.change(textInput, { target: { value: "Test form submit" } });
  // });

  // nock("http://localhost/contact").post("/contact").reply(200, { success: true });

  // const submitBtn = screen.getByTestId("submitBtn");
  // fireEvent.click(submitBtn);

  // await waitFor(() => {
  //   expect(window.location.href).not.toBe("http://localhost/contact");
});
