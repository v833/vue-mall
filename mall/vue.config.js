module.exports = {
  lintOnSave: false, // eslint 不生效
  
  devServer: {
    host:'localhost',
    port: 8082,
    proxy: {
      // /search/hotwords
      '/api': {
        target: 'https://www.imooc.com/',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}