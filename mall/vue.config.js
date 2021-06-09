module.exports = {
  lintOnSave: false, // eslint 不生效
  
  devServer: {
    host:'localhost',
    port: 8083,
    proxy: {
      // /search/hotwords
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    },
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
  }
}