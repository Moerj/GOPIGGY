<style lang="scss" scoped>
    @import 'src/sass/layout/public.scss';
    .index {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        .index-content {
            flex-grow: 1;
            display: flex;
        }
        .router-content {
            position: relative;
            flex-grow: 1;
            overflow: hidden;
            >* {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow: auto;
                padding: 15px;
            }
        }
    }
</style>

<template>
    <div class="index">
        <topbar></topbar>

        <div class="index-content">

            <sidebar></sidebar>

            <div class="router-content">
                <router-view></router-view>
            </div>

            <feedback></feedback>
        </div>

    </div>
</template>

<script>
    import sidebar from 'components/sidebar.vue'
    import topbar from 'components/topbar.vue'
    import feedback from 'components/feedback.vue'
    export default {
        components: {
            sidebar,
            topbar,
            feedback,
        }
    }
</script>