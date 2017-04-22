// 支付密码

<template>
    <div>
        <el-card style="width:500px;">
            <div slot="header" class="clearfix">
                <span>支付密码{{onSetting?'设置':'管理'}}</span>
            </div>
            <p v-if="!onSetting">还未设置支付密码?
                <el-button type="text" @click="onSetting=true">立即设置</el-button>
            </p>
            <div class="p-15" v-else>
                <el-steps :space="200" :active="step" finish-status="success">
                    <el-step title="验证手机号"></el-step>
                    <el-step title="设置支付密码"></el-step>
                    <el-step title="完成"></el-step>
                </el-steps>

                <hr class="dash">

                <el-form :model="form" :rules="rules" ref="form" label-width="100px">

                    <div v-if="step==0">
                        <el-form-item label="已验证手机">
                            <span>{{oldPhone}}</span>
                        </el-form-item>
                        <el-form-item label="验证码" prop="code">
                            <el-input class="ui-input-w" type="text" v-model="form.code" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button v-click-cooling>获取验证码</el-button>
                            <el-button type="primary" @click="next('form')">下一步</el-button>
                        </el-form-item>
                    </div>

                    <div v-if="step==1">
                        <el-form-item label="密码" prop="pass">
                            <el-input type="password" v-model="form.pass" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="checkPass">
                            <el-input type="password" v-model="form.checkPass" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="next('form')">提交</el-button>
                            <el-button @click="$refs['form'].resetFields()">重置</el-button>
                        </el-form-item>
                    </div>
                </el-form>

                <div class="flex column flex-center" v-if="step==2">
                    <p class="f-20">新密码已设置成功</p>
                    <el-button type="success" @click="onSetting=false">完成</el-button>
                </div>

            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                onSetting: false,
                step: 0,
                oldPhone: '123',

                autoBackSecond: 5,

                form: {
                    code: '', //验证码
                    pass: '',
                    checkPass: ''
                },

                rules: {
                    code: [{
                        required: true,
                        message: '不能为空',
                        trigger: 'blur'
                    }],
                    pass: [{
                            required: true,
                            message: '密码不能为空',
                            trigger: 'blur'
                        },
                        {
                            min: 3,
                            max: 12,
                            message: '长度在 3 到 12 个字符',
                            trigger: 'blur'
                        }
                    ],
                    checkPass: [{
                        validator: (rule, value, callback) => {
                            if (value === '') {
                                callback(new Error('请再次输入密码'));
                            } else if (value !== this.form.pass) {
                                callback(new Error('两次输入密码不一致!'));
                            } else {
                                callback();
                            }
                        },
                        trigger: 'blur'
                    }]
                }
            }
        },
        methods: {
            next(formName) {
                this.$refs[formName].validate((valid) => {
                    if (!valid) {
                        return
                    }
                    this.step++;
                    if (this.step == 3) {
                        setTimeout(() => {
                            this.onSetting = false
                        }, this.autoBackSecond * 1000);
                    }
                });
            },
        },
        mounted() {

        }
    }
</script>