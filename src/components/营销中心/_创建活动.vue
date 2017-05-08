<style lang="scss" scoped>
    .img-pig{
        background: url(~src/images/pig.png) no-repeat;
        background-size: cover;
        width: 500px;
        height: 500px;
    }
</style>
<template>
    <div class="flex column flex-center" style="height:100%;">
        <h2>{{title}}</h2>
        <p class="m-t-0 m-b-20 f-color-text">{{subtitle}}</p>
        <slot></slot>
        <div class="img-pig"></div>
    </div>
</template>
<script>
    export default {
        props: [
            'title',
            'subtitle',
        ]
    }
</script>