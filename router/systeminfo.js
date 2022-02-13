/* 系统信息模块 包含名字 logo 介绍信息等 不需要token*/

// 导入express
const express = require('express')
const router = express.Router()
// 导入处理函数模块
const system_handler = require('../router_handler/systeminfo')
// 导入验证表单数据的中间件
// const expressJoi =require('@escook/express-joi')
// 导入需要的验证规则对象
// const {id_params_schema} = require('../schema/user')

// 获取系统信息
router.get('/systeminfo',system_handler.getSystemInfo)

// 修改系统信息





// 导出路由
module.exports = router