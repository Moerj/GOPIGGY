<style lang="scss">
    .dropdown-search{
        width: 100%;
        height: 36px;
        overflow: hidden;
        transition: .3s;
        position: relative;
        margin-bottom: 20px;
        &.active{
            height: auto;
            min-height: 36px;
        }
        >.search-btn{
            position: absolute;
            right: 10px;
            top: 0;
        }
    }
</style>

<template>
<!--搜索下拉容器-->
    <div class="dropdown-search" :class="{ active: extend }">
        <slot></slot>
        <el-button class="search-btn" type="primary" @click="extend=!extend">搜索 
            <i class="fa fa-caret-square-o-down" v-if="!extend"></i>
            <i class="fa fa-caret-square-o-up" v-if="extend"></i>
        </el-button>
    </div>
</template>

<script>
    export default {
        name: 'dropdownSearch',
        data () {
            return {
                extend: false
            }
        },
    }
</script>