// 模块导入
// 引入express
const express = require('express')
// 引入cors，解决跨域
const cors = require('cors')
// 引入路由 注册登录
const userRouter = require('./router/user')
// 引入路由 用户信息
const userinfoRouter = require('./router/userinfo')
// 引入成员信息 
const memberRouter = require('./router/member')
// 导入系统信息,不需要token
const systemRouter = require('./router/systeminfo')
// 导入系统信息，需要token
const systemRouterToken = require('./router/systeminfo_token')
// 导入@hapi/joi
const joi = require('joi')
// 导入配置文件
const config = require('./config')
// 导入解析token的中间件
const exprssJWT = require('express-jwt')

// 创建实例
const app = express()
// 重新封装的res.send()
app.use(function (req, res, next) {
    // status=0为成功 status=1为失败，默认为1
    res.cc = function (err, status = 1) {
        res.send({
            //    状态
            status,
            // 状态描述，判断err是错误对象还是字符串
            message: err instanceof Error ? err.message : err,
        })
    }
    next()
})


// cors跨越
app.use(cors())
// ，配置解析 application/x-www-form-urlencoded 格式的表单数据的中间件
app.use(express.urlencoded({ extended: false }))


// 制定不需要的token接口
app.use(exprssJWT({
    secret: config.jwtSecretKey
}).unless({ path: [/^\/api\//] })
)

// 捕获错误的中间件
app.use(function (err, req, res, next) {
    // 数据验证失败
    if (err instanceof joi.ValidationError) return res.cc(err)
    // token认证失败
    if (err.name === 'UnauthorizedError') return res.cc('身份认证失败')
    res.cc('未知错误')
    next()
})

// 注册登录路由模块
app.use('/api', userRouter)
// 系统信息模块
app.use('/api',systemRouter)

// /my开头的接口需要进行token验证
// 成员信息路由模块
app.use('/my', memberRouter)
// 个人信息路由模块
app.use('/my', userinfoRouter) 
// 系统信息模块，需要token
app.use('/my',systemRouterToken)

app.listen(3007, function () {
    console.log('api server running at http://127.0.0.1:3007')
})

