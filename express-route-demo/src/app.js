const express = require('express')
const app = express()

// // 通过请求的方法类型, get/post
// app.get('/user', (req, res) => {
//   res.json({
//     message: 'this is a GET request'
//   })
// })

// app.post('/user', (req, res) => {
//   res.json({
//     message: 'this is a POST request'
//   })
// })

// // 通过uri
// app.get('/user/byname', (req, res) => {
//   let { name } = req.query
//   res.json({
//     name
//   })
// })

// app.get('/user/byid', (req, res) => {
//   let { id } = req.query
//   res.json({
//     id
//   })
// })

// // 前端任何请求方法, 都可以响应
// app.all('/user', (req, res) => {
//   res.json({
//     message: '所有请求方法我都可以响应',
//     method: req.method,
//     url: req.path
//   })
// })

// app.use('/user', (req, res) => {
//   res.json({
//     message: '所有请求方法我都可以响应',
//     method: req.method,
//     url: req.path
//   })
// })

// // 前端任何uri, 都可以响应
// app.all('*', (req, res) => {
//   res.json({
//     message: '所有请求方法我都可以响应',
//     method: req.method,
//     url: req.path
//   })
// })

// app.use((req, res) => {
//   res.json({
//     message: '所有请求方法我都可以响应',
//     method: req.method,
//     url: req.path
//   })
// })


// 如何做路由的拆分

// 注册引入分路由
const memberRouter = require('./member.router')
// app.use(memberRouter) // 访问地址为 /list
app.use('/member', memberRouter) // 访问地址为 /member/list

app.listen(8888, () => {
  console.log('服务启动成功!')
})
