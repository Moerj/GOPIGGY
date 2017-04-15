<style lang="scss" scoped>
    .sidebar{
        $sidebar-w: 75px;
        width: $sidebar-w;
        background-color: rgb(54, 54, 54);
        position: relative;
        >a{
            display: block;
            text-align: center;
            cursor: pointer;
            color: white;
            margin: 10px 0 20px;
            font-size: 14px;
            .fa{
                margin-right: 5px;
                color: rgb(255, 208, 0);
                display: block;
                font-size: 20px;
            }
            .twobar,.el-menu{
                text-align: left;
                display: none;
                position: absolute;
                z-index: 100;
                left: $sidebar-w;
                top: 0;
                width: 165px;
                padding: 20px 0 40px;
                box-shadow: 2px 2px 4px rgba(black, .1);
                >a{
                    display: block;
                    padding: 15px 0;
                    text-align: left;
                }
            }
            &:hover{
                .twobar,.el-menu{
                    display: block;
                }
            }
        }
    }
</style>

<template>
    <nav class="sidebar">
        <a>
            <i class="fa fa-home"></i>
            控制面板
            <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
                <el-menu-item-group title="消息">
                    <router-link to="/mail"><el-menu-item index="1"><i class="el-icon-message"></i>站内信</el-menu-item></router-link>
                    <el-menu-item index="2"><i class="el-icon-message"></i>发公告</el-menu-item>
                </el-menu-item-group>
            </el-menu>
        </a>
        <a>
            <i class="fa fa-home"></i>
            控制面板
        </a>
        <a>
            <i class="fa fa-home"></i>
            控制面板
        </a>
        <a>
            <i class="fa fa-home"></i>
            控制面板
        </a>
        <a>
            <i class="fa fa-home"></i>
            控制面板
        </a>
    </nav>
</template>
