<template>
    <div>
        <el-button type="primary" @click="openAddLevel()">新增等级</el-button>
        <el-table :data="tableData" style="width: 100%" class="m-t-15 m-b-15">
            <el-table-column prop="name" label="等级名称">
            </el-table-column>
            <el-table-column prop="" label="等级条件">
            </el-table-column>
            <el-table-column prop="" label="佣金类型">
            </el-table-column>
            <el-table-column prop="" label="佣金比例">
                <template scope="scope">
                    <p class="m-5">1级xxx</p>
                    <p class="m-5">2级xxx</p>
                    <p class="m-5">3级xxx</p>
                </template>
            </el-table-column>
            <el-table-column prop="" label="操作" fixed="right" width="100">
                <template scope="scope">
                    <el-button type="text" size="small" @click="openEditLevel(scope.$index)">编辑</el-button>
                    <el-button type="text" size="small"><span class="f-color-red">删除</span></el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination @size-change="" @current-change="" :current-page="currentPage" :page-size="100" layout="prev, pager, next, jumper"
            :total="1000" class="text-center m-t-15">
        </el-pagination>


        <el-dialog :title="dialogTitle" v-model="dialogActive">
            <el-form class="ui-form-dialog" :model="dialogData" ref="dialogData">
                <el-form-item label="等级名称" prop="name">
                    <el-input v-model="dialogData.name"></el-input>
                </el-form-item>
                <el-form-item label="等级类型">
                    <el-select placeholder="请选择">
                        <el-option label="分组1" value="分组1"></el-option>
                        <el-option label="分组2" value="分组2"></el-option>
                        <el-option label="分组3" value="分组3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="等级条件" v-if="dialogTitle=='增加等级'">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="佣金计算公式">
                    <div class="ui-card inline-block" style="width:400px">
                        <span>基础佣金比例x倍数 = 实际佣金比例.如果商品有设置自定义佣金比例则按自定义算</span>
                    </div>
                </el-form-item>
                <el-form-item label="一级佣金比例">
                    <el-input>
                        <template slot="prepend">10% x</template>
                        <template slot="append">= &</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="二级佣金比例">
                    <el-input>
                        <template slot="prepend">5% x</template>
                        <template slot="append">= &</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="三级佣金比例">
                    <el-input>
                        <template slot="prepend">3% x</template>
                        <template slot="append">= &</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="等级描述">
                    <el-input type="textarea"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogActive = false">取 消</el-button>
                    <el-button type="primary" @click="dialogActive = false">保 存</el-button>
                </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tableData: [{
                    name: 'xxxx',
                }],
                currentPage: 1,
                dialogData: {},
                dialogTitle: '',
                dialogActive: false,
            }
        },
        methods: {
            openAddLevel() {
                this.dialogData = {}
                this.dialogTitle = '增加等级'
                this.dialogActive = true
                this.resetForm() 
            },
            openEditLevel(index) {
                this.dialogData = Object.assign({},this.tableData[index])
                this.dialogTitle = '编辑等级'
                this.dialogActive = true
            },
            resetForm() {
                let form = this.$refs['dialogData']
                if (form) {
                    form.resetFields();
                }
            },
        },
    }
</script>