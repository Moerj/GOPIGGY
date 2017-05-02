import requireAll from './_requireAll'

// 加载组件、指令、配置
// 参数(模块文件夹路径, 是否包含子目录, 文件匹配的正则)
export default requireAll(require.context("src/directive", true, /^\.\/.*\.js$/));