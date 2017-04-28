<template>
    <div>
        <el-form label-width="180px">
            <el-form-item label="佣金设置">
                <template scope="scope">
                    <p class="m-0 f-color-grey">注意:填写的获得佣金比例均为订单实付金额的比例</p>
                    <div class="p-t-5 p-b-5 flex align-center space-between f-color-grey" style="width:800px">
                        <div><i class="fa fa-user"></i>消费者</div>
                        <div class="flex inline column arrow flex-center">购买<i class="fa fa-long-arrow-right f-20"></i></div>
                        <div class="flex column flex-center" style="width:100px;">
                            <span><i class="fa fa-user"></i>推客A获得</span>
                            <el-input size="small">
                                <span slot="append">%</span>
                            </el-input>
                        </div>
                        <div class="flex inline column arrow flex-center">推荐人<i class="fa fa-long-arrow-right f-20"></i></div>
                        <div class="flex column flex-center" style="width:100px;">
                            <span><i class="fa fa-user"></i>推客B获得</span>
                            <el-input size="small">
                                <span slot="append">%</span>
                            </el-input>
                        </div>
                        <div class="flex inline column arrow flex-center">推荐人<i class="fa fa-long-arrow-right f-20"></i></div>
                        <div class="flex column flex-center" style="width:100px;">
                            <span><i class="fa fa-user"></i>推客C获得</span>
                            <el-input size="small">
                                <span slot="append">%</span>
                            </el-input>
                        </div>
                    </div>
                </template>
            </el-form-item>
            <el-form-item label="引导消费者有效期">
                <el-tooltip content="以用户最后访问的小店链接为准" placement="top" effect="light" :open-delay="500">
                    <el-radio name="radio" label="1">1次</el-radio>
                </el-tooltip>
                <el-tooltip content="以用户最后访问的小店链接为准" placement="top" effect="light" :open-delay="500">
                    <el-radio name="radio" label="2">永久</el-radio>
                </el-tooltip>
                <el-tooltip content="访问小店链接一天内有效" placement="top" effect="light" :open-delay="500">
                    <el-radio name="radio" label="2">1天</el-radio>
                </el-tooltip>
                <el-tooltip content="访问小店链接一周内有效" placement="top" effect="light" :open-delay="500">
                    <el-radio name="radio" label="2">1周</el-radio>
                </el-tooltip>
                <el-tooltip content="访问小店链接一月内有效" placement="top" effect="light" :open-delay="500">
                    <el-radio name="radio" label="2">1月</el-radio>
                </el-tooltip>
            </el-form-item>
            <el-form-item label="推客购买时获得佣金方式">
                <el-checkbox name="checkbox" label="1">推客自己获得</el-checkbox>
            </el-form-item>
            <el-form-item label="推广别名">
                <el-input class="ui-input-w"></el-input>
            </el-form-item>
            <el-form-item label="店招名称">
                <el-input class="ui-input-w"></el-input>
            </el-form-item>
            <el-form-item>
                <span class="f-color-grey" v-html="message"></span>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                message: `说明: 可用的魔法参数有{{parent_name}}:推客昵称, {{shop_name}}:店铺名称, {{extension_name}}:推广别名.
                建议字数不要太长.`
            }
        }
    }
</script>