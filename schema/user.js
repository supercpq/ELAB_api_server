// 导入joi模块，定义效验规则
const { ref, required } = require('joi')
const joi = require('joi')

// 用户名校验规则
const username = joi.string().alphanum().min(1).max(10)
// 密码检验规则
const password = joi.string().pattern(/^[\S]{6,12}$/)
// id效验规则
const id =joi.number().min(1).required().integer().required()
//  nickname效验规则
const nickname = joi.string()
// email效验规则
const email = joi.string().email()
// elab_group效验规则
const elab_group =joi.string()
// grade效验规则
const grade = joi.string()
// elab_position效验规则 
const elab_position = joi.string()
// excellence效验规则
const excellence = joi.string()
// phone 效验规则
const phone = joi.number().min(10000000000).max(19999999999).error(new Error('电话号码格式错误！'))
// 头像验证规则
const photo = joi.string()
// 专业验证规则
const major = joi.string()
// 权限操作规则：1 提权 0 降权
const roles = joi.number().min(0).max(1).integer().required()
// 系统信息项名称验证规则
const item_name = joi.string()
// 描述信息验证规则
const item_describe = joi.string()
// 标志图片验证规则
const logo = joi.string()
// 其他图片验证规则
const picture = joi.string()
// 验证码codeID和code
const codeID = joi.number().min(0).max(1000000).required()
const code = joi.number().min(0).max(10000000).required()
// 其他信息验证规则
const other = joi.string()
//验证的邮箱
const aEmail = joi.string().email().required()

//导出发送邮箱验证码的表单验证规则对象
exports.sent_Verification_schema = {
    body:{
        aEmail
    }
}
//导出 接收 验证码的表单验证码规则对象
exports.check_Verification_schema = {
    body:{
        codeID,
        code
    }
}

// 导出注册登录的表单验证规则对象
exports.reg_login_schema = {
    // 对req.body中的数据进行验证
    body:{
        username,
        password
    }
}
// 导出修改用户信息的表单验证规则对象
exports.update_userinfo_schema ={
    body:{
        id,
        nickname,
        email,
        elab_group,
        grade,
        elab_position,
        excellence,
        phone,
        photo,
        major
    }
}
// 导出新旧密码的验证规则：新旧密码不一致
exports.update_password_schema ={
    body:{
        oldpwd:password,
        newpwd:joi.not(joi.ref('oldpwd')).concat(password)
    }
}
// 导出头像验证规则
exports.update_avatar_schema={
    body:{
        avatar:joi.string().required()
        
    }
}
// 导出用户权限验证规则
exports.update_role_schema={
    body:{
        id,
        roles
    }
}
// 导出id验证规则
exports.id_params_schema={
    params:{
        id,
    }
}
// 导出修改职位验证规则
exports.position_body_schema={
    body:{
        id,
        elab_position,
        roles
    }
}
// 导出添加信息信息验证规则
exports.add_systeminfo_schema = {
    body:{
        item_name,
        item_describe,
        logo,
        picture,
        other
    }
}
// 导出修改系统信息验证规则
exports.update_systeminfo_schema = {
    body:{
        id,
        item_name,
        item_describe,
        logo,
        picture,
        other
    }
}