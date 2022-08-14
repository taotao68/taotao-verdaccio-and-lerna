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
lerna publish 发包
会让你选择发包的类型   patch--一般是bug的修复   minor--小版本的迭代   Major--大版本的更新

接下来是组件库的学习使用
一个标准组件库会有如下几个核心部分组成：
1.一个是代码的文档
2.另外一个是我们的playground  可演示区域  开发组件，给同事或者其他人员可以很容易的看到修改的效果
3.生成一个table  可以传入的参数  
上面是对于一个公司来说，开发一个组件库必不可少的步骤

接下来我们使用storybook来开发自己的组件库，上传到私仓，私仓主要是还是抽离出公共的组件或者hooks，跨项目，夸公司使用的；或者开源的项目
安装storybook之前要先安装react-dom 和react的；pnpm add react react-dom -w  （-w表示是安装在根目录下）
因为它会去根目录的package.json文件下，检测判断我们的项目时react项目，还是vue项目,或者是angular项目

npx storybook init  安装对应的storybook包 暂时没有提供pnpm去初始化  
这个npx storybook init 可能会安装初始化出错 出错的原因可能是node的版本问题 我们只能曲线救国  分别单独安装各个需要的包
pnpm add @babel/core@7.18.10 -D -w
pnpm add @storybook/addon-actions@6.5.10 -D -w
pnpm add @storybook/addon-essentials@6.5.10 -D -w
pnpm add @storybook/addon-interactions@6.5.10 -D -w
npm add @storybook/addon-links@6.5.10 -D -w
pnpm add @storybook/builder-webpack4@6.5.10 -D -w
pnpm add @storybook/manager-webpack4@6.5.10 -D -w
pnpm add @storybook/react@6.5.10 -D -w
pnpm add @storybook/testing-library@0.0.13 -D -w
pnpm add babel-loader -D -w
以上就是默认使用npx storybook init 安装的包 以及版本号
还需要在package.json中配置scripts项
  "scripts": {
    "storybook":"start-storybook -p 6006",
    "build-storybook":"build-storybook"
  },

这个时候可以把node_modules删除  再pnpm i初始化依赖
安装好之后把 安装好的package-lock.json和 node_modules全部删除掉，再使用pnpm init（i)初始化生成相应的插件包

初始化后，会生成两个文件夹  .storybook文件夹  里面是storybook的配置 内容的配置以及编译的配置  默认是webpack4编译---后续改为webpack5来编译
主要是利用webpack5中的部分新特性   里面有两个文件  分别是main.cjs  //storybook编译时的配置文件  storybook本身的配置一般是
    另外一个文件是preview.cjs  //控制的是我们的内容展示配置   配置的是一般是我们业务组件的上下文
stories 文件夹
以及package.json文件中配置依赖的更新改变

1.pnpm storybook  启动项目
webpack4启动项目较慢  后续可以升级为webpack5  或者使vite 但是不建议在生产环境中使用，可能会出现不知的bug
2.我们不能把stories文件放在根目录下，需要放到packages/components目录下  需要在main.cjs中修改目录路径，不然报错找不到对应的文件
"stories": [
    "../packages/components/**/*.stories.mdx",
    "../packages/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  上面是基础的linux的文件方式
3.接下来去修改编译的核心，改为webpack5
就是要将里面的两个webpack4的包删除，然后安装webapck5的
pnpm remove @storybook/builder-webpack4 @storybook/manager-webpack4
pnpm add @storybook/builder-webpack5 @storybook/manager-webpack5 -D -w

storybook 默认情况是webpack4，不是5 ，我们要用5的话需要配置一下  在main.cjs中配置一下
"core":{
    "builder":"webpack5"   //要是使用vite的话，，就把webapck5 变为vite ,另外还需要安装对应的vite的包
  }
  这个时候pnpm storybook会报错  发现是package.json中type:"mocule" 需要删除掉;并且还需要将main.cjs和preview.cjs改为main.js和preview.js才可以编译成功
  这个时候发现编译时间确实快了不少  中间默认使用的还是babel  后续可以改为swc

4.还需要安装 @types/react @types/raect-dom ,不然中间会有types类型的报错
安装pnpm add @types/react @types/react-dom -D -w

5.自定义组件文档的生成是  一个组件的描述  必须是多行注释的形式才可以
Button.tsx文件中  的
/**
 *  这是一个按钮组件 注释生成文档
 */
下面就是要导出的组件
export const Button=({参数})=>{}

6.接下来配置swc在webpack中编译
可以使用stroybook中的插件化体系,addons中搜索swc插件
安装pnpm add storybook-addon-swc -D -w
使用这个的话，还需要对应的安装@swc-core   pnpm add @swc/core -D -w  @swc/core 是swc的核心
然后是把插件配置在main.js中
module.exports = {
  addons: [
    'storybook-addon-swc',
  ],
};
7.接下来是配置tailwind  让storybook可以识别我们的tailwindcss
tailwindcss 原子css 大大减小了css的体积，但是会增大了html（SPA）的体积 ，该如何解决呢？
可以使用postcss插件来实现classname的缩写，hash表映射表一一对应，用单字母表示classname名   medium就是这样使用的  一两个字母表示的
生产环境上这样写  大大减少打包的体积，可以把原有的体积减少了60%左右

tailwindcss的使用一般会配合postcss来使用，我们在webapck中配置postcss-loader之后，就可以在postcss中使用tailwindcss了
项目中所有的css  tailwindcss都可以胜任来解决
按照官方安装就好  pnpm add tailwindcss postcss autoprefixer -D -w
落地tailwindcss项目，会有很大的益处：  当我们熟悉了tailwindcss后，不仅可以提升开发速度  还可以大大减少打包后的体积
vscode中安装  tailwindcss的插件  可以提示你的tailwindcss的书写   tailwind css intellisense;如果看文档的话，可以去找命名的规律
只需要记下开头，以及命名规律就可以  grid layout  flex  等布局

在一般的项目中，我们是使用webpack的，使用postcsss安装即可；也是一般和postcss结合使用的，  需要在根目录下新建一个postcss.config.js配置文件
module.exports={
    plugins:{
        tailwindcss:{},
        autoprefixer:{}
    }
}
并且写上如上的代码配置

安装好相应的包之后，需要在控制台执行 npx tailwindcss init  生成相应的tailwind.config.js文件
然后新建postcss.config.js  文件，并配置相应代码
还需要修改tailwind.config.js中的配置  content：  指的是你配置tailwindcss的路径
配置在根目录上，子包中要用的话会往上去找

还需要安装安装storybook中对应的postcss插件
pnpm add @storybook/addon-postcss -D -w
并且在main.js中配置如下的代码  和storybook 官网中的storybook/addon-postcss插件使用配置一样
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },

