import Vue from 'vue'

// 返回按钮
Vue.directive('goback', {
    // 只调用一次，指令第一次绑定到元素时调用
    bind (el, binding, vnode) {
        el.addEventListener("click", () => {
            window.history.back()
        })
    }
})
