// 导入数据库模块
const db = require('../db/index')

// 获取系统信息函数
exports.getSystemInfo = (req, res) => {
    // 根据请求id获取对应信息sql
    const sql = `select id,item_name,item_describe,logo,picture,other from ev_system where delete_mark=0`
    db.query(sql, (err, results) => {
        // sql失败
        if (err) return res.cc('获取系统信息失败')
        // sql成功,响应信息
        console.log(results)
        res.send({
            status: 0,
            message: '获取系统信息成功',
            data: results
        })
    })
}

// 修改系统信息
exports.updateSystemInfo = (req, res) => {
    // 权限验证sql
    const sql = `select roles from ev_users where id=?`
    db.query(sql, [req.user.id], (err, results) => {
        // sql失败
        if (err) return res.cc('修改系统信息失败')
        // sql成功，查询结果不为1
        if (results.length !== 1) return res.cc('修改系统信息失败')
        // 权限不足
        if (results[0].roles !== 1) return res.cc('修改系统信息失败,权限不足')
        // 修改系统信息sql
        const sql2 = `update ev_system set ? where id=? `
        db.query(sql2, [req.body, req.body.id], (err, results) => {
            // sql2失败
            if (err) return res.cc('修改系统信息失败')
            // sql2成功,影响结果不为1
            if (results.affectedRows !== 1) return res.cc('修改系统信息失败')
            res.cc('修改系统信息成功', 0)
        })

    })
}
// 添加系统信息项函数
exports.addSystemInfo = (req, res) => {
    // 权限验证sql
    const sql = `select roles from ev_users where id=?`
    db.query(sql, [req.user.id], (err, results) => {
        // sql失败
        if (err) return res.cc('添加系统信息失败')
        // sql成功，查询结果不为1
        if (results.length !== 1) return res.cc('添加系统信息失败')
        // 权限不足
        if (results[0].roles !== 1) return res.cc('添加系统信息失败,权限不足')
        // 修改系统信息sql
        const sql2 = `insert into ev_system(item_name,item_describe,logo,picture,other) values(?,?,?,?,?) `
        db.query(sql2, [req.body.item_name, req.body.item_describe, req.body.logo, req.body.picture, req.body.other], (err, results) => {
            // sql2失败
            if (err) return res.cc('修改系统信息失败1')
            // sql2成功,影响结果不为1
            if (results.affectedRows !== 1) return res.cc('修改系统信息失败')
            res.cc('添加系统信息成功', 0)
        })
    })
}
// 删除系统信息项
exports.deleteSystemInfo = (req, res) => {
    // 权限验证sql
    const sql = `select roles from ev_users where id=?`
    db.query(sql, [req.user.id], (err, results) => {
        // sql失败
        if (err) return res.cc('删除系统信息失败')
        // sql成功，查询结果不为1
        if (results.length !== 1) return res.cc('删除系统信息失败')
        // 权限不足
        if (results[0].roles !== 1) return res.cc('删除系统信息失败,权限不足')
        // 修改系统信息sql
        const sql2 = `update  ev_system set delete_mark=1 where id=?`
        db.query(sql2, [req.params.id], (err, results) => {
            // sql2失败
            if (err) return res.cc('删除系统信息失败')
            // sql2成功,影响结果不为1
            if (results.affectedRows !== 1) return res.cc('删除系统信息失败')
            res.cc('删除系统信息成功', 0)
        })
    })
}