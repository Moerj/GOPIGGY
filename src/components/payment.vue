<style lang="scss" >
    @import 'src/sass/layout/public.scss';
    .page_payment {
        background-color: $ui-bg-color;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        .topbar {
            width: 100%;
            height: 70px;
            background-color: white;
            border: $ui-border;
            box-shadow: 1px 0 3px rgba(black, .3);
            >.content {
                padding: 0;
                height: 100%;
            }
        }
        .content {
            padding: 15px;
        }
        .max-w {
            width: 1024px;
        }
        .logo {
            height: 100%;
            width: 130px;
            display: inline-block;
            background: url('../images/shouyintlogo.png') no-repeat center;
            background-size: 100%;
        }
        // tabs撑满
        .el-tabs__nav{
            display: flex;
            width: 100%;
            >*{
                flex-grow: 1;
                text-align: center;
            }
        }
    }

</style>
<template>
    <div class="page_payment flex column flex-center">
        <div class="topbar flex flex-center">
            <div class="content max-w">
                <span class="logo"></span>
            </div>
        </div>
        <div class="content max-w grow-1">
            <el-tabs type="border-card">
                <el-tab-pane label="快捷支付">快捷支付</el-tab-pane>
                <el-tab-pane label="储蓄卡">储蓄卡</el-tab-pane>
                <el-tab-pane label="信用卡">定时任务补偿</el-tab-pane>
                <el-tab-pane label="第三方支付">第三方支付</el-tab-pane>
                <el-tab-pane label="汇款支付">汇款支付</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
    
</script>