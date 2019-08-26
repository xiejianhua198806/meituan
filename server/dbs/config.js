// 后台接口的配置文件
export default {
  dbs: 'mongodb://127.0.0.1:27017/student',
  // 用于接收cookie，建立起前后端对应的关系
  redis: {
    // redis地址
    get host() {
      return '127.0.0.1'
    },
    // redis端口
    get port() {
      return 6379
    }
  },
  //   qq 邮箱配置
  stmp: {
    get host() {
      return 'smtp.qq.com'
    },
    // qq邮箱
    get user() {
      return '970130428@qq.com'
    },
    // qq 验证码配置
    get pass() {
      return 'cwxsjalickygbbfd'
    },
    // 随机大写四位验证码
    get code() {
      return () => {
        return Math.random().toString(16).slice(2, 6).toUpperCase()
      }
    },
    // 验证码一分钟有效
    get expire() {
      return () => {
        return new Date().getTime() + 60 * 60 * 1000
      }
    }
  }
}
