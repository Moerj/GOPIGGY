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
            font-size: 14px;
            // color: rgb(255, 208, 0);
        }

        .is-active{
            color: $logo-bgc;
        }
        
        // 改写组件菜单背景色
        .el-menu--dark{
            background-color: $sidebar-bgc;
            .el-menu{
                // 二级菜单背景色
                background-color: darken($sidebar-bgc, 8%);
            }
            .el-submenu__title{
                &:hover{
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
                    <el-menu-item index="">发公告</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <el-submenu index="orders">
                <template slot="title"><i class="fa fa-shopping-bag"></i>交易订单</template>
                <el-menu-item-group title="交易">
                    <el-menu-item index="orders_all">所有订单</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <el-submenu index="finance">
                <template slot="title"><i class="fa fa-bar-chart"></i>财务报表</template>
                <el-menu-item-group title="财务">
                    <el-menu-item index="my_account">我的账户</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

        </el-menu>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                active: this.$router.history.current.name
            }
        },
    }

</script>
