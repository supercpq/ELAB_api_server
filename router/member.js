/* 成员相关路由模块 */

// 引入express
const express = require('express')
// 引入处理函数模块
const member_handler = require('../router_handler/member')
const router = express.Router()
// 导入验证表单数据的中间件
const  expressJoi = require('@escook/express-joi')
// 导入需要的验证规则对象
const {id_params_schema,position_body_schema} = require('../schema/user')

// 获取所有成员
router.get('/allmem',member_handler.getAllMember)
// 根据id获取单个成员
router.get('/onemem/:id',expressJoi(id_params_schema),member_handler.getOneMember)
// 根据id删除成员
router.get('/deletemem/:id',expressJoi(id_params_schema),member_handler.deleteOneMember)
// 修改成员职位
router.post('/changepst',expressJoi(position_body_schema),member_handler.changePosition)

// 导出成员信息模块
module.exports =router