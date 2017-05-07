<style lang="scss" scoped>
    @import 'src/sass/layout/public.scss';
    .ticket-group{
        padding: 15px;
        padding-bottom: 30px;
    }
    .ticket {
        $size: 80px;
        $color-red: $ui-color-red;
        $color-blue: rgb(107, 158, 221);
        $color-bluish: #31b0d5;
        $color-green: #449d44;
        $color-yellow: rgb(250,202,52);
        $color-purple: purple;

        display: inline-flex;
        height: $size;
        margin-bottom: 15px;
        margin-right: 15px;
        @include box-shadow;

        &.red {
            .main {
                background-color: $color-red;
            }
            .border-effect {
                background: radial-gradient( transparent 6px, transparent 4px, $color-red 1px, $color-red);
            }
        }
        &.blue {
            .main {
                background-color: $color-blue;
            }
            .border-effect {
                background: radial-gradient( transparent 6px, transparent 4px, $color-blue 1px, $color-blue);
            }
        }
        &.bluish {
            .main {
                background-color: $color-bluish;
            }
            .border-effect {
                background: radial-gradient( transparent 6px, transparent 4px, $color-bluish 1px, $color-bluish);
            }
        }
        &.green {
            .main {
                background-color: $color-green;
            }
            .border-effect {
                background: radial-gradient( transparent 6px, transparent 4px, $color-green 1px, $color-green);
            }
        }
        &.yellow {
            .main {
                background-color: $color-yellow;
            }
            .border-effect {
                background: radial-gradient( transparent 6px, transparent 4px, $color-yellow 1px, $color-yellow);
            }
        }
        &.purple {
            .main {
                background-color: $color-purple;
            }
            .border-effect {
                background: radial-gradient( transparent 6px, transparent 4px, $color-purple 1px, $color-purple);
            }
        }
        .name {
            position: relative;
            color: white;
            font-size: 22px;
            text-align: center;
            padding-left: 80px;
            .main {
                height: 100%;
                width: $size;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 2;
                padding: 10px;
            }
            .border-effect {
                width: 5px;
                height: 100%;
                position: absolute;
                top: 0;
                right: -5px;
                z-index: 1;
                background-size: 20px 20px;
                background-position: -10px -10px;
                transform: rotateY(180deg);
                &:after {
                    content: '';
                    position: absolute;
                    left: 5px;
                    top: 5px;
                    right: 5px;
                    bottom: 5px;
                    z-index: 1;
                }
            }
        }
        .content {
            width: 260px;
            height: 100%;
            background-color: #eee;
            padding: 15px;
            >* {
                margin: 0;
                @include text-clamp(1);
            }
            .title {
                font-size: 14px;
                color: rgba(black, .7);
                margin-bottom: 10px;
            }
            .text {
                font-size: 12px;
                color: rgba(black, .4);
            }
        }
    }
</style>
<template>
    <div>
        <div class="ticket-group">
            <p class="ui-title">满额/满件促销</p>
            <div class="ticket red">
                <div class="name">
                    <span class="main">消费满减</span>
                    <span class="border-effect"></span>
                </div>
                <div class="content">
                    <p class="title">商品购买一定金额或的优惠价</p>
                    <p class="text">列:满99元减5元</p>
                </div>
            </div>
        </div>
        <div class="ticket-group">
            <p class="ui-title">优惠卷促销</p>
            <div class="ticket blue">
                <div class="name">
                    <span class="main">消费满减</span>
                    <span class="border-effect"></span>
                </div>
                <div class="content">
                    <p class="title">商品购买一定金额或的优惠价</p>
                    <p class="text">列:满99元减5元</p>
                </div>
            </div>
        </div>
        <div class="ticket-group">
            <p class="ui-title">单品/会员促销</p>
            <div class="ticket bluish">
                <div class="name">
                    <span class="main">消费满减</span>
                    <span class="border-effect"></span>
                </div>
                <div class="content">
                    <p class="title">商品购买一定金额或的优惠价</p>
                    <p class="text">列:满99元减5元</p>
                </div>
            </div>
        </div>
        <div class="ticket-group">
            <p class="ui-title">限时/搭配促销</p>
            <div class="ticket green">
                <div class="name">
                    <span class="main">消费满减</span>
                    <span class="border-effect"></span>
                </div>
                <div class="content">
                    <p class="title">商品购买一定金额或的优惠价</p>
                    <p class="text">列:满99元减5元</p>
                </div>
            </div>
        </div>
        <div class="ticket-group">
            <p class="ui-title">Go高级促销</p>
            <div class="ticket yellow">
                <div class="name">
                    <span class="main">消费满减</span>
                    <span class="border-effect"></span>
                </div>
                <div class="content">
                    <p class="title">商品购买一定金额或的优惠价</p>
                    <p class="text">列:满99元减5元</p>
                </div>
            </div>
        </div>
        <div class="ticket-group">
            <p class="ui-title">产品测评/内容营销</p>
            <div class="ticket purple">
                <div class="name">
                    <span class="main">消费满减</span>
                    <span class="border-effect"></span>
                </div>
                <div class="content">
                    <p class="title">商品购买一定金额或的优惠价</p>
                    <p class="text">列:满99元减5元</p>
                </div>
            </div>
        </div>
    </div>
</template>