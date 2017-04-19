// 所有订单

<template>
    <div class="orders-all">

        <!--search-->
        <dropsearch>
            <el-input v-model="input" placeholder="订单编号" class="ui-input-w"></el-input>
            <el-input v-model="input" placeholder="网点编号" class="ui-input-w"></el-input>
            <el-input v-model="input" placeholder="商品名称" class="ui-input-w"></el-input>
            <el-input v-model="input" placeholder="收货人手机" class="ui-input-w"></el-input>
            <el-select v-model="value" placeholder="支付方式">
                <el-option v-for="item in options" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="value" placeholder="配送方式">
                <el-option v-for="item in options" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="value" placeholder="付款状态">
                <el-option v-for="item in options" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="value" placeholder="出库状态">
                <el-option v-for="item in options" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="value" placeholder="订单来源">
                <el-option v-for="item in options" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="value" placeholder="发货状态">
                <el-option v-for="item in options" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="value" placeholder="是否需要发票">
                <el-option v-for="item in options" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="value" placeholder="是否已开发票">
                <el-option v-for="item in options" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-input v-model="input" placeholder="业务员" class="ui-input-w"></el-input>
            <el-select v-model="value" placeholder="订单类型">
                <el-option v-for="item in options" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="value" placeholder="销售区域">
                <el-option v-for="item in options" :label="item.label" :value="item.value">
                </el-option>
            </el-select>

            <div class="ui-input-group">
                <span class="input-label">交货日期</span>
                <el-date-picker v-model="date_time" type="datetimerange" placeholder="选择时间范围">
                </el-date-picker>
            </div>
        </dropsearch>

        <!--tabel button-->
        <el-button>批量导出</el-button>
        <el-button>批量打印</el-button>

        <!--tabel-->
        <div class="m-t-15">
            <el-table :data="tableData" border style="width: 100%" @selection-change="tabel_select_change">
                <el-table-column type="selection" width="55"></el-table-column>

                <el-table-column prop="tag" label="类型" width="100" :filters="[{ text: '自营', value: '自营' }, { text: '代销', value: '代销' }]"
                    :filter-method="tabel_filter_tag">
                    <template scope="scope">
                        <el-tag :type="scope.row.tag === '自营' ? 'primary' : 'success'" close-transition>{{scope.row.tag}}</el-tag>
                    </template>
                </el-table-column>

                <el-table-column prop="order_number" label="订单编号" sortable width="170">
                    <template scope="scope">
                        <p class="f-color-blue">{{ scope.row.order_number }}</p>
                    </template>
                </el-table-column>

                <el-table-column prop="amount" label="应付金额" sortable width="140"></el-table-column>

                <el-table-column prop="pay_method" label="支付方式" width="100"></el-table-column>

                <el-table-column prop="name" label="会员名"></el-table-column>

                <el-table-column prop="address" label="店铺名"></el-table-column>

                <el-table-column prop="date" label="下单时间" sortable width="180"></el-table-column>

                <el-table-column prop="status" label="订单状态" width="100">
                    <template scope="scope">
                        <p class="f-color-green">{{ scope.row.status }}</p>
                    </template>
                </el-table-column>

                <el-table-column fixed="right" label="操作" width="70">
                    <template scope="scope">
                        <el-button @click="tabel_view(scope.$index, scope.row)" type="text" size="small">查看</el-button>
                        <!--<el-button type="text" size="small">编辑</el-button>-->
                    </template>
                </el-table-column>

            </el-table>

            <el-pagination @size-change="" @current-change="" :current-page="currentPage" :page-size="100" layout="prev, pager, next, jumper"
                :total="1000" class="text-center m-t-15">
            </el-pagination>
        </div>

    </div>
</template>

<script>
    import dropsearch from 'components/dropsearch'
    export default {
        components: {
            dropsearch
        },
        data() {
            return {
                // 筛选
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '',
                input: '',
                date_time: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],

                // 表格
                tableData: [{
                    tag: '自营',
                    order_number: 'abc1234567',
                    amount: '122',
                    pay_method: '现金支付',
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '名优小店',
                    status: '已取消',
                }, {
                    tag: '自营',
                    order_number: 'abc1234567',
                    amount: '122',
                    pay_method: '现金支付',
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '大蛤蟆',
                    status: '已取消',
                }, {
                    tag: '代销',
                    order_number: 'abc1234567',
                    amount: '122',
                    pay_method: '现金支付',
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '狗日的',
                    status: '已完成',
                }, {
                    tag: '自营',
                    order_number: 'abc1234567',
                    amount: '122',
                    pay_method: '现金支付',
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '去你妈',
                    status: '已取消',
                }],

                // 表格行选择
                multipleSelection: [],

                // 分页
                currentPage: 1,
            }
        },
        methods: {
            tabel_select_change(val) {
                this.multipleSelection = val;
                console.log(this.multipleSelection);
            },
            tabel_filter_tag(value, row) {
                return row.tag === value;
            },
            tabel_view(index, row) {
                console.log('查看详情:', index, row);
                this.$router.push({
                    name: 'orders_details',
                    params: {
                        index: index
                    }
                })
            }
        }
    }

</script>
