<style lang="scss">
    .page_shop_info {
        $imgSize: 200px;
        .avatar-uploader .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }
        .avatar-uploader .el-upload:hover {
            border-color: #20a0ff;
        }
        .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: $imgSize;
            height: $imgSize;
            line-height: $imgSize;
            text-align: center;
        }
        .avatar {
            width: $imgSize;
            height: $imgSize;
            display: block;
        }
    }
</style>
<template>
    <div class="page_shop_info">
        <el-form label-position="right" label-width="120px" :model="formData" style="width:600px;">
            <el-form-item label="商户名称">
                <el-input v-model="formData.shopName"></el-input>
            </el-form-item>
            <el-form-item label="LOGO">
                <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="onUploadSuccess"
                    :on-error="onUploadError" :before-upload="beforeUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon" v-loading.body="uploading" element-loading-text="正在上传"></i>
                </el-upload>
                <span class="f-color-grey">建议尺寸:200px * 200px,大小不超过1M</span>
            </el-form-item>
            <el-form-item label="公司地址">
                <el-select v-model="formData.region" placeholder="请选择城市">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="">
                <el-input v-model="formData.region" placeholder="详细地址"></el-input>
            </el-form-item>
            <el-form-item label="联系人姓名">
                <el-input v-model="formData.userName"></el-input>
            </el-form-item>
            <el-form-item label="联系人手机">
                <el-input v-model="formData.phone" type="number"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">保存</el-button>
                <el-button>返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                formData: {},
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