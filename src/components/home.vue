<style lang="scss">
    @import 'src/sass/layout/public.scss';
    .home {
        background-color: rgb(243, 245, 247);
        padding: 5px !important;
        >.flex{
            min-height: 740px;
        }

        .tag {
            background: white;
            padding: 15px;
            margin: 5px;
            color: rgba(black, .5);
            position: relative; // min-width: 400px;
            @include box-shadow;
            .tag-title {
                margin: 0;
                display: flex;
                align-items: center;
                font-size: 14px;
                >.fa {
                    margin-right: 5px;
                }
                >.tag-title-right {
                    font-size: 12px;
                    color: rgba(black, .2);
                    &::before {
                        content: '( '
                    }
                    &::after {
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
            .icon-bg-circle {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                position: relative;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                >i {
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
                &.height {
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
            .card {
                background-color: #eee;
                padding: 15px;
                position: relative;
                overflow: hidden;
                >* {
                    margin: 0;
                }
                .bg-icon {
                    font-size: 6rem;
                    position: absolute;
                    right: -10px;
                    top: 0;
                    opacity: .1;
                }
            }
            .link-control {
                >a {
                    cursor: pointer;
                    padding: 0 10px;
                    border-right: 1px solid #eee;
                    &:last-of-type {
                        border-right: 0;
                    }
                }
            }
        }

        .product-ranking {
            .el-tabs__header {
                position: absolute;
                top: 0;
                right: 0;
                margin-top: 3px;
                .el-tabs__item {
                    font-size: 12px;
                    padding: 0 10px;
                }
            }
        }

        .product-dynamics {
            .title {
                color: #20A0FF;
            }
            .content {
                @include text-clamp(2);
            }
        }
    }

</style>
<template>
    <div class="home flex">
        <div class="flex column" style="min-width:500px;">
            <!--账号信息-->
            <div class="tag">
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
            <!--授权店铺-->
            <div class="tag grow-1 flex column">
                <div>
                    <h4 class="tag-title flex space-between">
                        <span>
                            <span class="icon-bg-circle" style="background:rgb(119,211,222)"><i class="fa fa-bell f-10"></i></span>
                            <span>授权店铺</span>
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
                </div>
                <ul class="shop-list overflow-auto">
                    <li class="flex m-t-15 m-b-15">
                        <img src="#" alt="" width="70px" height="70px">
                        <div class="grow-1 flex column justify-center p-l-10">
                            <span class="m-b-10">shop_id: fweef</span>
                            <span class="f-12 flex">
                                <span class="grow-1">在线单品: <span>12</span></span>
                            <span class="grow-1">已上架: <span>12</span></span>
                            <span class="grow-1">待上架: <span>12</span></span>
                            </span>
                        </div>
                    </li>
                    <li class="flex m-t-15 m-b-15">
                        <img src="#" alt="" width="70px" height="70px">
                        <div class="grow-1 flex column justify-center p-l-10">
                            <span class="m-b-10">shop_id: fweef</span>
                            <span class="f-12 flex">
                                <span class="grow-1">在线单品: <span>12</span></span>
                            <span class="grow-1">已上架: <span>12</span></span>
                            <span class="grow-1">待上架: <span>12</span></span>
                            </span>
                        </div>
                    </li>
                    <li class="flex m-t-15 m-b-15">
                        <img src="#" alt="" width="70px" height="70px">
                        <div class="grow-1 flex column justify-center p-l-10">
                            <span class="m-b-10">shop_id: fweef</span>
                            <span class="f-12 flex">
                                <span class="grow-1">在线单品: <span>12</span></span>
                            <span class="grow-1">已上架: <span>12</span></span>
                            <span class="grow-1">待上架: <span>12</span></span>
                            </span>
                        </div>
                    </li>
                    <li class="flex m-t-15 m-b-15">
                        <img src="#" alt="" width="70px" height="70px">
                        <div class="grow-1 flex column justify-center p-l-10">
                            <span class="m-b-10">shop_id: fweef</span>
                            <span class="f-12 flex">
                                <span class="grow-1">在线单品: <span>12</span></span>
                            <span class="grow-1">已上架: <span>12</span></span>
                            <span class="grow-1">待上架: <span>12</span></span>
                            </span>
                        </div>
                    </li>
                    <li class="flex m-t-15 m-b-15">
                        <img src="#" alt="" width="70px" height="70px">
                        <div class="grow-1 flex column justify-center p-l-10">
                            <span class="m-b-10">shop_id: fweef</span>
                            <span class="f-12 flex">
                                <span class="grow-1">在线单品: <span>12</span></span>
                            <span class="grow-1">已上架: <span>12</span></span>
                            <span class="grow-1">待上架: <span>12</span></span>
                            </span>
                        </div>
                    </li>
                    <li class="flex m-t-15 m-b-15">
                        <img src="#" alt="" width="70px" height="70px">
                        <div class="grow-1 flex column justify-center p-l-10">
                            <span class="m-b-10">shop_id: fweef</span>
                            <span class="f-12 flex">
                                <span class="grow-1">在线单品: <span>12</span></span>
                            <span class="grow-1">已上架: <span>12</span></span>
                            <span class="grow-1">待上架: <span>12</span></span>
                            </span>
                        </div>
                    </li>
                    <li class="flex m-t-15 m-b-15">
                        <img src="#" alt="" width="70px" height="70px">
                        <div class="grow-1 flex column justify-center p-l-10">
                            <span class="m-b-10">shop_id: fweef</span>
                            <span class="f-12 flex">
                                <span class="grow-1">在线单品: <span>12</span></span>
                            <span class="grow-1">已上架: <span>12</span></span>
                            <span class="grow-1">待上架: <span>12</span></span>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="flex column">

            <!-- 订单趋势 echart-->
            <div class="tag flex column" style="min-height:304px;">
                <h4 class="tag-title"><i class="fa fa-circle-o f-10 f-color-red"></i>订单趋势</h4>
                <hr>
                <div class="grow-1" id="echart_orderform"></div>
            </div>

            <div class="grow-1 flex">
                <div class="flex column">
                    <div class="tag">
                        <h4 class="tag-title flex space-between">
                            <span>
                                <span class="icon-bg-circle" style="background:rgb(119,211,222)"><i class="fa fa-balance-scale f-10"></i></span>
                                <span>财务</span>
                            </span>
                            <span class="tag-title-right">单位:元</span>
                        </h4>
                        <hr>
                        <div class="flex column text-center">
                            <p class="f-10">可用余额</p>
                            <p class="f-color-red">0.00</p>
                            <p class="f-10 link-control">
                                <a>充值</a>
                                <a>提现</a>
                                <a>交易明细</a>
                            </p>
                        </div>
                    </div>
                    <div class="tag grow-1 product-ranking flex column" style="width:300px;">
                        <div>
                            <h4 class="tag-title">
                                <span>
                                    <span class="icon-bg-circle" style="background:rgb(149,120,228)"><i class="fa fa-area-chart f-10"></i></span>
                                    <span>商品排行</span>
                                </span>
                            </h4>
                            <hr>
                        </div>
                        <div class="overflow-auto f-12">
                            <el-tabs v-model="tabs_product_ranking" @tab-click="">
                                <el-tab-pane label="昨天" name="yesterday">
                                    Vue.js（读音 /vjuː/，类似于 view） 是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与单文件组件和
                                    Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。 如果你是有经验的前端开发者，想知道 Vue.js 与其它库/框架的区别，查看对比其它框架。
                                    起步 官方指南假设你已有 HTML、CSS 和 JavaScript 中级前端知识。如果你刚开始学习前端开发，将框架作为你的第一步可能不是最好的主意——掌握好基础知识再来！之前有其他框架的使用经验对于学习
                                    Vue.js 是有帮助的，但这不是必需的。 尝试 Vue.js 最简单的方法是使用 JSFiddle Hello World 例子。你可以在浏览器新标签页中打开它，跟着例子学习一些基础用法。或者你也可以创建一个本地的
                                    .html 文件，然后通过如下方式引入 Vue：
                                </el-tab-pane>
                                <el-tab-pane label="最近七天" name="lastSevendays">最近七天</el-tab-pane>
                                <el-tab-pane label="本月" name="month">本月</el-tab-pane>
                            </el-tabs>
                        </div>
                    </div>
                </div>

                <!--产品动态-->
                <div class="tag grow-1 flex column">
                    <div>
                        <h4 class="tag-title">
                            <span>
                                <span class="icon-bg-circle" style="background:rgb(94,155,224)"><i class="fa fa-flag f-10"></i></span>                            产品动态
                            </span>
                        </h4>
                        <hr>
                    </div>
                    <ul class="product-dynamics overflow-auto f-12">
                        <li>
                            <p class="title">这是标题</p>
                            <span class="content">
                                用 Vue.js + vue-router 创建单页应用，是非常简单的。使用 Vue.js 时，我们就已经把组件组合成一个应用了，当你要把 vue-router 加进来，只需要配置组件和路由映射，然后告诉 vue-router 在哪里渲染它们。下面是个基本例子：
                            </span>
                            <hr>
                        </li>
                        <li>
                            <p class="title">这是标题</p>
                            <span class="content">
                                用 Vue.js + vue-router 创建单页应用，是非常简单的。使用 Vue.js 时，我们就已经把组件组合成一个应用了，当你要把 vue-router 加进来，只需要配置组件和路由映射，然后告诉 vue-router 在哪里渲染它们。下面是个基本例子：
                            </span>
                            <hr>
                        </li>
                        <li>
                            <p class="title">这是标题</p>
                            <span class="content">
                                用 Vue.js + vue-router 创建单页应用，是非常简单的。使用 Vue.js 时，我们就已经把组件组合成一个应用了，当你要把 vue-router 加进来，只需要配置组件和路由映射，然后告诉 vue-router 在哪里渲染它们。下面是个基本例子：
                            </span>
                            <hr>
                        </li>
                        <li>
                            <p class="title">这是标题</p>
                            <span class="content">
                                用 Vue.js + vue-router 创建单页应用，是非常简单的。使用 Vue.js 时，我们就已经把组件组合成一个应用了，当你要把 vue-router 加进来，只需要配置组件和路由映射，然后告诉 vue-router 在哪里渲染它们。下面是个基本例子：
                            </span>
                            <hr>
                        </li>
                        <li>
                            <p class="title">这是标题</p>
                            <span class="content">
                                用 Vue.js + vue-router 创建单页应用，是非常简单的。使用 Vue.js 时，我们就已经把组件组合成一个应用了，当你要把 vue-router 加进来，只需要配置组件和路由映射，然后告诉 vue-router 在哪里渲染它们。下面是个基本例子：
                            </span>
                            <hr>
                        </li>
                        <li>
                            <p class="title">这是标题</p>
                            <span class="content">
                                用 Vue.js + vue-router 创建单页应用，是非常简单的。使用 Vue.js 时，我们就已经把组件组合成一个应用了，当你要把 vue-router 加进来，只需要配置组件和路由映射，然后告诉 vue-router 在哪里渲染它们。下面是个基本例子：
                            </span>
                            <hr>
                        </li>
                        <li>
                            <p class="title">这是标题</p>
                            <span class="content">
                                用 Vue.js + vue-router 创建单页应用，是非常简单的。使用 Vue.js 时，我们就已经把组件组合成一个应用了，当你要把 vue-router 加进来，只需要配置组件和路由映射，然后告诉 vue-router 在哪里渲染它们。下面是个基本例子：
                            </span>
                            <hr>
                        </li>
                        <li>
                            <p class="title">这是标题</p>
                            <span class="content">
                                用 Vue.js + vue-router 创建单页应用，是非常简单的。使用 Vue.js 时，我们就已经把组件组合成一个应用了，当你要把 vue-router 加进来，只需要配置组件和路由映射，然后告诉 vue-router 在哪里渲染它们。下面是个基本例子：
                            </span>
                            <hr>
                        </li>
                        <li>
                            <p class="title">这是标题</p>
                            <span class="content">
                                用 Vue.js + vue-router 创建单页应用，是非常简单的。使用 Vue.js 时，我们就已经把组件组合成一个应用了，当你要把 vue-router 加进来，只需要配置组件和路由映射，然后告诉 vue-router 在哪里渲染它们。下面是个基本例子：
                            </span>
                            <hr>
                        </li>
                        <li>
                            <p class="title">这是标题</p>
                            <span class="content">
                                用 Vue.js + vue-router 创建单页应用，是非常简单的。使用 Vue.js 时，我们就已经把组件组合成一个应用了，当你要把 vue-router 加进来，只需要配置组件和路由映射，然后告诉 vue-router 在哪里渲染它们。下面是个基本例子：
                            </span>
                            <hr>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    // 引入 ECharts 模块
    import echarts from 'echarts/lib/echarts'
    import 'echarts/lib/chart/line' // 折线图
    import 'echarts/lib/component/tooltip' // 提示框
    import 'echarts/lib/component/title' //标题组件
    import 'echarts/lib/component/legend' //图例组件

    export default {
        data() {
            return {
                tabs_product_ranking: 'yesterday'
            };
        },
        mounted() {
            // echart init
            let echart_orderform = echarts.init(document.getElementById('echart_orderform'));
            echart_orderform.setOption({
                title: {
                    // text: '折线图堆叠'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['总订单', '已成功', '已发货']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        // saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                        name: '总订单',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '已成功',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '已发货',
                        type: 'line',
                        stack: '总量',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                ]
            })

            // echart when window resize
            let timer
            window.addEventListener('resize', function () {
                if (timer) {
                    return
                }
                timer = setTimeout(function () {
                    echart_orderform.resize()
                    timer = null
                }, 500);
            })
        }
    };

</script>
