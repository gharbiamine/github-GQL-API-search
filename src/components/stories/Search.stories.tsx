import { ComponentStory, ComponentMeta } from "@storybook/react";
import { getRepositories } from "../../services/SearchService";
import { Search, SearchEnum } from "../Search";

export default {
  title: "Components/Search",
  component: Search,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Search>;
const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  type: SearchEnum.primary,
  title: "Github search",
  description: "Search for a github user and see their most recent ",
  feature: "respositories",
  button: "Fetch",
  handleSearch: (username: string) => {
    //do something
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: SearchEnum.secondary,
  handleSearch: (repositoryName: string) => {
    //do something
  },
};
