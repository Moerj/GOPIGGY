import index from 'components/index'

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

        // 控制面板
        {
            path: '/mail',
            name: '站内信',
            component: resolve => require(['components/控制面板/站内信'], resolve)
        },
        {
            path: '/shop_info',
            name: '商户信息',
            component: resolve => require(['components/控制面板/商户信息'], resolve),
        },
        {
            path: '/admin_config',
            name: '管理员设置',
            component: resolve => require(['components/控制面板/管理员设置'], resolve),
        },
        {
            path: '/user_config',
            name: '个人信息',
            component: resolve => require(['components/控制面板/个人信息'], resolve),
        },
        {
            path: '/change_password',
            name: '修改密码',
            component: resolve => require(['components/控制面板/修改密码'], resolve),
        },

        // 交易订单
        {
            path: '/orders',
            name: '所有订单',
            component: resolve => require(['components/交易订单/所有订单'], resolve)
        }, {
            path: '/orders_details',
            name: '订单详情',
            component: resolve => require(['components/交易订单/订单详情'], resolve)
        },

        // 财务报表
        {
            path: '/my_account_home',
            name: '我的账户-首页',
            component: resolve => require(['components/财务报表/我的账户-首页'], resolve),
            children: [{
                    path: '/my_account',
                    name: '我的账户',
                    component: resolve => require(['components/财务报表/我的账户'], resolve),
                },
                {
                    path: '/member_funds',
                    name: '会员资金',
                    component: resolve => require(['components/财务报表/会员资金'], resolve),
                },
            ]
        },
        {
            path: '/bill',
            name: '对账单',
            component: resolve => require(['components/财务报表/对账单'], resolve),
        },
        {
            path: '/bankcard',
            name: '银行卡',
            component: resolve => require(['components/财务报表/银行卡'], resolve),
        },
        {
            path: '/payment_password',
            name: '支付密码',
            component: resolve => require(['components/财务报表/支付密码'], resolve),
        },
        {
            path: '/meters_details',
            name: '千米币明细',
            component: resolve => require(['components/财务报表/千米币明细'], resolve),
        },
        {
            path: '/recharge_record',
            name: '充值记录',
            component: resolve => require(['components/财务报表/充值记录'], resolve),
        },
        {
            path: '/recharge',
            name: '充值',
            component: resolve => require(['components/财务报表/充值'], resolve),
        },


        // 数据统计
        {
            path: '/sales_overview',
            name: '销售总览',
            component: resolve => require(['components/数据统计/销售总览'], resolve),
        },
        {
            path: '/order_statistics',
            name: '订单统计',
            component: resolve => require(['components/数据统计/订单统计'], resolve),
        },
        {
            path: '/sales_statistics',
            name: '销量统计',
            component: resolve => require(['components/数据统计/销量统计'], resolve),
        },
        {
            path: '/visitor_analysis',
            name: '访客分析',
            component: resolve => require(['components/数据统计/访客分析'], resolve),
        },
        {
            path: '/systemlog',
            name: '系统日志',
            component: resolve => require(['components/数据统计/系统日志'], resolve),
        },

        // 店铺授权
        {
            path: '/shop_list',
            name: '店铺列表',
            component: resolve => require(['components/店铺授权/店铺列表'], resolve),
        },

        // 推客分销
        {
            path: '/pusher_overview',
            name: '推客概况',
            component: resolve => require(['components/推客分销/推客概况'], resolve),
        },
        {
            path: '/pusher_order',
            name: '推客订单',
            component: resolve => require(['components/推客分销/推客订单'], resolve),
        },
        {
            path: '/pusher_members',
            name: '推客会员',
            component: resolve => require(['components/推客分销/推客会员'], resolve),
        },
        {
            path: '/billing_records',
            name: '结算记录',
            component: resolve => require(['components/推客分销/结算记录'], resolve),
        },
        {
            path: '/pusher_setting',
            name: '推客设置',
            component: resolve => require(['components/推客分销/推客设置'], resolve),
        },

        // 内容管理
        {
            path: '/content_list',
            name: '内容管理',
            component: resolve => require(['components/内容管理/内容列表'], resolve),
            children:[
                {
                    path: '/content_details',
                    name: '内容详情',
                    component: resolve => require(['components/内容管理/内容详情'], resolve),
                },
            ]
        },
        
        // 商品中心
        {
            path: '/product_list',
            name: '商品列表',
            component: resolve => require(['components/商品中心/商品列表'], resolve),
        },

        // 会员中心
        {
            path: '/member_overview',
            name: '会员概况',
            component: resolve => require(['components/会员中心/会员概况'], resolve),
        },
        {
            path: '/balance_record',
            name: '余额记录',
            component: resolve => require(['components/会员中心/余额记录'], resolve),
        },
        {
            path: '/member_manage',
            name: '会员管理',
            component: resolve => require(['components/会员中心/会员管理'], resolve),
        },
        {
            path: '/member_card',
            name: '会员卡管理',
            component: resolve => require(['components/会员中心/会员卡管理'], resolve),
        },

    ]
}