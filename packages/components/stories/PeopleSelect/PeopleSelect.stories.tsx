import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import PeopleSelect from "./index";
// 定义组件展示在左侧目录上
export default {
  title: "Business/PeopleSelect",
  component: PeopleSelect,
} as ComponentMeta<typeof PeopleSelect>;

// 然后定义要展示的模板
const Template: ComponentStory<typeof PeopleSelect> = () => {
  return <PeopleSelect />;
};

export const Default = Template.bind({});
