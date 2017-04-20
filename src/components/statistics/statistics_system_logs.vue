// 系统日志
<template>
    <div>
        <div class="ui-tips">
            系统日志目前最多只支持查询最近三个月情况,如有特殊需求,请联系客服.
        </div>

        <el-tabs v-model="activeTab" type="card" @tab-click="" class="m-b-15">
            <el-tab-pane label="登录日志" name="login_logs">
                <ui-dropsearch>
                    <el-select v-model="value" placeholder="平台类型">
                        <el-option v-for="item in options" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-input placeholder="用户编号" class="ui-input-w"></el-input>
                    <div class="ui-input-group">
                        <span class="input-label">查询时间</span>
                        <el-date-picker v-model="date_time" type="datetimerange" placeholder="选择时间范围">
                        </el-date-picker>
                    </div>
                </ui-dropsearch>

                <el-table :data="tableData_login" border style="width: 100%" class="m-b-15">
                    <el-table-column prop="" label="用户编号" width="180">
                    </el-table-column>
                    <el-table-column prop="" label="信息" width="180">
                    </el-table-column>
                    <el-table-column prop="" label="时间">
                    </el-table-column>
                    <el-table-column prop="" label="IP地址" width="160px">
                        <template scope="scope">
                            {{scope.row.ip}}
                            <el-button type="text" size="mini">查询</el-button>
                        </template>
                    </el-table-column>
                </el-table>

                <el-pagination @size-change="" @current-change="" :current-page="1" :page-size="100" layout="prev, pager, next, jumper" :total="1000"
                    class="text-center">
                </el-pagination>

            </el-tab-pane>

            <el-tab-pane label="操作日志" name="edit_logs">
                <ui-dropsearch>
                    <el-select v-model="value" placeholder="平台类型">
                        <el-option v-for="item in options" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-input placeholder="用户编号" class="ui-input-w"></el-input>
                    <div class="ui-input-group">
                        <span class="input-label">查询时间</span>
                        <el-date-picker v-model="date_time" type="datetimerange" placeholder="选择时间范围">
                        </el-date-picker>
                    </div>
                </ui-dropsearch>

                <el-table :data="tableData_edit" border style="width: 100%" class="m-b-15">
                    <el-table-column prop="" label="用户编号" width="180">
                    </el-table-column>
                    <el-table-column prop="" label="信息" width="180">
                    </el-table-column>
                    <el-table-column prop="" label="时间">
                    </el-table-column>
                    <el-table-column prop="" label="IP地址" width="160px">
                        <template scope="scope">
                            {{scope.row.ip}}
                            <el-button type="text" size="mini">查询</el-button>
                        </template>
                    </el-table-column>
                </el-table>

                <el-pagination @size-change="" @current-change="" :current-page="1" :page-size="100" layout="prev, pager, next, jumper" :total="1000"
                    class="text-center">
                </el-pagination>
            </el-tab-pane>
        </el-tabs>


    </div>
</template>
<script>
    export default {
        data() {
            return {
                activeTab: 'login_logs',
                options: [{
                    value: '选项1',
                    label: '电商云'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }],
                value: '',
                date_time: [],
                tableData_login: [{
                    ip: '192.168.1.1'
                }],
                tableData_edit: [{
                    ip: '192.168.1.1'
                }],
            }
        },
        mounted() {
            
        }
    }
</script>
