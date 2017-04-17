<template>
    <div>
        <h1 class="content-title">千米币明细</h1>

        <dropsearch>
            <el-select v-model="msgSelected" placeholder="业务类型">
                <el-option v-for="item in msgType" :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="msgSelected" placeholder="收支类型">
                <el-option v-for="item in msgType" :value="item.value">
                </el-option>
            </el-select>
            <el-input class="input-inline-b" v-model="msgSearch" placeholder="业务单号"></el-input>
            <div class="input-group  flex inline">
                <span class="input-label">余额区间</span>
                <el-input class="input-inline-b" style="width:100px;" v-model="msgSearch" placeholder="最小值"></el-input>
                <span class="flex flex-center m-l-5 m-r-5">-</span>
                <el-input class="input-inline-b" style="width:100px;" v-model="msgSearch" placeholder="最大值"></el-input>
            </div>
        </dropsearch>


        <el-button>查看统计</el-button>
        <!--tabel-->
        <div class="m-t-15">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="" label="时间" sortable></el-table-column>

                <el-table-column prop="" label="流水号" ></el-table-column>

                <el-table-column prop="" label="业务大类"></el-table-column>

                <el-table-column prop="" label="业务小类" ></el-table-column>

                <el-table-column prop="" label="收入" ></el-table-column>

                <el-table-column prop="" label="支出" ></el-table-column>

                <el-table-column prop="" label="账户余额" ></el-table-column>

                <el-table-column prop="" label="业务单号" ></el-table-column>

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
