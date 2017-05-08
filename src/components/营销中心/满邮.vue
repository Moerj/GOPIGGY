<template>
    <div>
        <tpl title="创建一个满邮活动" subtitle="全场购物满一定金额 / 件数免邮费" :button-text="pageName">
            <el-button type="primary" @click="showDialog">{{pageName}}</el-button>
        </tpl>

        <el-dialog :title="pageName" :visible.sync="dialogVisable">
            <el-form :model="form" label-width="120px">
                <el-form-item label="活动名称">
                    <el-input v-model="form.name" auto-complete="off" placeholder="限制2-100字"></el-input>
                </el-form-item>
                <el-form-item label="开始时间">
                    <el-date-picker v-model="form.startTime" type="datetime" placeholder="选择日期时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="结束时间">
                    <el-date-picker v-model="form.endTime" type="datetime" placeholder="选择日期时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="展示时间">
                    <el-radio v-model="form.showTimeType" :label="1">立即展示</el-radio>
                    <el-radio v-model="form.showTimeType" :label="2">准备展示</el-radio>
                </el-form-item>
                <el-form-item label="规则设置">
                    <el-checkbox v-model="form.hasMax">上不封顶</el-checkbox>
                    <span class="f-color-grey f-10 p-l-15">按"满x元包邮"自动免去邮费</span>
                    <p>满
                        <el-input v-model="form.full" class="m-l-5 m-r-5" style="width:100px;"></el-input>元</p>
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
                <el-button @click="dialogVisable = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisable = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import tpl from './_创建活动.vue'
    export default {
        components: {
            tpl
        },
        data() {
            return {
                pageName: '添加满邮活动',
                dialogVisable: false,
                form: {
                    name: '',
                    startTime: '',
                    endTime: '',
                    showTimeType: 1,
                    hasMax: false,
                    full: '',
                    selectType: 1,
                    selectedArticle:[],
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
                }
            }
        },
        methods: {
            showDialog() {
                this.dialogVisable = true
            }
        }
    }
</script>