let http = require('http')
let fs = require('fs')
let url = require('url')

http.createServer((req, res) => {
  // console.log(req.url)
  // console.log(url.parse(req.url, true))
  // console.log(url.parse(req.url, true).query.username)
  let { pathname, query } = url.parse(req.url, true)
  console.log(pathname)
  console.log(query)
}).listen(8888)

// http.createServer((req, res) => {
//   // console.log(req.url)
//   // res.write('coming')
//   // res.end()
//   fs.readFile(`./${req.url}`, (err, data) => {
//     if (err) {
//       res.writeHead(404)
//       res.end('404 not found')
//     } else {
//       res.end(data)
//     }
//   })
// }).listen(8888)




// const mod = require('./mod.js')

// console.log(mod)


// let path = require('path')
// let fs = require('fs')

// console.log(1)
// console.log(process.env)
// console.log(__dirname)
// console.log(__dirname, 'index.js')
// console.log(path.resolve(__dirname, 'index.js'))

// fs.readFile('./a.txt', (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data.toString())
//   }
// })

// fs.writeFile('b.txt', '月薪1元', (err) => {
//   if (err) throw err
// })

// fs.writeFile('b.txt', '月薪2元', { flag: "a" }, (err) => {
//   if (err) throw err
// })

// fs.appendFile('b.txt', '追加2', err => {
//   if (err) throw err
// })

// let data = fs.readFileSync('./a.txt')
// console.log(data)
