<style lang="scss">
    @import '../sass/layout/public.scss';
    @import '../sass/layout/base.scss';
    .home {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        align-items: stretch;
        background-color: rgb(243, 245, 247);
    }

    .tag {
        background: white;
        padding: 15px;
        margin: 5px;
        color: rgba(black, .5);
        @include box-shadow;
        .tag-title{
            margin: 0;
            display: flex;
            align-items: center;
            font-size: 14px;
            >.fa{
                margin-right: 5px;
            }
            >.tag-title-right{
                font-size: 12px;
                color: rgba(black, .2);
                &::before{
                    content: '( '
                }
                &::after{
                    content: ' )'
                }
            }
        }
        .fa {
            font-size: 20px;
        }
        .peple-posion {
            padding-right: 5px;
            >span {
                padding: 0 5px;
            }
        }
        .icon-bg-circle{
            width: 20px;
            height: 20px;
            border-radius: 50%;
            position: relative;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            >i{
                color: white;
            }
        }
        .tag-icon-group {
            >a {
                $color: rgba(black, .2);
                border-radius: 50%;
                border: 1px solid $color;
                color: $color;
                width: 22px;
                height: 22px;
                display: inline-block;
                position: relative;
                margin-right: 10px;
                &.active {
                    color: deepskyblue !important;
                    border-color: deepskyblue !important;
                }
                &:hover {
                    color: rgba(deepskyblue, .4);
                    border-color: rgba(deepskyblue, .4);
                }
            }
            .fa {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate3d(-50%, -50%, 0);
            }
        }
        .progress-level {
            &.low {
                color: #FF4949;
                .el-progress-bar__inner {
                    background-color: #FF4949 !important;
                }
                &:after {
                    content: '低'
                }
            }
            &.middle {
                color: #F7BA2A;
                .el-progress-bar__inner {
                    background-color: #F7BA2A !important;
                }
                &:after {
                    content: '中'
                }
            }
            &.hight {
                color: #20A0FF;
                .el-progress-bar__inner {
                    background-color: #20A0FF !important;
                }
                &:after {
                    content: '高'
                }
            }
            >span {
                color: rgba(black, .5);
            }
        }
        .card{
            background-color: #eee;
            padding: 15px;
            position: relative;
            overflow: hidden;
            >*{
                margin: 0;
            }
            .bg-icon{
                font-size: 6rem;
                position: absolute;
                right: -10px;
                top: 0;
                opacity: .1;
            }
        }
    }

</style>
<template>
    <div class="home flex">
        <div class="grow-1 flex column">
            <div class="tag" style="height:280px;">
                <h4 class="tag-title"><i class="fa fa-user-circle" style="color:gold"></i>账号信息</h4>
                <hr>
                <p class="flex">
                    <span class="grow-1">用户名: <span>xxx</span></span>
                    <span class="grow-1">编号: <span>xxx</span></span>
                </p>
                <hr>
                <p>账号类型: <span>管理员</span> <i class="fa fa-info-circle f-14"></i></p>
                <hr>
                <p>岗位预览:
                    <span class="peple-posion">
                        <span>销售</span>
                    <span>销售</span>
                    <span>销售</span>
                    <span>销售</span>
                    <span>销售</span>
                    </span>
                    <a href="#">[岗位管理]</a>
                </p>
                <hr>
                <p class="flex">
                    <span class="tag-icon-group grow-1">
                        <a><i class="fa fa-address-card f-10"></i></a>
                        <a><i class="fa fa-envelope f-10"></i></a>
                        <a class="active"><i class="fa fa-mobile-phone"></i></a>
                    </span>
                    <span class="progress-level middle grow-1 flex flex-center">
                        <span>安全等级: </span>
                        <el-progress :percentage="70" :show-text="false" class="display-ib" style="width:120px;margin:0 10px;"></el-progress>
                    </span>
                </p>
            </div>
            <div class="tag grow-1">
                <h4 class="tag-title flex space-between">
                    <span>
                        <span class="icon-bg-circle" style="background:rgb(119,211,222)"><i class="fa fa-bell f-10"></i></span>
                        授权店铺
                    </span>
                    <span class="tag-title-right">单位:件</span>
                </h4>
                <hr>
                <div class="flex">
                    <div class="card grow-1 m-r-5 m-t-5 m-b-5">
                        <p>分享</p>
                        <p class="f-12">商品 (spu) 67</p>
                        <p class="f-12">单品 (sku) 67</p>
                        <i class="fa fa-users bg-icon"></i>
                    </div>
                    <div class="card grow-1 m-l-5 m-t-5 m-b-5">
                        <p>分享</p>
                        <p class="f-12">商品 (spu) 67</p>
                        <p class="f-12">单品 (sku) 67</p>
                        <i class="fa fa-sitemap bg-icon"></i>
                    </div>
                </div>
                <hr>
                <div class="shop-list">
                    <div class="flex m-t-15 m-b-15">
                        <img src="#" alt="" width="70px" height="70px">
                        <div class="grow-1 flex column justify-center p-l-10">
                            <span class="m-b-10">shop_id: fweef</span>
                            <span class="f-12 flex">
                                <span class="grow-1">在线单品: <span>12</span></span>
                                <span class="grow-1">已上架: <span>12</span></span>
                                <span class="grow-1">待上架: <span>12</span></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="grow-2 flex column">
            <div class="tag" style="height:400px;">
                <!--echart-->
                <h4 class="tag-title"><i class="fa fa-circle-o f-10 f-color-red"></i>订单趋势</h4>
                <hr>
            </div>
            <div class="grow-1 flex">
                <div class="grow-1 flex column">
                    <div class="tag" style="height:200px">
                        <h4 class="tag-title  flex space-between">
                            <span>
                                <span class="icon-bg-circle" style="background:rgb(119,211,222)"><i class="fa fa-balance-scale f-10"></i></span>
                                财务
                            </span>
                            <span class="tag-title-right">单位:元</span>
                        </h4>
                    </div>
                    <div class="tag grow-1">
                        <h4 class="tag-title">
                            <span>
                                <span class="icon-bg-circle" style="background:rgb(149,120,228)"><i class="fa fa-area-chart f-10"></i></span>
                                商品销量排行
                            </span>
                        </h4>
                    </div>
                </div>
                <div class="tag grow-1">
                    <h4 class="tag-title">
                        <span>
                            <span class="icon-bg-circle" style="background:rgb(94,155,224)"><i class="fa fa-flag f-10"></i></span>
                            产品动态
                        </span>
                    </h4>
                </div>
            </div>
        </div>
    </div>

</template>
