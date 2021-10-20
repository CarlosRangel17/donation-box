import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "~components/Layout/Header";

describe("Header Component", () => {
  it("renders the logo", () => {
    render(<Header />);
    screen.getByText(/Donation Box/i);
  });

  it("renders a link back Home", () => {
    render(<Header />);
    screen.getByTestId(/logo-link/i);
  });
});
