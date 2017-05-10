<template>
    <div>
        <ui-dropsearch>
            <el-form :data="searchData" :inline="true" class="ui-form-inline">
                <el-form-item label="店铺名称">
                    <el-input placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="会员账号">
                    <el-input placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="推客名">
                    <el-input placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="推荐人">
                    <el-input placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="状态">
                    <el-select v-model="searchData.selected" placeholder="">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="等级">
                    <el-select v-model="searchData.selected" placeholder="">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="加入时间">
                    <el-date-picker type="datetime" placeholder="选择日期时间"></el-date-picker>
                </el-form-item>
            </el-form>
        </ui-dropsearch>

        <el-form :inline="true" class="ui-form-inline">
            <el-input>
                <template slot="prepend">开始行数</template>
            </el-input>
            <el-input>
                <template slot="prepend">导出行数</template>
            </el-input>
            <el-tooltip content="批量导出" placement="top" :open-delay="2000">
                <el-button>批量导出</el-button>
            </el-tooltip>
        </el-form>

        <el-table :data="tableData" class="m-t-15 m-b-15" style="width: 100%">
            <el-table-column prop="" label="订单编号">
            </el-table-column>
            <el-table-column prop="" label="推客昵称">
            </el-table-column>
            <el-table-column prop="" label="会员账号">
            </el-table-column>
            <el-table-column prop="" label="结算金额" sortable>
            </el-table-column>
            <el-table-column prop="" label="佣金等级" sortable>
            </el-table-column>
            <el-table-column prop="" label="结算时间" sortable>
            </el-table-column>
        </el-table>

        <el-pagination @size-change="" @current-change="" :current-page="currentPage" :page-size="100" layout="prev, pager, next, jumper"
            :total="1000" class="text-center">
        </el-pagination>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                currentPage: 1,
                tableData: [],
                searchData: {
                    selected:''
                }
            }
        }
    }
</script>