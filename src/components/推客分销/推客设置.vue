<template>
    <div>
        <el-tabs v-model="activeTab" type="card" @tab-click="">
            <el-tab-pane label="基本设置" name="基本设置">
                <pane_base></pane_base>
            </el-tab-pane>
            <el-tab-pane label="商品佣金" name="商品佣金">商品佣金</el-tab-pane>
            <el-tab-pane label="通知设置" name="通知设置">通知设置</el-tab-pane>
            <el-tab-pane label="复购佣金" name="复购佣金">复购佣金</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    import pane_base from './推客设置-基本设置.vue'
    export default {
        components: {
            pane_base
        },
        data() {
            return {
                activeTab: '基本设置'
            }
        }
    }
</script>