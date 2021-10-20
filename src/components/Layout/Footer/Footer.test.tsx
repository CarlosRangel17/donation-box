import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "~components/Layout/Footer";

describe("Footer Component", () => {
  it("renders the footer text", () => {
    render(<Footer />);
    screen.getByText(/Privacy Policy/i);
  });
});
