import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Profile } from "../Profile";

export default {
  title: "Components/Profile",
  component: Profile,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Profile>;
const Template: ComponentStory<typeof Profile> = (args) => (
  <Profile {...args} />
);
export const Default = Template.bind({});
Default.args = {
  user: {
    login: "gharbiamine",
    email: "gharbiamine5674@gmail.com",
    avatarUrl: "https://avatars.githubusercontent.com/u/55553380?v=4",
    bio: "I'm a software engineer",
    url: "https://github.com/gharbiamine",
    following: {
      totalCount: 6,
    },
    followers: {
      totalCount: 2,
    },
    repositories: { nodes: [] },
  },
};
