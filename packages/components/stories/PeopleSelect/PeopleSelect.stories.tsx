import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { rest } from "msw";
import PeopleSelect from "./index";
// 定义组件展示在左侧目录上
export default {
  title: "Business/PeopleSelect",
  component: PeopleSelect,
  decorators:[
     (Story)=>(
       <>
       <Story/>
       <ReactQueryDevtools/>
       </>
     )
  ]
} as ComponentMeta<typeof PeopleSelect>;

// 然后定义要展示的模板
const Template: ComponentStory<typeof PeopleSelect> = () => {
  return <PeopleSelect />;
};

export const Default = Template.bind({});

// msw-storybook-addon'  这个插件是可以取到我们在这里的mock配置的
Default.parameters = {
  msw: {
    // 在这个里面定义我们的mock,
    // 就是和nodejs差不多  了用路由的匹配 吧想要的数据返回回去
    handlers: [
      rest.get("/people", (req, res, ctx) => {
        return res(
          ctx.json({
            people: [
              { name: "Wade Cooper", value: 1 },
              { name: "Arlene Mccoy", value: 2 },
              { name: "Devon Webb", value: 3 },
              { name: "Tom Cook", value: 4 },
              { name: "Tanya Fox", value: 5 },
              { name: "Hellen Schmidt", value: 6 },
            ],
          })
        );
      }),
    ],
  },
};
