const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [],
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          target: "https://www.fastmock.site/mock/ca2127d863151290af0657a8b7084836/api",
          changeOrigin: true,
          secure:true, //接受对方是https的接口,
          pathRewrite: {'^/api' : ''}

        }
      }
    }
  }
})