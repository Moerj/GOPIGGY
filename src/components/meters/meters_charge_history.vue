<template>
    <div>
        <h1 class="content-title">千米币充值记录</h1>

        <dropsearch>
            <el-select v-model="msgSelected" placeholder="支付类型">
                <el-option v-for="item in msgType" :value="item.value">
                </el-option>
            </el-select>
            <div class="input-group  flex inline">
                <span class="input-label">最小金额</span>
                <el-input class="input-inline-b" style="width:100px;" v-model="msgSearch" placeholder=""></el-input>
            </div>
            <div class="input-group  flex inline">
                <span class="input-label">最大金额</span>
                <el-input class="input-inline-b" style="width:100px;" v-model="msgSearch" placeholder=""></el-input>
            </div>
            <div class="input-group flex inline">
                <span class="input-label">日期</span>
                <el-date-picker v-model="date_time" type="datetimerange" placeholder="选择时间范围">
                </el-date-picker>
            </div>
        </dropsearch>


        <el-button>查看统计</el-button>
        <!--tabel-->
        <div class="m-t-15">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="" label="订单号" sortable>
                    <template scope="scope">
                        <p class="f-color-blue">{{ scope.row.order_number }}</p>
                    </template>
                </el-table-column>

                <el-table-column prop="" label="时间" sortable></el-table-column>

                <el-table-column prop="" label="充值金额" ></el-table-column>

                <el-table-column prop="" label="支付方式"></el-table-column>

                <el-table-column prop="" label="状态"></el-table-column>

                <el-table-column prop="" label="收入"></el-table-column>

                <el-table-column prop="" label="备注"></el-table-column>

                <el-table-column prop="" label="附件" ></el-table-column>

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
