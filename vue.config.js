const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      proxy: {
        'api': {
          target: "https://www.fastmock.site/mock/ca2127d863151290af0657a8b7084836/api",
          changeOrigin: true,
        }
      }
    }
  }
})