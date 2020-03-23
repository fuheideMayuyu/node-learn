const fs = require('fs')

// const data = fs.readFileSync('./download.js') // 读取文件

// fs.readFile('./download.js', (err,data) => {
//   if(err) throw err
//   console.log(data)
// })

// console.log('其他操作')

// const path = require('path')
// __dirname 当前目录绝对路径 
// path.resolve 路径拼接, 从右到左 

// fs.readFile(path.resolve(path.resolve(__dirname, './run.js')), (err,data) =>{
//   console.log('路径', path.resolve(path.resolve(__dirname, './run.js')))
//   if(err) throw err
//   console.log(data)
// })

// promisify
// const {promisify} = require('util') 
// const readFile = promisify(fs.readFile)
// readFile('./run.js').then(data =>{
//   console.log(data)
// })


// fs Promises API node v10

// const fsp = require('fs').promises;
// fsp.readFile('./run.js')
//     .then(data => console.log(data))
//     .catch(data => console.log(data))

// async/await 

// (async () => { 
//   const fs = require('fs') 
//   const { promisify } = require('util') 
//   const readFile = promisify(fs.readFile) 
//   const data = await readFile('./index.html') 
//   console.log('data',data) 
// })()


















