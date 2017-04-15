import Vue from 'vue'

Vue.directive('scroll', {
    // 只调用一次，指令第一次绑定到元素时调用
    bind (el, binding, vnode) {
        el.addEventListener("scroll", () => {
            let scrollTop = el.scrollTop;　　
            let scrollHeight = el.scrollHeight;　　
            let windowHeight = el.offsetHeight;　　
            if (scrollTop + windowHeight > scrollHeight - 100) {　　　　
                // console.log('binding', binding);
                // console.log('vnode',vnode);

                // 运行传递过来的方法：加载数据
                if (typeof binding.value === 'function') {
                    binding.value()
                }else{
                    console.warn(el, `元素绑定的 ${binding.rawName} 指令需要传入加载数据的方法`);
                }

            }
        })
    }
})
