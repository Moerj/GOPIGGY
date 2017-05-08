<style lang="scss" scoped>
    @import 'src/scss/ticket.scss';
</style>
<template>
    <div class="ticket-group">
        <div :class="`ticket ${color}`" v-for="item in data" :key="item.label">
            <div class="label">
                <span class="text">{{item.label}}</span>
                <span class="border-effect"></span>
            </div>
            <div class="content">
                <p class="title">{{item.title}}</p>
                <p class="subtitle">{{item.subtitle}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['color','data']
    }
</script>