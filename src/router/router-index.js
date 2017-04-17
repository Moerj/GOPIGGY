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
                // 卡片展示区域
                {
                    path: '/my_account_tag',
                    name: 'my_account_tag',
                    component: resolve => require(['components/finance/my_account_tag'], resolve),
                },
                // 会员资金
                {
                    path: '/my_account_funds',
                    name: 'my_account_funds',
                    component: resolve => require(['components/finance/my_account_funds'], resolve),
                },
            ]
        },

        // 对账单
        {
            path: '/bill',
            name: 'bill',
            component: resolve => require(['components/finance/bill'], resolve),
        },

        // 千米币明细
        {
            path: '/meters_details',
            name: 'meters_details',
            component: resolve => require(['components/meters/meters_details'], resolve),
        },
        // 千米币充值记录
        {
            path: '/meters_charge_history',
            name: 'meters_charge_history',
            component: resolve => require(['components/meters/meters_charge_history'], resolve),
        },
        // 千米币充值
        {
            path: '/meters_charge',
            name: 'meters_charge',
            component: resolve => require(['components/meters/meters_charge'], resolve),
        },
    ]
}
