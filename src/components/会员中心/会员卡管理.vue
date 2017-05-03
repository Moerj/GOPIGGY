<template>
    <div>
        <el-button type="primary" class="m-b-15" @click="dialog.active=true">
            <icon name="plus" class="text"></icon>新增会员卡
        </el-button>

        <el-table :data="tableData">
            <el-table-column prop="name" label="会员卡名称">
            </el-table-column>
            <el-table-column prop="level" label="会员等级值">
            </el-table-column>
            <el-table-column label="升级模式">
                <template scope="scope">
                    <el-tag type="success" v-if="scope.row.levelUpType==1">自动升级</el-tag>
                    <el-tag type="warning" v-if="scope.row.levelUpType==0">手动升级</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="基础权益">
                <template scope="scope">
                    <el-tag type="primary" v-for="item in scope.row.preferential" :key="scope.$index" class="m-r-5">{{item}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="180">
                <template scope="scope">
                    <el-button type="text">查看会员</el-button>
                    <el-button type="text">编辑</el-button>
                    <el-button type="text" class="f-color-red">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog title="新增会员卡" v-model="dialog.active">
            <el-form :model="dialog.data" class="ui-form-dialog">
                <el-form-item label="会员卡名称">
                    <el-input v-model="dialog.data.name"></el-input>
                </el-form-item>
                <el-form-item label="会员等级值">
                    <el-input-number v-model="dialog.data.level" :min="1" :max="3"></el-input-number>
                </el-form-item>
                <el-form-item label="升级模式">
                    <el-select v-model="levelUpTypeSelected">
                        <el-option v-for="item in levelUpTypeOptions" :label="item.label" :key="item.value" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="基础权益">
                    <el-select v-model="preferentialSelected" multiple>
                        <el-option v-for="item in preferentialOptions" :label="item" :key="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer">
                <el-button @click="dialog.active = false">取 消</el-button>
                <el-button type="primary" @click="">保 存</el-button>
            </span>
        </el-dialog>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                tableData: [{
                    name: '银卡会员',
                    level: 3,
                    levelUpType: '1',
                    preferential: ['2折', '包邮']
                }],
                dialog: {
                    active: false,
                    data: {
                        name: '',
                        level: 0,
                    },
                },
                levelUpTypeOptions: [{
                    value: 1,
                    label: '自动升级'
                }, {
                    value: 0,
                    label: '手动升级'
                }],
                levelUpTypeSelected: '',
                preferentialOptions: ['2折', '包邮', '不包邮'],
                preferentialSelected: [],
            }
        }
    }
</script>