<style lang="scss" scoped>
    @import 'src/sass/layout/public.scss';
    .dropsearch {
        $base-padding: 10px;
        $base-height: 36 + $base-padding*2;
        
        width: 100%;
        overflow: hidden;
        transition: .3s;
        position: relative;
        margin-bottom: 20px;
        padding: $base-padding;
        padding-right: 100px;
        border: $ui-border;
        border-radius: $ui-border-radius;

        &.toggle-btn {
            height: $base-height;
            .search-btn {
                display: block;
            }
        }

        >* {
            margin-right: 10px;
            margin-bottom: 10px;
        }
        &.active {
            height: auto;
            min-height: $base-height;
        }
        >.search-btn {
            display: none;
            position: absolute;
            right: 10px;
            top: $base-padding;
        }
    }

</style>

<template>
    <!--搜索下拉容器-->
    <div class="dropsearch" :class="{ 'active': extend, 'toggle-btn': offsetHeight>100}">
        <slot></slot>
        <el-button class="search-btn" type="primary" @click="extend=!extend">
            <span v-if="!extend"><i class="fa fa-caret-down" ></i>展开</span>
            <span v-if="extend"><i class="fa fa-caret-up" ></i>收起</span>
        </el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                extend: false,
                offsetHeight: 0
            }
        },
        mounted() {
            let dropsearch = document.querySelector('.dropsearch')
            this.offsetHeight = dropsearch.offsetHeight
        }
    }

</script>
