<style lang="scss">
    @import 'src/sass/layout/public.scss';
    .page_payment {
        background-color: $ui-bg-color;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        .topbar {
            width: 100%;
            height: 70px;
            background-color: white;
            border: $ui-border;
            box-shadow: 1px 0 3px rgba(black, .3);
            >.content {
                padding: 0;
                height: 100%;
            }
        }
        .content {
            padding: 15px 0;
        }
        .max-w {
            width: 1024px;
        }
        .logo {
            height: 100%;
            width: 130px;
            display: inline-block;
            background: url('../images/shouyintlogo.png') no-repeat center;
            background-size: 100%;
        } // tabs撑满
        .el-tabs__nav {
            display: flex;
            width: 100%;
            >* {
                flex-grow: 1;
                text-align: center;
            }
        }

        .min-pane-h {
            min-height: 300px;
        }

        .item {
            height: 50px;
            width: 150px;
            display: inline-flex;
            align-items: center;
            padding: 5px 15px;
            cursor: pointer;
            >img {
                height: 30px;
                margin-right: 10px;
            }
        }

        .price {
            font-size: 14px;
            color: darkorange;
        }

        .modal {
            background: rgba(black, .3);
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            >.tip {
                $bg-color:goldenrod;
                background: goldenrod;
                border: 1px solid darkgray;
                padding: 15px;
                color: white;
                font-size: 14px;
                border-radius: 4px;
                position: absolute;
                transform: translateY(-100%);
                margin-top: -15px;
                &::after {
                    content: '';
                    width: 0;
                    height: 0;
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    border-top: 15px solid $bg-color;
                    position: absolute;
                    bottom: 1px;
                    left: 20px;
                    transform: translateY(100%);
                }
                &.last{
                    &::after{
                        display: none;
                    }
                }
            }
            >.highlight {
                border: $ui-border;
                border-radius: 4px;
                background: white;
                padding: 5px;
                position: absolute;
            }
        }
    }
</style>
<template>
    <div class="page_payment flex column flex-center">
        <div class="topbar flex flex-center">
            <div class="content max-w">
                <span class="logo"></span>
            </div>
        </div>

        <div class="content max-w grow-1">

            <div class="m-b-15">
                <!--二维码与金额-->
                <div class="flex space-between align-center m-b-15">
                    <div class="flex flex-center">
                        <img src="../images/qrcode.jpeg" width="100px" alt="二维码">
                        <span class="p-l-15">充值订单号: xxxxxx</span>
                    </div>
                    <span>应支付金额: <b class="price">0</b>元</span>
                </div>

                <!--选支付方式-->
                <div class="bg-white p-15">
                    <div class="flex space-between m-b-20">
                        <div class="choose-pay">
                            <el-radio class="radio" label="1" name="pay-type">银行卡</el-radio>
                            <el-radio class="radio" label="2" name="pay-type">信用卡</el-radio>
                            <hr class="dash">
                            <el-button class="bind-tip" size="small">已绑定银行卡</el-button>
                            <el-button class="bind-tip" size="small">其他在线支付方式</el-button>
                        </div>
                        <div>
                            <p class="m-t-0">支付金额: <b class="price">0.00</b>元</p>
                            <p>已包含支付手续费 <b>0</b>元</p>
                        </div>
                    </div>

                    <div class="flex flex-center p-20">
                        <el-button type="primary">立即支付</el-button>
                    </div>
                </div>
            </div>

            <el-tabs type="border-card">
                <el-tab-pane class="min-pane-h" label="快捷支付">快捷支付</el-tab-pane>
                <el-tab-pane class="min-pane-h" label="储蓄卡">储蓄卡</el-tab-pane>
                <el-tab-pane class="min-pane-h" label="信用卡">定时任务补偿</el-tab-pane>
                <el-tab-pane class="min-pane-h" label="第三方支付">
                    <a class="ui-card item"><img src="../images/zhifubao-logo.png">支付宝</a class="ui-card">
                </el-tab-pane>
                <el-tab-pane class="min-pane-h" label="汇款支付">汇款支付</el-tab-pane>
            </el-tabs>
        </div>


        <div class="modal" v-if="payGuidance==true">
            <!--用于高亮按钮-->
            <div class="inline-block highlight"></div>

            <div class="tip inline-block">
                <div v-if="tipStep==0">
                    <p>点按钮显示可以查看快捷支付绑定的银行卡.</p>
                </div>
                <div v-if="tipStep==1">
                    <p class="text-center">众多支付方式在这里,快来体验吧!</p>
                    <p>
                        <img width="100px" class="m-r-15" src="../images/kuaijie.png" alt="">
                        <img width="100px" class="m-r-15" src="../images/yinhangk.png" alt="">
                        <img width="100px" src="../images/disanfangzhifu.png" alt="">
                    </p>
                </div>
                <div v-if="tipStep==2" style="width:400px">
                    <p class="text-center"><i class="fa fa-check-circle" style="font-size:30px"></i></p>
                    <p class="text-center">恭喜你!已完成了支付向导.</p>
                    <p class="text-center">请开启支付之旅吧!</p>
                </div>
                <div class="flex flex-center">
                    <el-button class="f-color-orange" @click="tipStep++" v-if="tipStep<2">下一步</el-button>
                    <el-button class="f-color-orange" @click="payGuidance=false" v-if="tipStep==2">完成</el-button>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                payGuidance: true, //是否开启支付引导
                tipStep: 0
            }
        },
        methods: {
            goStep() {
                let modal = document.querySelector('.modal')
                let targetEl = document.querySelector('.bind-tip')
                let highlight = modal.querySelector('.highlight')
                let tip = modal.querySelector('.tip')
                if (targetEl) {
                    let top = targetEl.getBoundingClientRect().top
                    let left = targetEl.getBoundingClientRect().left

                    targetEl.className = targetEl.className.replace(/bind-tip/g, '')
                    highlight.innerHTML = targetEl.innerHTML

                    highlight.style.top = top + 'px'
                    highlight.style.left = left + 'px'

                    tip.style.top = top + 'px'
                    tip.style.left = left + 'px'
                } else {
                    modal.removeChild(highlight)
                    tip.style.top = '50%'
                    tip.style.left = '50%'
                    tip.style.marginLeft = `-${tip.offsetWidth/2}px`
                    tip.className += ' last'
                }
            }
        },
        watch: {
            tipStep() {
                this.goStep()
            }
        },
        mounted() {
            setTimeout(() => {
                if (this.payGuidance) {
                    this.goStep()
                }
            })
        }
    }
</script>