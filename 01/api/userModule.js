// 内置模块
// const os = require('os')
// const mem = os.freemem() / os.totalmem()

// console.log('内存占用', mem)

// 第三方模块

// const repo = 'github:fuheideMayuyu/vue-Authority';

// const desc = '../test'

// const { clone } = require('./download')

// clone(repo, desc)

const download = require('download-git-repo') 

download('github:su37josephxia/vue-template', 'test', err => { 
  console.log(err ? 'Error' : 'Success') 
})