<template>
    <div>
        <div v-show="$route.name === pageName.current">
            <ui-dropsearch>
                <el-form :inline="true" class="ui-form-inline" label-width="100px">
                    <el-form-item label="内容内别">
                        <el-select v-model="selected"  placeholder="">
                            <el-option value="item1"></el-option>
                            <el-option value="item2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="排序规则">
                        <el-select v-model="selected"  placeholder="">
                            <el-option value="item1"></el-option>
                            <el-option value="item2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="创建类型">
                        <el-select v-model="selected"  placeholder="">
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
                        <el-select v-model="selected"  placeholder="">
                            <el-option value="是"></el-option>
                            <el-option value="否"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="是否含有视频">
                        <el-select v-model="selected"  placeholder="">
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

            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="title" label="标题">
                </el-table-column>
                <el-table-column prop="authorID" label="作者ID">
                </el-table-column>
                <el-table-column prop="title" label="内容类别" min-width="100">
                </el-table-column>
                <el-table-column prop="title" label="创建类型" min-width="100">
                </el-table-column>
                <el-table-column prop="title" label="创建时间" min-width="100">
                </el-table-column>
                <el-table-column prop="hasImg" label="图片">
                    <template scope="scope">
                        <span class="f-color-green" v-if="scope.row.hasImg">有</span>
                        <span class="f-color-red" v-else>无</span>
                    </template>
                </el-table-column>
                <el-table-column prop="hasVideo" label="视频">
                    <template scope="scope">
                        <span class="f-color-green" v-if="scope.row.hasVideo">有</span>
                        <span class="f-color-red" v-else>无</span>
                    </template>
                </el-table-column>
                <el-table-column prop="title" label="字段">
                </el-table-column>
                <el-table-column prop="title" label="浏览量">
                </el-table-column>
                <el-table-column prop="title" label="转发量">
                </el-table-column>
                <el-table-column prop="title" label="获赞量">
                </el-table-column>
                <el-table-column prop="title" label="佣金">
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="120">
                    <template scope="scope">
                        <el-button type="text" size="mini" @click="goDetails(scope.$index)">查看</el-button>
                        <el-button type="primary" size="mini" :disabled="true">推广</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <el-pagination @size-change="" @current-change="" :current-page="currentPage" :page-size="100" layout="prev, pager, next, jumper"
                :total="1000" class="text-center m-t-15">
            </el-pagination>
        </div>
        <router-view v-show="$route.name === pageName.details"></router-view>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                pageName:{
                    current: '内容管理',
                    details: '内容详情'
                },
                tableData: [{
                    title: '标题1',
                    authorID: 'a123',
                    hasImg: true,
                    hasVideo: false
                }],
                currentPage: 1,
                selected: ''
            }
        },
        methods: {
            goDetails(index) {
                this.$router.push({
                    name: this.pageName.details,
                    query: {
                        id: index
                    }
                })
            }
        },
    }
</script>