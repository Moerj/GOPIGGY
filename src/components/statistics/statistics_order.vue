// 订单统计
<template>
    <div>
        <div class="ui-tips m-b-15">
            <span>网店订单统计已完成订单,并且目前最多只支持查询最近一年的统计情况,如果有特殊需求,请联系客服或者运维!</span>
        </div>

        <dropsearch>
            <el-select v-model="value" placeholder="网点等级">
                <el-option v-for="item in options" :label="item.label" :value="item.value">
                </el-option>
            </el-select>

            <el-date-picker v-model="date_time" type="daterange" align="right" placeholder="选择日期范围">
            </el-date-picker>
        </dropsearch>

        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="" label="来源">
            </el-table-column>
            <el-table-column prop="" label="已完成订单数">
            </el-table-column>
            <el-table-column prop="" label="最近下单" sortable>
            </el-table-column>
            <el-table-column prop="" label="总销售额" sortable>
            </el-table-column>
            <el-table-column prop="" label="总返利成本" sortable>
            </el-table-column>
            <el-table-column prop="" label="总收益" sortable>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    import dropsearch from 'components/dropsearch'
    export default {
        components: {
            dropsearch
        },
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
                tableData: [],
                date_time: []
            }
        }
    }
</script>