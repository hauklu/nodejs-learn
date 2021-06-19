const express = require('express');
const app = express();


// 中间件demo
// 作用:
//  1. 处理异常
//  2. 处理业务功能, 然后转交控制权--next
//  3. 响应请求 -- 结束响应 --> 当前路由的处理函数
function demo_middleware(err, req, res, next) {

}

// /test?name=xiaoming123
function valid_name_middleware(req, res, next) {
  let { name } = req.query;
  if (!name || name.length < 1) {
    res.json({
      message: '缺少name参数'
    })
  } else {
    next();
  }
}

// 1
app.all('*', valid_name_middleware);

2
app.get('/test', (req, res) => {
  res.json({
    message: 'test'
  })
})

app.listen(8888, () => {
  console.log('server start success!')
})
