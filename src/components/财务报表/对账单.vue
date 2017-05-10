<template>
    <div>
        <ui-dropsearch>
            <el-form :inline="true" class="ui-form-inline">
                <el-form-item label="明细类别">
                    <el-select v-model="selected" placeholder="">
                        <el-option v-for="item in options" :key="item.id" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="用户名">
                    <el-input placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="交易类型">
                    <el-select v-model="selected" placeholder="">
                        <el-option v-for="item in options" :key="item.id" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="交货日期">
                    <el-date-picker v-model="date_time" type="datetimerange" placeholder="选择时间范围">
                    </el-date-picker>
                </el-form-item>
            </el-form>
        </ui-dropsearch>

        <!--tabel-->
        <div class="m-t-15">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="" label="会员编号">
                    <template scope="scope">
                        <p class="f-color-blue">{{ scope.row.order_number }}</p>
                    </template>
                </el-table-column>

                <el-table-column prop="" label="会员用户名" min-width="120"></el-table-column>

                <el-table-column prop="" label="交易类型"></el-table-column>

                <el-table-column prop="" label="业务类型"></el-table-column>

                <el-table-column prop="" label="交易时间" sortable min-width="100"></el-table-column>

                <el-table-column prop="" label="收入" sortable></el-table-column>

                <el-table-column prop="" label="支出" sortable></el-table-column>
                <el-table-column prop="" label="当前余额"></el-table-column>

                <el-table-column prop="" label="订单号">
                    <template scope="scope">
                        <p class="f-color-blue">{{ scope.row.order_number }}</p>
                    </template>
                </el-table-column>

                <el-table-column prop="" label="备注"></el-table-column>

            </el-table>

            <el-pagination @size-change="" @current-change="" :current-page="currentPage" :page-size="100" layout="prev, pager, next, jumper"
                :total="1000" class="text-center m-t-15">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                options: [{
                    value: '预存款明细'
                }, {
                    value: '信用额度明细'
                }, {
                    value: '内容'
                }, ],
                selected: '',
                date_time: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
                currentPage: 1,

                // 表格
                tableData: [],
            };
        },
    };
</script>