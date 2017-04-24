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
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
    }
</script>