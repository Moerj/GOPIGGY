import Vue from 'vue'

// 返回按钮
Vue.directive('click-cooling', {
    // 只调用一次，指令第一次绑定到元素时调用
    bind (el, binding, vnode) {
        el.addEventListener("click", () => {
            let oldText = el.innerHTML
            let second = 30 
            el.disabled = true
            document.body.className
            el.className += ' is-disabled';
            
            let timer = setInterval(() =>{
                second--
                if (second<=0) {
                    clearInterval(timer)
                    el.disabled = false
                    el.className = el.className.replace(/is-disabled/g, '');
                    el.innerHTML = oldText
                }else{
                    el.innerHTML = `等待 ${second} 秒`
                }
            }, 1000);
        })
    }
})
