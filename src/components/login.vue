<style lang="scss" scoped>
    @import 'src/sass/layout/public.scss';
    .page-login {
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
        .form-group {
            $radius: 10px;
            $border-color: #555;
            $border-color-focus: #fd6a9d;
            display: flex;
            flex-direction: column;
            margin-top: 1px;
            width: 100%;
            >* {
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
    }
</style>
<template>
    <div class="page-login flex flex-center">
        <div class="flex flex-center column" style="width:420px">
            <img src="~src/images/login-logo.png" width="259">
            <p class="login-title">登录 GoPiggy</p>
            <div class="form-group">
                <input ref="ID" v-model="ID" type="text" placeholder="GoPiggy ID / 手机号码"></input>
                <input ref="PASS" v-model="PASS" type="password" placeholder="密码"></input>
            </div>
            <el-checkbox v-model="saveLogged" label="保持我的登录状态" class="m-t-15 m-b-15" style="color: white;"></el-checkbox>
            <div class="line"></div>
            <a class="m-5">忘记了GoPiggy ID 或 密码?</a>
            <a class="m-5">还没有GoPiggy ID? 现在创建一个</a>
            <el-button type="primary" class="button" @click="login()">立即登录</el-button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                ID: '',
                PASS: '',
                saveLogged: false
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