'use strict'

const co = require('co')
const prompt = require('co-prompt')
const chalk = require('chalk')
const fs = require('fs')
const config = require('../templates')

module.exports = () => {
  co(function *() {

    // 分步接收用户输入的参数
    let tplName = yield prompt('\nTemplate name: ')
    let gitUrl = yield prompt('\nGit https link: ')
    let branch = yield prompt('\nBranch: ')

    // 避免重复添加
    if (!config.tpl[tplName]) {
      config.tpl[tplName] = {}
      config.tpl[tplName]['url'] = gitUrl.replace(/[\u0000-\u0019]/g, '') // 过滤unicode字符
      config.tpl[tplName]['branch'] = branch
    } else {
      console.log(chalk.red('\nTemplate has already existed!'))
      process.exit()
    }

    // 把模板信息写入 templates.json
    fs.writeFile(__dirname + '/../templates.json', JSON.stringify(config), 'utf-8', (err) => {
      if (err) console.log(err)
      console.log(chalk.green('\nNew template added!'))
      console.log(chalk.grey('\nThe last template list is: \n'))
      console.log(config)
      console.log('\n')
      process.exit()
    })
  })
}
