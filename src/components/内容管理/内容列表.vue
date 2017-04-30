<template>
    <div>
        <ui-dropsearch>
            <el-form :inline="true" class="ui-form-inline" label-width="100px">
                <el-form-item label="内容内别">
                    <el-select placeholder="">
                        <el-option value="item1"></el-option>
                        <el-option value="item2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="排序规则">
                    <el-select placeholder="">
                        <el-option value="item1"></el-option>
                        <el-option value="item2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="创建类型">
                    <el-select placeholder="">
                        <el-option value="item1"></el-option>
                        <el-option value="item2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="起始时间">
                    <el-date-picker type="datetime">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="结束时间">
                    <el-date-picker type="datetime">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="作者ID">
                    <el-input placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="标题">
                    <el-input placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="是否含有图片">
                    <el-select placeholder="">
                        <el-option value="是"></el-option>
                        <el-option value="否"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否含有视频">
                    <el-select placeholder="">
                        <el-option value="是"></el-option>
                        <el-option value="否"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="字数区间">
                    <el-input placeholder="起始"></el-input>
                    <span>至</span>
                    <el-input placeholder="结束"></el-input>
                </el-form-item>
            </el-form>
        </ui-dropsearch>
    </div>
</template>