const express = require('express')
const app = express()

// 通过请求的方法类型, get/post
app.get('/user', (req, res) => {
  res.json({
    message: 'this is a GET request'
  })
})

app.post('/user', (req, res) => {
  res.json({
    message: 'this is a POST request'
  })
})

// 通过uri
app.get('/user/byname', (req, res) => {
  let { name } = req.query
  res.json({
    name
  })
})

app.get('/user/byid', (req, res) => {
  let { id } = req.query
  res.json({
    id
  })
})

app.listen(8888, () => {
  console.log('服务启动成功!')
})
