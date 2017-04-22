<template>
    <div>
        <el-button type="primary m-b-15" @click="dialogFormVisible=true">增加提现账户</el-button>

        <el-table :data="bankCardsData" border style="width: 100%">
            <el-table-column prop="type" label="提现类型" width="180">
            </el-table-column>
            <el-table-column prop="" label="提现银行" width="180">
            </el-table-column>
            <el-table-column prop="" label="支行名称">
            </el-table-column>
            <el-table-column prop="" label="账号">
            </el-table-column>
            <el-table-column prop="" label="备注">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template scope="scope">
                    <!--<el-button type="text" size="small">编辑</el-button>-->
                    <el-button type="text" size="small"><span class="f-color-red">删除</span></el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog :title=" orderType+'提现账户' " v-model="dialogFormVisible">
            <el-form :model="dialogForm">
                <el-form-item label="提现类型">
                    <el-select v-model="dialogForm.type" placeholder="选择类型">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="提现银行">
                    <el-input v-model="dialogForm.type" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="支行名称">
                    <el-input v-model="dialogForm.type" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="账号">
                    <el-input v-model="dialogForm.type" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input v-model="dialogForm.type" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formLabelWidth: 300,
                orderType: '新增',
                dialogFormVisible: false,
                bankCardsData: [{
                    type: '现金'
                }],
                dialogForm: {
                    type: ''
                }
            }
        }
    }
</script>