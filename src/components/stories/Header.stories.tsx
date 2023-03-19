import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from "../../layouts/Header";

export default {
  title: "Components/Header",
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Header>;
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;
export const Default = Template.bind({});
Default.args = {
  appName: "Github search",
  githubLink: "https://github.com/gharbiamine",
  projectLink: "https://github.com/gharbiamine/github-gql-api-search",
};
