<template>
    <div>
        <add :title="ticketName" subtitle="每个用户限购x件某产品" :ticketData="ticketData" :ticketColor="ticketColor" :ticketAdd="showDialog"></add>
        <el-dialog :title="'添加'+ticketName" v-model="dialogVasible">
            <el-form ref="form">
                弹出层的表单...预留
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="closeDialog">取 消</el-button>
                <el-button type="primary" @click="saveDialog">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import add from './_创建活动.vue'
    export default {
        components: {
            add
        },
        data() {
            return {
                ticketName: 'Go竞猜',
                ticketData: [],
                ticketColor: 'yellow',
                dialogVasible: false,
            }
        },
        methods: {
            showDialog() {
                this.dialogVasible = true
                this.$nextTick(() => {
                    this.$refs['form'].resetFields()
                })
            },
            closeDialog(){
                this.dialogVasible = false
            },
            saveDialog(){
                // do saving ....
                this.closeDialog()
            }
        }
    }
</script>