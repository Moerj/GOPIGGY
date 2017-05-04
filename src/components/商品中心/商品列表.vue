<template>
    <div>
        <ui-dropsearch>
            <el-form :inline="true" class="ui-form-inline" label-width="100px">
                <el-form-item label="商品名称">
                    <el-input placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="条形码">
                    <el-input placeholder=""></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="请输入内容" style="width:300px;">
                        <el-select slot="prepend" placeholder="SKU商家编码" v-model="selected.tmp">
                            <el-option label="餐厅名" value="1"></el-option>
                            <el-option label="订单号" value="2"></el-option>
                            <el-option label="用户电话" value="3"></el-option>
                        </el-select>
                    </el-input>
                </el-form-item>
                <el-form-item label="类目">
                    <el-select v-model="selected.tmp">
                        <el-option value="item1"></el-option>
                        <el-option value="item2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="品牌">
                    <el-select v-model="selected.tmp">
                        <el-option value="item1"></el-option>
                        <el-option value="item2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="销售渠道">
                    <el-select v-model="selected.tmp">
                        <el-option value="item1"></el-option>
                        <el-option value="item2"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </ui-dropsearch>

        <!--table button group-->
        <div class="flex space-between m-b-15">
            <div>
                <el-button type="primary" @click="dialogAddData()">新增商品</el-button>
                <el-dropdown @command="dropdownCommand">
                    <el-button>
                        批量操作<i class="el-icon-caret-bottom el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="分类">分类</el-dropdown-item>
                        <el-dropdown-item disabled>推广</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-button class="m-0">导入</el-button>
                <el-button class="m-0">导出</el-button>
            </div>
            <div>
                <el-popover placement="left" title="更改列显示" width="" trigger="click">
                    <div class="p-15">
                        <el-checkbox label="图片" v-model="column['图片']"></el-checkbox>
                        <el-checkbox label="商品名称" disabled v-model="column['商品名称']"></el-checkbox>
                        <el-checkbox label="SPU" v-model="column['SPU']"></el-checkbox>
                        <el-checkbox label="商品类目" v-model="column['商品类目']"></el-checkbox>
                        <el-checkbox label="品牌" v-model="column['品牌']"></el-checkbox>
                        <el-checkbox label="销售价" v-model="column['销售价']"></el-checkbox>
                        <el-checkbox label="库存" v-model="column['库存']"></el-checkbox>
                        <el-checkbox label="销售渠道" v-model="column['销售渠道']"></el-checkbox>
                    </div>
                    <el-button slot="reference">更改列显示</el-button>
                </el-popover>
            </div>
        </div>

        <!--table-->
        <el-table border :data="tableData" @selection-change="tableSelectionChange" style="width: 100%">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column prop="img" label="图片" width="150" v-if="column['图片']">
                <template scope="scope">
                    <div class="flex flex-center p-5">
                        <img :src="scope.row.imgSrc" width="100%" height="100%">
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="productName" label="商品名称" v-if="column['商品名称']">
            </el-table-column>
            <el-table-column prop="SPU" label="SPU商家编码" v-if="column['SPU']">
            </el-table-column>
            <el-table-column prop="productType" label="商品类目" v-if="column['商品类目']">
            </el-table-column>
            <el-table-column prop="brands" label="品牌" v-if="column['品牌']">
            </el-table-column>
            <el-table-column prop="price" label="销售价" v-if="column['销售价']">
            </el-table-column>
            <el-table-column prop="inventory" label="库存" v-if="column['库存']">
            </el-table-column>
            <el-table-column prop="channel" label="销售渠道" v-if="column['销售渠道']">
                <template scope="scope">
                    <div class="flex flex-center p-5">
                        <img :src="scope.row.channelSrc" width="100%" height="100%">
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="操作" fixed="right" width="80">
                <template scope="scope">
                    <el-button type="text" @click="dialogEditData(scope.$index)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!--dialog-->
        <el-dialog :title="dialogTitle" v-model="dialogFormVisible" class="ui-form-dialog">
            <el-form :model="dialogData">
                <el-form-item label="商品图片url">
                    <el-input v-model="dialogData.imgSrc"></el-input>
                </el-form-item>
                <el-form-item label="商品名称">
                    <el-input v-model="dialogData.productName"></el-input>
                </el-form-item>
                <el-form-item label="SPU商家编码">
                    <el-input v-model="dialogData.SPU"></el-input>
                </el-form-item>
                <el-form-item label="商品类目">
                    <el-select v-model="dialogData.productType">
                        <el-option v-for="item in options.productType" :key="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="品牌">
                    <el-input v-model="dialogData.brands"></el-input>
                </el-form-item>
                <el-form-item label="销售价">
                    <el-input v-model="dialogData.price"></el-input>
                </el-form-item>
                <el-form-item label="库存">
                    <el-input v-model="dialogData.inventory"></el-input>
                </el-form-item>
                <el-form-item label="销售渠道图url">
                    <el-input v-model="dialogData.channelSrc"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogSave('edit')" v-if="dialogTitle=='编辑商品'">保存</el-button>
                <el-button type="primary" @click="dialogSave('add')" v-else>新增</el-button>
            </div>
        </el-dialog>
        <el-dialog title="批量分类" v-model="dialogBatch">
            <el-select v-model="selected.batchProductType">
                <el-option v-for="item in options.productType" :key="item" :value="item"></el-option>
            </el-select>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogBatch = false">取消</el-button>
                <el-button type="primary" @click="dialogEditBatch()">批量修改</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tableData: [{
                    imgSrc: 'http://element.eleme.io/static/hamburger.50e4091.png',
                    productName: '麦辣鸡腿堡',
                    SPU: 'abc123',
                    productType: '家用电器',
                    brands: 'KFC',
                    price: 12,
                    inventory: 100,
                    channelSrc: 'http://p1.pstatp.com/list/190x124/1bf3001f157f4b349855'
                }],
                options: {
                    productType: ['家用电器', '食品', '床上用品', '电子产品']
                },
                multipleSelection: [],
                dialogData: {},
                dialogTitle: '',
                dialogFormVisible: false,
                dialogEditIndex: 0,
                dialogBatch: false,
                selected: {
                    tmp: '',
                    batchProductType: ''
                },
                column: {
                    '图片': true,
                    '商品名称': true,
                    '商品类目': true,
                    '品牌': true,
                    'SPU': true,
                    '规格': true,
                    '销售价': true,
                    '市场价': true,
                    '库存': true,
                    '销售渠道': true
                }
            }
        },
        methods: {
            tableSelectionChange(val) {
                this.multipleSelection = val;
            },
            dialogAddData() {
                this.dialogData = {}
                this.dialogTitle = '新增商品'
                this.dialogFormVisible = true
            },
            dialogEditData(index) {
                this.dialogData = Object.assign({}, this.tableData[index])
                this.dialogEditIndex = index
                this.dialogTitle = '编辑商品'
                this.dialogFormVisible = true
            },
            dialogSave(type) {
                if (type == 'add') {
                    this.tableData.push(this.dialogData)
                } else {
                    // this.tableData[this.dialogEditIndex] = this.dialogData //这种方式无法赋!
                    let data = this.tableData[this.dialogEditIndex]
                    for (let key in data) {
                        data[key] = this.dialogData[key]
                    }
                }
                this.dialogFormVisible = false
            },
            dropdownCommand(command) {
                if (this.multipleSelection.length === 0) {
                    this.$message({
                        message: '至少要勾选一项需要操作的表格行',
                        type: 'error'
                    })
                    return
                }
                if (command === '分类') {
                    this.dialogBatch = true
                    this.selected.batchProductType = ''
                }
            },
            dialogEditBatch() {
                let selection = this.multipleSelection
                for (let i = 0; i < selection.length; i++) {
                    // selection[i].productType = this.selected.batchProductType //这种方式视图更新不及时
                    this.$set(selection[i], 'productType', this.selected.batchProductType)
                }
                this.dialogBatch = false
            }
        }
    }
</script>