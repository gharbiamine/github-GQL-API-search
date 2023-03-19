import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Profile } from "../components/Profile";

export default {
  title: "Profile",
  component: Profile,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Profile>;
const Template: ComponentStory<typeof Profile> = (args) => (
  <Profile {...args} />
);
