import React from "react";
import { render, screen } from "@testing-library/react";
import LandingPage from "~components/LandingPage";

describe("LandingPage", () => {
  it("should render correctly", () => {
    render(<LandingPage />);
    expect(
      screen.getByText(/👋 Welcome to the donation box/i)
    ).toBeInTheDocument();
  });
});
