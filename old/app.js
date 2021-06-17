let http = require('http')
let url = require('url')
let querystring = require('querystring')
let fs = require('fs')

let user = {
  // xiaoming: '123'
}

http.createServer((req, res) => {
  let path, get, post

  if (req.method === 'GET') {
    let { pathname, query } = url.parse(req.url, true)
    path = pathname
    get = query
    complete()
  } else if (req.method === 'POST') {
    path = req.url
    let arr = []
    req.on('data', buffer => {
      arr.push(buffer)
    })

    req.on('end', () => {
      post = querystring.parse(Buffer.concat(arr).toString())
      complete()
    })
  }

  function complete() {
    if (path === '/login') {
      res.writeHead(200, {
        "Content-type": "text/plain;charset=utf-8"
      })
      let { username, password } = get
      if (!user[username]) {
        res.end(JSON.stringify({
          code: -1,
          msg: '用户名不存在!'
        }))
      } else if (user[username] !== password) {
        res.end(JSON.stringify({
          code: -1,
          msg: '密码错误!'
        }))
      } else {
        res.end(JSON.stringify({
          code: 0,
          msg: '登录成功!',
          data: {
            Bear: '24gj34gj34'
          }
        }))
      }
    } else if (path === '/reg') {
      res.writeHead(200, {
        "Content-type": "text/plain;charset=utf-8"
      })
      let { username, password } = post
      if (user[username]) {
        res.end(JSON.stringify({
          code: -1,
          msg: '用户名已经存在!'
        }))
      } else {
        user[username] = password
        res.end(JSON.stringify({
          code: 0,
          msg: '注册成功!',
          data: {}
        }))
      }
    } else {
      fs.readFile(`./${path}`, (err, data) => {
        if (err) {
          res.end('404')
        } else {
          res.end(data)
        }
      })
    }
  }
}).listen(8888)

