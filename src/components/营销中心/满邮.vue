<template>
    <div>
        <add :title="ticketName" subtitle="全场购物满一定金额 / 件数免邮费" :ticketData="ticketData" :ticketColor="ticketColor" :ticketAdd="showDialog">
            
        </add>
        
        <el-dialog :title="'添加'+ticketName" v-model="dialogVisable" top="5%">
            <el-form :model="form" ref="form" :rules="rules" label-width="120px">
                <el-form-item label="标签名" prop="label">
                    <el-input v-model="form.label" auto-complete="off" placeholder="限制2-4字"></el-input>
                </el-form-item>
                <el-form-item label="活动标题" prop="title">
                    <el-input v-model="form.title" auto-complete="off" placeholder="限制2-100字"></el-input>
                </el-form-item>
                <el-form-item label="活动描述" prop="subtitle">
                    <el-input v-model="form.subtitle" auto-complete="off" placeholder="限制2-100字"></el-input>
                </el-form-item>
                <el-form-item label="开始时间" prop="startTime">
                    <el-date-picker v-model="form.startTime" type="datetime" placeholder="选择日期时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="结束时间" prop="endTime">
                    <el-date-picker v-model="form.endTime" type="datetime" placeholder="选择日期时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="展示时间">
                    <el-radio v-model="form.showTimeType" :label="1">立即展示</el-radio>
                    <el-radio v-model="form.showTimeType" :label="2">准备展示</el-radio>
                </el-form-item>
                <el-form-item label="规则设置">
                    <el-checkbox v-model="form.hasMax">上不封顶</el-checkbox>
                    <span class="f-color-grey f-10 p-l-15 p-r-15">按"满x元包邮"自动免去邮费</span>
                    <span>满<el-input v-model="form.full" class="m-l-5 m-r-5" style="width:100px;"></el-input>元</span>
                </el-form-item>
                <el-form-item label="参加活动的商品">
                    <el-radio v-model="form.selectType" :label="1">全部商品</el-radio>
                    <el-radio v-model="form.selectType" :label="2">指定商品</el-radio>
                    <el-select v-model="form.selectedArticle" placeholder="输入商品名进行搜索" :disabled="form.selectType==1" multiple filterable class="block">
                        <el-option v-for="item in form.articleOptions" :key="item.value" :label="item.value" :value="item.id">
                            <span>{{ item.value }}</span>
                            <span class="p-l-5 f-color-grey f-10">ID: {{ item.id }}</span>
                        </el-option>
                    </el-select>
                </el-form-item>
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
            add,
        },
        data() {
            return {
                ticketName:'满邮',
                ticketColor:'red',
                dialogVisable: false,

                // 已创建的活动
                ticketData: [],

                // 创建活动数据
                form: {
                    label: '',
                    title: '',
                    subtitle: '',
                    startTime: '',
                    endTime: '',
                    showTimeType: 1,
                    hasMax: false,
                    full: '',
                    selectType: 1,
                    selectedArticle: [],
                    articleOptions: [{
                        value: 'Beijing',
                        id: '01'
                    }, {
                        value: 'Shanghai',
                        id: '02'
                    }, {
                        value: 'Nanjing',
                        id: '03'
                    }, {
                        value: 'Chengdu',
                        id: '04'
                    }, {
                        value: 'Shenzhen',
                        id: '05'
                    }, {
                        value: 'Guangzhou',
                        id: '06'
                    }],
                },

                // 表单验证规则
                rules: {
                    label: [{
                            required: true,
                            message: '请输入活动名称',
                            trigger: 'blur'
                        },
                        {
                            min: 3,
                            max: 4,
                            message: '长度在 3 到 4 个字符',
                            trigger: 'blur'
                        }
                    ],
                    title: [{
                        required: true,
                        message: '输入标题',
                        trigger: 'blur'
                    }],
                    subtitle: [{
                        required: true,
                        message: '输入简要描述',
                        trigger: 'blur'
                    }],
                    startTime: [{
                        type: 'date',
                        required: true,
                        message: '请选择开始时间',
                        trigger: 'change'
                    }],
                    endTime: [{
                        type: 'date',
                        required: true,
                        message: '请选择结束时间',
                        trigger: 'change'
                    }],
                }
            }
        },
        methods: {
            showDialog() {
                this.dialogVisable = true
                this.$nextTick(() => {
                    this.$refs['form'].resetFields()
                })
            },
            closeDialog() {
                this.dialogVisable = false
            },
            saveDialog() {
                this.$refs['form'].validate(valid => {
                    if (!valid) {
                        return false
                    }

                    let newData = {
                        label: this.form.label,
                        title: this.form.title,
                        subtitle: this.form.subtitle
                    }

                    this.ticketData.push(newData)
                    this.closeDialog()

                    this.$message({
                        message:'创建成功!',
                        type:'success'
                    })
                })
            },
        }
    }
</script>