console.log('hello world mayuyu')

const newLocal = '12123123'

console.log(newLocal)


const { clone } = require('./download')
const repo = 'github:su37josephxia/vue-template' 
const desc = '../test'
clone(repo, desc)