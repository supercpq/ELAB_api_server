const express = require('express')
// 导入获取用户信息处理函数
const userinfo_handler = require('../router_handler/userinfo')
// 导入修改用户信息的中间件
const  expressJoi = require('@escook/express-joi')
// 导入修改用户信息的中间件校验规则
const {update_userinfo_schema,update_password_schema,update_avatar_schema,update_role_schema}=require('../schema/user')



// 路由实例
const router = express.Router()

// 获取当前登录用户的基本信息
router.get('/userinfo',userinfo_handler.getUserInfo)
// 修改用户的基本信息
router.post('/userinfo',expressJoi(update_userinfo_schema),userinfo_handler.updateUserInfo)
// 修改用户密码
router.post('/updatepwd',expressJoi(update_password_schema),userinfo_handler.updatePassword)
// 修改头像
router.post('/updateatr',expressJoi(update_avatar_schema),userinfo_handler.updateAvatar)
// 修改用户权限
router.post('/updaterole',expressJoi(update_role_schema),userinfo_handler.updateRole)

// 向外共享
module.exports = router