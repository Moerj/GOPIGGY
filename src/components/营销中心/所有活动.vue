<style lang="scss" scoped>
    @import 'src/scss/layout/public.scss';
    @import 'src/scss/ticket.scss';
</style>
<template>
    <div>
        <p class="ui-title">满额/满件促销</p>
        <ticket color="red" :data="ticketRed"></ticket>
        
        <p class="ui-title">优惠卷促销</p>
        <ticket color="blue" :data="ticketBlue"></ticket>
        
        <p class="ui-title">单品/会员促销</p>
        <ticket color="bluish" :data="ticketBluish"></ticket>
        
        <p class="ui-title">限时/搭配促销</p>
        <ticket color="green" :data="ticketGreen"></ticket>
        
        <p class="ui-title">Go高级促销</p>
        <ticket color="yellow" :data="ticketYellow"></ticket>
        
        <p class="ui-title">产品测评/内容营销</p>
        <ticket color="purple" :data="ticketPurple"></ticket>
    </div>
</template>
<script>
    import ticket from './_优惠券.vue'
    export default {
        components: {
            ticket
        },
        data() {
            return {
                ticketRed: [{
                    label: '满减',
                    title: '购买商品一定金额获得优惠',
                    info: '列: 满99元减5元'
                }, {
                    label: '满金赠额',
                    title: '购买商品满一定金额获得赠品',
                    info: '列: 满99元赠送xx商品'
                }],
                ticketBlue: [{
                    label: '满减',
                    title: '购买商品一定金额获得优惠',
                    info: '列: 满99元减5元'
                }],
                ticketBluish: [{
                    label: '满减',
                    title: '购买商品一定金额获得优惠',
                    info: '列: 满99元减5元'
                }],
                ticketGreen: [{
                    label: '满减',
                    title: '购买商品一定金额获得优惠',
                    info: '列: 满99元减5元'
                }],
                ticketYellow: [{
                    label: '满减',
                    title: '购买商品一定金额获得优惠',
                    info: '列: 满99元减5元'
                }],
                ticketPurple: [{
                    label: '满减',
                    title: '购买商品一定金额获得优惠',
                    info: '列: 满99元减5元'
                }],
            }
        }
    }
</script>