<style lang="scss" scoped>
    @import 'src/sass/layout/public.scss';
    .page-login {
        $color-blue: #20a0ff;
        @mixin hover($bg-color: $color-blue) {
            &:hover {
                background-color: lighten($bg-color, 10%);
            }
        }
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: $ui-logo-bgc;
        color: white;
        .login-title {
            font-size: 25px;
            margin: 10px 0;
        }
        .input-group {
            $radius: 10px;
            $border-color: #555;
            $border-color-focus: #fd6a9d;
            display: flex;
            flex-direction: column;
            margin-top: 1px;
            width: 420px;
            text-align: center;
            >input {
                margin-top: -1px;
                border: 1px solid $border-color;
                height: 70px;
                width: 100%;
                background-color: white;
                text-indent: 15px;
                font-size: 20px;
                outline: none;
                transition: .5s;
                &:first-of-type {
                    border-top-left-radius: $radius;
                    border-top-right-radius: $radius;
                }
                &:last-of-type {
                    border-bottom-left-radius: $radius;
                    border-bottom-right-radius: $radius;
                }
                &:focus {
                    border-color: $border-color-focus;
                    box-shadow: inset 0px 0px 3px $border-color-focus;
                    z-index: 1;
                }
            }
        }
        .line {
            height: 1px;
            background-color: white;
            margin: 5px 0;
            width: 100%;
        }
        .button {
            width: 100%;
            border-radius: 10px;
            font-size: 20px;
            margin-top: 40px;
        }
        .logo {
            width: 259px;
            margin-top: 50px;
        }
        .title {
            width: 100%;
            text-align: center;
            font-size: 20px;
            background-color: $color-blue;
            padding: 10px 0;
            margin: 15px 0;
        }
        .back-button {
            border-radius: 50%;
            width: 50px;
            height: 50px;
            position: absolute;
            left: 20px;
            top: 20px;
            background-color: $color-blue;
            font-size: 22px;
            color: white;
            border: 0;
            cursor: pointer;
            outline: none;
            @include hover();
        }
        .text-link {
            transition: .5s;
            cursor: pointer;
            &:hover {
                color: #fd6a9d;
            }
        }
        .main {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-grow: 1;
        }
    }
</style>
<template>
    <div class="page-login flex column align-center">
        <img src="~src/images/login-logo.png" class="logo">

        <button class="back-button" v-show="activeTab!==0" @click="activeTab = 0"><i class="fa fa-arrow-left"></i></button>

        <!--登录-->
        <div class="main" v-if="activeTab==0">
            <p class="login-title">登录 GoPiggy</p>
            <div class="input-group">
                <input ref="ID" v-model="ID" type="text" placeholder="GoPiggy ID / 手机号码"></input>
                <input ref="PASS" v-model="PASS" type="password" placeholder="密码"></input>
                <el-checkbox v-model="saveLogged" label="保持我的登录状态" class="m-t-15 m-b-15" style="color: white;"></el-checkbox>
                <div class="line"></div>
                <a class="m-5 text-link" @click="activeTab=1">忘记了GoPiggy ID 或 密码?</a>
                <a class="m-5 text-link">还没有GoPiggy ID? 现在创建一个</a>
                <el-button type="primary" class="button" @click="login()">立即登录</el-button>
            </div>
        </div>

        <!--忘记密码-->
        <div class="main" v-if="activeTab==1">
            <div class="title">登录遇到问题?</div>
            <p class="m-0">输入您的GoPiggy ID即可开始</p>
            <p class="m-0">您已进入正确页面,可以重设忘记的密码,解锁账户或恢复GoPiggy ID</p>
            <div class="input-group m-t-15">
                <input type="text" placeholder="GoPiggy ID / 手机号码">
                <input type="text" placeholder="输入验证码">
                <p class="flex space-between">
                    <img src="#" alt="">
                    <a class="ui-cursor-pointer">刷新验证码</a>
                </p>
                <el-button type="primary" class="button">继续</el-button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                ID: '',
                PASS: '',
                saveLogged: false,
                activeTab: 0
            }
        },
        methods: {
            login() {
                if (!this.ID) {
                    this.$message({
                        message: '请输入登录名',
                        type: 'error'
                    });
                    this.$refs['ID'].focus()
                    return
                }

                if (!this.PASS) {
                    this.$message({
                        message: '请输入密码',
                        type: 'error'
                    });
                    this.$refs['PASS'].focus()
                    return
                }

                if (this.ID && this.PASS) {
                    this.$message({
                        message: '登录成功',
                        type: 'success'
                    });
                    sessionStorage.isLogged = true
                    this.$router.push('home')
                }
            }
        }
    }
</script>