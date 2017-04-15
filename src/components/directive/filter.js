import Vue from 'vue'


// html过滤器
Vue.filter('html-filter', function (str) {
    if (str === undefined) {
        return ''
    }
    // 返回处理后的值
    str = str.replace(/<[^>]+>/g, ""); //去掉所有的html标记
    str = str.replace(/&nbsp;/ig, ''); //去掉&nbsp;
    return str
})
