import Vue from 'vue'

// 引入 ECharts 模块
import echarts from 'echarts/lib/echarts'

import 'echarts/lib/chart/line' // 折线图
import 'echarts/lib/chart/pie' // 饼图

import 'echarts/lib/component/tooltip' // 提示框
import 'echarts/lib/component/title' //标题组件
import 'echarts/lib/component/legend' //图例组件

Vue.directive('echarts', {
    inserted (el, binding, vnode) {
        const echart = echarts.init(el);
        echart.setOption(binding.value)

        let timer
        window.addEventListener('resize', function () {
            if (timer) {
                return
            }
            timer = setTimeout(function () {
                echart.resize()
                timer = null
            }, 500);
        })
    }
})
