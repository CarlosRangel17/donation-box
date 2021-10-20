import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "~components/Layout";

describe("Layout", () => {
  it("renders header", () => {
    render(<Layout />);
    screen.getByTestId(/header/i);
  });

  it("renders footer", () => {
    render(<Layout />);
    screen.getByTestId(/footer/i);
  });

  it("renders content", () => {
    render(
      <Layout
        title="test title"
        description="test description"
        url="test url"
        ogImage="test og image"
      >
        <div>Test Content</div>
      </Layout>
    );
    screen.getByText(/Test Content/i);
  });
});
