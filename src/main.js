import Vue from 'vue'
import App from './App'

// http请求
import axios from './config/axios'
Vue.use(axios)

// element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

// vue字体库
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

// 自定义样式
import 'src/scss/layout/base.scss' //快捷样式库
import 'src/scss/layout/ui.scss' //ui样式

// 自定义全局指令
import './config/directive'

// 公共组件
import dropsearch from 'components/global/dropsearch'
import imgupload from 'components/global/imgupload'
Vue.component('ui-dropsearch', dropsearch)
Vue.component('ui-img-upload', imgupload)

// 路由集合
import router from './config/router'


// 创建Vue根实例
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
