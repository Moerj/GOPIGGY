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
            z-index: 1;
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

            <el-submenu index="control_panel">
                <template slot="title"><i class="fa fa-gears"></i>控制面板</template>
                <el-menu-item-group title="消息">
                    <el-menu-item index="mail">站内信</el-menu-item>
                    <!--<el-menu-item index="">发公告</el-menu-item>-->
                </el-menu-item-group>
            </el-submenu>

            <el-submenu index="orders">
                <template slot="title"><i class="fa fa-shopping-bag"></i>交易订单</template>
                <el-menu-item index="orders_all">所有订单</el-menu-item>
            </el-submenu>

            <el-submenu index="finance">
                <template slot="title"><i class="fa fa-bar-chart"></i>财务报表</template>
                <el-menu-item index="my_account_tag">我的账户</el-menu-item>
                <el-submenu index="">
                    <template slot="title">资金管理</template>
                    <el-menu-item index="my_account_funds">会员资金</el-menu-item>
                    <el-menu-item index="bill">对账单</el-menu-item>
                    <el-menu-item index="bank_cards">银行卡</el-menu-item>
                    <el-menu-item index="payment_password">支付密码</el-menu-item>

                    <!--<el-menu-item index="">业务单</el-menu-item>
                    <el-menu-item index="">自主收款</el-menu-item>
                    <el-menu-item index="">账单规划</el-menu-item>-->
                </el-submenu>
                <el-submenu index="meters">
                    <template slot="title">千米币</template>
                    <el-menu-item index="meters_charge">充值</el-menu-item>
                    <!--<el-menu-item index="">提现</el-menu-item>-->
                    <el-menu-item index="meters_charge_history">充值记录</el-menu-item>
                    <!--<el-menu-item index="">提现记录</el-menu-item>-->
                    <el-menu-item index="meters_details">千米币明细</el-menu-item>
                </el-submenu>
            </el-submenu>

            <el-submenu index="orders">
                <template slot="title"><i class="fa fa-line-chart"></i>数据统计</template>
                <el-menu-item index="statistics_all">销售总览</el-menu-item>
                <el-menu-item index="statistics_order">订单统计</el-menu-item>
                <el-menu-item index="statistics_sales">销量统计</el-menu-item>
            </el-submenu>


        </el-menu>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                active: this.$route.name
            }
        },
        mounted() {
            // 路由改变时,更新sidebar选中项
            this.$router.afterEach(to => {
                this.active = to.name
            })
        }
    }

</script>
