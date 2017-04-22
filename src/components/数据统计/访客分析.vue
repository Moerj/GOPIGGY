// 访客分析
<template>
    <div>

        <ui-dropsearch>
            <el-select v-model="value" placeholder="全部店铺">
                <el-option v-for="item in options" :label="item.label" :value="item.value">
                </el-option>
            </el-select>

            <el-date-picker v-model="date_time" type="daterange" align="right" placeholder="选择日期范围">
            </el-date-picker>
        </ui-dropsearch>

        <el-table :data="tableData" style="width: 100%">
            <el-table-column align="center" prop="UV" label="访问数量(UV)">
                <template scope="scope">
                    {{scope.row.UV}}
                    <el-tooltip content="每日的访客浏览数量" placement="top" effect="light">
                        <i class="fa fa-question-circle m-l-5"></i>
                    </el-tooltip>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="PV" label="浏览次数(PV)">
                <template scope="scope">
                    {{scope.row.PV}}
                    <el-tooltip content="平均浏览数量" placement="top" effect="light">
                        <i class="fa fa-question-circle m-l-5"></i>
                    </el-tooltip>
                </template>
            </el-table-column>
        </el-table>

        <div v-echarts="echartData" style="height:300px">

        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                options: [{
                    value: '1',
                    label: '等级1'
                }, {
                    value: '2',
                    label: '等级2'
                }, {
                    value: '3',
                    label: '等级3'
                }],
                value: '',
                tableData: [{
                    UV: 1,
                    PV: 2
                }],
                date_time: [],
                echartData: {
                    title: {
                        // text: '销售订单趋势'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['UV', 'PV']
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
                            name: 'UV',
                            type: 'line',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: 'PV',
                            type: 'line',
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                    ]
                }
            }
        }
    }
</script>