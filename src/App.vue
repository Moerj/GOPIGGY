<template>
    <div id="app" class="ui-scrollbar-global">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }

</script>
