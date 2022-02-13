// 导入数据库操作模块
const db = require('../db/index')

// 获取所有成员函数
exports.getAllMember=(req,res)=>{
//    获取所有成员sql
const sql = `select id,nickname,email,elab_group,grade,elab_position,excellence,phone,major from ev_users where delete_mark=0`
db.query(sql,(err,results)=>{
    // sql失败
    if(err) return res.cc('获取所有成员信息失败')
    // sql成功
    res.send({
        status:0,
        message:"获取所有成员信息成功",
        data:results
    })
})
}

// 根据id获取单个成员信息
exports.getOneMember = (req,res)=>{
    // 根据id查找成员sql
    const sql = `select id,nickname,email,elab_group,grade,elab_position,excellence,phone,major from ev_users where id=? and delete_mark=0`
    db.query(sql,[req.params.id],(err,results)=>{
        // sql失败
        if(err) return res.cc('获取成员信息失败1')
        // sql成功，查询结果不为1
        console.log(results)
        if(results.length!==1) return res.cc('获取成员信息失败2')
        // 响应查询结果
        res.send({
            status:0,
            message:'获取成员信息成功',
            data:results[0] 
        })
    })
}

// 根据id删除成员
exports.deleteOneMember=(req,res)=>{
    // 权限验证sql
    const sql = `select roles from ev_users where id=?`
    db.query(sql,[req.user.id],(err,results)=>{
        if(err) return res.cc('删除成员失败')
        // sql成功，查询结果不为1
        if(results.length!==1) return res.cc('删除成员失败')
        // 权限不足
        if(results[0].roles!==1) return res.cc('删除成员失败，权限不足')
        // 动态删除成员sql
        const sql2= 'update ev_users set delete_mark=1 where id=?'
        db.query(sql2,[req.params.id],(err,results)=>{
            // sql失败
            if(err) return res.cc('删除成员失败')
            // sql成功，影响结果不为1
            if(results.affectedRows!==1) return res.cc('删除成员失败')
            res.cc('删除成员成功',0)
        })
    })
}
// 修改成员职位
exports.changePosition=(req,res)=>{
    // 验证操作者权限sql
    const sql = `select roles from ev_users where id=?`
    db.query(sql,[req.user.id],(err,results)=>{
        // sql失败
        if(err) return res.cc('修改职位失败1')
        // sql成功,结果不为1
        if(results.length!==1) return res.cc('修改职位失败2')
        // 权限不足
        if(results[0].roles!==1) return res.cc('修改职位失败，权限不足')
        // 修改职位，设置权限sql
        const sql2 =`update ev_users set ? where id=?`
        db.query(sql2,[req.body,req.body.id],(err,results)=>{
            // sql2失败
            if(err) return res.cc('修改职位失败3')
            // sql2成功，影响不为1
            if(results.affectedRows!==1) return res.cc('修改职位失败4')
            res.cc('修改职位成功',0)
        })

    })

}