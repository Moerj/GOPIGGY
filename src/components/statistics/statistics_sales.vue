// 商品销量统计
<template>
    <div>
        <div class="ui-tips">
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

        <el-button class="m-b-15">导出</el-button>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="name" label="商品名">
                <template scope="scope">
                    <div class="flex align-center" style="height:50px;">
                        <img :src="scope.row.imagesSrc" height="80%"> {{scope.row.name}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="sales" label="销量" width="100">
            </el-table-column>
            <el-table-column prop="" label="总销售额" sortable>
            </el-table-column>
            <el-table-column prop="" label="总返利成本" sortable>
            </el-table-column>
            <el-table-column prop="" label="单品返利成本" sortable>
            </el-table-column>
            <el-table-column prop="" label="返利层级" sortable>
            </el-table-column>
            <el-table-column prop="" label="UGC(篇)" sortable>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template scope="scope">
                    <el-button type="text" size="small">推广</el-button>
                    <el-button type="text" size="small"><span class="f-color-red">删除</span></el-button>
                </template>
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
                tableData: [{
                    name: 'baba商品',
                    imagesSrc: 'http://cn.vuejs.org/images/logo.png',
                    sales: '10',
                }],
                date_time: []
            }
        }
    }
</script>