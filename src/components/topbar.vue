<style lang="scss">
    @import '../sass/layout/public.scss';
    .topbar {
        $topbar-h: 50px;
        height: $topbar-h;
        background: white;
        border-bottom: 1px solid #eee;
        display: flex;
        flex-direction: row-reverse;
        position: relative;
        .logo-box {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 75px;
        }
        .topbar-meun {
            @include flex-center;
            height: 100%;
            width: 60px;
            border-right: 1px solid #eee;
            border-left: 1px solid #eee;
            font-size: 20px;
            margin-left: -1px;
            cursor: pointer;
            &.meun {
                font-size: 12px;
                width: 150px;
                position: relative;
                >.fa {
                    color: gold;
                    margin-right: 5px;
                    font-size: 22px;
                }
                &:hover {
                    .topm {
                        display: block;
                    }
                }
            }
            &.mail {
                position: relative;
                &:hover {
                    >.mail-box {
                        display: block;
                    }
                }
            }
        }
        .topm {
            display: none;
            width: 100%;
            background-color: white;
            border: $ui-border;
            position: absolute;
            z-index: 100;
            right: 0;
            top: $topbar-h;
            box-shadow: 2px 2px 5px rgba(black, .2);
            .border-top {
                border-top: $ui-border;
            }
            ul {
                li {
                    padding: 10px 0 10px 40px;
                    font-size: 14px;
                    >a {
                        transition: .3s;
                        &:hover {
                            color: deepskyblue;
                        }
                        &.config:hover {
                            color: darkorange;
                        }
                        &.logout:hover {
                            color: firebrick;
                        }
                    }
                    .fa {
                        margin-right: 5px;
                    }
                    .money {
                        color: gold;
                        font-size: 16px;
                        padding: 0 2px;
                    }
                }
            }
        }

        .mail-box {
            display: none;
            width: 270px;
            height: 222px;
            border: $ui-border;
            position: absolute;
            top: $topbar-h;
            right: 0;
            z-index: 100;
            background-color: white;
            .el-tabs__header{
                padding: 0 30px;
            }
            .el-tab-pane{
                padding: 15px;
                padding-top: 0;
                font-size: 14px;
            }
        }
    }

</style>

<template>
    <div class="topbar">
        <router-link tag="div" to="/home" class="logo-box">
            <img src="../images/logo.jpg" alt="logo" width="100%">
        </router-link>
        <span class="topbar-meun meun"><i class="fa fa-lastfm-square"></i>funing meun
            <nav class="topm">
                <ul>
                    <li>
                        <el-button type="primary" size="small">立即充值</el-button>
                    </li>
                    <li>余额<b class="money">0</b>元</li>
                    <li class="border-top"><a><i class="fa fa-user-o"></i>账户信息</a></li>
                    <li><a><i class="fa fa-address-book-o"></i>企业认证</a></li>
                    <li><a><i class="fa fa-key"></i>修改密码</a></li>
                    <li><a><i class="fa fa-shield"></i>安全认证</a></li>
                    <li class="border-top"><a class="config"><i class="fa fa-cogs"></i>系统设置</a></li>
                    <li class="border-top"><a class="logout"><i class="fa fa-power-off"></i>退出</a></li>
                </ul>
            </nav>
        </span>
        <span class="topbar-meun config"><i class="fa fa-gear"></i></span>
        <span class="topbar-meun mail"><i class="fa fa-envelope"></i>
            <div class="mail-box">
                <el-tabs v-model="activeMail" @tab-click="mailTabsClick">
                    <el-tab-pane label="站内信 (0)" name="msg">
                        <p class="text-center f-color-grey" v-if="!mailMsgData">暂无未读消息</p>
                    </el-tab-pane>
                    <el-tab-pane label="系统通知 (0)" name="notice">
                        <p class="text-center f-color-grey" v-if="!mailNoticeData">暂无未读消息</p>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </span>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                activeMail: 'msg',
                mailMsgData: null,
                mailNoticeData: null,
            };
        },
        methods: {
            mailTabsClick(tab, event) {
                // console.log(tab, event);
            }
        }
    };

</script>
