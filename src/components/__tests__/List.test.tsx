import React from "react";
import { render } from "@testing-library/react";
import { RepositoryNodeModel } from "../../models/RepositoryNodeModel";
import { List } from "../List";

const mockData: RepositoryNodeModel[] = [
  {
    name: "test-repo-1",
    description: "Test repository 1",
    url: "https://github.com/test/test-repo-1",
    updatedAt: "2022-01-01T00:00:00Z",
    stargazers: {
      totalCount: 1,
    },
    forks: {
      totalCount: 0,
    },
    primaryLanguage: {
      name: "Prolog",
    },
  },
  {
    name: "test-repo-2",
    description: "Test repository 2",
    url: "https://github.com/test/test-repo-2",
    updatedAt: "2022-02-01T00:00:00Z",
    stargazers: {
      totalCount: 20,
    },
    forks: {
      totalCount: 10,
    },
    primaryLanguage: {
      name: "TypeScript",
    },
  },
];

describe("List component", () => {
  test("renders the correct number of cards", () => {
    const { getAllByTestId } = render(<List repositoryList={mockData} />);
    const cards = getAllByTestId("card");
    expect(cards.length).toBe(mockData.length);
  });
});
