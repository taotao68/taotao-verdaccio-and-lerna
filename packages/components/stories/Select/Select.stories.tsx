import React ,{useState}from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Select,{DataType} from "./index";

// 定义组件，在左侧展示组件的目录标题
export default {
  title: "Componenst/Select", //基础的组件放在components
  component: Select,
} as ComponentMeta<typeof Select>;


const basicList:DataType[] = [
    { name: 'options1' ,value:1},
    { name: 'options2' ,value:2}
  ]

// 然后我们要定义模板，基于模板可以根据props来展示好多份
// 组件模板是有一个类型的
const Template: ComponentStory<typeof Select> = (args) => {
    const [selected,setSelected]=useState(basicList[0])
  // 返回默认组件
  return <Select {...args} selected={selected} onChange={(e)=>setSelected(e)}/>;
};
// export出去才可以，不然是找不到我们的实例的
export const Basic = Template.bind({});
// props先给一个空对象
Basic.args = {data:basicList};
