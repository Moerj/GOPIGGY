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
            path: '/home', // ../#/首页
            name: '首页',
            component: resolve => require(['components/首页'], resolve)
        },

        {
            path: '/mail',
            name: '站内信',
            component: resolve => require(['components/站内信'], resolve)
        },

        {
            path: '/orders',
            name: '所有订单',
            component: resolve => require(['components/所有订单'], resolve)
        }, {
            path: '/orders_details',
            name: '订单详情',
            component: resolve => require(['components/订单详情'], resolve)
        },

        {
            path: '/my_account_home',
            name: '我的账户-首页',
            component: resolve => require(['components/我的账户-首页'], resolve),
            children: [{
                    path: '/my_account',
                    name: '我的账户',
                    component: resolve => require(['components/我的账户'], resolve),
                },
                {
                    path: '/member_funds',
                    name: '会员资金',
                    component: resolve => require(['components/会员资金'], resolve),
                },
            ]
        },
        {
            path: '/bill',
            name: '对账单',
            component: resolve => require(['components/对账单'], resolve),
        },

        {
            path: '/meters_details',
            name: '千米币明细',
            component: resolve => require(['components/千米币明细'], resolve),
        },
        {
            path: '/recharge_record',
            name: '充值记录',
            component: resolve => require(['components/充值记录'], resolve),
        },
        {
            path: '/recharge',
            name: '充值',
            component: resolve => require(['components/充值'], resolve),
        },
        {
            path: '/bankcard',
            name: '银行卡',
            component: resolve => require(['components/银行卡'], resolve),
        },
        {
            path: '/payment_password',
            name: '支付密码',
            component: resolve => require(['components/支付密码'], resolve),
        },

        {
            path: '/sales_overview',
            name: '销售总览',
            component: resolve => require(['components/销售总览'], resolve),
        },
        {
            path: '/order_statistics',
            name: '订单统计',
            component: resolve => require(['components/订单统计'], resolve),
        },
        {
            path: '/sales_statistics',
            name: '销量统计',
            component: resolve => require(['components/销量统计'], resolve),
        },
        {
            path: '/visitor_analysis',
            name: '访客分析',
            component: resolve => require(['components/访客分析'], resolve),
        },
        {
            path: '/systemlog',
            name: '系统日志',
            component: resolve => require(['components/系统日志'], resolve),
        },

        {
            path: '/shop_list',
            name: '店铺列表',
            component: resolve => require(['components/店铺列表'], resolve),
        },
        {
            path: '/shop_info',
            name: '商户信息',
            component: resolve => require(['components/商户信息'], resolve),
        },
        {
            path: '/admin_config',
            name: '管理员设置',
            component: resolve => require(['components/管理员设置'], resolve),
        },
    ]
}