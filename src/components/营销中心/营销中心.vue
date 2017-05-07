<style lang="scss" scoped>
    @import 'src/sass/layout/public.scss';
    .ticket-group{
        padding: 30px 0;
        display: flex;
        position: relative;
        >.ui-title{
            position: absolute;
            top: 0;
            left: 0;
        }
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
            .label {
                background-color: $color-red;
            }
            .border-effect {
                background: radial-gradient( transparent 6px, transparent 4px, $color-red 1px, $color-red);
            }
        }
        &.blue {
            .label {
                background-color: $color-blue;
            }
            .border-effect {
                background: radial-gradient( transparent 6px, transparent 4px, $color-blue 1px, $color-blue);
            }
        }
        &.bluish {
            .label {
                background-color: $color-bluish;
            }
            .border-effect {
                background: radial-gradient( transparent 6px, transparent 4px, $color-bluish 1px, $color-bluish);
            }
        }
        &.green {
            .label {
                background-color: $color-green;
            }
            .border-effect {
                background: radial-gradient( transparent 6px, transparent 4px, $color-green 1px, $color-green);
            }
        }
        &.yellow {
            .label {
                background-color: $color-yellow;
            }
            .border-effect {
                background: radial-gradient( transparent 6px, transparent 4px, $color-yellow 1px, $color-yellow);
            }
        }
        &.purple {
            .label {
                background-color: $color-purple;
            }
            .border-effect {
                background: radial-gradient( transparent 6px, transparent 4px, $color-purple 1px, $color-purple);
            }
        }
        .label {
            position: relative;
            color: white;
            font-size: 22px;
            text-align: center;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            .text {
                width: $size;
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
            .info {
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
            <div class="ticket red" v-for="item in ticketRed" :key="item.label">
                <div class="label">
                    <span class="text">{{item.label}}</span>
                    <span class="border-effect"></span>
                </div>
                <div class="content">
                    <p class="title">{{item.title}}</p>
                    <p class="info">{{item.info}}</p>
                </div>
            </div>
        </div>
        <div class="ticket-group">
            <p class="ui-title">优惠卷促销</p>
            <div class="ticket blue" v-for="item in ticketBlue" :key="item.label">
                <div class="label">
                    <span class="text">{{item.label}}</span>
                    <span class="border-effect"></span>
                </div>
                <div class="content">
                    <p class="title">{{item.title}}</p>
                    <p class="info">{{item.info}}</p>
                </div>
            </div>
        </div>
        <div class="ticket-group">
            <p class="ui-title">单品/会员促销</p>
            <div class="ticket bluish" v-for="item in ticketBluish" :key="item.label">
                <div class="label">
                    <span class="text">{{item.label}}</span>
                    <span class="border-effect"></span>
                </div>
                <div class="content">
                    <p class="title">{{item.title}}</p>
                    <p class="info">{{item.info}}</p>
                </div>
            </div>
        </div>
        <div class="ticket-group">
            <p class="ui-title">限时/搭配促销</p>
            <div class="ticket green" v-for="item in ticketGreen" :key="item.label">
                <div class="label">
                    <span class="text">{{item.label}}</span>
                    <span class="border-effect"></span>
                </div>
                <div class="content">
                    <p class="title">{{item.title}}</p>
                    <p class="info">{{item.info}}</p>
                </div>
            </div>
        </div>
        <div class="ticket-group">
            <p class="ui-title">Go高级促销</p>
            <div class="ticket yellow" v-for="item in ticketYellow" :key="item.label">
                <div class="label">
                    <span class="text">{{item.label}}</span>
                    <span class="border-effect"></span>
                </div>
                <div class="content">
                    <p class="title">{{item.title}}</p>
                    <p class="info">{{item.info}}</p>
                </div>
            </div>
        </div>
        <div class="ticket-group">
            <p class="ui-title">产品测评/内容营销</p>
            <div class="ticket purple" v-for="item in ticketPurple" :key="item.label">
                <div class="label">
                    <span class="text">{{item.label}}</span>
                    <span class="border-effect"></span>
                </div>
                <div class="content">
                    <p class="title">{{item.title}}</p>
                    <p class="info">{{item.info}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                ticketRed:[{
                    label:'满减',
                    title: '购买商品一定金额获得优惠',
                    info: '列: 满99元减5元'
                },{
                    label:'满金赠额',
                    title: '购买商品满一定金额获得赠品',
                    info: '列: 满99元赠送xx商品'
                }],
                ticketBlue:[{
                    label:'满减',
                    title: '购买商品一定金额获得优惠',
                    info: '列: 满99元减5元'
                }],
                ticketBluish:[{
                    label:'满减',
                    title: '购买商品一定金额获得优惠',
                    info: '列: 满99元减5元'
                }],
                ticketGreen:[{
                    label:'满减',
                    title: '购买商品一定金额获得优惠',
                    info: '列: 满99元减5元'
                }],
                ticketYellow:[{
                    label:'满减',
                    title: '购买商品一定金额获得优惠',
                    info: '列: 满99元减5元'
                }],
                ticketPurple:[{
                    label:'满减',
                    title: '购买商品一定金额获得优惠',
                    info: '列: 满99元减5元'
                }],
            }
        }
    }
</script>