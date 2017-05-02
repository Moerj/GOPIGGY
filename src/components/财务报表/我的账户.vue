// 我的账户 卡片区域展示
<style lang="scss" scoped>
    .color-icon {
        &.red {
            background-color: indianred;
        }
        &.yellow {
            background-color: gold;
        }
        &.blue {
            background-color: dodgerblue;
        }
        color: white;
        width: 25px;
        height: 25px;
        margin-right: 5px;
        border-radius: 4px;
        padding: 5px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    .ul-style {
        >li {
            padding-left: 20px;
            position: relative;
            >.fa-icon {
                position: absolute;
                top: 5px;
                left: 0;
                font-size: 10px;
                transform: scale(.7);
                color: black;
                opacity: .2;
            }
        }
    }

</style>
<template>
    <el-row :gutter="15">
        <el-col :span="8">
            <div class="ui-card">
                <span>
                    <span class="color-icon red"><icon name="rmb"></icon></span>
                <span>会员资金管理</span>
                </span>
                <ul class="ul-style">
                    <li>
                        <icon name="circle" scale=".5"></icon>
                        <p class="m-b-5">会员资金</p>
                        <p class="f-color-grey f-10 m-0">查看会员预存款,额度及交易明细</p>
                    </li>
                    <li>
                        <icon name="circle" scale=".5"></icon>
                        <p class="m-b-5">会员资金</p>
                        <p class="f-color-grey f-10 m-0">查看会员预存款,额度及交易明细</p>
                    </li>
                    <li>
                        <icon name="circle" scale=".5"></icon>
                        <p class="m-b-5">会员资金</p>
                        <p class="f-color-grey f-10 m-0">查看会员预存款,额度及交易明细</p>
                    </li>
                </ul>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="ui-card">
                <span>
                            <span class="color-icon yellow"><icon name="bullseye"></icon></span>
                <span>千米币</span>
                </span>
                <ul class="ul-style">
                    <li>
                        <icon name="circle" scale=".5"></icon>
                        <p class="m-b-5">千米币明细</p>
                        <p class="f-color-grey f-10 m-0">查看千米币资金流水明细</p>
                    </li>
                    <li>
                        <icon name="circle" scale=".5"></icon>
                        <p class="m-b-5">充值明细</p>
                        <p class="f-color-grey f-10 m-0">查看充值明细</p>
                    </li>
                    <li>
                        <icon name="circle" scale=".5"></icon>
                        <p class="m-b-5">提现明细</p>
                        <p class="f-color-grey f-10 m-0">查看提现明细</p>
                    </li>
                </ul>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="ui-card">
                <span>
                            <span class="color-icon blue"><icon name="address-book"></icon></span>
                <span>设置</span>
                </span>
                <ul class="ul-style">
                    <li>
                        <icon name="circle" scale=".5"></icon>
                        <p class="m-b-5">银行卡</p>
                        <p class="f-color-grey f-10 m-0">添加提现银行卡</p>
                    </li>
                    <li>
                        <icon name="circle" scale=".5"></icon>
                        <p class="m-b-5">支付密码</p>
                        <p class="f-color-grey f-10 m-0">设置、修改、重置支付密码</p>
                    </li>
                    <li>
                        <icon name="circle" scale=".5"></icon>
                        <p class="m-b-5">收款方式</p>
                        <p class="f-color-grey f-10 m-0">查看及设置各种支付方式</p>
                    </li>
                </ul>
            </div>
        </el-col>
    </el-row>
</template>
