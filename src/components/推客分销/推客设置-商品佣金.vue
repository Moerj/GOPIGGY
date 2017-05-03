<template>
    <div>
        <div class="flex space-between">
            <el-button type="primary" @click="dialogAddProduct=true"><icon name="plus" class="text"></icon>新增商品设置</el-button>
            <el-input placeholder="搜索商品标题" v-model="tableSearchModel" style="width:200px;">
                <el-button slot="append" icon="search"></el-button>
            </el-input>
        </div>

        <el-table :data="tableData" style="width: 100%" class="m-t-15 m-b-15">
            <el-table-column prop="name" label="商品名">
                <template scope="scope">
                    <div class="flex align-center" style="height:50px;">
                        <img :src="scope.row.imagesSrc" height="80%"> {{scope.row.name}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="" label="价格" sortable>
            </el-table-column>
            <el-table-column prop="" label="库存" sortable>
            </el-table-column>
            <el-table-column prop="" label="销量" sortable>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template scope="scope">
                    <el-button type="text" size="small" @click="dialogCommissionSetting = true">修改</el-button>
                    <el-button type="text" size="small"><span class="f-color-red">删除</span></el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination @size-change="" @current-change="" :current-page="tablePage" :page-size="100" layout="prev, pager, next, jumper"
            :total="1000" class="text-center m-t-15">
        </el-pagination>


        <el-dialog title="选择商品" v-model="dialogAddProduct">
            <el-select placeholder="所有分类">
                <el-option label="分类1" value="分类1"></el-option>
                <el-option label="分类2" value="分类2"></el-option>
                <el-option label="分类3" value="分类3"></el-option>
            </el-select>
            <el-input placeholder="搜索商品标题" style="width:200px;">
                <el-button slot="append" icon="search"></el-button>
            </el-input>

            <el-table :data="addData" style="width: 100%" class="m-t-15">
                <el-table-column prop="name" label="商品名">
                    <template scope="scope">
                        <div class="flex align-center" style="height:50px;">
                            <img :src="scope.row.imagesSrc" height="80%"> {{scope.row.name}}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="" label="价格" sortable>
                </el-table-column>
                <el-table-column prop="" label="库存" sortable>
                </el-table-column>
                <el-table-column prop="" label="销量" sortable>
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="80">
                    <template scope="scope">
                        <el-button type="primary" size="small">选择</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <el-pagination @size-change="" @current-change="" :current-page="addPage" :page-size="100" layout="prev, pager, next, jumper"
                :total="1000" class="text-center m-t-15">
            </el-pagination>

        </el-dialog>

        <el-dialog title="佣金设置" v-model="dialogCommissionSetting">
            <div>
                <p class="m-0 f-color-grey m-b-20">使用说明:按<span class="f-color-orange">比例算佣金</span>,填写的获得佣金比例均为订单<span class="f-color-orange">实付金额(包含余额抵扣部分)</span>的比例.</p>
                <div class="ui-card m-b-20 ">
                    <span class="p-r-15">分销佣金类型</span>
                    <el-radio label="按百分比"></el-radio>
                    <el-radio label="按金额"></el-radio>
                </div>
                <div class="ui-card flex align-center space-between f-color-grey p-t-15 p-b-15 m-b-20">
                    <div><icon name="user" class="text" ></icon>消费者</div>
                    <div class="flex inline column arrow flex-center">购买<icon name="long-arrow-right f-20"></icon></div>
                    <div class="flex column flex-center" style="width:100px;">
                        <span><icon name="user" class="text" ></icon>推客A获得</span>
                        <el-input size="small">
                            <span slot="append">%</span>
                        </el-input>
                    </div>
                    <div class="flex inline column arrow flex-center">推荐人<icon name="long-arrow-right f-20"></icon></div>
                    <div class="flex column flex-center" style="width:100px;">
                        <span><icon name="user" class="text" ></icon>推客B获得</span>
                        <el-input size="small">
                            <span slot="append">%</span>
                        </el-input>
                    </div>
                    <div class="flex inline column arrow flex-center">推荐人<icon name="long-arrow-right f-20"></icon></div>
                    <div class="flex column flex-center" style="width:100px;">
                        <span><icon name="user" class="text" ></icon>推客C获得</span>
                        <el-input size="small">
                            <span slot="append">%</span>
                        </el-input>
                    </div>
                </div>
                <div class="ui-card">
                    <p>推客等级产品的佣金</p>
                    <el-table :data="dialogCommissionTableData">
                        <el-table-column property="" label="等级名称">
                        </el-table-column>
                        <el-table-column property="" label="一级佣金"></el-table-column>
                        <el-table-column property="" label="二级佣金"></el-table-column>
                        <el-table-column property="" label="三级佣金"></el-table-column>
                        <el-table-column property="" label="合计佣金"></el-table-column>
                    </el-table>
                </div>
            </div>
            <div slot="footer" class="ui-dialog-footer">
              <el-button type="primary" @click="dialogCommissionSetting = false">保存</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tableSearchModel: '',
                tableData: [{
                    name: 'xxx',
                    imagesSrc: 'http://cn.vuejs.org/images/logo.png'
                }],
                tablePage: 1,
                dialogAddProduct: false,
                addData: [{
                    name: 'xxx',
                    imagesSrc: 'http://cn.vuejs.org/images/logo.png'
                }],
                addPage: 1,
                dialogCommissionSetting: false,
                dialogCommissionTableData:[]
            }
        }
    }
</script>