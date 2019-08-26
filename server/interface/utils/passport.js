// passport.js是Nodejs中的一个做登录验证的中间件
const passport = require('koa-passport')
// 读取本地数据的中间件,两种任选一种
const LocalStrategy = require('passport-local')
//const LocalStrategy = require('passport-local').Strategy;

// 引入 定义好的数据模型
const UserModel = require('../../dbs/models/users')


// 使用中间件 将传递过来的的用户和密码进行比对
passport.use(new LocalStrategy(
  async function (username, password, done) {
    // 
    let where = {
      username
    }
    // 
    let result = await UserModel.findOne(where)
    if (result != null) {
      if (result.password === password) {
        return done(null, result)
      } else {
        return done(null, false, '密码错误')
      }
    } else {
      return done(null, false, '用户不存在')
    }
  }
))


// session序列化与反序列化
// 验证用户提交的凭证是否正确， 是与session中储存的对象进行对比， 所以涉及到从session中存取数据，
// 需要做session对象序列化与反序列化。 调用代码如下：
passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserializeUser(function (user, done) {
  return done(null, user)
})

//这里第一段代码是将环境中的user.id序列化到session中，即sessionID，同时它将作为凭证存储在用户cookie中。

// 第二段代码是从session反序列化， 参数为用户提交的sessionID， 若存在则从数据库中查询user并存储与req.user中。

// 这段代码的顺序可以放在passport.use() 的前面或后面， 但需要在app.configure() 之前。

export default passport
