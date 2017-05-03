<template>
    <div>
        <el-button type="primary" class="m-b-15" @click="openDialog()">
            <icon name="plus" class="text"></icon>新增会员卡
        </el-button>

        <el-table :data="tableData">
            <el-table-column prop="name" label="会员卡名称">
            </el-table-column>
            <el-table-column prop="level" label="会员等级值">
            </el-table-column>
            <el-table-column label="升级模式">
                <template scope="scope">
                    <el-tag type="success" v-if="scope.row.levelUpType==1">自动升级</el-tag>
                    <el-tag type="warning" v-if="scope.row.levelUpType==0">手动升级</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="基础权益">
                <template scope="scope">
                    <el-tag type="primary" class="m-r-5" v-if="scope.row.isMailingFee">包邮</el-tag>
                    <el-tag type="primary" class="m-r-5" v-if="scope.row.discount">{{scope.row.discount}}折</el-tag>
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="180">
                <template scope="scope">
                    <el-button class="m-0" type="" size="mini">查看会员</el-button>
                    <el-button class="m-0" type="" size="mini" @click="openDialog(scope.$index)">编辑</el-button>
                    <el-button class="m-0" type="danger" size="mini" @click="delData(scope.$index)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-form :model="dialog.data" label-width="100px" ref="addForm">
            <el-dialog :title="dialog.title" v-model="dialog.active" top="5%">
                <div class="grow-1">
                    <el-tabs v-model="activeTab" type="card">
                        <el-tab-pane label="基本设置" name="基本设置">
                            <el-form-item label="会员卡背景色">
                                <el-color-picker v-model="dialog.data.cardColor"></el-color-picker>
                            </el-form-item>
                            <el-form-item label="会员卡背景">
                                <ui-img-upload action="https://jsonplaceholder.typicode.com/posts/" old-url=""></ui-img-upload>
                                <span class="f-color-grey">建议尺寸: 600*334</span>
                            </el-form-item>
                            <el-form-item label="会员卡名称">
                                <el-input v-model="dialog.data.name" class="ui-input-w"></el-input>
                            </el-form-item>
                            <el-form-item label="等级值">
                                <el-input-number v-model="dialog.data.level" :min="1" :max="3"></el-input-number>
                            </el-form-item>
                            <el-form-item label="折扣">
                                <el-input v-model="dialog.data.discount" style="width:194px;" placeholder="留空或10.0为不打折">
                                    <span slot="append">折</span>
                                </el-input>
                            </el-form-item>
                            <el-form-item label="包邮特权">
                                <el-checkbox v-model="dialog.data.isMailingFee" label="包邮"></el-checkbox>
                            </el-form-item>
                        </el-tab-pane>
                        <el-tab-pane label="升级条件" name="升级条件">
                            <el-form-item label="升级条件">
                                <el-select v-model="dialog.data.levelUpType">
                                    <el-option v-for="item in levelUpTypeOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                                </el-select>
                                <span class="p-l-10 f-12 f-color-grey">备注:升级条件保存后不可修改</span>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="text">
                                    <icon name="plus" class="text"></icon>新增购买会员卡</el-button>
                                <span class="f-color-grey f-12 p-l-10">最多可设置5类</span>
                            </el-form-item>
                        </el-tab-pane>
                        <el-tab-pane label="会员卡详情" name="会员卡详情">
                            <el-form-item label="使用须知">
                                <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="dialog.data.textarea" class="block"></el-input>
                            </el-form-item>
                            <el-form-item label="客服电话">
                                <el-input type="number" v-model="dialog.data.customerService" class="ui-input-w"></el-input>
                            </el-form-item>
                        </el-tab-pane>
                    </el-tabs>
                </div>
                <div slot="footer" class="p-t-5">
                    <el-button @click="dialog.active = false">取 消</el-button>
                    <el-button type="primary" @click="saveData()">保 存</el-button>
                </div>
            </el-dialog>
        </el-form>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                activeTab: '基本设置',
                tableData: [{
                    name: '银卡会员',
                    level: 3,
                    levelUpType: 1,
                    cardColor: '#20a0ff',
                    discount: 2,
                    isMailingFee: true,
                    textarea: '好麻烦啊',
                    customerService: '10000'
                }],
                dialog: {
                    active: false,
                    index: null,
                    title: '',
                    data: {
                        name: '',
                        level: 0,
                        levelUpType: '',
                        cardColor: null,
                        isMailingFee: true,
                        textarea: '',
                        customerService: ''
                    },
                },
                levelUpTypeOptions: [{
                    value: 1,
                    label: '自动升级'
                }, {
                    value: 0,
                    label: '手动升级'
                }],
                preferentialOptions: ['2折', '包邮', '不包邮'],
            }
        },
        methods: {
            openDialog(index) {
                this.dialog.active = true
                if (index === undefined) {
                    this.dialog.title = '新增会员卡'
                    this.dialog.index = null
                    this.$refs['addForm'].resetFields();
                } else {
                    this.dialog.title = '编辑会员卡'
                    this.dialog.index = index
                    let data = Object.assign({}, this.tableData[index])
                    for (let key in data) {
                        this.dialog.data[key] = data[key]
                    }
                }
            },
            saveData() {
                let i = this.dialog.index
                if (i === null) {
                    this.tableData.push(this.dialog.data)
                } else {
                    let data = this.tableData[i]
                    for (let key in data) {
                        data[key] = this.dialog.data[key]
                    }
                }
                this.dialog.active = false
                this.$message({
                    message: '保存成功!',
                    type: 'success'
                })
            },
            delData(index) {
                this.$confirm('此操作将永久删除此条记录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.tableData.splice(index, 1)
                    this.dialog.active = false
                })
            }
        }
    }
</script>