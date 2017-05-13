<template>
    <div>
        <ui-dropsearch>
            <el-form :inline="true" class="ui-form-inline">
                <el-form-item label="业务类型">
                    <el-select v-model="msgSelected" placeholder="">
                        <el-option :key="item.id" v-for="item in msgType" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="收支类型">
                    <el-select v-model="msgSelected" placeholder="">
                        <el-option :key="item.id" v-for="item in msgType" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="业务单号">
                    <el-input class="ui-input-w" v-model="msgSearch" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="余额区间">
                    <div class="flex inline align-center">

                        <el-input placeholder="最小值" v-model="msgSearch" style="width:70px;">
                        </el-input>
                        <span class="m-l-5 m-r-5">-</span>
                        <el-input style="width:70px;" v-model="msgSearch" placeholder="最大值"></el-input>
                    </div>
                </el-form-item>
            </el-form>
        </ui-dropsearch>


        <el-button>查看统计</el-button>
        <!--tabel-->
        <div class="m-t-15">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="" label="时间" sortable></el-table-column>

                <el-table-column prop="" label="流水号"></el-table-column>

                <el-table-column prop="" label="业务大类"></el-table-column>

                <el-table-column prop="" label="业务小类"></el-table-column>

                <el-table-column prop="" label="收入"></el-table-column>

                <el-table-column prop="" label="支出"></el-table-column>

                <el-table-column prop="" label="账户余额"></el-table-column>

                <el-table-column prop="" label="业务单号"></el-table-column>

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