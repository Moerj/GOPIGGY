<style lang="scss" scoped>
    @import 'src/scss/layout/public.scss';
    .page-login {
        $color-blue: #20a0ff;
        $color-pink: #fd6a9d;
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
            $border-color-focus: $color-blue;
            display: flex;
            flex-direction: column;
            margin-top: 1px;
            width: 420px;
            text-align: center;
            input {
                margin-top: -1px;
                border: 1px solid $border-color;
                height: 60px;
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
            margin-bottom: 15px;
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
                color: $color-blue;
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

        <button class="back-button flex flex-center" v-show="activeTab!=='login'" @click="activeTab='login'"><icon name="arrow-left"></icon></button>

        <!--登录-->
        <div class="main" v-show="activeTab=='login' ">
            <p class="login-title">登录 GoPiggy</p>
            <div class="input-group">
                <input ref="ID" v-model="ID" type="text" placeholder="GoPiggy ID / 手机号码"></input>
                <input ref="PASS" v-model="PASS" type="password" placeholder="密码"></input>
                <el-checkbox v-model="saveLogged" label="保持我的登录状态" class="m-t-15 m-b-15" style="color: white;"></el-checkbox>
                <div class="line"></div>
                <a class="m-5 text-link" @click="activeTab='forget'">忘记了GoPiggy ID 或 密码?</a>
                <a class="m-5 text-link" @click="activeTab='register'; resetForm('registerForm')">还没有GoPiggy ID? 现在创建一个</a>
                <el-button type="primary" class="button" @click="login()">立即登录</el-button>
            </div>
        </div>

        <div class="main" v-show="activeTab=='register'">
            <p class="m-0 m-b-15">注册 GoPiggy</p>
            <el-form class="input-group" :rules="rules" ref="registerForm" :model="registerData">
                <el-form-item prop="name">
                    <input type="text" placeholder="注册邮箱" v-model="registerData.name">
                </el-form-item>
                <el-form-item prop="pass">
                    <input type="password" placeholder="注册密码" v-model="registerData.pass">
                </el-form-item>
                <el-form-item prop="checkPass">
                    <input type="password" placeholder="确认密码" v-model="registerData.checkPass">
                </el-form-item>

                <input type="text" placeholder="GoPiggy ID">
                <input type="number" placeholder="手机号码 +86">
                <input type="text" placeholder="企业名称">
                <el-button type="primary" class="button" @click="submitForm('registerForm')">立即注册</el-button>
                <a class="text-link" @click="activeTab='login'">已有GoPiggy ID ? 现在立即登录</a>
            </el-form>
        </div>

        <!--忘记密码-->
        <div class="main" v-show="activeTab=='forget'">
            <div class="title">登录遇到问题?</div>
            <p class="m-0">输入您的GoPiggy ID即可开始</p>
            <p class="m-0">您已进入正确页面,可以重设忘记的密码,解锁账户或恢复GoPiggy ID</p>
            <div class="input-group m-t-15">
                <input type="text" placeholder="GoPiggy ID / 手机号码">
                <input type="text" placeholder="输入验证码">
                <p class="flex space-between">
                    <img src="#" alt="">
                    <a class="text-link">刷新验证码</a>
                </p>
                <el-button type="primary" class="button" @click="activeTab='getMail'">继续</el-button>
            </div>
        </div>

        <!--确认邮件-->
        <div class="main" v-show="activeTab=='getMail'">
            <div class="title">一封确认邮件已发送至您的注册邮箱,请在48小时内前往邮箱确认以更换新的密码</div>
            <p class="m-0">没有收到邮件?</p>
            <p class="m-0">请刷新你的收件箱,并检查推广邮箱/垃圾邮箱里是否已收到验证邮件</p>
            <p class="m-0">如几分钟内没有收到邮件,请点击</p>
            <div class="input-group">
                <el-button type="primary" class="button m-b-20" v-click-cooling>重新发送验证邮件</el-button>
                <a class="text-link" @click="activeTab='login'">已验证邮件,立即登录</a>
            </div>
        </div>

        <!--未注册-->
        <div class="main" v-show="activeTab=='unregistered'">
            <div class="title">您输入的邮箱未在GoPiggy注册,请返回重置密码页面重新输入</div>
            <div class="m-0">忘记了GoPiggy ID ?</div>
            <div class="m-0">请联系客服人员找回账户</div>
            <div class="input-group">
                <el-button type="primary" class="button">联系客服</el-button>
                <a class="text-link" @click="activeTab='login'">已注册账户,立即登录</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm2.checkPass !== '') {
                    this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                }
            };
            const validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm2.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ID: '',
                PASS: '',
                saveLogged: false,
                activeTab: 'login',
                rules: {
                    name: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 4, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
                    ],
                    pass: [
                      { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                      { validator: validatePass2, trigger: 'blur' }
                    ]
                },
                registerData:{
                    name:'',
                    pass:'',
                    checkPass:''
                }
            }
        },
        methods: {
            login() {
                if (!this.check_ID()) {
                    this.$refs['ID'].focus()
                    return
                }

                if (!this.check_PASS()) {
                    this.$refs['PASS'].focus()
                    return
                }

                // --------------验证通过---------------
                this.$message({
                    message: '登录成功!',
                    type: 'success'
                })

                if (this.saveLogged) {
                    localStorage.isLogged = true //记录登录状态
                }

                //跳转首页
                sessionStorage.isLogged = true
                this.$router.replace({
                    name: '首页'
                })
            },
            check_ID() {
                if (!this.ID) {
                    this.tipErr('请输入登录名')
                    return false
                }
                if (this.ID !== '123') {
                    this.tipErr('账号未注册')
                    return false
                }
                return true
            },
            check_PASS() {
                if (!this.PASS) {
                    this.tipErr('请输入密码')
                    return false
                }
                if (this.PASS !== '123') {
                    this.tipErr('密码不正确')
                    return false
                }
                return true
            },
            tipErr(msg = '验证错误') {
                this.$message({
                    message: msg,
                    type: 'error'
                });
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                    console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        mounted() {
            sessionStorage.removeItem('isLogged')
            localStorage.removeItem('isLogged')
            this.$notify.info({
                title: '测试账号',
                message: '账号:123 密码:123'
            });
        }
    }
</script>