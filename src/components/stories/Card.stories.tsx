import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from "../Card";

export default {
  title: "Components/Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Card>;
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;
export const Default = Template.bind({});
Default.args = {
  repository: {
    name: "github-GQL-API-search",
    description: "This project was made as a coding challenge for MVST. GmbH",
    url: "https://github.com/gharbiamine/github-GQL-API-search",
    primaryLanguage: {
      name: "TypeScript",
    },
    stargazers: {
      totalCount: 0,
    },
    forks: {
      totalCount: 0,
    },
    updatedAt: "2023-03-17T11:44:21Z",
  },
};
