// 导入数据库操作模块
const db = require('../db/index')
//导入第三方模块发邮箱
const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')
// 导入配置文件
const config = require('../config')

var codeID = 1
var code = 111111

//发验证码
exports.sent_Verification = (req,res) => {
    //发过来的Email
    var ema = req.body.aEmail
    //验证码的最大最小值，为了应对变化，放在../config中
    const min = config.check_min
    const max = config.check_max
    // 生成随机数
    code = Math.floor(Math.random() * (max - min + 1)) + min;
    
    //一些必要的配置
    var transporter = nodemailer.createTransport(smtpTransport({
        host: 'smtp.qq.com',
        secure: true, 
        port: 465,
        auth: {
        user: '2962285639@qq.com',
        pass: 'provdnqzwagcdhfg' //qq授权码，需要去qq邮箱开启smtp服务
        }
    }))
    var text = `你的验证码是 ${code} ,五分钟内有效`
    //var mailOptions = email_content
    var mailOptions =  {
        from: '2962285639@qq.com', // 发邮件的账号
        to: ema, // 收邮件的账号
        subject: 'elab验证码', // 标题
        text // 邮寄的内容
    }
    transporter.sendMail(mailOptions, function(err, res){
        if (err) {
            console.log('发送失败')
        }
    })

    const sql = 'insert into Verification (code,daytime) values (?,now())'
    db.query(sql, [code], function (err, results) {
        // 执行 SQL 语句失败
        if (err) {
            return res.send({ status: 1, message: err.message })
        }
        setTimeout(function () {
            const sql1 = 'delete from Verification where daytime < (NOW() - INTERVAL 5 MINUTE);'
            db.query(sql1, function (err, results) {
                console.log("delete them")
            })
        }, 1000*60*6);
        const sql1 = ' select * from Verification where code=?'
        db.query(sql1, [code], function (err, results) {
            if (results.length == 0){
                return res.send({ status: 1, message: '没找着' })
            }
        //通过正则获取codeID
            var result=JSON.stringify(results[0])
            var str = result.toString()
            var reg = /(?<={"codeID":).*(?=,"code":)/
            var matchResult = reg.exec(str).toString()
            codeID = Number(matchResult)
            return res.send({ status: 0, message: 'success',codeID })
        })
    })
}

//收验证码
exports.check_Verification = (req,res) => {
    const sql = 'select * from Verification where codeID=? and code=?'
    db.query(sql, [req.body.codeID,req.body.code], function (err, results) {
        // 执行 SQL 语句失败
        if (err) {
            return res.send({ status: 1, message: err.message })
        }
        // 匹配成功！验证正确，删除codeID和code
        if (results.length > 0) {
            const sql1 = ' delete from Verification where codeID=? and code=?'
            db.query(sql1, [req.body.codeID,req.body.code], function (err, results) {
            })
            return res.cc("成功",0)
        }
        if (results.length == 0) {
            return res.cc("验证码错误")
        }
    })
}