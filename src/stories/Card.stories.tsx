import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from "../components/Card";

export default {
  title: "/Components/Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Card>;
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;
export const Default = Template.bind({});
Default.args = {
  repository: {
    name: "test",
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
    url: "github.com/testuser/test-repo1",
  },
};
