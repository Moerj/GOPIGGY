import requireAll from './_requireAll'
import Vue from 'vue'

// 路由插件
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 进度条组件
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


// 引入所有路由配置
const routes = requireAll(require.context("src/router", true, /^\.\/.*\.js$/));
// 只取default接口部分
for (let i = 0; i < routes.length; i++) {
    routes[i] = routes[i].default
}
// 整合路由
const router = new VueRouter({
    routes
})

// 路由切换,开启进度条效果
router.beforeEach((to, from, next) => {
    NProgress.start();
    next()
});
router.afterEach(() => {
    NProgress.done();
});

export default router