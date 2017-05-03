<style lang="scss" scoped>
    .circle-box {
        border-radius: 50%;
        width: 70px;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #eee;
        font-size: 20px;
        transition: .6s;
        &:hover{
            box-shadow: 0 1px 3px rgba(black,.2);
        }
    }

    .chart-box {
        height: 300px;
    }
</style>
<template>
    <div>
        <div class="ui-card m-b-15">
            <p class="ui-title">
                <icon name="circle-o" class="text f-color-red"></icon>数据统计
            </p>
            <div class="flex">
                <div class="grow-1 flex column flex-center">
                    <p>成交客户
                        <icon name="question-circle" class="text f-color-green m-l-5"></icon>
                    </p>
                    <span class="circle-box f-color-red">21</span>
                    <p>昨日新增<span>0</span>人
                        <icon name="arrow-up" class="text f-color-red"></icon>
                    </p>
                </div>
                <div class="grow-1 flex column flex-center">
                    <p>会员
                        <icon name="question-circle" class="text f-color-green m-l-5"></icon>
                    </p>
                    <span class="circle-box f-color-red">1802</span>
                    <p>昨日新增<span>0</span>人
                        <icon name="arrow-up" class="text f-color-red"></icon>
                    </p>
                </div>
            </div>
        </div>


        <el-row :gutter="20">
            <el-col :span="12">
                <div class="ui-card">
                    <p class="ui-title">
                        <icon name="circle-o" class="text f-color-red"></icon>新增用户统计图
                    </p>
                    <div class="chart-box" v-echarts="addUserEchart"></div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="ui-card">
                    <p class="ui-title">
                        <icon name="circle-o" class="text f-color-red"></icon>会员等级分布图
                    </p>
                    <div class="chart-box" v-echarts="memberLevelEchart"></div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import 'echarts/lib/chart/pie'
    export default {
        data() {
            return {
                addUserEchart: {
                    title: {
                        // text: '折线图堆叠'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['新增用户', '新增成交用户']
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
                            name: '新增用户',
                            type: 'line',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '新增成交用户',
                            type: 'line',
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                    ]
                },
                memberLevelEchart: {
                    title: {
                        text: '会员等级分布图',
                        // subtext: '纯属虚构',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['普通会员', '银卡会员', '金卡会员', '游客', '手动升级']
                    },
                    series: [{
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [{
                                value: 335,
                                name: '普通会员'
                            },
                            {
                                value: 310,
                                name: '银卡会员'
                            },
                            {
                                value: 234,
                                name: '金卡会员'
                            },
                            {
                                value: 135,
                                name: '游客'
                            },
                            {
                                value: 1548,
                                name: '手动升级'
                            }
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }]
                }
            }
        }
    }
</script>