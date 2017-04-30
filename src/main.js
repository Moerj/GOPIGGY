import Vue from 'vue'
import App from './App'

// http请求
import axios from 'axios'
// 挂载axios到vue下,别名叫$http
Vue.prototype.$http  = axios

// 路由插件
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

// fa字体库
// import 'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css'
import 'assets/font-awesome/scss/font-awesome.scss'

// 进度条组件
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 自定义样式
import 'src/sass/layout/base.scss' //快捷样式库
import 'src/sass/layout/ui.scss' //ui样式


// requires and returns all modules that match
function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

// 公共组件
import dropsearch from 'components/global/dropsearch'
import imgupload from 'components/global/imgupload'
Vue.component('ui-dropsearch', dropsearch)
Vue.component('ui-img-upload', imgupload)

// 加载组件、指令、配置
// 参数(模块文件夹路径, 是否包含子目录, 文件匹配的正则)
requireAll(require.context("components/directive", true, /^\.\/.*\.js$/));


// 引入所有路由配置
const routes = requireAll(require.context("./router", true, /^\.\/.*\.js$/));
// 只取default接口部分
for (let i = 0; i < routes.length; i++) {
    routes[i] = routes[i].default
}
// 整合路由
const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    NProgress.start();
    next()
});

router.afterEach(() => {
    NProgress.done();
});


// 创建Vue根实例
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
