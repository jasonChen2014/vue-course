const path = require('path')
const resolve = dir => path.join(__dirname,dir)
const BASE_URL = process.env.NODE_ENV === 'production' ? '/admin' : '/'

module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,//应用发布地址？？？
  chainWebpack: config =>{
    config.resolve.alias
      .set('@',resolve('src'))
      .set('_c',resolve('src/components'))
  },
  productionSourceMap: false,
  devServer: {
    //proxy: 'http://localhost:3000'
  }
}
