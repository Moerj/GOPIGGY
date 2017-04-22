<template>
    <div>
        <div class="m-b-20 flex">
            <div class="text-center ui-card grow-1 m-r-5 m-l-5">
                <p class="ui-rmb f-color-orange f-18">0.00</p>
                <p class="f-color-grey">今日交易额</p>
            </div>
            <div class="text-center ui-card grow-1 m-r-5 m-l-5">
                <p class="ui-rmb f-color-orange f-18">0.00</p>
                <p class="f-color-grey">今日交易额</p>
            </div>
            <div class="text-center ui-card grow-1 m-r-5 m-l-5">
                <p class="f-color-blue f-18">0.00</p>
                <p class="f-color-grey">今日交易额</p>
            </div>
            <div class="text-center ui-card grow-1 m-r-5 m-l-5">
                <p class="f-color-blue f-18">0.00</p>
                <p class="f-color-grey">今日交易额</p>
            </div>
        </div>

        <div class="ui-card m-b-20" style="height:300px" v-echarts="chart1"></div>

        <div class="ui-card" style="height:300px" v-echarts="chart2"></div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                chart1: {
                    title: {
                        text: '订单、推客数'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['订单数', '推客数']
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
                            name: '订单数',
                            type: 'line',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '推客数',
                            type: 'line',
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                    ]
                },
                chart2: {
                    title: {
                        text: '交易额、佣金'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['交易额', '佣金']
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
                            name: '交易额',
                            type: 'line',
                            stack: '总量',
                            data: [11, 22, 33, 44, 90, 230, 99]
                        },
                        {
                            name: '佣金',
                            type: 'line',
                            stack: '总量',
                            data: [0, 5, 191, 7, 290, 33, 310]
                        },
                    ]
                }
            }
        }
    }
</script>