<template>
    <div>
        <ui-dropsearch>
            <el-form :inline="true" class="ui-form-inline" label-width="100px">
                <el-form-item>
                    <el-input placeholder="会员账号" style="width:300px;">
                        <el-select slot="prepend" placeholder="会员账号">
                            <el-option label="餐厅名" value="1"></el-option>
                            <el-option label="订单号" value="2"></el-option>
                            <el-option label="用户电话" value="3"></el-option>
                        </el-select>
                    </el-input>
                </el-form-item>
                <el-form-item label="时间">
                    <el-date-picker type="datetime" placeholder="选择日期时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="明细">
                    <el-input placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="类型">
                    <el-select placeholder="">
                        <el-option value="item1"></el-option>
                        <el-option value="item2"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </ui-dropsearch>

        <!--table buttons-->
        <div class="ui-form-inline m-b-15">
            <el-input>
                <span slot="prepend">开始行数</span>
            </el-input>
            <el-input>
                <span slot="prepend">导出行数</span>
            </el-input>
            <el-button>批量导出</el-button>
        </div>

        <el-table :data="tableData">
            <el-table-column prop="account" label="会员账号">
            </el-table-column>
            <el-table-column prop="" label="会员昵称">
            </el-table-column>
            <el-table-column prop="" label="手机号">
            </el-table-column>
            <el-table-column prop="" label="金额" sortable>
            </el-table-column>
            <el-table-column prop="" label="余额" sortable>
            </el-table-column>
            <el-table-column prop="" label="时间" sortable>
            </el-table-column>
            <el-table-column prop="" label="类型|明细|编号">
            </el-table-column>
        </el-table>

        <el-pagination @size-change="" @current-change="" :current-page="currentPage" :page-size="100" layout="prev, pager, next, jumper"
            :total="1000" class="text-center m-t-15">
        </el-pagination>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                currentPage: 1,
                tableData:[]
            }
        }
    }
</script>