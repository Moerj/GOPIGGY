<template>
    <div>
        <ui-dropsearch>
            <el-form :inline="true" class="ui-form-inline">
                <el-form-item label="加入时间">
                    <el-date-picker type="datetime" placeholder="选择日期时间"></el-date-picker>
                </el-form-item>
                <el-form-item label="店铺名称">
                    <el-input placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="会员账号">
                    <el-input placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="推客名">
                    <el-input placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="推荐人">
                    <el-input placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="状态">
                    <el-select placeholder="">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="等级">
                    <el-select placeholder="">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </ui-dropsearch>

        <el-form :inline="true" class="ui-form-inline">
            <el-input>
                <template slot="prepend">开始行数</template>
            </el-input>
            <el-input>
                <template slot="prepend">导出行数</template>
            </el-input>
            <el-tooltip content="批量导出" placement="top" :open-delay="2000">
                <el-button>批量导出</el-button>
            </el-tooltip>
        </el-form>

        <el-table :data="tableData" class="m-t-15 m-b-15" style="width: 100%">
            <el-table-column prop="pusherInfo" label="推客信息" min-width="100">
            </el-table-column>
            <el-table-column prop="" label="等级">
            </el-table-column>
            <el-table-column prop="" label="会员账号" min-width="130">
            </el-table-column>
            <el-table-column prop="" label="未结算佣金" sortable min-width="130">
            </el-table-column>
            <el-table-column prop="" label="已结算佣金" sortable min-width="130">
            </el-table-column>
            <el-table-column prop="" label="推广订单额" sortable min-width="130">
            </el-table-column>
            <el-table-column prop="" label="推荐人">
            </el-table-column>
            <el-table-column prop="" label="推荐人数" sortable min-width="130">
            </el-table-column>
            <el-table-column prop="" label="其他信息" min-width="130">
            </el-table-column>
            <el-table-column prop="" label="加入时间" sortable min-width="130">
            </el-table-column>
            <el-table-column prop="status" label="状态" width="80">
                <template scope="scope">
                    <span class="f-color-orange" v-if="scope.row.status==0">过期</span>
                    <span class="f-color-green" v-else>正常</span>
                </template>
            </el-table-column>
            <el-table-column prop="" label="推广小店" min-width="100">
                <template scope="scope">
                    <i class="fa fa-qrcode f-20 p-15"></i>
                </template>
            </el-table-column>
            <el-table-column fixed="right" prop="" label="操作" width="100">
                <template scope="scope">
                    <el-button type="text" size="mini" class="m-0" v-if="scope.row.control.setLevel">设置等级</el-button>
                    <el-button type="text" size="mini" class="m-0" v-if="scope.row.control.setDisabled">禁用</el-button>
                    <el-button type="text" size="mini" class="m-0" v-if="scope.row.control.setLead">引领消费者</el-button>
                    <el-button type="text" size="mini" class="m-0" v-if="scope.row.control.setTop">变更上级</el-button>
                    <el-button type="text" size="mini" class="m-0 f-color-orange f-hover" v-if="scope.row.control.setPartner">设为合伙人</el-button>
                    <el-button type="text" size="mini" class="m-0" v-if="scope.row.control.setCaptain">设为队长</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination @size-change="" @current-change="" :current-page="currentPage" :page-size="100" layout="prev, pager, next, jumper"
            :total="1000" class="text-center">
        </el-pagination>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                currentPage: 1,
                tableData: [{
                    pusherInfo:'xxx小店(123857)',
                    control: {
                        setLevel: true,
                        setDisabled: true,
                        setLead: true,
                        setTop: true,
                        setPartner: true,
                        setCaptain: true
                    }
                }]
            }
        },
    }
</script>