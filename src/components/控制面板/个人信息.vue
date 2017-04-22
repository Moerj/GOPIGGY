<template>
    <div>
        <el-card>
            <el-form label-position="right" label-width="150px" :model="formData" style="width:400px">
                <el-form-item label="账号">
                    <span>xxx</span>
                </el-form-item>
                <el-form-item label="昵称">
                    <el-input v-model="formData.shopName"></el-input>
                </el-form-item>
                <el-form-item label="头像">
                    <el-upload class="ui-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="onUploadSuccess"
                        :on-error="onUploadError" :before-upload="beforeUpload">
                        <img v-if="imageUrl" :src="imageUrl">
                        <i v-else class="el-icon-plus" v-loading.body="uploading" element-loading-text="正在上传"></i>
                    </el-upload>
                    <span class="f-color-grey">建议尺寸:200px * 200px,大小不超过1M</span>
                </el-form-item>
                <el-form-item label="人人店后台登录微信">
                    <div class="ui-input-group">
                        <el-input v-model="formData.region" placeholder="输入微信号"></el-input>
                        <el-button type="text" class="m-l-15">解绑微信</el-button>
                    </div>
                </el-form-item>
                <el-form-item label="人人店管理员微信">
                    <div class="ui-input-group">
                        <el-input v-model="formData.userName" placeholder="输入微信号"></el-input>
                        <el-button type="text" class="m-l-15">绑定微信</el-button>
                    </div>
                </el-form-item>
                <el-form-item label="手机">
                    <div class="ui-input-group">
                        <el-input v-model="formData.phone" type="number"></el-input>
                        <el-button type="text" class="m-l-15">更改手机</el-button>
                    </div>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="formData.phone" type="email"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-radio v-model="formData.sex" label="男">男</el-radio>
                    <el-radio v-model="formData.sex" label="女">女</el-radio>
                    <el-radio v-model="formData.sex" label="保密">保密</el-radio>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">保存</el-button>
                    <!--<el-button>返回</el-button>-->
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                formData: {
                    sex: '保密'
                },
                imageUrl: '',
                uploading: false
            }
        },
        methods: {
            // 头像上传
            onUploadSuccess(res, file) {
                this.uploading = false
                this.imageUrl = URL.createObjectURL(file.raw);
                let msg = '上传头像成功'
                console.log(msg);
                this.$message({
                    message: msg,
                    type: 'success'
                });
            },
            onUploadError() {
                this.uploading = false
                this.$message({
                    message: '头像上传失败',
                    type: 'error'
                });
            },
            beforeUpload(file) {
                this.uploading = true

                const isJPG = file.type === 'image/jpeg';
                const isLt = file.size / 1024 / 1024 < 1;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt) {
                    this.$message.error('上传头像图片大小不能超过 1MB!');
                }
                return isJPG && isLt;
            }
        }
    }
</script>