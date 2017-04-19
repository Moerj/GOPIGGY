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
    children: [{
            meta: {
                title: '首页'
            },
            path: '/home', // ../#/home
            name: 'home',
            component: resolve => require(['components/home'], resolve)
        },

        // 控制面板
        {
            meta: {
                title: '站内信'
            },
            path: '/mail',
            name: 'mail',
            component: resolve => require(['components/mail'], resolve)
        },

        // 交易
        {
            meta: {
                title: '所有订单'
            },
            path: '/orders_all',
            name: 'orders_all',
            component: resolve => require(['components/orders/orders_all'], resolve)
        }, {
            meta: {
                title: '订单详情'
            },
            path: '/orders_details/:index',
            name: 'orders_details',
            component: resolve => require(['components/orders/orders_details'], resolve)
        },

        // 财务
        {
            path: '/my_account',
            name: 'my_account',
            component: resolve => require(['components/finance/my_account'], resolve),
            children: [{
                    meta: {
                        title: '我的账户'
                    },
                    path: '/my_account_tag',
                    name: 'my_account_tag',
                    component: resolve => require(['components/finance/my_account_tag'], resolve),
                },
                {
                    meta: {
                        title: '会员资金'
                    },
                    path: '/my_account_funds',
                    name: 'my_account_funds',
                    component: resolve => require(['components/finance/my_account_funds'], resolve),
                },
            ]
        },
        {
            meta: {
                title: '对账单'
            },
            path: '/bill',
            name: 'bill',
            component: resolve => require(['components/finance/bill'], resolve),
        },

        {
            meta: {
                title: '千米币明细'
            },
            path: '/meters_details',
            name: 'meters_details',
            component: resolve => require(['components/finance/meters_details'], resolve),
        },
        {
            meta: {
                title: '千米币充值记录'
            },
            path: '/meters_charge_history',
            name: 'meters_charge_history',
            component: resolve => require(['components/finance/meters_charge_history'], resolve),
        },
        {
            meta: {
                title: '千米币充值'
            },
            path: '/meters_charge',
            name: 'meters_charge',
            component: resolve => require(['components/finance/meters_charge'], resolve),
        },
        {
            meta: {
                title: '银行卡'
            },
            path: '/bank_cards',
            name: 'bank_cards',
            component: resolve => require(['components/finance/bank_cards'], resolve),
        },
        {
            meta: {
                title: '支付密码'
            },
            path: '/payment_password',
            name: 'payment_password',
            component: resolve => require(['components/finance/payment_password'], resolve),
        },

        // 统计
        {
            meta: {
                title: '销售总览'
            },
            path: '/statistics_all',
            name: 'statistics_all',
            component: resolve => require(['components/statistics/statistics_all'], resolve),
        },
        {
            meta: {
                title: '订单统计'
            },
            path: '/statistics_order',
            name: 'statistics_order',
            component: resolve => require(['components/statistics/statistics_order'], resolve),
        },
        {
            meta: {
                title: '销量统计'
            },
            path: '/statistics_sales',
            name: 'statistics_sales',
            component: resolve => require(['components/statistics/statistics_sales'], resolve),
        },
        {
            meta: {
                title: '访客分析'
            },
            path: '/statistics_visitor_analysis',
            name: 'statistics_visitor_analysis',
            component: resolve => require(['components/statistics/statistics_visitor_analysis'], resolve),
        },
        {
            meta: {
                title: '系统日志'
            },
            path: '/statistics_system_logs',
            name: 'statistics_system_logs',
            component: resolve => require(['components/statistics/statistics_system_logs'], resolve),
        },
    ]
}