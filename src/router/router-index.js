// 常规加载的打包文件
import index from 'components/index'

// 懒加载
// const home = resolve => require(['components/home'], resolve)

// 导出路由配置
export default {
    // 所有path都要以 / 开头,否则嵌套路由会出问题
    path: '/',
    name: 'index',
    component: index,
    children: [
        // 首页
        {
            path: '/home', // ../#/home
            name: 'home',
            component: resolve => require(['components/home'], resolve)
        },

        // 交易
        {
            // 所有订单
            path: '/orders_all',
            name: 'orders_all',
            component: resolve => require(['components/orders/orders_all'], resolve)
        }, {
            // 订单详情
            path: '/orders_details/:index',
            name: 'orders_details',
            component: resolve => require(['components/orders/orders_details'], resolve)
        },

        // 消息
        {
            // 站内信
            path: '/mail',
            name: 'mail',
            component: resolve => require(['components/mail'], resolve)
        },

        // 财务
        {
            // 我的账户
            path: '/my_account',
            name: 'my_account',
            component: resolve => require(['components/finance/my_account'], resolve),
            children: [
                // 会员资金
                {
                    path: '/member_funds',
                    name: 'member_funds',
                    component: resolve => require(['components/finance/member_funds'], resolve),
                }
            ]
        },
    ]
}
