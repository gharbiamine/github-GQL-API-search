import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { App } from "../../App";

describe("<App />", () => {
  test("App mounts properly", () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeTruthy();
  });
  test("App renders LandingPage", () => {
    render(<App />);
    expect(screen.getByTestId("landing-page")).toBeInTheDocument();
    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(screen.getByTestId("description")).toBeInTheDocument();
  });
});
