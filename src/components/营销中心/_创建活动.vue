<style lang="scss" scoped>
    @import 'src/scss/ticket.scss';
    .img-pig {
        background: url(~src/images/pig.png) no-repeat;
        background-size: cover;
        width: 500px;
        height: 500px;
    }

    .content {
        height: 100%;
        width: 100%;
    }

    .ticket-group {
        width: 100%;
        padding: 0 !important;
        margin: 30px 0;
    }
</style>
<template>
    <div class="content flex column flex-center">
        <h2>{{title}}活动</h2>
        <p class="m-t-0 m-b-20 f-color-text">{{subtitle}}</p>
        <el-button type="primary" @click="ticketAdd()">创建此活动</el-button>
        <ticket :color="ticketColor" :data="ticketData" name="ticket"></ticket>
        <div class="img-pig"></div>
    </div>
</template>
<script>
    import ticket from './_优惠券.vue'
    export default {
        components: {
            ticket
        },
        props: [
            'title',
            'subtitle',
            'ticketColor',
            'ticketData',
            'ticketAdd'
        ],
        watch: {
            ticketColor(val) {
                console.log(val);
            }
        }
    }
</script>