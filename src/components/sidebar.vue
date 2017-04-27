<style lang="scss">
    .sidebar {
        $sidebar-w: 140px;
        $sidebar-bgc: rgb(54, 54, 54);
        $logo-bgc: gold;

        width: $sidebar-w;
        background-color: $sidebar-bgc;
        position: relative;
        .logo-box {
            position: absolute;
            // z-index: 1;
            left: 0;
            top: 0;
            width: $sidebar-w;
            height: 50px;
            transform: translateY(-100%);
            background-color: $logo-bgc;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            >img {
                // width: 80%;
                height: 100%;
            }
        }

        .fa {
            margin-right: 5px !important;
            font-size: 14px; // color: rgb(255, 208, 0);
        }

        .is-active {
            color: $logo-bgc;
        } // 改写组件菜单背景色
        .el-menu--dark {
            background-color: $sidebar-bgc;
            .el-menu {
                // 二级菜单背景色
                background-color: darken($sidebar-bgc, 8%);
            }
            .el-submenu__title {
                &:hover {
                    background-color: darken($sidebar-bgc, 5%);
                }
            }
        }
    }

</style>
<template>
    <nav class="sidebar">
        <!--logo-->
        <div class="logo-box">
            <img src="../images/logo.png" alt="logo">
        </div>

        <!--sidebar-->
        <el-menu :default-active="active" theme="dark" router unique-opened>

            <el-menu-item index="home"><i class="fa fa-home"></i>首页</el-menu-item>

            <el-submenu index="控制面板">
                <template slot="title"><i class="fa fa-gears"></i>控制面板</template>
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
                <template slot="title"><i class="fa fa-shopping-bag"></i>交易订单</template>
                <el-menu-item index="orders">所有订单</el-menu-item>
            </el-submenu>

            <el-submenu index="财务报表">
                <template slot="title"><i class="fa fa-bar-chart"></i>财务报表</template>
                <el-menu-item index="my_account">我的账户</el-menu-item>
                <el-submenu index="">
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
                <template slot="title"><i class="fa fa-line-chart"></i>数据统计</template>
                <el-menu-item index="sales_overview">销售总览</el-menu-item>
                <el-menu-item index="order_statistics">订单统计</el-menu-item>
                <el-menu-item index="sales_statistics">销量统计</el-menu-item>
                <el-menu-item index="visitor_analysis">访客分析</el-menu-item>
                <el-menu-item index="systemlog">系统日志</el-menu-item>
            </el-submenu>

            <el-submenu index="店铺授权">
                <template slot="title"><i class="fa fa-shopping-bag"></i>店铺授权</template>
                <el-menu-item index="shop_list">店铺列表</el-menu-item>
            </el-submenu>

            <el-submenu index="推客分销">
                <template slot="title"><i class="fa fa-shopping-bag"></i>推客分销</template>
                <el-menu-item index="pusher_overview">推客概况</el-menu-item>
                <el-menu-item index="pusher_order">推客订单</el-menu-item>
                <el-menu-item index="pusher_members">推客会员</el-menu-item>
                <el-menu-item index="billing_records">结算记录</el-menu-item>
                <el-menu-item index="pusher_setting">推客设置</el-menu-item>
            </el-submenu>


        </el-menu>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                active: this.$route.path.replace('/','')
            }
        },
        mounted() {
            // 路由改变时,更新sidebar选中项
            this.$router.afterEach(to => {
                // 取路由path作为当前active
                this.active = to.path.replace('/','')
            })
        }
    }

</script>
