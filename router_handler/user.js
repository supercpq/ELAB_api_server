// 导入数据库模块
const db = require('../db/index')
// 导入加密模块bcryptjs
const bcrypt = require('bcryptjs')
// 导入jwt
const jwt = require('jsonwebtoken')
// 导入配置文件
const config = require('../config')


// 注册处理函数
exports.regUser = (req, res) => {
    const userinfo = req.body
    // 判断数据是否合法
    if (!userinfo.username || !userinfo.password) {
        return res.send({
            status: 1,
            message: '用户名或密码不能为空'
        })
    }

    // 定义SQL语句
    const sql = 'select * from ev_users where username=?'
    db.query(sql, [userinfo.username], function (err, results) {
        // 执行 SQL 语句失败
        if (err) {
            return res.send({ status: 1, message: err.message })
        }
        // 用户名被占用
        if (results.length > 0) {
            return res.send({ status: 1, message: '用户名被占用，请更换其他用户名！' })
        }
        // TODO: 用户名可用，继续后续流程...
        // 对密码进行加密处理
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)
        const sql = 'insert into ev_users set ?'
        db.query(sql, { username: userinfo.username, password: userinfo.password }, function (err, results) {
            // 执行sql语句失败
            if (err) return res.send({
                status: 1,
                message: err.message
            })
            // sql语句成功，但影响行为不为1
            if (results.affectedRows !== 1) return res.send({
                status: 1,
                message: '注册用户失败，请稍后重试'
            })
            // 注册成功
            res.send('注册成功')
        })
    })
}

// 登录处理函数
exports.login = (req, res) => {
    const userInfo = req.body
    // sql语句
    const sql = 'select * from ev_users where username=?'
   

    db.query(sql,[userInfo.username], function (err, results) {
        // sql语句失败
        if (err) return res.cc(err)
        // 用户不存在
        if (results.length===0) return res.cc('登录失败，用户不存在')
        // sql成功，但查询到的数据不为1
        if (results.length!==1) return res.cc('登录失败')
        
        // 输入密码与加密密码比较
        const compareResult = bcrypt.compareSync(userInfo.password,results[0].password)
        if(!compareResult) return res.cc('登录失败，密码错误')

        // 剔除密码和头像
        const user = {...results[0],password:'',user_pic:''}
        // 生成token字符串
        const tokenStr = jwt.sign(user,config.jwtSecretKey,{
            expiresIn:'10h', //有效期为10小时 
        })
        res.send({
            status:0,
            token:'Bearer ' + tokenStr,
        })

      })
}