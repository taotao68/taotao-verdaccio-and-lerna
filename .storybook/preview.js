import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { addDecorator } from "@storybook/react";
import "../packages/components/index.css";
// 配置使用msw插件的代码
import { initialize, mswDecorator } from "msw-storybook-addon";

// Initialize MSW  初始化MSW
initialize();

// Provide the MSW addon decorator globally，提供全局使用MSW的工具插件装饰器
export const decorators = [mswDecorator];

// 需要将queryclient  初始化实例,并且配置，主要是配置缓存的时间，
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
    },
  },
});
// 作用是在全局给每一个stories生效
addDecorator((stories) => (
  // 我们的provider会应用到我们的每一个stories上
  <QueryClientProvider client={queryClient}>
    {stories()}
  </QueryClientProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    classTarget: "body",
    stylePreview: true,
  },
};
