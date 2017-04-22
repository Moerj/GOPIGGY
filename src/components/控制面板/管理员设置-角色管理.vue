<style lang="scss" scoped>
    .el-menu {
        background-color: transparent;
    }
</style>
<template>
    <div>
        <div>
            <el-button class="m-b-15" @click="showDialogUserAdd=true">添加角色</el-button>
            <el-button type="primary" class="m-b-15">保存</el-button>
        </div>
        <div class="flex">
            <div style="width:150px;height: 100%;" class="ui-card">
                <el-menu mode="vertical" default-active="">
                    <el-menu-item-group title="所有角色">
                        <el-menu-item :index="item.id" v-for="item in userAllData">{{item.name}}</el-menu-item>
                    </el-menu-item-group>
                </el-menu>
            </div>
            <div class="grow-1 m-l-15">
                <el-tree :data="currentTreeData" show-checkbox default-expand-all node-key="id" ref="tree" highlight-current :props="currentTreeProps" class="ui-border p-15">
                </el-tree>
            </div>
        </div>

        <el-dialog title="添加角色" v-model="showDialogUserAdd">
            <el-form :model="userAddData" class="ui-dialog-form">
                <el-form-item label="角色名" label-width="120px">
                    <el-input v-model="userAddData.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="id" label-width="120px">
                    <el-input v-model="userAddData.id" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="showDialogUserAdd = false">取 消</el-button>
                <el-button type="primary" @click="showDialogUserAdd = false; saveUserAddData()">保 存</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                userAllData: [{
                    name: '管理员1',
                    id: '1'
                }, {
                    name: '管理员2',
                    id: '2'
                }],
                showDialogUserAdd: false,
                userAddData: {
                    name: '',
                    id: ''
                },
                currentTreeData: [{
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        children: [{
                            id: 9,
                            label: '三级 1-1-1'
                        }, {
                            id: 10,
                            label: '三级 1-1-2'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2'
                    }]
                }],
                currentTreeProps: {
                    children: 'children',//指定子树为节点对象的某个属性值
                    label: 'label'//指定节点标签为节点对象的某个属性值
                }
            }
        },
        methods: {
            saveUserAddData() {
                if (this.userAddData.name) {
                    this.$message({
                        message: '新增角色: ' + this.userAddData.name,
                        type: 'success'
                    });
                    this.userAllData.push(this.userAddData)
                    this.userAddData = {}
                } else {
                    this.$message.error('新增角色失败');
                }
            }
        }
    }
</script>