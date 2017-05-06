<template>
    <div>
        <el-form label-width="150px">
            <el-form-item label="开启银行卡提现">
                <el-switch v-model="onCash" on-color="#13ce66" on-text="开启" off-text="关闭">
                </el-switch>
            </el-form-item>
            <el-form-item label="最低提现金额">
                <el-input placeholder="请输入金额" v-model="limitAmount" style="width:300px">
                    <el-select v-model="currencySelected" slot="prepend" placeholder="请选择" style="width:130px">
                        <el-option v-for="item in currencyOptions" :key="item.value" :value="item.value" :label="item.label"></el-option>
                    </el-select>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="save">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                onCash: false,
                limitAmount: 0,
                currencyOptions: [{
                  value: '1',
                  label: '人命币 (rmb)'
                }, {
                  value: '2',
                  label: '欧元 (EUR)'
                }, {
                  value: '3',
                  label: '美金 (Dollar)'
                }],
                currencySelected: ''
            }
        },
        methods: {
            save(){
                console.log('保存数据');
                this.$message({
                    message:'保存成功',
                    type:'success'
                })
            }
        },
        mounted () {
            this.currencySelected = this.currencyOptions[0].value
        }
    }
</script>