import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Login from "./Login";

describe("<Login />", () => {
  test("renders email input", () => {
    render(<Login />);

    const emailInput = screen.getByTestId("email-input");
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute("type", "email");
  });

  test("pass valid email to test email input field", () => {
    render(<Login />);

    const emailInput = screen.getByTestId("email-input");
    userEvent.type(emailInput, "test@mail.com");

    expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });

  test("pass invalid email to test input value", () => {
    render(<App />);

    const emailInput = screen.getByTestId("email-input");
    userEvent.type(emailInput, "test");

    expect(screen.getByTestId("email-input")).toHaveValue("test");
    expect(screen.queryByTestId("error-msg")).toBeInTheDocument();
    expect(screen.queryByTestId("error-msg").textContent).toEqual(
      "Please enter a valid email."
    );
  });
});
