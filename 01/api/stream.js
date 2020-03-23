// 二进制友好，图片操作
const fs = require('fs')
const rs = fs.createReadStream('./01.jpg')
const ws = fs.createReadStream('./02.jpg')

rs.pipe(ws)
// console.log('rs',rs)
// console.log('ws',ws)
console.log('rs.pipe(ws)',rs.pipe(ws))
