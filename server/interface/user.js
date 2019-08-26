// 后台用户接口router
const Router = require('koa-router')
// 建立前后端 账户对应关系
const Redis = require('koa-redis')
// 使用nodemauler 发送邮件
const nodeMailer = require('nodemailer')
// 引入用户模型
const User = require('../dbs/models/users')
// 
const Passport = require('./utils/passport')
// 引入模型整体配置文件
const Email = require('../dbs/config')
// 引入axios处理后端数据
const axios = require('axios')





// 定义所有路由固定前缀
let router = new Router({
  prefix: '/users'
});

// 新建redis实例
let Store = new Redis().client

//注册接口
router.post('/signup', async (ctx) => {
  // 使用解构赋值对 数据进行处理
  const {
    username,
    password,
    email,
    code
  } = ctx.body.request.body;

  // 判断验证码
  if (code) {
    // 根据用户名 获取验证码
    const saveCode = await Store.hget(`nodemail:${username}`, 'code')
    //  根据用户名 获取创建验证码的创建日期
    const saveExpire = await Store.hget(`nodemail:${username}`, 'expire')

    // 验证 验证码 正确和实效性（1）
    if (code === saveCode) {
      if (new Date().getTime() - saveExpire > 0) {
        ctx.body = {
          code: -1,
          msg: '验证码已过期，请重新尝试'
        }
        return false
      } else {
        ctx.body = {
          code: -1,
          msg: '请填写正确的验证码'
        }
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '请填写验证码'
      }
    }

    // 验证 用户名 密码 邮箱的正确性
    let user = await find({
      username
    })
    // 用户名 已经被注册
    if (user.length) {
      ctx.body = {
        code: -1,
        msg: '已经被注册'
      }
      return
    }
    // 用户名 没有被注册进行写库的操作
    let user = await User.create({
      username,
      password
    })

    if (user) {
      let res = await axios.post('/users/signin' {
        username,
        password
      })
      if (res.data && res.data.code == 0) {
        ctx.body = {
          code: 0,
          msg: '注册成功',
          user: res.data.user
        }
      } else {
        ctx.body = {
          code: -1,
          msg: 'error'
        }
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '注册失败'
      }
    }
  }

})
