// 对账单
<template>
    <div>
        <dropsearch>
            <el-select v-model="msgSelected" placeholder="明细类别">
                <el-option v-for="item in msgType" :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="msgSelected" placeholder="请选择">
                <el-option v-for="item in msgType" :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="msgSelected" placeholder="请选择">
                <el-option v-for="item in msgType" :value="item.value">
                </el-option>
            </el-select>
            <el-input class="ui-input-w" v-model="msgSearch" placeholder="请输入内容"></el-input>
            <div class="ui-input-group">
                <span class="input-label">交货日期</span>
                <el-date-picker v-model="date_time" type="datetimerange" placeholder="选择时间范围">
                </el-date-picker>
            </div>
        </dropsearch>

        <!--tabel-->
        <div class="m-t-15">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="" label="会员编号">
                    <template scope="scope">
                        <p class="f-color-blue">{{ scope.row.order_number }}</p>
                    </template>
                </el-table-column>

                <el-table-column prop="" label="会员用户名" ></el-table-column>

                <el-table-column prop="" label="交易类型" ></el-table-column>

                <el-table-column prop="" label="业务类型"></el-table-column>

                <el-table-column prop="" label="交易时间" sortable></el-table-column>

                <el-table-column prop="" label="收入" sortable></el-table-column>

                <el-table-column prop="" label="支出" sortable></el-table-column>
                <el-table-column prop="" label="当前余额" ></el-table-column>

                <el-table-column prop="" label="订单号"  >
                    <template scope="scope">
                        <p class="f-color-blue">{{ scope.row.order_number }}</p>
                    </template>
                </el-table-column>

                <el-table-column prop="" label="备注" ></el-table-column>

            </el-table>

            <el-pagination @size-change="" @current-change="" :current-page="currentPage" :page-size="100" layout="prev, pager, next, jumper"
                :total="1000" class="text-center m-t-15">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import dropsearch from 'src/components/dropsearch.vue';
    export default {
        components: {
            dropsearch
        },
        data() {
            return {
                activeMailTabs: 'getMail',
                activeMsgType: 'all',
                msgType: [{
                    value: '预存款明细'
                }, {
                    value: '信用额度明细'
                }, {
                    value: '内容'
                }, ],
                msgSelected: '全部',
                msgSearch: '',
                date_time: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
                currentPage: 1,

                // 表格
                tableData: [],
            };
        },
    };

</script>
