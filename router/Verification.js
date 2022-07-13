/*验证码*/
//导入express
const express = require('express')
//导入验证码处理函数
const Verification_handler = require('../router_handler/Verification')
// 导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi')
//导入邮箱规则对象
const {sent_Verification_schema,check_Verification_schema} = require('../schema/user')



//创建路由实例
const router = express.Router()

//发验证码
router.post('/code',expressJoi(sent_Verification_schema),Verification_handler.sent_Verification)
//收验证码
router.post('/code/check',expressJoi(check_Verification_schema),Verification_handler.check_Verification)

// 向外共享
module.exports = router