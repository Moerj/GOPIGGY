// 订单详情
<style lang="scss" scoped>
    @import 'src/sass/layout/public.scss';
    .infobox {
        font-size: 12px;
        color: rgba(black, .4);
        border: 1px solid #eee;
        margin-left: -1px;
        padding: 15px;
        max-width: 300px;
        &:first-of-type {
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }
        &:last-of-type {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
        p {
            margin: 5px 0;
        }
        .title {
            margin: 10px 0;
            font-size: 14px;
            color: dimgray;
            &:first-of-type {
                margin-top: 0;
            }
        }
    }

    .product-img{
        min-width: 70px;
        height: 70px;
    }
    .product-title{
        font-size: 12px;
        line-height: normal;
        height: 53px;
        @include text-clamp(3);
    }

    .table-total{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background-color: #eef1f6;
        padding: 15px 0;
        margin: 0;
        >span{
            margin-right: 15px;
            font-size: 12px;
            color:darkgray;
        }
        b{
            color: coral;
            font-size: 14px;
            &::before{
                content: '¥';
                padding-right: 5px;
            }
        }
    }

</style>

<template>
    <div>
        <!--<el-button @click="$router.go(-1)">返回</el-button>-->
        <el-button v-goback>返回</el-button>

        <hr>

        <div class="flex m-b-15">
            <div class="infobox grow-1">
                <p class="title">当前状态: <span>订单关闭</span></p>
                <p>自动过期:</p>

                <p class="title">订单详情</p>
                <p>订单编号: <b>xxx</b></p>
                <p>下单时间: <b>xxx</b></p>
                <p>配送点: <b>xxx</b></p>
            </div>
            <div class="infobox grow-1">
                <p class="title">买家信息</p>
                <p>卖家: <span>xxx</span></p>
                <p>配送方式: <b>xxx</b></p>
                <p>收货人: <b>xxx</b></p>
                <p>收货地址: <b>xxx</b></p>
                <p>买家留言: <b>xxx</b></p>
            </div>
        </div>

        <el-table :data="tableData" border style="width: 100%;">
            <el-table-column prop="product" label="商品" width="400">
                <template scope="scope">
                    <div class="flex flex-center p-t-10 p-b-10">
                        <img src="../../images/logo.png" class="product-img m-r-10">
                        <span class="product-title grow-1">{{ scope.row.name }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="price" label="单价" width="100">
            </el-table-column>
            <el-table-column prop="number" label="数量" width="100">
            </el-table-column>
            <el-table-column prop="offer" label="优惠">
            </el-table-column>
            <el-table-column prop="" label="涨价或减价">
            </el-table-column>
            <el-table-column prop="" label="小计(元)">
            </el-table-column>
            <el-table-column prop="" label="售后">
            </el-table-column>
            <el-table-column prop="" label="状态">
            </el-table-column>
        </el-table>
        <p class="table-total">
            <span>运费: <b>0.00</b></span>
            <span>总价: <b>0.00</b></span>
        </p>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    price: '100',
                    name: 'Vue.js（读音 /vjuː/，类似于 view） 是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    price: '123',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    price: '111',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    price: '2016',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods: {

        }
    }

</script>
