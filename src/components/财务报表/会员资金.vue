// 会员资金
<style lang="scss" scoped>
    @import 'src/sass/layout/public.scss';
    .member_funds {
        background: white;
        .cards {
            >.el-card {
                width: 260px;
                display: inline-block;
                margin-right: 10px;
                margin-bottom: 15px;
                font-size: 12px;
            }
        }
    }

</style>
<template>
    <div class="member_funds ui-card">
        <ui-dropsearch>
            <el-select v-model="value" placeholder="网店会员编号">
                <el-option v-for="item in options" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-input class="ui-input-w" v-model="input" placeholder="请输入内容"></el-input>
            <el-select v-model="value" placeholder="网点等级">
                <el-option v-for="item in options" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </ui-dropsearch>

        <el-dropdown>
            <el-button>
                批量操作<i class="el-icon-caret-bottom el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item>双皮奶</el-dropdown-item>
                <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <el-button>导入</el-button>
        <el-button type="primary">全选</el-button>
        <el-button type="primary">新付款用户</el-button>
        <hr>
        <div class="cards">
            <el-card>
                <div slot="header" class="clearfix">
                    <span>用户: <span class="f-14">葫芦娃</span></span>
                    <el-checkbox class="float-right"></el-checkbox>
                </div>
                <div>
                    <p class="m-t-0">店铺: <span class="f-14">符文工房</span></p>
                    <p class="m-b-0">结算类型: <span class="f-14">预付</span></p>
                    <p>预存款金额: <span class="f-color-blue f-14 m-r-5">查看金额</span>
                        <el-button size="mini">管理</el-button>
                    </p>
                    <p>待还款金额: <span class="f-color-blue f-14 m-r-5">查看金额</span>
                        <el-button size="mini">管理</el-button>
                    </p>
                </div>
            </el-card>

        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }],
                value: '',
                input: ''
            }
        }
    }

</script>
