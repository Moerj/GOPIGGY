<template>
    <div>
        <el-tabs v-model="activeTab" type="card">
            <el-tab-pane label="提现管理">
                <tab1></tab1>
            </el-tab-pane>

            <el-tab-pane label="提现设置">
                <tab2></tab2>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    import tab1 from './会员提现-提现管理.vue'
    import tab2 from './会员提现-提现设置.vue'
    export default {
        components: {
            tab1,
            tab2
        },
        data() {
            return {
                activeTab: '0',
            }
        },
    }
</script>