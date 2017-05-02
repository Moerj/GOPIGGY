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
                        <el-select slot="prepend" placeholder="SKU商家编码">
                            <el-option label="餐厅名" value="1"></el-option>
                            <el-option label="订单号" value="2"></el-option>
                            <el-option label="用户电话" value="3"></el-option>
                        </el-select>
                    </el-input>
                </el-form-item>
                <el-form-item label="类目">
                    <el-select placeholder="">
                        <el-option value="item1"></el-option>
                        <el-option value="item2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="品牌">
                    <el-select placeholder="">
                        <el-option value="item1"></el-option>
                        <el-option value="item2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="销售渠道">
                    <el-select placeholder="">
                        <el-option value="item1"></el-option>
                        <el-option value="item2"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </ui-dropsearch>

        <div class="flex space-between">
            <div>
                <el-button type="primary">新增商品</el-button>
                <el-dropdown>
                    <el-button>
                    批量操作<i class="el-icon-caret-bottom el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-button class="m-0">导入</el-button>
                <el-button class="m-0">导出</el-button>
                <el-button class="m-0">回收站</el-button>
            </div>
            <div>
                <el-button class="m-0">商品视图</el-button>
                <el-button class="m-0">单品视图</el-button>
                <el-dropdown>
                    <el-button>
                    更改列显示<i class="el-icon-caret-bottom el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>