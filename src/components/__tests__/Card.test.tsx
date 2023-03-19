import { render, screen } from "@testing-library/react";
import { Card } from "../Card";
import { RepositoryNodeModel } from "../../models/RepositoryNodeModel";
import { getTimeElapsed } from "../../utils/getTimeElapsed";

describe("Card component", () => {
  const repository: RepositoryNodeModel = {
    name: "test-repo",
    url: "https://github.com/test/test-repo",
    description: "This is a test repository",
    updatedAt: "2022-03-18T12:34:56Z",
    stargazers: {
      totalCount: 10,
    },
    forks: {
      totalCount: 5,
    },
    primaryLanguage: {
      name: "Typescript",
    },
  };

  test("renders repository information correctly", () => {
    render(<Card repository={repository} />);
    const name = screen.getByText(repository.name);
    expect(name).toBeInTheDocument();

    const description = screen.getByText(repository.description);
    expect(description).toBeInTheDocument();

    const updatedAt = screen.getByText(getTimeElapsed(repository.updatedAt));
    expect(updatedAt).toBeInTheDocument();

    const language = screen.getByText(repository.primaryLanguage?.name);
    expect(language).toBeInTheDocument();

    const starCount = screen.getByText(repository.stargazers.totalCount);
    expect(starCount).toBeInTheDocument();

    const forkCount = screen.getByText(repository.forks.totalCount);
    expect(forkCount).toBeInTheDocument();
  });
});
