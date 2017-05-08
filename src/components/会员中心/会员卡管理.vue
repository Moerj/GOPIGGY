<style lang="scss" scoped>
    @import 'src/scss/layout/public.scss';
    .member-card {
        height: 600px;
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
        .card {
            position: absolute;
            z-index: 1;
            top: 200px;
            border-radius: 10px;
            width: 290px;
            height: 150px;
            transform: translateX(2px);
            background-repeat: no-repeat;
            background-position: center;
            >.head {
                font-size: 10px;
                color: white;
                position: absolute;
                top: 5px;
                right: 10px;
                margin: 0;
            }
            >.title {
                width: 100%;
                margin: 0;
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                text-align: center;
                color: white;
                font-size: 18px;
            }
            >.time {
                font-size: 10px;
                transform-origin: right;
                text-align: right;
                position: absolute;
                bottom: 5px;
                right: 10px;
                margin: 0;
                color: white;
            }
            >.imgbox {
                $size: 40px;
                width: $size;
                height: $size;
                position: absolute;
                bottom: 5px;
                left: 5px;
                border: 2px solid white;
                @include img-circle($size);
            }
        }
        .phone {
            height: 800px;
        }
    }
</style>
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
                    <el-tooltip placement="top" effect="light">
                        <div slot="content">
                            累计成功交易10笔<br> 或 累计购买金额500元<br> 或 累计积分达到1000分
                        </div>
                        <el-tag type="success" v-if="scope.row.levelUpType==1">自动升级</el-tag>
                    </el-tooltip>
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

        <el-dialog :title="dialog.title" v-model="dialog.active" top="5%" size="large">
            <el-row>
                <el-col :span="12">
                    <div class="member-card">
                        <div class="card" :style="cardStyle">
                            <p class="head">美乐生活</p>
                            <p class="title">手动升级</p>
                            <p class="time">2015.09.10 - 2018.01.01</p>
                            <div class="imgbox">
                                <img src="~src/images/maotouying.png">
                            </div>
                        </div>
                        <img class="phone" src="~src/images/member-card.png">
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="p-l-20 p-r-20">
                        <el-form :model="dialogData" label-width="100px" ref="addForm">
                            <el-tabs v-model="activeTab" type="card">
                                <el-tab-pane label="基本设置" name="基本设置">
                                    <el-form-item label="会员卡背景色">
                                        <el-color-picker v-model="dialogData.cardColor"></el-color-picker>
                                    </el-form-item>
                                    <el-form-item label="会员卡背景">
                                        <el-upload action="https://jsonplaceholder.typicode.com/posts/" :file-list="cardBgFile" :on-success="bgUploadSuccess" :on-remove="bgUploadRemove">
                                            <el-button size="small" type="primary">点击上传</el-button>
                                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb，建议尺寸: 600*334</div>
                                        </el-upload>
                                    </el-form-item>
                                    <el-form-item label="会员卡名称">
                                        <el-input v-model="dialogData.name" class="ui-input-w"></el-input>
                                    </el-form-item>
                                    <el-form-item label="等级值">
                                        <el-input-number v-model="dialogData.level" :min="1" :max="3"></el-input-number>
                                    </el-form-item>
                                    <el-form-item label="折扣">
                                        <el-input v-model="dialogData.discount" style="width:194px;" placeholder="留空或10.0为不打折">
                                            <span slot="append">折</span>
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="包邮特权">
                                        <el-checkbox v-model="dialogData.isMailingFee" label="包邮"></el-checkbox>
                                    </el-form-item>
                                </el-tab-pane>
                                <el-tab-pane label="升级条件" name="升级条件">
                                    <el-form-item label="升级条件">
                                        <el-select v-model="dialogData.levelUpType">
                                            <el-option v-for="item in levelUpTypeOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                                        </el-select>
                                        <span class="p-l-10 f-12 f-color-grey">备注:升级条件保存后不可修改</span>
                                    </el-form-item>
                                </el-tab-pane>
                                <el-tab-pane label="会员卡详情" name="会员卡详情">
                                    <el-form-item label="使用须知">
                                        <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="dialogData.textarea" class="block"></el-input>
                                    </el-form-item>
                                    <el-form-item label="客服电话">
                                        <el-input type="number" v-model="dialogData.customerService" class="ui-input-w"></el-input>
                                    </el-form-item>
                                </el-tab-pane>
                            </el-tabs>
                        </el-form>
                    </div>
                </el-col>
            </el-row>
            <div slot="footer" class="p-t-5 text-center">
                <el-button @click="dialog.active = false">取 消</el-button>
                <el-button type="primary" @click="saveData(dialog.index)">保 存</el-button>
            </div>
        </el-dialog>

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
                    cardColor: '#47C44D',
                    discount: 2,
                    isMailingFee: true,
                    textarea: '好麻烦啊',
                    customerService: '10000',
                    bgImgSrc: '',
                }],
                dialog: {
                    active: false,
                    index: null,
                    title: '',
                },
                dialogData: {},
                levelUpTypeOptions: [{
                    value: 1,
                    label: '自动升级'
                }, {
                    value: 0,
                    label: '手动升级'
                }],
                preferentialOptions: ['2折', '包邮', '不包邮'],
                cardStyle: {},
                cardBgFile: [],
            }
        },
        methods: {
            clearDialog(){
                this.$set(this.cardStyle, 'background-color', '')
                this.dialogData = {
                    name: '',
                    level: 0,
                    levelUpType: '',
                    cardColor: '',
                    discount:'',
                    isMailingFee: false,
                    textarea: '',
                    customerService: '',
                    bgImgSrc: '',
                }
            },
            openDialog(index) {
                this.dialog.active = true

                if (index === undefined) {
                    this.dialog.title = '新增会员卡'
                    this.dialog.index = null
                    this.clearDialog()
                } else {
                    this.dialog.title = '编辑会员卡'
                    this.dialog.index = index

                    let data = Object.assign({}, this.tableData[index]  )

                    // 读取编辑数据
                    this.dialogData = data

                    // 设置样板颜色
                    this.$set(this.cardStyle, 'background-color', data.cardColor)
                }
            },
            saveData(index) {
                let newData = Object.assign({}, this.dialogData)
                if (index === null) {
                    this.tableData.push(newData)
                } else {
                    this.$set(this.tableData, index, newData)
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
            },
            bgUploadRemove(file, fileList) {
                // console.log(file, fileList);
                this.$set(this.cardStyle, 'background-image', '')
            },
            bgUploadSuccess(response, file, fileList) {
                // console.log(file, fileList);
                this.$set(this.cardStyle, 'background-image', `url('${file.url}')`)
            },
        }
    }
</script>