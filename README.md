1.私仓  1.verdaccio
       2.lerga pnpm nx
       3.rush 
2.state  状态管理  三个比较重要的仓库管理库
           1.jotai
            2.zustand
            3.Xstate
3.组件库
  1.storybook
  2.tailwindcss
  3.react18 hooks ts 


阶段二：
1.图形学发展应用
2.babylon.js
3.three.js+大型3D项目 ，性能优化
4.react-three-fiber 射击小游戏（dynamic mesh)
5.webGpu+wasm

npm i -g pnpm 
pnpm init --生成初始化package.json
新建 pnpm-workspace.yaml  文件  在里面进行配置
在新建packages文件夹  里面就是所有的包了

pnpm 与npm yarn的区别
：最大程度的减少包的体积和增快安装包的速度，节约硬盘空间
如果是新项目的话，建议直接抛弃npm  yarn 用pnpm
如果是老项目的话，就尽量不要升级到pnpm啦，项目容易报错，启动不起来；因为依赖可能改变了；

硬连和软连的区别：

lerna 安装 npm i -g lerna



//今天继续私仓
lerna    使用pnpm安装是插件时用  -r/-w分别表示每个或者全局项目
     例如：pnpm add typescript -D -w