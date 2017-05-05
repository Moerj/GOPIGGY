<template>
    <div>
        <el-tabs v-model="activeTab" type="card">
            <el-tab-pane label="提现管理">

                <ui-dropsearch>
                    <el-form :inline="true" class="ui-form-inline" label-width="100px">
                        <el-form-item>
                            <el-input style="width:300px;">
                                <el-select slot="prepend" v-model="xxx">
                                    <el-option value="提现编号"></el-option>
                                    <el-option value="选项2"></el-option>
                                    <el-option value="选项3"></el-option>
                                </el-select>
                            </el-input>
                        </el-form-item>
                        <el-form-item label="申请时间">
                            <el-date-picker type="datetime" placeholder="选择日期时间">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="处理状态">
                            <el-select v-model="xxx">
                                <el-option label="item1" value="item1"></el-option>
                                <el-option label="item2" value="item2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </ui-dropsearch>

                <el-button class="m-b-15">批量导出</el-button>
                <el-table :data="tableData" stripe style="width: 100%">
                    <el-table-column type="expand">
                        <template scope="props">
                            <span class="f-color-grey">卖家备注: {{ props.row.remarks }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="id" label="提现编号" min-width="100">
                    </el-table-column>
                    <el-table-column prop="" label="姓名/会员账号" min-width="130">
                    </el-table-column>
                    <el-table-column prop="" label="电话">
                    </el-table-column>
                    <el-table-column prop="" label="账户类型" min-width="100">
                    </el-table-column>
                    <el-table-column prop="" label="开户银行" min-width="100">
                    </el-table-column>
                    <el-table-column prop="" label="开户姓名" min-width="100">
                    </el-table-column>
                    <el-table-column prop="" label="银行账号" min-width="100">
                    </el-table-column>
                    <el-table-column prop="" label="提现金额(手续费)" min-width="150">
                    </el-table-column>
                    <el-table-column prop="" label="用户实收" min-width="100">
                    </el-table-column>
                    <el-table-column prop="" label="提现状态" min-width="100">
                    </el-table-column>
                    <el-table-column prop="" label="申请时间" min-width="100">
                    </el-table-column>
                    <el-table-column prop="" label="处理时间" min-width="100">
                    </el-table-column>
                    <el-table-column label="操作" fixed="right">
                        <template scope="scope">
                            <el-popover placement="left" width="160" trigger="click">
                                <el-form :model="popover" :rules="rules" ref="remarks">
                                    <el-form-item prop="remarks">
                                        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="popover.remarks"></el-input>
                                    </el-form-item>
                                </el-form>
                                <div class="m-t-5 text-right">
                                    <el-button size="mini" type="text" @click="closePopover()">取消</el-button>
                                    <el-button type="primary" size="mini" @click="savePopover(scope.$index)">确定</el-button>
                                </div>
                                <el-button size="mini" slot="reference">备注</el-button>
                            </el-popover>

                        </template>
                    </el-table-column>
                </el-table>

            </el-tab-pane>

            <el-tab-pane label="提现设置">
                开发中...
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                xxx: '',
                activeTab: '0',
                tableData: [{
                    id: '123123',
                    remarks: ''
                }],
                popover:{
                    remarks:''
                },
                rules: {
                    remarks: [{
                        required: true,
                        message: '请输入备注内容',
                        trigger: 'blur'
                    }]
                }
            }
        },
        methods: {
            closePopover() {
                document.body.click()
                this.popover.remarks = ''
            },
            savePopover(index) {
                this.$refs['remarks'].validate((valid) => {
                    if (valid) {
                        this.tableData[index].remarks = this.popover.remarks
                        this.closePopover()
                    } else {
                        return false;
                    }
                });
            },
        }
    }
</script>