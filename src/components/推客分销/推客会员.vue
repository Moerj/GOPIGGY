<style lang="scss" scoped>
    .fa-qrcode {
        transition: .3s;
        font-size: 30px;
        &:hover {
            color: cornflowerblue;
        }
    }

    .qrcode-contanier {
        width: 250px;
        position: absolute;
        z-index: 10;
        left: 0;
        top: 0;
        transform: translate3d(-100%, -50%, 0);
        margin-left: 50px;
    }

    .qrcode-content {
        //二维码容器的小尖角
        width: 200px;
        overflow: visible;
        position: relative;
        @mixin sanj($size, $color: white) {
            content: '';
            width: 0;
            height: 0;
            border-top: $size solid transparent;
            border-left: $size+1px solid $color;
            border-bottom: $size solid transparent;
            position: absolute;
            z-index: 1;
            right: 0;
            top: 50%;
            transform: translate3d(100%, -50%, 0);
        }
        &::after {
            @include sanj(7px)
        }
        &::before {
            @include sanj(8px, #d1dbe5)
        }
        .imgbox {
            height: 100px;
            overflow: hidden;
            margin-bottom: 10px;
            img {
                height: 100%;
            }
        }
    }
</style>
<template>
    <div>
        <el-tabs v-model="activeTabs" type="card">
            <el-tab-pane label="推客会员" name="推客会员">

                <ui-dropsearch>
                    <el-form :inline="true" class="ui-form-inline">
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
                        <el-form-item label="加入时间">
                            <el-date-picker type="datetime" placeholder="选择日期时间"></el-date-picker>
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
                            <el-popover ref="qrcode" placement="left" width="200" trigger="click">
                                <el-tabs v-model="scope.row.qrcode.activeTab" @tab-click="">
                                    <el-tab-pane label="链接码" name="链接码" class="flex flex-center column">
                                        <div class="imgbox">
                                            <img src="~src/images/qrcode.jpeg" class="m-b-15">
                                        </div>
                                        <el-input readonly size="mini" value="要复制的内容..">
                                            <el-button slot="append" @click="copy('要复制的内容..')">复制</el-button>
                                        </el-input>
                                    </el-tab-pane>
                                    <el-tab-pane label="参数码" name="参数码" class="flex flex-center column">
                                        <div class="imgbox">
                                            <img src="~src/images/logo.png" class="m-b-15">
                                        </div>
                                        <el-input readonly size="mini" value="要复制的内容..">
                                            <el-button slot="append" @click="copy('要复制的内容..')">复制</el-button>
                                        </el-input>
                                    </el-tab-pane>
                                </el-tabs>
                                <i class="fa fa-qrcode p-15 ui-cursor-pointer" slot="reference"></i>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column fixed="right" prop="" label="操作" width="100">
                        <template scope="scope">
                            <el-button type="text" size="mini" class="m-0" v-if="scope.row.control.setLevel" @click="openLevel(scope.$index)">设置等级</el-button>
                            <el-button type="text" size="mini" class="m-0" v-if="scope.row.control.setDisabled">禁用</el-button>
                            <el-button type="text" size="mini" class="m-0" v-if="scope.row.control.setLead">引领消费者</el-button>
                            <el-button type="text" size="mini" class="m-0" v-if="scope.row.control.setTop">变更上级</el-button>
                            <el-button type="text" size="mini" class="m-0 f-color-orange f-hover" v-if="scope.row.control.setPartner" @click="openPartner(scope.$index)">设置合伙人</el-button>
                            <el-button type="text" size="mini" class="m-0" v-if="scope.row.control.setCaptain" @click="openCaptain(scope.$index)">设置队长</el-button>
                        </template>
                    </el-table-column>
                </el-table>

                <el-pagination @size-change="" @current-change="" :current-page="currentPage" :page-size="100" layout="prev, pager, next, jumper"
                    :total="1000" class="text-center">
                </el-pagination>
            </el-tab-pane>
            <el-tab-pane label="推客等级" name="推客等级">
                <pusherLevel></pusherLevel>
            </el-tab-pane>
        </el-tabs>

        <el-dialog title="设置合伙人" v-model="dialogPartner">
            <el-form>
                <el-form-item label="合伙人名称">
                    <span class="f-color-orange">xxx</span>
                </el-form-item>
                <el-form-item label="合伙人模式">
                    <el-checkbox label="区域伙伴" name="partnerMode"></el-checkbox>
                    <el-checkbox label="股东合伙" name="partnerMode"></el-checkbox>
                    <el-checkbox label="团队合伙" name="partnerMode"></el-checkbox>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogPartner = false">取 消</el-button>
                <el-button type="primary" @click="dialogPartner = false">保 存</el-button>
            </span>
        </el-dialog>
        <el-dialog title="设置等级" v-model="dialogLevel" size="tiny">
            <el-form>
                <el-form-item label="选择等级">
                    <el-radio label="东家" name="level"></el-radio>
                    <el-radio label="管家" name="level"></el-radio>
                </el-form-item>
                <el-form-item label="过期时间">
                    <el-date-picker type="datetime" placeholder="选择日期时间">
                    </el-date-picker>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogLevel = false">取 消</el-button>
                <el-button type="primary" @click="dialogLevel = false">保 存</el-button>
            </span>
        </el-dialog>
        <el-dialog title="设为队长" v-model="dialogCaptain" class="ui-form-dialog">
            <el-form>
                <el-form-item label="队长名称">
                    <span class="f-color-orange">xxx</span>
                </el-form-item>
                <el-form-item label="战队名">
                    <el-input class=""></el-input>
                </el-form-item>
                <el-form-item label="战队LOGO">
                    <ui-img-upload action="https://jsonplaceholder.typicode.com/posts/"></ui-img-upload>
                </el-form-item>
                <el-form-item label="战队分组">
                    <el-select placeholder="请选择">
                        <el-option label="分组1" value="分组1"></el-option>
                        <el-option label="分组2" value="分组2"></el-option>
                        <el-option label="分组3" value="分组3"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogCaptain = false">取 消</el-button>
                <el-button type="primary" @click="dialogCaptain = false">保 存</el-button>
            </span>
        </el-dialog>

        <input type="text" ref="剪切板" readonly style="transform:scale(0)">
    </div>
</template>
<script>
    import pusherLevel from './推客等级'
    export default {
        components: {
            pusherLevel
        },
        data() {
            return {
                activeTabs: '推客会员',
                currentPage: 1,
                tableData: [{
                    pusherInfo: 'xxx小店(123857)',
                    control: {
                        setLevel: true,
                        setDisabled: true,
                        setLead: true,
                        setTop: true,
                        setPartner: true,
                        setCaptain: true
                    },
                    qrcode: {
                        activeTab: '链接码',
                    },
                }],
                dialogPartner: false,
                dialogCaptain: false,
                dialogLevel: false,
            }
        },
        methods: {
            copyUrl(id) {
                setTimeout(() => {
                    let input = document.querySelector('#' + id).querySelector('input')
                    input.focus()
                    input.select()
                    document.execCommand('Copy')
                    this.$message('复制完成');
                }, 100);
            },
            copy(text) {
                let input = this.$refs['剪切板']
                input.value = text
                input.select()
                document.execCommand('Copy')
                this.$message('复制完成')
            },
            openPartner(index) {
                this.dialogPartner = true
            },
            openCaptain(index) {
                this.dialogCaptain = true
            },
            openLevel(index) {
                this.dialogLevel = true
            }
        },
    }
</script>