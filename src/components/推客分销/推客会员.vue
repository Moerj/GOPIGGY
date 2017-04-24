<template>
    <div>
        <el-tabs v-model="activeTabs" type="card">
            <el-tab-pane label="推客会员" name="推客会员">
                <tabMembers></tabMembers>
            </el-tab-pane>
            <el-tab-pane label="推客等级" name="推客等级">推客等级</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    import tabMembers from './推客会员-tab-members.vue'
    export default {
        components: {
            tabMembers
        },
        data() {
            return {
                activeTabs: '推客会员'
            }
        },
    }
</script>