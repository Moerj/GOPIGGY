// 销售总览
<style lang="scss" scoped>
    .chart-h{
        height: 260px;
    }
</style>
<template>
    <div>
        <dropsearch>
            <div class="ui-input-group">
                <span class="input-label">时间</span>
                <el-date-picker v-model="date_time" type="datetimerange" placeholder="选择时间范围">
                </el-date-picker>
            </div>
        </dropsearch>

        <!--tabel1-->
        <el-table :data="tableData1" border class="m-b-15" style="width: 100%">
            <el-table-column prop="" label="已支付订单数">
            </el-table-column>
            <el-table-column prop="" label="发货订单数">
            </el-table-column>
            <el-table-column prop="" label="退货订单数">
            </el-table-column>
            <el-table-column prop="" label="退款订单数">
            </el-table-column>
            <el-table-column prop="" label="总销售额">
            </el-table-column>
            <el-table-column prop="" label="退款总额">
            </el-table-column>
            <el-table-column prop="" label="总成本">
            </el-table-column>
            <el-table-column prop="" label="总毛利">
            </el-table-column>
        </el-table>
        

        <!--销售订单趋势图-->
        <el-card class="m-b-15">
            <div id="order_echart" class="chart-h"></div>
        </el-card>

        <!--销售额趋势图-->
        <el-card class="m-b-15">
            <div id="sales_echart" class="chart-h"></div>
        </el-card>

        <!--tabel2-->
        <el-button class="m-b-15">导出</el-button>
        <el-table :data="tableData2" border class="m-b-15" style="width: 100%">
            <el-table-column prop="date" label="时间">
            </el-table-column>
            <el-table-column prop="" label="总销售额">
            </el-table-column>
            <el-table-column prop="" label="已支付订单数">
            </el-table-column>
            <el-table-column prop="" label="单价">
            </el-table-column>
            <el-table-column prop="" label="总成本">
            </el-table-column>
            <el-table-column prop="" label="总毛利">
            </el-table-column>
            <el-table-column prop="" label="毛利率">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    // 引入 ECharts 模块
    import echarts from 'echarts/lib/echarts'
    import 'echarts/lib/chart/line' // 折线图
    import 'echarts/lib/component/tooltip' // 提示框
    import 'echarts/lib/component/title' //标题组件
    import 'echarts/lib/component/legend' //图例组件

    import dropsearch from 'components/dropsearch'
    export default {
        components: {
            dropsearch
        },
        data() {
            return {
                date_time: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
                tableData1: [],
                tableData2: [],
            }
        },
        mounted() {
            // echart init
            let order_echart = echarts.init(document.getElementById('order_echart'));
            
            order_echart.setOption({
                title: {
                    text: '销售订单趋势'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['已支付订单数', '发货订单数', '退货订单数', '退款订单数']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
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
                        name: '已支付订单数',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '发货订单数',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '退货订单数',
                        type: 'line',
                        stack: '总量',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '退款订单数',
                        type: 'line',
                        stack: '总量',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                ]
            })

            let sales_echart = echarts.init(document.getElementById('sales_echart'));
            sales_echart.setOption({
                title: {
                    text: '销售额趋势'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['总销售额', '退款总额', '总成本', '总毛利']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
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
                        name: '总销售额',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '退款总额',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '总成本',
                        type: 'line',
                        stack: '总量',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '总毛利',
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
                    order_echart.resize()
                    sales_echart.resize()
                    timer = null
                }, 500);
            })
        }
    }
</script>