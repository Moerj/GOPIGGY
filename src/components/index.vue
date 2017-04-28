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
            align-items: stretch;
        }
        .router-content {
            position: relative;
            flex-grow: 1;
            >* {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0; // overflow: auto;
                padding: 15px;
            }
        }
    }
</style>

<template>
    <div class="index" v-if="isLogged">

        <topbar></topbar>

        <div class="index-content">

            <sidebar></sidebar>

            <div class="router-content overflow-auto ui-scrollbar scroll-blue scroll-hover">
                <router-view></router-view>
            </div>

            <feedback></feedback>
        </div>

    </div>
</template>

<script>
    import sidebar from 'components/sidebar'
    import topbar from 'components/topbar'
    import feedback from 'components/feedback'

    export default {
        components: {
            sidebar,
            topbar,
            feedback,
        },
        data() {
            return {
                isLogged: false,
            }
        },
        methods: {
            checkLogin() {
                this.getSeeion()
                // 未登录,跳转到登录
                if (!this.isLogged) {
                    this.$router.push('login')
                } else if (this.$route.path === '/') {
                    this.$router.push('home')
                }
            },
            getSeeion() {
                this.isLogged = sessionStorage.isLogged
            }
        },
        created() {
            this.checkLogin()
            this.$router.afterEach(route => {
                this.checkLogin()
            })
        }
    }
</script>