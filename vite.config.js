const path = require('path')
// vite.config.js # or vite.config.ts

module.exports = {
  // publicPath: '/',
  publicPath: "/",
  outputDir: 'dist',
  assetsDir: 'static',
  cssPreprocessOptions: {
    scss: {
      additionalData: '@import "./src/assets/scss/global.scss";'
    }
  },
  alias: {
    // 键必须以斜线开始和结束
    '/@/': path.resolve(__dirname, './src'),
	  '/@api/': path.resolve(__dirname, './src/assets/CompositionAPI'),
	  '/@views/': path.resolve(__dirname, './src/views'),
	  '/@coms/': path.resolve(__dirname, './src/components'),
  },
  // hostname: 'localhost',
  // port: 8080,
  // // 是否自动在浏览器打开
  // open: true
}