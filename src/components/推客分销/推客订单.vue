<template>
    <div>
        <ui-dropsearch>
            <el-form :inline="true" class="ui-form-inline">
                <el-form-item label="订单号">
                    <el-input class="ui-input-w" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="结算时间">
                    <el-date-picker v-model="settleTime" type="datetime" placeholder="">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="来源店铺">
                    <el-input class="ui-input-w" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="来源推客">
                    <el-input class="ui-input-w" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="来源手机">
                    <el-input class="ui-input-w" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="订单状态">
                    <el-select placeholder="">
                        <el-option label="全部" value="all"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="收货地址">
                    <el-select placeholder="">
                        <el-option label="全部" value="all"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </ui-dropsearch>

        <!--form-->
        <div>
            <el-tooltip content="开始行数" placement="top" :open-delay="2000">
                <el-input class="ui-input-w" placeholder="开始行数"></el-input>
            </el-tooltip>
            <el-tooltip content="导出行数" placement="top" :open-delay="2000">
                <el-input class="ui-input-w" placeholder="导出行数"></el-input>
            </el-tooltip>
            <el-tooltip content="批量导出" placement="top" :open-delay="2000">
                <el-button>批量导出</el-button>
            </el-tooltip>

            <el-table :data="tableData" class="m-t-15 m-b-15" style="width: 100%">
                <el-table-column prop="createTime" label="创建时间" sortable>
                </el-table-column>
                <el-table-column prop="buyer" label="买家">
                </el-table-column>
                <el-table-column prop="orderInfo" label="订单信息">
                    <template scope="scope">
                        <span @click="fetchDetailsData(scope.$index)" class="f-color-blue ui-cursor-pointer">{{scope.row.orderInfo}} <i class="fa fa-search"></i></span>
                    </template>
                </el-table-column>
                <el-table-column prop="paymentAmount" label="付款金额">
                </el-table-column>
                <el-table-column prop="commission" label="佣金">
                </el-table-column>
                <el-table-column prop="source" label="来源推客">
                </el-table-column>
                <el-table-column prop="endTime" label="结算时间" sortable>
                </el-table-column>
                <el-table-column prop="status" label="状态" width="80">
                    <template scope="scope">
                        <span class="f-color-orange" v-if="scope.row.status==0">未结算</span>
                        <span class="f-color-green" v-else>已结算</span>
                    </template>
                </el-table-column>
            </el-table>

            <el-pagination @size-change="" @current-change="" :current-page="currentPage" :page-size="100" layout="prev, pager, next, jumper"
                :total="1000" class="text-center">
            </el-pagination>
        </div>

        <!--dialog-->
        <el-dialog title="查看订单详情" v-model="showOrderDetails">
            <el-table :data="detailsData">
                <el-table-column property="name" label="商品名称"></el-table-column>
                <el-table-column property="amount" label="商品数量"></el-table-column>
                <el-table-column property="priceTotal" label="商品总价">
                    <template scope="scope">
                        <span class="f-color-orange ui-rmb">{{scope.row.priceTotal}}</span>
                    </template>
                </el-table-column>
                <el-table-column property="commission" label="对应佣金">
                    <template scope="scope">
                        <span class="f-color-green ui-rmb">{{scope.row.priceTotal}}</span>
                    </template>
                </el-table-column>
            </el-table>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                settleTime: '',
                tableData: [{
                    createTime: '2012-01-01',
                    buyer: 'haofe',
                    orderInfo: 'abc123425435',
                    paymentAmount: '10',
                    commission: '1',
                    source: 'bbc',
                    endTime: '2012-01-01',
                    status: 0
                }, {
                    createTime: '2012-01-01',
                    buyer: 'pagoe',
                    orderInfo: 'ccc123123123',
                    paymentAmount: '33',
                    commission: '12',
                    source: 'hhkg',
                    endTime: '2012-03-11',
                    status: 1
                }],
                showOrderDetails: false,
                currentPage: 1,
                detailsData: [{
                    name: 'hellow keti',
                    amount: 1,
                    priceTotal: 100,
                    commission: 0.00
                }]
            }
        },
        methods: {
            fetchDetailsData(rowIndex) {
                console.log(rowIndex);
                this.showOrderDetails = true
            }
        }
    }
</script>