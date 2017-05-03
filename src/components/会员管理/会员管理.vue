<template>
    <div>
        <ui-dropsearch>
            <el-form :inline="true" class="ui-form-inline m-0" label-width="100px">
                <el-form-item label="会员账号">
                    <el-input placeholder=""></el-input>
                    <icon name="question-circle" class="text"></icon>
                </el-form-item>
                <el-form-item label="明细">
                    <el-input placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="类型">
                    <el-select placeholder="">
                        <el-option value="item1"></el-option>
                        <el-option value="item2"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </ui-dropsearch>


        <!--table-->
        <el-table border :data="tableData" @selection-change="tableSelectionChange" style="width: 100%">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column prop="img" label="头像" width="80">
                <template scope="scope">
                    <div class="flex flex-center p-5">
                        <img :src="scope.row.img" width="40px" height="40px">
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="昵称">
            </el-table-column>
            <el-table-column prop="account" label="会员账号">
            </el-table-column>
            <el-table-column prop="level" label="等级">
            </el-table-column>
            <el-table-column prop="levelUpType" label="升级类型">
            </el-table-column>
            <el-table-column prop="points" label="积分">
            </el-table-column>
            <el-table-column prop="overage" label="余额">
            </el-table-column>
            <el-table-column prop="lastBuy" label="最后购买">
            </el-table-column>
            <el-table-column prop="buyTimes" label="购买次数">
            </el-table-column>
            <el-table-column label="操作" fixed="right" width="140">
                <template scope="scope">
                    <el-button type="text" @click="openSetLevel(scope.$index)">设等级</el-button>
                    <el-button type="text" @click="openSendPoints(scope.$index)">送积分</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination @size-change="" @current-change="" :current-page="currentPage" :page-size="100" layout="prev, pager, next, jumper"
            :total="1000" class="text-center m-t-15">
        </el-pagination>


        <el-dialog title="设置等级" v-model="dialog.showSetLevel" size="tiny">
            <el-radio-group class="block m-b-15" v-model="dialog.levelUpType">
                <el-radio label="手动升级" size="mini"></el-radio>
                <el-radio label="自动升级" size="mini"></el-radio>
            </el-radio-group>
            <el-date-picker type="date" placeholder="过期时间" size="small">
            </el-date-picker>
            <span slot="footer">
                <el-button @click="dialog.showSetLevel = false">取 消</el-button>
                <el-button type="primary" @click="saveSetLevel(dialog.activeIndex)">保 存</el-button>
            </span>
        </el-dialog>

        <el-dialog title="送积分" v-model="dialog.showSendPoints" size="tiny">
            <el-input v-model="dialog.points" placeholder="积分数(可以为负数)" class="m-b-15"></el-input>
            <el-input v-model="dialog.pointsDetails" type="textarea" :rows="2" placeholder="填写积分原因" ></el-input>
            <span slot="footer">
                <el-button @click="dialog.showSendPoints = false">取 消</el-button>
                <el-button type="primary" @click="saveSendPoints(dialog.activeIndex)">保 存</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                currentPage:1,
                tableData: [{
                    img: 'http://tva4.sinaimg.cn/crop.0.10.1242.1242.50/6dba0809jw8fblkcj08fmj20yi0z2425.jpg',
                    name: '哎呀哎呀',
                    account: '18274812',
                    level: '默认',
                    levelUpType: '自动升级',
                    points: 0,
                    overage: 0.00,
                    lastBuy: '',
                    buyTimes: 0,
                }],
                multipleSelection: [],
                dialog: {
                    activeIndex: 0,
                    showSetLevel: false,
                    levelUpType: '',
                    showSendPoints: false,
                    points: 0,
                    pointsDetails: ''
                }
            }
        },
        methods: {
            tableSelectionChange(val) {
                this.multipleSelection = val;
                console.log(this.multipleSelection);
            },
            openSetLevel(index) {
                this.dialog.activeIndex = index
                this.dialog.levelUpType = this.tableData[index].levelUpType
                this.dialog.showSetLevel = true
            },
            saveSetLevel(index) {
                this.tableData[index].levelUpType = this.dialog.levelUpType
                this.dialog.showSetLevel = false
            },
            openSendPoints(index) {
                this.dialog.activeIndex = index
                this.dialog.points = this.tableData[index].points
                this.dialog.showSendPoints = true
            },
            saveSendPoints(index) {
                this.tableData[index].points = this.dialog.points
                this.dialog.showSendPoints = false
            }

        }
    }
</script>