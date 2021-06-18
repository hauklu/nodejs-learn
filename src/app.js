const express = require('express')
const app = express()
const port = 8888
const path = require('path')

app.use((req, res) => {
  res.json({
    name: 'zhangsan'
  })
})

// // app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(path.join(__dirname)))
// // console.log(__dirname) // F:\project\nodejs

// app.get('/', (req, res) => {
//   res.send('hello 1')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// const express = require('express')
// const app = express()
// const port = 8888

// app.get('/', (req, res) => {
//   res.send('Hello World! 1 2 3')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

