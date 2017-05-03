<template>
    <div>
        <el-tabs v-model="activeTab" type="card" @tab-click="tabChange">
            <el-tab-pane label="管理员" name="admin">

                <el-button type="primary" class="m-b-15" @click="showAddDialog=true"><icon name="plus" class="text"></icon>新增管理员</el-button>

                <el-table :data="admin.data" style="width: 100%">
                    <el-table-column prop="accout" label="账号">
                    </el-table-column>
                    <el-table-column prop="name" label="昵称" width="180">
                    </el-table-column>
                    <el-table-column prop="phone" label="手机号">
                    </el-table-column>
                    <el-table-column prop="wechat" label="微信">
                    </el-table-column>
                    <el-table-column prop="create_time" label="创建时间">
                    </el-table-column>
                    <el-table-column prop="postion" label="角色" width="100">
                    </el-table-column>
                    <el-table-column prop="control" fixed="right" label="管理" width="200">
                        <template scope="scope">
                            <el-button type="text" size="small" v-if="scope.row.control.edit">编辑</el-button>
                            <el-button type="text" size="small" v-if="scope.row.control.permissions">设置权限</el-button>
                            <el-button type="text" size="small" v-if="scope.row.control.delete"><span class="f-color-red">删除</span></el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination @size-change="" @current-change="" :current-page="admin.currentPage" :page-size="100" layout="prev, pager, next, jumper"
                    :total="1000" class="text-center m-t-15">
                </el-pagination>
            </el-tab-pane>

            <el-tab-pane label="角色管理" name="user">
                <userManage></userManage>
            </el-tab-pane>
        </el-tabs>


        <!--新增管理员-->
        <el-dialog title="新增管理员" v-model="showAddDialog">
            <el-form :model="admin.addData" class="p-r-20">
                <el-form-item label="账号" :label-width="formLabelWidth">
                    <el-input placeholder="" v-model="admin.addData.name">
                        <template slot="prepend">admin:</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth">
                    <el-input type="password" placeholder="" v-model="admin.addData.name"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" :label-width="formLabelWidth">
                    <el-input type="password" placeholder="" v-model="admin.addData.name"></el-input>
                </el-form-item>
                <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input placeholder="" v-model="admin.addData.name"></el-input>
                </el-form-item>
                <el-form-item label="性别" :label-width="formLabelWidth">
                    <el-radio v-model="admin.addData.sex" label="男">男</el-radio>
                    <el-radio v-model="admin.addData.sex" label="女">女</el-radio>
                    <el-radio v-model="admin.addData.sex" label="保密">保密</el-radio>
                </el-form-item>
                <el-form-item label="人人店后台登录微信" :label-width="formLabelWidth">
                    <el-input placeholder="" v-model="admin.addData.name"></el-input>
                </el-form-item>
                <el-form-item label="手机号" :label-width="formLabelWidth">
                    <el-input placeholder="" v-model="admin.addData.name"></el-input>
                </el-form-item>
                <el-form-item label="年龄" :label-width="formLabelWidth">
                    <el-input placeholder="" v-model="admin.addData.name"></el-input>
                </el-form-item>
                <el-form-item label="角色" :label-width="formLabelWidth">
                    <el-checkbox v-model="admin.addData.postion" label="平台版">平台版</el-checkbox>
                    <el-checkbox v-model="admin.addData.postion" label="运营">运营</el-checkbox>
                    <el-checkbox v-model="admin.addData.postion" label="发货员">发货员</el-checkbox>
                    <el-checkbox v-model="admin.addData.postion" label="市场">市场</el-checkbox>
                </el-form-item>
                <el-form-item label="虚拟商品验证权限" :label-width="formLabelWidth">
                    <el-radio name="getVaild" v-model="admin.addData.getVaild" label="是">是</el-radio>
                    <el-radio name="getVaild" v-model="admin.addData.getVaild" label="否">否</el-radio>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="showAddDialog = false">取 消</el-button>
                <el-button type="primary" @click="showAddDialog = false">保 存</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import userManage from './管理员设置-角色管理.vue'
    export default {
        components: {
          userManage  
        },
        data() {
            return {
                activeTab: 'admin',
                formLabelWidth: '160px',
                showAddDialog: false,
                admin: {
                    currentPage: 1,
                    data: [{
                        accout: '123218',
                        name: 'guyiyi',
                        phone: '188888',
                        wechat: '123213',
                        create_time: '2011-11-10',
                        postion: '性奴',
                        control: {
                            edit: true,
                            permissions: true,
                            delete: true
                        }
                    }],
                    addData: {}
                }
            };
        },
        methods: {
            tabChange(tab, event) {
                // console.log(tab, event);
            }
        }
    };
</script>