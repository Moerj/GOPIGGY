// 店铺列表
<template>
    <div>
        <el-button type="primary" class="m-b-15" @click="dialogAddShop=true">新增授权店铺</el-button>

        <el-table :data="shopData" style="width: 100%" class="m-b-15">
            <el-table-column prop="name" label="名称">
            </el-table-column>
            <el-table-column prop="" label="平台">
            </el-table-column>
            <el-table-column prop="" label="店铺编号">
            </el-table-column>
            <el-table-column prop="" label="状态">
            </el-table-column>
            <el-table-column prop="" label="Token验证结果">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100px">
                <template scope="scope">
                    <el-button type="text" size="mini">编辑</el-button>
                    <el-button type="text" size="mini"><span class="f-color-red">停用</span></el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination @size-change="" @current-change="" :current-page="1" :page-size="100" layout="prev, pager, next, jumper" :total="1000"
            class="text-center">
        </el-pagination>


        <el-dialog title="新增店铺" v-model="dialogAddShop">
            <el-form :model="addShop">
                <el-form-item label="平台" :label-width="formLabelWidth">
                    <el-select v-model="addRegion" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="店铺名称" :label-width="formLabelWidth">
                    <el-input v-model="addShop.name" auto-complete="off" placeholder="卖家自行定义,以作区分"></el-input>
                </el-form-item>
                <el-form-item label="平台账号" :label-width="formLabelWidth">
                    <el-input v-model="addShop.account" auto-complete="off" placeholder="卖家在平台上的账号"></el-input>
                </el-form-item>
                <el-form-item label="店铺URL" :label-width="formLabelWidth">
                    <el-input v-model="addShop.url" auto-complete="off" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="API令牌账号" :label-width="formLabelWidth">
                    <el-input v-model="addShop.api_account" auto-complete="off" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="API令牌密码" :label-width="formLabelWidth">
                    <el-input v-model="addShop.api_pass" auto-complete="off" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="管理员邮箱" :label-width="formLabelWidth">
                    <el-input v-model="addShop.email" auto-complete="off" placeholder="只有管理员能查看"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogAddShop = false">取 消</el-button>
                <el-button type="primary" @click="dialogAddShop = false">注册授权</el-button>
            </div>
        </el-dialog>


    </div>
</template>
<script>
    export default {
        data() {
            return {
                shopData: [{
                    name: 'Anker',
                }],
                dialogAddShop: false,
                addShop:{},
                addRegion:[{
                    label: '区域1',
                    value: 1
                }],
                formLabelWidth: '120px'
            }
        }
    }
</script>