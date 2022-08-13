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


tailwindcss的学习
1）不用自己去想类名，
2）写上规定的类名，就可以生成样式

原子css，就是
先安装：webapck编译的  使用postcss安装就可以

JIT编译（just-in-time compilation）狭义来说是当某段代码即将第一次被执行时进行编译，因而叫“即时编译”。

monorepo是一种将多项目代码存储在一个仓库里的软件开发策略


也可以把包下面的依赖删除，在引入  也就是添加依赖用lerna   删除用pnpm
命令如下：  pnpm remove @ttao/hooks --filter  @/ttao/components    filter代表是删除哪个子包下面的包，如果不加代表的就是根目录下的
然后再关联上  lerna add @ttao.hooks packages/components

npm和yarn有个概念是：
yarn  add  react-dom@npm:@hot-loader/react-dom   意思是给包起个别名  将@hot-loader/react-dom变为react-dom的包名
别名的场景：1.就是为了方面  2.生产和开发环境安装不同的包的情况下可能会使用  alias  别名

怎么在开发环境和生产环境下安装不同的包呢？
使用webpack配置即可
webapck 中插件plugin 使用可以忽略那些的 webpack.IgnorePlugin({
  resourceRegExp:/@babylonjs\/insepector$/,
})

接下来我们新建一个仓库，我们是git之后才可以push上去的