<template>
    <div>
        <el-upload class="ui-uploader" :action="action" :show-file-list="false" :on-success="onUploadSuccess" :on-error="onUploadError"
            :before-upload="beforeUpload">
            <img v-if="imageUrl" :src="imageUrl">
            <i v-else class="el-icon-plus" v-loading.body="uploading" element-loading-text="正在上传"></i>
        </el-upload>
    </div>
</template>
<script>
    export default {
        props: [
            'action', //上传地址
            'old-url' //初始回显url
        ],
        data() {
            return {
                imageUrl: this.oldUrl || '',
                uploading: false
            }
        },
        methods: {
            // 头像上传
            onUploadSuccess(res, file) {
                this.uploading = false
                this.imageUrl = URL.createObjectURL(file.raw);
                let msg = '图片上传成功'
                console.log(msg);
                this.$message({
                    message: msg,
                    type: 'success'
                });
            },
            onUploadError() {
                this.uploading = false
                this.$message({
                    message: '图片上传失败',
                    type: 'error'
                });
            },
            beforeUpload(file) {
                this.uploading = true

                const isJPG = file.type === 'image/jpeg';
                const isLt = file.size / 1024 / 1024 < 1;

                if (!isJPG) {
                    this.$message.error('上传图片只能是 JPG 格式!');
                }
                if (!isLt) {
                    this.$message.error('上传图片大小不能超过 1MB!');
                }
                return isJPG && isLt;
            }
        }
    }
</script>