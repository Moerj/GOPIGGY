import Vue from 'vue'
import App from './App'
import requireAll from './config/requireAll'

// http请求
import axios from './config/axios'
Vue.use(axios)


// element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

// fa字体库
import 'assets/font-awesome/scss/font-awesome.scss'


// 自定义样式
import 'src/sass/layout/base.scss' //快捷样式库
import 'src/sass/layout/ui.scss' //ui样式

// 公共组件
import dropsearch from 'components/global/dropsearch'
import imgupload from 'components/global/imgupload'
Vue.component('ui-dropsearch', dropsearch)
Vue.component('ui-img-upload', imgupload)


// 加载组件、指令、配置
// 参数(模块文件夹路径, 是否包含子目录, 文件匹配的正则)
requireAll(require.context("components/directive", true, /^\.\/.*\.js$/));


// 引入路由
import router from './config/router'


// 创建Vue根实例
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
