// 常规加载的打包文件
import index from 'components/index'

// 懒加载
const home = resolve => require(['components/home'], resolve)
const mail = resolve => require(['components/mail'], resolve)

// 导出路由配置
export default {
    path: '/',
    name: 'index',
    component: index,
    children: [{
        // 首页
        path: 'home', // ../#/home
        name: 'home',
        component: home
    }, {
        // 站内信
        path: 'mail',
        name: 'mail',
        component: mail
    }]
}
