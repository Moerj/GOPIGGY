// 常规加载的打包文件
import index from 'components/index'

// 懒加载
// const home = resolve => require(['components/home'], resolve)

// 导出路由配置
export default {
    path: '/',
    name: 'index',
    component: index,
    children: [{
        // 首页
        path: 'home', // ../#/home
        name: 'home',
        component: resolve => require(['components/home'], resolve)
    }, {
        // 所有订单
        path: 'orders_all',
        name: 'orders_all',
        component: resolve => require(['components/orders/orders_all'], resolve)
    }, {
        // 订单详情
        path: 'orders_details/:index',
        name: 'orders_details',
        component: resolve => require(['components/orders/orders_details'], resolve)
    }, {
        // 站内信
        path: 'mail',
        name: 'mail',
        component: resolve => require(['components/mail'], resolve)
    }]
}
