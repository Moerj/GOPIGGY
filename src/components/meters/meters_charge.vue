<style lang="scss" scoped>
    .tips{
        background-color: floralwhite;
        border:1px solid blanchedalmond;
        border-radius: 4px;
        padding: 15px;
        color: #dcb669;

        ul,ol{
            list-style: unset;
        }
    }
</style>

<template>
    <div>
        <h1 class="content-title">充值</h1>

        <el-card class="m-b-20 display-ib">
            <div slot="header">
                <span>千米币余额: <b class="f-16 m-l-15 m-r-5">0.00</b>元</span>
            </div>
            <div class="m-b-20">
                <span class="p-l-15">充值金额:</span>
                <el-input class="input-inline-b m-l-15" style="width:150px" v-model="temp_value" placeholder="最大值"></el-input>
                <span>元</span>
            </div>
            <hr>
            <div class="flex flex-end">
                <el-button type="primary" size="small">确认充值</el-button>
                <el-button type="text" size="small" href="javascript:">充值明细</el-button>
            </div>

        </el-card>

        <br>

        <div class="tips display-ib">
            <p>温馨提示</p>
            <ol>
                <li>充值成功后,余额可能会存在延迟现象,一般1分钟内到账,如有疑问,请咨询客服;</li>
                <li>充值金额必须是大于0的正整数;</li>
                <li>您可以使用储蓄卡(借记卡)、信用卡、第三方等充值渠道进行充值,如果遇到任何支付问题可联系客服;</li>
                <li>充值成功后,您可以点击查看充值记录.</li>
            </ol>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                temp_value: '',
            }
        },
    };

</script>
