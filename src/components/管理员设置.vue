<template>
    <div>
        <el-tabs v-model="activeTab" type="card" @tab-click="tabChange">
            <el-tab-pane label="管理员" name="admin">
                <el-button type="primary" class="m-b-15"><i class="fa fa-plus m-r-5"></i>新增管理员</el-button>
                <el-table :data="admin.data"  style="width: 100%">
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

            <el-tab-pane label="角色" name="user">配置管理</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                activeTab: 'admin',
                admin: {
                    currentPage: 1,
                    data:[{
                        accout:'123218',
                        name: 'guyiyi',
                        phone: '188888',
                        wechat: '123213',
                        create_time: '2011-11-10',
                        postion: '性奴',
                        control:{
                            edit: true,
                            permissions: true,
                            delete: true
                        }
                    }]
                }
            };
        },
        methods: {
            tabChange(tab, event) {
                console.log(tab, event);
            }
        }
    };
</script>