还需要新建index.css文件，在packages的components文件夹下 ,因为是storybook项目，我们在preview.js中引入即可  
如果是一般的项目只需要在主入口引入即可，index.css中配置如下：
@tailwind base;
@tailwind components;
@tailwind utilities;


然后就是tailwindcss的具体使用了
背景图片的使用一般是两种方式：1.在配置文件theme主体中全局配置  tailwind.config.js中配置如下代码：
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  }
}
这种方式主要是用于整个项目中的多次使用的图片，直接配置在全局中
2.每个地方不一样的话，可以像下面那样写： style={{backgroundImage:'url(../**/*)'}}

主题颜色，字体啥的，背景图片我们都可以在主题上配置的  tailwind.config.js中
宽度啥的可以直接写成 w-[100px]会实时编译的
换行的操作：使用插件classnames来实现换行   pnpm add classnames -w  安装  生成环境下的
在组件中引入 import cn from 'classnames'
下面是使用的方式
 className={cn(
        "bg-primary text-red-300 px-2 w-[100px] h-5",
        "after:content-['']",
        "hover:bg-blue-300"
      )}

husky->lint-satge->eslint->prettier->tailwind  美化代码的调用的一种方法


tailwindcss中暗黑模式的使用：
使用class模式的操作  在tailwind。config.js中加上如下配置
 "darkMode":"class",

下面是storybook中的黑暗模式
在storybook项目中使用暗黑模式，还是需要安装个插件的   pnpm add storybook-dark-mode -D -w
然后再main.js中配置即可使用，官方的配置
module.exports = {
  addons: ['storybook-dark-mode']
};

如果在组件中还想使用暗黑模式的话，就需要在preview.js中配置如下：
 darkMode:{
    classTarget:'body',
    stylePreview:true
  }



老项目的话就不建议使用tailwindcss，收益不大，没有必要；  新项目的收益比较大




storybook是给组件写文档的  ，并且可以有playground  演示区域；
就是直接调用组件的代码直接生成带playground的文档








react项目中使用react.jsx-runtime可以使打包的项目体积更加的小，babel插件shi用  npm update @babel/plugin-transform-react-jsx

swc的学习和了解 


8.如何提升storybook项目的编译速度？
主要是还是配置webpack5的特性进行配置
在main。js中加上如下配置   core下加上 options属性进行配置
core: {
    builder:{
      name:'webpack5',
      options:{
        fsCache:true,
        lazyCompilation:true
      }
    },
  加上上面的配置，启动编译速度快了将近3倍  有30s到8s左右

sb是storybook的缩写

安装插件svgr 会把svg图片当做react组件来使用  在webpack中使用 一般项目直接在webpack.config.js中配置即可，官网中有
 pnpm add @svgr/webpack -D -w
 storybook项目中  在main.js中配置即可webpack的配置
  webpackFinal:(config)=>{
    const fileLoaderRule=config.module.rules.find((rule)=>
      rule.test&&rule.test.test('.svg')
    )
    fileLoaderRule.exclude=/\.svg$/i,
    config.module.rules.push({
        test: /\.svg$/i,
        enforce:'pre',
        loader:require.resolve("@svgr/webpack")
    })
    return config
  }

主题色--调色板  ColorPalette

