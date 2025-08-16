// 正确写法：继承默认主题
import DefaultTheme from 'vitepress/theme'
import './style.css' // 可选：你的自定义样式

export default DefaultTheme // ✅ 必须导出 default