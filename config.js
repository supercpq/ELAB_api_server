// 配置项文件
// 导入jsonwebtoken
const token = require('jsonwebtoken')

const check_min = 100000
const check_max = 999999

// 加密、解密字符串
module.exports={
    check_min,
    check_max,
    jwtSecretKey:'babysite',
}