module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
    },
  },
  lintOnSave: false,
  // 开启代理服务器（方式一）
  // 缺点：只能配置一个代理；如果本地找到同源名称，则不再找真正服务器
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  
  // 开启代理服务器（方式二） 可配置多个代理
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:5000', // 服务器地址
  //       pathRewrite:{'^/api':''},
  //       ws: true,  // 用于支持websocket
  //       changeOrigin: true, // 用于控制请求头中的host值
  //     },
  //     '/foo': {
  //       target: '<other_url>'
  //     }
  //   }
  // }
}