<style lang="scss" scoped>
    @import 'src/scss/layout/public.scss';
    .sidebar {
        width: 140px;
        background-color: $ui-sidebar-bgc;
        position: relative;
        .fa-icon {
            margin-right: 5px !important;
            font-size: 14px;
            transform: translateY(2px);
        }

        .is-active {
            color: $ui-logo-bgc;
        }

        .el-menu--dark {
            // 改写组件菜单背景色
            background-color: $ui-sidebar-bgc;
            .el-menu {
                // 二级菜单背景色
                background-color: darken($ui-sidebar-bgc, 8%);
            }
            .el-submenu__title {
                &:hover {
                    background-color: darken($ui-sidebar-bgc, 5%);
                }
            }
        }
    }
</style>
<template>
    <nav class="sidebar overflow-auto ui-scrollbar scroll-dark scroll-hover scroll-no-track">
        <!--sidebar-->
        <el-menu :default-active="active" theme="dark" router unique-opened>

            <el-menu-item index="home">
                <icon name="home"></icon>首页
            </el-menu-item>

            <el-submenu index="控制面板">
                <template slot="title">
                    <icon name="gears"></icon>控制面板
                </template>
                <el-menu-item-group title="消息">
                    <el-menu-item index="mail">站内信</el-menu-item>
                    <!--<el-menu-item index="">发公告</el-menu-item>-->
                </el-menu-item-group>
                <el-menu-item-group title="通用设置">
                    <el-menu-item index="shop_info">商户信息</el-menu-item>
                    <el-menu-item index="admin_config">管理员设置</el-menu-item>
                    <el-menu-item index="user_config">个人信息</el-menu-item>
                    <el-menu-item index="change_password">修改密码</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <el-submenu index="交易订单">
                <template slot="title">
                    <icon name="send"></icon>交易订单
                </template>
                <el-menu-item index="orders">所有订单</el-menu-item>
            </el-submenu>

            <el-submenu index="财务报表">
                <template slot="title">
                    <icon name="bar-chart"></icon>财务报表
                </template>
                <el-menu-item index="my_account">我的账户</el-menu-item>
                <el-submenu index="资金管理">
                    <template slot="title">资金管理</template>
                    <el-menu-item index="member_funds">会员资金</el-menu-item>
                    <el-menu-item index="bill">对账单</el-menu-item>
                    <el-menu-item index="bankcard">银行卡</el-menu-item>
                    <el-menu-item index="payment_password">支付密码</el-menu-item>

                    <!--<el-menu-item index="">业务单</el-menu-item>
                    <el-menu-item index="">自主收款</el-menu-item>
                    <el-menu-item index="">账单规划</el-menu-item>-->
                </el-submenu>
                <el-submenu index="千米币">
                    <template slot="title">千米币</template>
                    <el-menu-item index="recharge">充值</el-menu-item>
                    <!--<el-menu-item index="">提现</el-menu-item>-->
                    <el-menu-item index="recharge_record">充值记录</el-menu-item>
                    <!--<el-menu-item index="">提现记录</el-menu-item>-->
                    <el-menu-item index="meters_details">千米币明细</el-menu-item>
                </el-submenu>
            </el-submenu>

            <el-submenu index="数据统计">
                <template slot="title">
                    <icon name="line-chart"></icon>数据统计
                </template>
                <el-menu-item index="sales_overview">销售总览</el-menu-item>
                <el-menu-item index="order_statistics">订单统计</el-menu-item>
                <el-menu-item index="sales_statistics">销量统计</el-menu-item>
                <el-menu-item index="visitor_analysis">访客分析</el-menu-item>
                <el-menu-item index="systemlog">系统日志</el-menu-item>
            </el-submenu>

            <el-submenu index="店铺授权">
                <template slot="title">
                    <icon name="shopping-bag"></icon>店铺授权
                </template>
                <el-menu-item index="shop_list">店铺列表</el-menu-item>
            </el-submenu>

            <el-submenu index="推客分销">
                <template slot="title">
                    <icon name="share-alt"></icon>推客分销
                </template>
                <el-menu-item index="pusher_overview">推客概况</el-menu-item>
                <el-menu-item index="pusher_order">推客订单</el-menu-item>
                <el-menu-item index="pusher_members">推客会员</el-menu-item>
                <el-menu-item index="billing_records">结算记录</el-menu-item>
                <el-menu-item index="pusher_setting">推客设置</el-menu-item>
            </el-submenu>

            <el-submenu index="内容管理">
                <template slot="title">
                    <icon name="tags"></icon>内容管理
                </template>
                <el-menu-item index="content_list">内容列表</el-menu-item>
                <!--<el-menu-item index="">红人营销</el-menu-item>
                <el-menu-item index="">体验分享</el-menu-item>
                <el-menu-item index="">专业视频</el-menu-item>
                <el-menu-item index="">专业文案</el-menu-item>
                <el-menu-item index="">用户文案</el-menu-item>-->
            </el-submenu>

            <el-submenu index="商品中心">
                <template slot="title">
                    <icon name="coffee"></icon>商品中心
                </template>
                <el-menu-item index="product_list">商品列表</el-menu-item>
            </el-submenu>

            <el-submenu index="会员中心">
                <template slot="title">
                    <icon name="users"></icon>会员中心
                </template>
                <el-menu-item index="member_overview">会员概况</el-menu-item>
                <el-menu-item index="balance_record">余额记录</el-menu-item>
                <el-menu-item index="member_manage">会员管理</el-menu-item>
                <el-menu-item index="member_card">会员卡管理</el-menu-item>
                <el-menu-item index="member_cash">会员提现</el-menu-item>
                <el-menu-item index="member_setting">会员设置</el-menu-item>
            </el-submenu>

            <el-submenu index="营销中心">
                <template slot="title">
                    <icon name="flag"></icon>营销中心
                </template>
                <el-menu-item index="marketing_center">所有活动</el-menu-item>
                <el-submenu index="满x促销">
                    <template slot="title">满x促销</template>
                    <el-menu-item index="manyou">满邮</el-menu-item>
                    <el-menu-item index="manjian">满减</el-menu-item>
                    <el-menu-item index="manzhe">满折</el-menu-item>
                    <el-menu-item index="manjin">满金额赠</el-menu-item>
                    <el-menu-item index="manshu">满数量赠</el-menu-item>
                </el-submenu>
                <el-submenu index="优惠券">
                    <template slot="title">优惠券</template>
                    <el-menu-item index="zq-zhuce">注册赠券</el-menu-item>
                    <el-menu-item index="zq-gouwu">购物赠券</el-menu-item>
                    <el-menu-item index="zq-quanc">全场赠券</el-menu-item>
                    <el-menu-item index="zq-huiy">会员赠券</el-menu-item>
                </el-submenu>
                <el-submenu index="单品/会员">
                    <template slot="title">单品/会员</template>
                    <el-menu-item index="xiangou">限购</el-menu-item>
                </el-submenu>
            </el-submenu>

        </el-menu>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                active: this.$route.path.replace('/', '')
            }
        },
        mounted() {
            // 路由改变时,更新sidebar选中项
            this.$router.afterEach(to => {
                // 取路由path作为当前active
                this.active = to.path.replace('/', '')
            })
        }
    }
</script>