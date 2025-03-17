import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../src/App";

/**
 * Test suite pour le composant App
 */
describe("App Component", () => {
  test("renders without crashing", () => {
    render(<App />);
    const appElement = screen.getByText(/Hello React App/i);
    expect(appElement).toBeInTheDocument();
  });
});
