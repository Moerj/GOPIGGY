<style lang="scss" scoped>
    @import 'src/sass/layout/public.scss';
    .topbar {
        $topbar-h: 50px;
        $menn-pos: $topbar-h/2 - 5;
        height: $topbar-h;
        min-height: $topbar-h;
        background: white;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        position: relative;
        padding-left: 140px;
        .logo-box {
            position: absolute;
            // z-index: 1;
            left: 0;
            top: 0;
            width: 140px;
            height: 50px;
            background-color: $ui-logo-bgc;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            >img {
                // width: 80%;
                height: 100%;
            }
        }

        .meun-left {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-left: 15px;
        }
        .meun-right {
            display: flex;
            align-items: center;
            margin-right: 15px;
        }

        .topbar-meun {
            @include flex-center; // height: 100%;
            width: 60px;
            border-right: 1px solid #eee;
            border-left: 1px solid #eee;
            font-size: 20px;
            margin-left: -1px;
            cursor: pointer;
            &:last-of-type{
                border-right: 0;
            }
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
            top: $menn-pos;
            @include box-shadow-deep;
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
            top: $menn-pos;
            right: 0;
            z-index: 100;
            background-color: white;
            @include box-shadow-deep;
            .el-tabs__header {
                padding: 0 30px;
            }
            .el-tab-pane {
                padding: 15px;
                padding-top: 0;
                font-size: 14px;
            }
        }
    }
</style>
<template>
    <div class="topbar">
        <!--logo-->
        <div class="logo-box">
            <img src="../images/logo.png" alt="logo">
        </div>

        <div class="meun-left">
            <el-tooltip content="返回" placement="right" :openDelay="1000">
                <el-button size="small" @click="$router.go(-1)"><i class="el-icon-arrow-left"></i></el-button>
            </el-tooltip>
            <span class="p-l-15 f-color-grey">{{pageTitle}}</span>
        </div>

        <div class="meun-right">
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
            <span class="topbar-meun config"><i class="fa fa-gear"></i></span>
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
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                activeMail: 'msg',
                mailMsgData: null,
                mailNoticeData: null,
                pageTitle: this.$route.meta.title
            };
        },
        methods: {
            mailTabsClick(tab, event) {
                // console.log(tab, event);
            }
        },
        mounted() {
            // 更新顶部页面title

            // 初始进入页面时
            this.pageTitle = this.$route.name

            // 路由改变时
            this.$router.afterEach(to => {
                this.pageTitle = to.name
            })
        }
    };
</script>