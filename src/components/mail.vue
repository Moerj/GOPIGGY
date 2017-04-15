<style lang="scss">
    .msgContent{
        border: 1px solid #eee;
        margin-top: 15px;
        color: rgba( black, .5);
        >.empty{
            text-align: center;
            padding: 15px;
        }
    }
</style>

<template>
    <div>
        <p class="content-title">站内信 <i class="fa fa-star-o"></i></p>
        <el-tabs v-model="activeMailTabs" type="card" @tab-click="mailTabsClick">
            <el-tab-pane label="收件箱" name="getMail">
                <el-tabs v-model="activeMsgType" @tab-click="msgTypeClick">

                    <el-tab-pane label="全部信息" name="all">

                        <dropdownSearch> 
                            <el-select v-model="msgSelected" placeholder="请选择">
                                <el-option v-for="item in msgType" :value="item.value">
                                </el-option>
                            </el-select>
                            <el-select v-model="msgSelected" placeholder="请选择">
                                <el-option v-for="item in msgType" :value="item.value">
                                </el-option>
                            </el-select>
                            <el-input class="input-inline-b" v-model="msgSearch" placeholder="请输入内容"></el-input>
                        </dropdownSearch>

                        <el-button type="">发送站内信</el-button>
                        <el-button type="">标记本页已读</el-button>
                        <el-button type="danger">删除</el-button>

                        <div class="msgContent">
                            <p v-if="!msgData" class="empty">暂无记录</p>
                            <div v-else>

                            </div>
                        </div>

                    </el-tab-pane>

                    <el-tab-pane label="未读信息( 0 )" name="unread">未读信息</el-tab-pane>

                    <el-tab-pane label="已读信息" name="read">已读信息</el-tab-pane>

                </el-tabs>
            </el-tab-pane>
            <el-tab-pane label="发件箱" name="setMail">发件箱</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import dropdownSearch from './dropdown-search.vue';
    export default {
        components: {
            dropdownSearch
        },
        data() {
            return {
                activeMailTabs: 'getMail',
                activeMsgType: 'all',
                msgType: [{
                    value: '全部'
                }, {
                    value: '标题'
                }, {
                    value: '内容'
                }, {
                    value: '收件人'
                }, {
                    value: '接受时间'
                }, {
                    value: '状态'
                }],
                msgSelected: '全部',
                msgSearch: '',
                msgData: null,
            };
        },
        methods: {
            mailTabsClick(tab, event) {
                // console.log(tab, event);
            },
            msgTypeClick() {

            }
        },

    };

</script>
