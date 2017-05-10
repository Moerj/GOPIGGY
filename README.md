# GOPIGGY

> 基于vue.js的后台管理系统

## 开发与部署
- 安装nodejs 6.x以上的版本
- 终端进入项目目录,输入 npm i , 安装整个项目依赖
- 可以输入以下命令启动或打包项目了
``` bash
# 安装依赖
npm install

# 运行本地开发,访问地址 localhost:8086
npm run dev

# 构建压缩版本用于发布
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 项目依赖
- [vue - 框架](https://cn.vuejs.org/v2)
- [element-UI - 组件库](http://element.eleme.io/1.3/#/zh-CN/component/installation)
- [axios - http模块](http://www.jianshu.com/p/df464b26ae58)
- [vue-awesome - svg图标库](http://fontawesome.dashgame.com/)


## 使用http模块
>讲解如何使用http模块请求后端数据

    项目中已经集成,无需再次安装.其别名为 $http,已绑定到vue对象下
```js
//通过给定的ID来发送请求
$http.get('/user?ID=12345')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (err) {
        console.log(err);
    });

//以上请求也可以通过这种方式来发送
$http.get('/user', {
    params: {
        ID: 12345
    }
})

//发送一个POST请求
$http.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
    })
    .then(function (res) {
        console.log(res);
    })
    .catch(function (err) {
        console.log(err);
    });

```

## 使用图标库
- 图标在官网[font-awesome](http://fontawesome.dashgame.com/)上查看
```html
<icon name="图标名"></icon>

<!-- 完整例子 -->
<!-- 加class="text"让图标与文本对齐,并附带间距 -->
<el-button><icon name="user" class="text"></icon>我是按钮</el-button>
```

## 使用路由
>在 src/router 下创建路由文件,已有的模块追加页面只需在对应路由中添加配置即可.
- router_index.js 整个项目后台的路由
- router_login.js 登录、注册页面的路由
- router_payment.js 支付页面的路由
```js
//例如要在后台新增一个页面,在router_index.js中新增页面的配置:
{
    path: '/newPage',
    name: '新增页面',
    component: resolve => require(['components/新增模块/新增页面'], resolve),
},
```

## 全局基础样式
>src/scss/layout 中的样式文件为全局基础样式
- base.scss 基础样式,可以用于快速布局
- public.scss 基础函数\变量,用于构建其他样式文件
- scrollbar.scss 自定义滚动条样式,已覆盖全局,也可以调用其中样式改变滚动条颜色或显示方式
- ui.scss 布局相关样式,全部以 ui- 开头,例如弹出框的尺寸,标题的大小,输入框的长度等等

## 关于部署路径
>config/index.js中assetsPublicPath调整部署的路径

## 项目结构
>注意,配置文件都不要随便删除,以免导致报错无法运行

    build - webpack构建配置
    config - webpack构建配置
    dist - 运行npm run build后生产的打包文件,发布项目就是它了
    node_modules - npm依赖
    scr - 项目源码
        assets - 存放项目资源,比如第三方插件
        components - 所有vue组件\模块\页面
        config - vue\组件配置
        directive - vue指令
        images - 图片
        router - 路由
        scss - 样式
        App.vue - vue入口文件
        main.js - webpack入口文件

    static - 静态资源目录,存放例如:json,字体等
    .babelrc - 编译文件配置
    .gitignore - git过滤
    index.html - 构建项目的html入口
    package.json - 项目依赖目录