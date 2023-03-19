import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "../../layouts/Header";

describe("<Header />", () => {
  test("App renders LandingPage", () => {
    const args = {
      appName: "Github search",
      githubLink: "https://github.com/gharbiamine",
      projectLink: "https://github.com/gharbiamine/github-gql-api-search",
    };
    render(
      <Header
        appName={args.appName}
        githubLink={args.githubLink}
        projectLink={args.projectLink}
      />
    );
    const appName = screen.getByText(args.appName);
    expect(appName).toBeInTheDocument();
  });
});
