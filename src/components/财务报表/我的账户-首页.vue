// 我的账户
<style lang="scss" scoped>
    @import 'src/scss/layout/public.scss';
    .my_account {
        background-color: $ui-bg-color;

        .title {
            font-size: 14px;
            >.f-color-grey {
                font-size: 12px;
            }
        }

        .right-bar {
            hr {
                margin: 25px 0;
            }
        }
    }

</style>

<template>
    <div class="my_account flex">
        <div class="grow-1">
            <!--通知公告-->
            <div class="ui-card m-b-15">
                <router-link to="" class="flex space-between">
                    <span class="title f-color-black f-12 flex align-center">
                        <icon name="volume-up" scale=".8" class="m-r-5"></icon>如何使用储蓄卡
                    </span>
                    <div class="time f-color-grey f-10">2015-11-2</div>
                </router-link>
            </div>

            <!--会员资金-->
            <div class="ui-card m-b-15">
                <p class="ui-title">会员资金</p>
                <el-row :gutter="15">
                    <el-col :span="8">
                        <div class="ui-card">
                            <p class="title flex space-between">预存款总额<span class="f-color-grey">(单位:元)</span></p>
                            <p class="f-16">40.823.00</p>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="ui-card">
                            <p class="title flex space-between">已用额度<span class="f-color-grey">(单位:元)</span></p>
                            <p class="f-16 f-color-red">40.823.00</p>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="ui-card">
                            <p class="title flex space-between">授信总额<span class="f-color-grey">(单位:元)</span></p>
                            <p class="f-16">40.823.00</p>
                        </div>
                    </el-col>
                </el-row>
            </div>


            <router-view></router-view>
        </div>

        <!--right bar-->
        <div class="right-bar ui-card m-l-15 f-12 overflow-auto" style="min-width:240px;align-self: flex-start;">
            <span class="title flex space-between">可用余额<span class="f-color-grey">(单位:元)</span></span>
            <p class="f-16">0.00</p>
            <el-button type="primary" size="mini">立即充值</el-button>
            <p class="flex space-between">押金<span class="f-color-grey">0.00</span></p>
            <p class="flex space-between">冻结资金<span class="f-color-grey">0.00</span></p>
            <hr>
            <el-tabs v-model="tabs_payments" @tab-click="">
                <el-tab-pane label="日收支" name="day_payments">
                    <p class="title flex space-between f-14">收入总计<span class="f-color-blue">+ 0.00</span></p>
                    <p class="flex space-between">充值<span class="f-color-grey">+ 0.00</span></p>
                    <p class="flex space-between">订单<span class="f-color-grey">+ 0.00</span></p>
                </el-tab-pane>
                <el-tab-pane label="月收支" name="month_payments">
                    <p class="title flex space-between f-14">收入总计<span class="f-color-blue">+ 0.00</span></p>
                    <p class="flex space-between">充值<span class="f-color-grey">+ 0.00</span></p>
                    <p class="flex space-between">订单<span class="f-color-grey">+ 0.00</span></p>
                </el-tab-pane>
            </el-tabs>
            <hr class="dash">
            <p class="title flex space-between">收入支出<span class="f-color-blue">- 0.00</span></p>
            <p class="flex space-between">提现<span class="f-color-grey">- 0.00</span></p>
            <p class="flex space-between">订单<span class="f-color-grey">- 0.00</span></p>
            <hr>
            <span class="title flex space-between">预存款汇总<span class="fa fa-question-circle"></span></span>
            <p class="flex space-between">发行总额<span class="f-color-blue">400.00</span></p>
            <p class="flex space-between">昨天结余<span class="f-color-blue">400.00</span></p>
            <hr>
            <span class="title flex space-between">信用额度汇总<span class="fa fa-question-circle"></span></span>
            <p class="flex space-between">授信额度<span class="f-color-blue">400.00</span></p>
            <p class="flex space-between">已用额度<span class="f-color-blue">400.00</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tabs_payments: 'day_payments',
            };
        },
    };

</script>
