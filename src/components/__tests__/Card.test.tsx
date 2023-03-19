import React from "react";
import { Card } from "../Card";
import { RepositoryNodeModel } from "../../models/RepositoryNodeModel";
import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";

test("Displaying card", () => {
  const repository = {
    name: "test1",
    description: "sample description",
    stargazers: {
      totalCount: 3,
    },
    forks: {
      totalCount: 3,
    },
    primaryLanguage: {
      name: "Typescript",
    },
    updatedAt: "2021-08-01T12:00:00Z",
    url: "https://github.com/testuser/test-repo1",
  };
  render(<Card repository={repository} />);
  const card = screen.getByTestId("card");
  expect(card).toBeDefined();
});
