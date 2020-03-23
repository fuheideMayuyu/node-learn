module.exports.clone =  async function clone(repo,desc) {
  // const repo = 'github:su37josephxia/vue-template' 
  // const desc = '../test' 
  const { promisify } = require('util'); 
  const download = promisify(require('download-git-repo')); // 下载git仓库
  const ora = require('ora'); 
  const process = ora(`下载项目......`); 
  process.start(); 
  try {
    await download(repo, desc); 
  } catch (error) { 
    process.fail() 
  }
  process.succeed()
}