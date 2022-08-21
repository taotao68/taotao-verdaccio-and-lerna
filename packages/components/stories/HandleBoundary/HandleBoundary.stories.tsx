import { ComponentMeta, Story } from "@storybook/react";
import { UseQueryResult } from "@tanstack/react-query";
import HandleBoundary, { HandleBoundaryProps } from "./index";

export default {
  title: "Components/HandleBoundary",
  component: HandleBoundary,
} as ComponentMeta<typeof HandleBoundary>;

// 创建模板将组件将组件展示出来
const Template: Story<HandleBoundaryProps<{ test: string }, unknown>> = (
  args
) => <HandleBoundary {...args} />;

// 基于模板初始化
export const Successed = Template.bind({});

const code=`const Demo=()=>{}`

Successed.args = {
  query: { isSuccess: true, isLoading: false ,data:{test:'hello'}} as UseQueryResult<{
    test: string;
  }>,
  children:data=><div>{data.test}</div>
};
//如何使用组件，直接就会把代码展示出来,书写的代码展示内容，code中的代码是自己定义的
Successed.parameters={
    docs:{
        source:{code}
    }
}
