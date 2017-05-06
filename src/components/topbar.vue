<style lang="scss" scoped>
    @import 'src/sass/layout/public.scss';
    $topbar-h: 50px;
    $menn-pos: $topbar-h/2 - 5;
    .topbar {
        height: $topbar-h;
        min-height: $topbar-h;
        background: white;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        position: relative;
        padding-left: 140px;
        .logo-box {
            position: absolute; // z-index: 1;
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
            &:last-of-type {
                border-right: 0;
            }
            &.meun {
                font-size: 12px;
                width: 150px;
                position: relative;
                >.fa-icon {
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
            }
        }
        
    }

    .mail-box {
        // width: 270px;
        height: 222px;
    }

    .topm {
        .border-top {
            border-top: $ui-border;
        }
        ul {
            li {
                display: flex;
                justify-content: center;
                padding: 10px 0;
                >a {
                    width: 90px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                    transition: .3s;
                    cursor: pointer;
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
                .fa-icon {
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
</style>
<template>
    <div class="topbar">
        <!--logo-->
        <div class="logo-box">
            <img src="../images/logo.png" alt="logo">
        </div>

        <div class="meun-left">
            <el-tooltip content="返回" placement="right" :openDelay="1000">
                <el-button size="small" @click="$router.go(-1)">
                    <icon name="arrow-left"></icon>
                </el-button>
            </el-tooltip>
            <span class="p-l-15 f-color-grey">{{pageTitle}}</span>
        </div>

        <div class="meun-right">
            <el-popover ref="mail" placement="bottom">
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
            </el-popover>
            <span class="topbar-meun mail" v-popover:mail><icon name="envelope"></icon></span>

            <span class="topbar-meun config"><icon name="gear"></icon></span>

            <el-popover ref="meun" placement="bottom">
                <nav class="topm">
                    <ul>
                        <li class="p-5">
                            <el-button type="primary" size="small">立即充值</el-button>
                        </li>
                        <li class="p-5">
                            <span>余额<b class="money">0</b>元</span>
                        </li>
                        <li class="border-top"><a><icon name="user-o"></icon>账户信息</a></li>
                        <li><a><icon name="address-book-o"></icon>企业认证</a></li>
                        <li><a><icon name="key"></icon>修改密码</a></li>
                        <li><a><icon name="shield"></icon>安全认证</a></li>
                        <li><a @click="feedback.active = true"><icon name="envelope"></icon>联系我们</a></li>
                        <li class="border-top">
                            <a class="config"><icon name="cogs"></icon>系统设置</a>
                        </li>
                        <li class="border-top">
                            <a class="logout" @click="logout()"><icon name="power-off"></icon>退出</a>
                        </li>
                    </ul>
                </nav>
            </el-popover>
            <span class="topbar-meun meun" v-popover:meun><icon name="lastfm-square"></icon>funing meun</span>
        </div>

        <el-dialog title="给我们留言" v-model="feedback.active" size="tiny">
            <el-form>
                <el-form-item label="手机号码">
                    <el-input v-model="feedback.phone" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item label="QQ">
                    <el-input v-model="feedback.qq" placeholder="请输入QQ号"></el-input>
                </el-form-item>
                <el-form-item label="message">
                    <el-input type="textarea" :rows="4" placeholder="请输入留言内容" v-model="feedback.message"> </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="feedback.active = false">取 消</el-button>
                <el-button type="primary" @click="feedback.active = false">提 交</el-button>
            </div>
        </el-dialog>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                activeMail: 'msg',
                mailMsgData: null,
                mailNoticeData: null,
                pageTitle: this.$route.meta.title,
                feedback: {
                    active: false,
                    phone: '',
                    qq: '',
                    message: ''
                },
            };
        },
        methods: {
            mailTabsClick(tab, event) {
                // console.log(tab, event);
            },
            logout() {
                sessionStorage.removeItem('isLogged')
                localStorage.removeItem('isLogged')
                this.$router.push('login')
                this.$message('账户已登出!')
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