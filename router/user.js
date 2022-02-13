// 引入express
const express = require('express')
// 引入处理函数模块
const userHandler = require('../router_handler/user')
const router = express.Router()
// 导入验证表单数据的中间件
const  expressJoi = require('@escook/express-joi')
// 导入需要的验证规则对象
const {reg_login_schema} = require('../schema/user')


//用户注册
router.post('/reguser',expressJoi(reg_login_schema),userHandler.regUser)
// 登录
router.post('/login',expressJoi(reg_login_schema),userHandler.login)

module.exports = router
