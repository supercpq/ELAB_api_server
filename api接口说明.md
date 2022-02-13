# 说明

1.项目的请求根路径为 `http://127.0.0.1:3007`（未全部完成）

2.部分功能可请求[http://www.liulongbin.top:3007](http://www.liulongbin.top:3007)测试

3.以 `/api` 开头的请求路径，不需要访问权限

4.以 `/my` 开头的请求路径，需要在请求头中携带 `Authorization` 身份认证字段，才能正常访问成功

5.所有接口0为请求成功，1为请求失败

6.数组内的数据+表示缩进

# 注册登录

## 注册

**简要描述：**

- 用户注册接口

**请求URL：**

- `/api/reguser`

**请求方式：**

- POST

**请求体：**

| 参数名   | 必选 | 类型   | 说明   |
| :------- | :--- | :----- | ------ |
| username | 是   | string | 用户名 |
| password | 是   | string | 密码   |

**返回示例**

```
{
  "status": 0,
  "message": "注册成功！"
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

## 登录

**简要描述：**

- 用户登录接口

**请求URL：**

- `/api/login`

**请求方式：**

- POST

**请求体：**

| 参数名   | 必选 | 类型   | 说明   |
| :------- | :--- | :----- | ------ |
| username | 是   | string | 用户名 |
| password | 是   | string | 密码   |

**返回示例**

```
{
  "status": 0,
  "message": "登录成功！",
  "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI"
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                                         |
| :------ | :----- | -------------------------------------------- |
| status  | int    | 请求是否成功，0：成功；1：失败               |
| message | string | 请求结果的描述消息                           |
| token   | string | 用于有权限接口的身份认证，已添加Bearer字符串 |

# 个人中心

## 获取用户的基本信息

**简要描述：**

- 获取用户的基本信息

**请求URL：**

- `/my/userinfo`

**请求方式：**

- GET

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**参数：**

- 无

**返回示例**

```
{
  "status": 0,
  "message": "获取用户基本信息成功！",
  "data": {
    "id": 1,
    "username": "admin",
    "nickname": "管理员",
    "email": "admin@qq.com",
    "user_pic": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F19%2F04%2F22%2F4a5503de7f3b91810b0c8f5645fb24cc.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646984806&t=2e783e9fff05a819fff45321a1d6a3e8"
}
```

**返回参数说明**

| 参数名     | 类型   | 说明                              |
| :--------- | :----- | --------------------------------- |
| status     | int    | 请求是否成功，0：成功；1：失败    |
| message    | string | 请求结果的描述消息                |
| data       | object | 用户的基本信息                    |
| + id       | int    | 用户的 id                         |
| + username | string | 用户名                            |
| + nickname | string | 昵称                              |
| + email    | string | 邮箱                              |
| + user_pic | string | 头像                              |
| + roles    | int    | 用户权限  0：普通用户 ；1：管理员 |

## 更新用户的基本信息

**简要描述：**

- 更新用户的基本信息

**请求URL：**

- `/my/userinfo`

**请求方式：**

- POST

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

| 参数名        | 必选 | 类型   | 说明             |
| :------------ | :--- | :----- | ---------------- |
| id            | 是   | number | 用户id           |
| nickname      | 否   | string | 昵称             |
| email         | 否   | string | 邮箱             |
| elab_group    | 否   | string | 组别             |
| grade         | 否   | string | 年级             |
| elab_position | 否   | string | 职位             |
| excellence    | 否   | string | 特长             |
| phone         | 否   | int    | 电话，必须为11位 |
| photo         | 否   | string | 照片             |
| major         | 否   | string | 专业             |

**返回示例**

```
{
  "status": 0,
  "message": "修改用户信息成功！"
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

## 重置密码

**简要描述：**

- 重置密码

**请求URL：**

- `/my/updatepwd`

**请求方式：**

- POST

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

| 参数名 | 必选 | 类型   | 说明   |
| :----- | :--- | :----- | ------ |
| oldPwd | 是   | string | 原密码 |
| newPwd | 是   | string | 新密码 |

**返回示例**

```
{
  "status": 0,
  "message": "更新密码成功！"
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

## 更换头像

**简要描述：**

- 更换头像

**请求URL：**

- `/my/update/avatar`

**请求方式：**

- POST

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

| 参数名 | 必选 | 类型   | 说明   |
| :----- | :--- | :----- | ------ |
| avatar | 是   | string | 新头像 |

**返回示例**

```
{
  "status": 0,
  "message": "更新头像成功！"
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

## 更改权限

**简要描述：**

- 更改权限

**请求URL：**

- `/my/update/updaterole`

**请求方式：**

- POST

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

| 参数名 | 必选 | 类型                 |
| :----- | :--- | :------------------- |
| id     | 是   | int                  |
| roles  | 是   | int 1：提权；0：降权 |

**返回示例**

```
{
  "status": 0,
  "message": "更改权限成功！"
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

## 获取所有成员信息

**简要描述：**

- 获取所有成员

**请求URL：**

- `/my/allmem`

**请求方式：**

- GET

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

无参数

**返回示例**

```
{
    "status": 0,
    "message": "获取所有成员信息成功",
    "data": [
        { 
            //id=1已被删除
            "id": 2,
            "nickname": "李四",
            "email": "12312@qq.com",
            "elab_group": "软件组",
            "grade": "大一",
            "elab_position": "组员",
            "excellence": "无",
            "phone": "xxxxxxxxxxx",
            "major": "人工智能"
        },
        {
            "id": 3,
            "nickname": "王七",
            "email": "12q3@qq.com",
            "elab_group": "电子组",
            "grade": "大二",
            "elab_position": "组长",
            "excellence": "无",
            "phone": "xxxxxxxxxxx",
            "major": "电子信息工程"
        },
        {
            "id": 4,
            "nickname": "张二",
            "email": "124213@qq.com",
            "elab_group": "软件组",
            "grade": "大四",
            "elab_position": "班长",
            "excellence": "无",
            "phone": "xxxxxxxxxxx",
            "major": "自动化"
        },
        {
            "id": 5,
            "nickname": "张八",
            "email": "12243@qq.com",
            "elab_group": "电子组",
            "grade": "大二",
            "elab_position": "组长",
            "excellence": "无",
            "phone": "xxxxxxxxxxx",
            "major": "电气及其自动化"
        },
        {
            "id": 6,
            "nickname": "王五",
            "email": "123@qq.com",
            "elab_group": "软件组",
            "grade": "大二",
            "elab_position": "小组长",
            "excellence": "全栈开发",
            "phone": "18685544321",
            "major": "生物医学工程"
        }
    ]
}
```

**返回参数说明**

| 参数名         | 类型   | 说明                           |
| :------------- | :----- | ------------------------------ |
| status         | int    | 请求是否成功，0：成功；1：失败 |
| message        | string | 请求结果的描述消息             |
| data           | array  | 成员信息                       |
| +id            | int    | 成员id                         |
| +nickname      | string | 成员姓名                       |
| +email         | string | 成员邮箱                       |
| +elab_group    | string | 成员组别                       |
| +grade         | string | 成员年级                       |
| +elab_position | string | 成员职位                       |
| +excellence    | string | 成员特长                       |
| +phone         | int    | 成员电话                       |
| +major         | string | 成员专业                       |

## 获取单个成员信息

**简要描述：**

- 获取单个成员信息

**请求URL：**

- `/my/onemem/:id`

**请求方式：**

- GET

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

| 参数名 | 必选 | 类型 | 备注     |
| :----- | :--- | :--- | -------- |
| id     | 是   | int  | 动态参数 |

**返回示例**

```
{
    "status": 0,
    "message": "获取成员信息成功",
    "data": {
        "id": 2,
        "nickname": "李四",
        "email": "12312@qq.com",
        "elab_group": "软件组",
        "grade": "大一",
        "elab_position": "组员",
        "excellence": "无",
        "phone": "xxxxxxxxxxx",
        "major": "人工智能"
    }
}
```

**返回参数说明**

| 参数名         | 类型   | 说明                           |
| :------------- | :----- | ------------------------------ |
| status         | int    | 请求是否成功，0：成功；1：失败 |
| message        | string | 请求结果的描述消息             |
| data           | array  | 成员信息                       |
| +id            | int    | 成员id                         |
| +nickname      | string | 成员姓名                       |
| +email         | string | 成员邮箱                       |
| +elab_group    | string | 成员组别                       |
| +grade         | string | 成员年级                       |
| +elab_position | string | 成员职位                       |
| +excellence    | string | 成员特长                       |
| +phone         | int    | 成员电话                       |
| +major         | string | 成员专业                       |

## 删除成员

**简要描述：**

- 删除成员

**请求URL：**

- `/my/deletemem/:id`

**请求方式：**

- GET

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

| 参数名 | 必选 | 类型 | 备注     |
| :----- | :--- | :--- | -------- |
| id     | 是   | int  | 动态参数 |

**返回示例**

```
{
    "status": 0,
    "message": "删除成员成功"
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

## 更改职位

**简要描述：**

- 更改职位，并决定是否更改权限

**请求URL：**

- `/my/update/updaterole`

**请求方式：**

- POST

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

| 参数名  | 必选 | 类型                   |
| :------ | :--- | :--------------------- |
| id      | 是   | int                    |
| positon | 是   | string                 |
| roles   | 是   | int   1：提权；0：降权 |

**返回示例**

```
{
  "status": 0,
  "message": "更改职位成功！"
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

## 获取系统信息

**简要描述：**

- 获取系统信息

**请求URL：**

- `/api/systeminfo/:id`

**请求方式：**

- GET

**请求体：**

无参数

**返回示例**

```
{
    "status": 0,
    "message": "获取系统信息成功",
    "data": [
        {
            "id": 1,
            "item_name": "科中管理系统7",
            "item_describe": "描述信息",
            "logo": "https://imgtu.com/i/HdFHhV",
            "picture": "https://img2.baidu.com/it/u=3879656243,3775782318&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667",
            "other": "其他信息"
        },
        {
            "id": 2,
            "item_name": "电气创新实践基地",
            "item_describe": "电气创新实践基地，简称“科中”......",
            "logo": "https://imgtu.com/i/RXucpF\r\n",
            "picture": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg80.gkzhan.com%2F9%2F20201110%2F637405897356098970570.png&refer=http%3A%2F%2Fimg80.gkzhan.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647174785&t=c1e41335c5116ed340a1873d835f1fb3",
            "other": "其他信息"
        },
        {
            "id": 3,
            "item_name": "电子组",
            "item_describe": null,
            "logo": null,
            "picture": null,
            "other": null
        },
        {
            "id": 4,
            "item_name": "软件组",
            "item_describe": null,
            "logo": null,
            "picture": null,
            "other": null
        }
    ]
}
```

**返回参数说明**

| 参数名     | 类型   | 说明                           |
| :--------- | :----- | ------------------------------ |
| status     | int    | 请求是否成功，0：成功；1：失败 |
| message    | string | 请求结果的描述消息             |
| data       | array  | 请求成功返回数据               |
| +id        | int    | 信息id                         |
| +item_name | string | 名称                           |
| +describe  | string | 描述                           |
| +logo      | string | 标志                           |
| +picture   | string | 图片                           |
| +other     | string | 其他                           |

## 添加系统信息项

**简要描述：**

- 添加系统信息项

**请求URL：**

- `/my/add/systeminfo`

**请求方式：**

- POST

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

| 参数名        | 必选 | 类型   | 说明     |
| :------------ | :--- | :----- | -------- |
| item_name     | 否   | string | 名称     |
| item_describe | 否   | string | 描述信息 |
| logo          | 否   | string | 标志图片 |
| picture       | 否   | string | 其他图片 |
| other         | 否   | string | 其他信息 |

**返回示例**

```
{
    "status": 0,
    "message": "修改系统信息成功"
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

## 删除系统信息项

**简要描述：**

- 删除系统信息项

**请求URL：**

- `/my/delete/systeminfo/:id`

**请求方式：**

- GET

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

| 参数名 | 必选 | 类型   | 说明                 |
| :----- | :--- | :----- | -------------------- |
| id     | 是   | string | 删除内容id，动态参数 |

**返回示例**

```
{
    "status": 0,
    "message": "删除系统信息成功"
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

## 修改系统信息

**简要描述：**

- 修改系统信息

**请求URL：**

- `/my/update/systeminfo`

**请求方式：**

- POST

**Header：**

```
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**请求体：**

| 参数名        | 必选 | 类型   | 说明     |
| :------------ | :--- | :----- | -------- |
| id            | 是   | int    | id       |
| item_name     | 否   | string | 名称     |
| item_describe | 否   | string | 描述信息 |
| logo          | 否   | string | 标志图片 |
| picture       | 否   | string | 其他图片 |
| other         | 否   | string | 其他信息 |

**返回示例**

```
{
    "status": 0,
    "message": "修改系统信息成功"
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |