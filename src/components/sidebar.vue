<style lang="scss" scoped>
    .sidebar {
        $sidebar-w: 100px;
        $sidebar-bgc: rgb(54, 54, 54);
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
            background-color: gold;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            >img {
                // width: 80%;
                height: 100%;
            }
        }
        >a {
            display: block;
            cursor: pointer;
            color: white;
            padding: 15px 0;
            text-indent: 5px;
            font-size: 14px;
            &:hover {
                background-color: darken( $sidebar-bgc, 10);
                .twobar,
                .el-menu {
                    display: block;
                }
            }
            .fa {
                margin-right: 5px;
                color: rgb(255, 208, 0);
            }
            .twobar,
            .el-menu {
                text-align: left;
                display: none;
                position: absolute;
                z-index: 100;
                left: $sidebar-w;
                top: 0;
                width: 165px;
                padding: 20px 0 40px;
                box-shadow: 2px 2px 4px rgba(black, .1);
                >a {
                    display: block;
                    padding: 15px 0;
                    text-align: left;
                }
            }
        }
    }

</style>

<template>
    <nav class="sidebar">
        <router-link tag="div" to="/home" class="logo-box">
            <img src="../images/logo.png" alt="logo">
        </router-link>
        <a>
            <i class="fa fa-home"></i>首页
            <el-menu router mode="vertical" default-active="" >
                <el-menu-item-group title="消息">
                    <el-menu-item index="mail"><i class="el-icon-message"></i>站内信</el-menu-item>
                    <el-menu-item index=""><i class="el-icon-message"></i>发公告</el-menu-item>
                </el-menu-item-group>
            </el-menu>
        </a>
        <a>
            <i class="fa fa-home"></i>交易订单
            <el-menu router mode="vertical" default-active="" >
                <el-menu-item-group title="交易">
                    <el-menu-item index="">所有订单</el-menu-item>
                </el-menu-item-group>
            </el-menu>
        </a>
        <a>
            <i class="fa fa-home"></i>财务报表
            <el-menu router default-active="" >
                <el-menu-item index="">我的账户</el-menu-item>
                <el-submenu index="">
                    <template slot="title">会员资金管理</template>
                    <el-menu-item-group title="分组一">
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
            </el-menu>
        </a>
        <a>
            <i class="fa fa-home"></i>数据分析
        </a>
        <a>
            <i class="fa fa-home"></i>营销工具
        </a>
    </nav>
</template>

<script>
    export default {
        data () {
            return {
                routerConfig: true
            }
        }
    }

</script>
