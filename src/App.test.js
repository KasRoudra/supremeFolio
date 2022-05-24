import { render, screen } from "@testing-library/react";
import App from "./App";

test("Rendering App Component....", () => {
  render(<App />);
  const linkElement = screen.getByText(/kasroudra/i);
  expect(linkElement).toBeInTheDocument();
});
