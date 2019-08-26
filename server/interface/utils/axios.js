// 配置请求数据接口
const axios = require('axios')

const instance = axios.create({
  // 后端接口
  baseURL: `http://${process.env.HOST||'localhost'}:${process.env.PORT||3000}`,
  timeout: 2000,
  headers: {

  }
})

export default instance
