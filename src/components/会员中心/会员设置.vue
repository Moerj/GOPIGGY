<template>
    <div>
        <div class="ui-card">
            <span class="ui-title"><icon name="circle-o" class="text f-color-red"></icon>消息通知</span>

            <hr>

            <el-form label-width="100px">
                <el-form-item label="余额变动">
                    <el-checkbox label="消息模板通知" v-model="balanceChanges"></el-checkbox>
                </el-form-item>
                <el-form-item label="积分变动">
                    <el-checkbox label="消息模板通知" v-model="pointsChanges"></el-checkbox>
                </el-form-item>
                <el-form-item label="等级变动">
                    <el-checkbox label="消息模板通知" v-model="levelChanges"></el-checkbox>
                </el-form-item>
            </el-form>

            <hr>

            <el-button type="primary" @click="save">保存</el-button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                balanceChanges: false,
                pointsChanges: false,
                levelChanges: false
            }
        },
        methods: {
            save(){
                this.$message({
                    message:'保存成功!',
                    type:"success"
                })
            }
        }
    }
</script>