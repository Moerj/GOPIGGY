<style lang="scss" scoped>
    .feedback {
        position: fixed;
        z-index: 1;
        right: 15px;
        bottom: 15px;
        .info {
            display: none;
        }
        &:hover {
            .info {
                display: inline;
            }
        }
    }
    .feedback-content {
        position: absolute;
        z-index: 10;
        right: 0;
        bottom: 0;
        width: 325px;
        background-color: #eee;
        color: rgba(black, .7);
        text-align: left;
        padding: 20px;
        >* {
            display: block;
        }
        >label {
            padding: 5px 0;
            text-indent: .5rem;
        }
        >.top {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            transform: translateY(-100%);
            padding: 15px;
            margin-top: 0;
            color: white;
            background-color: cornflowerblue;
        }
        .el-input,
        .el-textarea {
            margin-bottom: 20px;
        }
        .submit {
            width: 100%;
            margin: 0 auto;
        }
    }

</style>

<template>
    <!-- 联系我们 -右下角悬浮-->
    <div>
        <el-button class="feedback" type="primary" @click="active_feedback = !active_feedback">
            <icon name="envelope"></icon>
            <span class="info">联系我们</span>
        </el-button>

        <div class="feedback-content" v-if="active_feedback">
            <p class="top">给我们留言<span @click="active_feedback = false"><icon name="close" scale="1.2" class="float-right ui-cursor-pointer"></icon></span></p>

            <label>手机号码</label>
            <el-input v-model="phone" placeholder="请输入手机号"></el-input>

            <label>QQ</label>
            <el-input v-model="qq" placeholder="请输入QQ号"></el-input>

            <label>message</label>
            <el-input type="textarea" :rows="4" placeholder="请输入留言内容" v-model="message"> </el-input>

            <el-button type="primary" class="submit">提交</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                phone: '',
                qq: '',
                message: '',
                active_feedback: false
            }
        }
    }

</script>
