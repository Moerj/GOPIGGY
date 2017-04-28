<template>
    <div>
        <el-card class="m-b-20 inline-block">
            <div slot="header">
                <span>千米币余额: <b class="f-16 m-l-15 m-r-5">0.00</b>元</span>
            </div>
            <div class="m-b-20">
                <span class="p-l-15">充值金额:</span>
                <el-input class="m-l-15" style="width:200px" v-model="temp_value" placeholder="最大值">
                    <el-select v-model="selectCurrency" slot="prepend" placeholder="选择币种" style="width:90px">
                        <el-option label="人命币" value="人命币"></el-option>
                        <el-option label="美元" value="美元"></el-option>
                        <el-option label="欧元" value="欧元"></el-option>
                    </el-select>
                </el-input>
                <span>元</span>
            </div>
            <hr>
            <div class="flex flex-end">
                <el-button type="primary" size="small" @click="openDialog">确认充值</el-button>
                <el-button type="text" size="small" href="javascript:">充值明细</el-button>
            </div>

        </el-card>

        <br>

        <div class="ui-tips inline-block">
            <p>温馨提示</p>
            <ol>
                <li>充值成功后,余额可能会存在延迟现象,一般1分钟内到账,如有疑问,请咨询客服;</li>
                <li>充值金额必须是大于0的正整数;</li>
                <li>您可以使用储蓄卡(借记卡)、信用卡、第三方等充值渠道进行充值,如果遇到任何支付问题可联系客服;</li>
                <li>充值成功后,您可以点击查看充值记录.</li>
            </ol>
        </div>


        <!--充值成功-->
        <el-dialog title="提示" v-model="dialogVisible" size="tiny">
            <div class="flex column flex-center" v-if="charge_success">
                <span class="flex flex-center f-color-green f-20"><i class="fa fa-check-circle m-r-5"></i> 充值成功</span>
                <el-button type="text" @click="dialogVisible = false">查看充值记录</el-button>
            </div>
            <div class="flex column flex-center" v-else>
                <span class="flex flex-center f-color-red f-20"><i class="fa fa-close m-r-5 "></i> 充值失败</span>
                <el-button type="text" @click="dialogVisible = false">重新充值</el-button>
            </div>
        </el-dialog>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                temp_value: '',
                selectCurrency: '人命币',
                dialogVisible: false,
                charge_success: false
            }
        },
        methods: {
            openDialog() {
                this.dialogVisible = true
            }
        }
    };
</script>