<style lang="scss" scoped>
    .sidebar {
        $sidebar-w: 100px;
        $sidebar-bgc:rgb(54, 54, 54);
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
            >img{
                // width: 80%;
                height: 100%;
            }
        }
        >a {
            display: block;
            text-align: center;
            cursor: pointer;
            color: white;
            padding: 15px 0;
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
            <i class="fa fa-home"></i>控制面板
            <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
                <el-menu-item-group title="消息">
                    <router-link to="/mail">
                        <el-menu-item index="1"><i class="el-icon-message"></i>站内信</el-menu-item>
                    </router-link>
                    <el-menu-item index="2"><i class="el-icon-message"></i>发公告</el-menu-item>
                </el-menu-item-group>
            </el-menu>
        </a>
        <a>
            <i class="fa fa-home"></i>控制面板
        </a>
        <a>
            <i class="fa fa-home"></i>控制面板
        </a>
        <a>
            <i class="fa fa-home"></i>控制面板
        </a>
        <a>
            <i class="fa fa-home"></i>控制面板
        </a>
    </nav>
</template>
