<template>
    <div>
        <el-button type="primary">新增等级</el-button>
        <el-table :data="tableData" style="width: 100%" class="m-t-15 m-b-15">
            <el-table-column prop="name" label="等级名称">
            </el-table-column>
            <el-table-column prop="" label="等级条件">
            </el-table-column>
            <el-table-column prop="" label="佣金类型">
            </el-table-column>
            <el-table-column prop="" label="佣金比例">
            </el-table-column>
            <el-table-column prop="" label="操作" fixed="right" width="100">
                <template scope="scope">
                    <el-button type="text" size="small">编辑</el-button>
                    <el-button type="text" size="small"><span class="f-color-red">删除</span></el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination @size-change="" @current-change="" :current-page="currentPage" :page-size="100" layout="prev, pager, next, jumper"
            :total="1000" class="text-center m-t-15">
        </el-pagination>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                tableData:[{
                    name: 'xxxx'
                }],
                currentPage: 1
            }
        }
    }
</script>