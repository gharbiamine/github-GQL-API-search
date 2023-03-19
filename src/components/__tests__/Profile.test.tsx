import React from "react";
import { render, screen } from "@testing-library/react";
import { Profile } from "../Profile";
import { UserModel } from "../../models/UserModel";

describe("Profile", () => {
  const user: UserModel = {
    login: "john",
    email: "john@gmail.com",
    avatarUrl: "https://avatar.com/john.png",
    bio: "Developer",
    url: "https://github.com/john",
    followers: { totalCount: 100 },
    following: { totalCount: 50 },
    repositories: { nodes: [] },
  };

  test("should render the user's profile", () => {
    render(<Profile user={user} />);
    expect(screen.getByText(user.login)).toBeInTheDocument();
    expect(screen.getByText(user.followers.totalCount)).toBeInTheDocument();
    expect(screen.getByText(user.following.totalCount)).toBeInTheDocument();
    expect(screen.getByText(user.bio)).toBeInTheDocument();
    expect(screen.getByText(user.email)).toBeInTheDocument();
  });
});
