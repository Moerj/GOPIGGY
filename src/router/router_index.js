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
            path: '/首页', // ../#/首页
            name: '首页',
            component: resolve => require(['components/首页'], resolve)
        },

        // 控制面板
        {
            meta: {
                title: '站内信'
            },
            path: '/站内信',
            name: '站内信',
            component: resolve => require(['components/站内信'], resolve)
        },

        // 交易
        {
            meta: {
                title: '所有订单'
            },
            path: '/所有订单',
            name: '所有订单',
            component: resolve => require(['components/所有订单'], resolve)
        }, {
            meta: {
                title: '订单详情'
            },
            path: '/订单详情/:index',
            name: '订单详情',
            component: resolve => require(['components/订单详情'], resolve)
        },

        // 财务
        {
            path: '/我的账户-首页',
            name: '我的账户-首页',
            component: resolve => require(['components/我的账户-首页'], resolve),
            children: [{
                    meta: {
                        title: '我的账户'
                    },
                    path: '/我的账户',
                    name: '我的账户',
                    component: resolve => require(['components/我的账户'], resolve),
                },
                {
                    meta: {
                        title: '会员资金'
                    },
                    path: '/会员资金',
                    name: '会员资金',
                    component: resolve => require(['components/会员资金'], resolve),
                },
            ]
        },
        {
            meta: {
                title: '对账单'
            },
            path: '/对账单',
            name: '对账单',
            component: resolve => require(['components/对账单'], resolve),
        },

        {
            meta: {
                title: '千米币明细'
            },
            path: '/千米币明细',
            name: '千米币明细',
            component: resolve => require(['components/千米币明细'], resolve),
        },
        {
            meta: {
                title: '充值记录'
            },
            path: '/充值记录',
            name: '充值记录',
            component: resolve => require(['components/充值记录'], resolve),
        },
        {
            meta: {
                title: '充值'
            },
            path: '/充值',
            name: '充值',
            component: resolve => require(['components/充值'], resolve),
        },
        {
            meta: {
                title: '银行卡'
            },
            path: '/银行卡',
            name: '银行卡',
            component: resolve => require(['components/银行卡'], resolve),
        },
        {
            meta: {
                title: '支付密码'
            },
            path: '/支付密码',
            name: '支付密码',
            component: resolve => require(['components/支付密码'], resolve),
        },

        // 统计
        {
            meta: {
                title: '销售总览'
            },
            path: '/销售总览',
            name: '销售总览',
            component: resolve => require(['components/销售总览'], resolve),
        },
        {
            meta: {
                title: '订单统计'
            },
            path: '/订单统计',
            name: '订单统计',
            component: resolve => require(['components/订单统计'], resolve),
        },
        {
            meta: {
                title: '销量统计'
            },
            path: '/销量统计',
            name: '销量统计',
            component: resolve => require(['components/销量统计'], resolve),
        },
        {
            meta: {
                title: '访客分析'
            },
            path: '/访客分析',
            name: '访客分析',
            component: resolve => require(['components/访客分析'], resolve),
        },
        {
            meta: {
                title: '系统日志'
            },
            path: '/系统日志',
            name: '系统日志',
            component: resolve => require(['components/系统日志'], resolve),
        },

        // 店铺
        {
            meta: {
                title: '店铺列表'
            },
            path: '/店铺列表',
            name: '店铺列表',
            component: resolve => require(['components/店铺列表'], resolve),
        },
        {
            meta: {
                title: '商户信息'
            },
            path: '/商户信息',
            name: '商户信息',
            component: resolve => require(['components/商户信息'], resolve),
        },
    ]
}