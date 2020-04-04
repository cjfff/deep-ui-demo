# deep-ui 按需加载 DEMO

## start

```shell
git clone https://github.com/cjfff/deep-ui-demo.git

cd deep-ui-demo && yarn && yarn serve
```

## 配置

### babel-plugin-import 设置

这里按需加载使用的是 `antd` 的 [`babel-plugin-import`](https://github.com/ant-design/babel-plugin-import)

为什么里面出现了 `element-ui` 与 `deep-ui` 呢？

`deep-ui` 主要是给团队用来进行二次开发的或者封装业务组件的，所以通常是做高阶组件，难免会依赖一些基础框架。

这时候是没必要为了一个 `button`（举个栗子🌰） 引入整个组件库的。

这里贴出项目的 `.babelrc` 配置
```json
{
    "presets": [
        "@babel/preset-env"
    ],
    "plugins": [
        [
            "import",
            {
                "libraryName": "element-ui",
                // 组件库 css 地址
                "styleLibraryDirectory": "lib/theme-chalk"
            },
            "element-ui"
        ],
        [
            "import",
            {
                "libraryName": "deep-ui",
                // css 代码的地址
                "styleLibraryDirectory": "lib/theme-chalk",
                // 组件库代码的地址: lib
                "libraryDirectory": "src/components" 
            },
            "deep-ui"
        ]
    ]
}
```


### vue.config.js 配置

```js
configureWebpack: config => {
    config.resolve.extensions = ['.js', '.vue', '.json', '.css']
}
```


## 注意⚠️

按需加载与全部引入是无法