<style lang="scss">
    @import 'src/sass/index.scss';
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
    import sidebar from './sidebar.vue'
    import topbar from './topbar.vue'
    import feedback from './feedback.vue'
    export default {
        components: {
            sidebar,
            topbar,
            feedback
        }
    }
</script>