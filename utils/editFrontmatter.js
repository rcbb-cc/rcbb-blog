/**
 * 批量添加和修改front matter ，需要配置 ./config.yml 文件。
 */
// 文件模块
const fs = require('fs');
// 路径模块
const path = require('path');
// front matter解析器 https://github.com/jonschlinkert/gray-matter
const matter = require('gray-matter');
const jsonToYaml = require('json2yaml')
const yamlToJs = require('yamljs')
// 命令行操作
const inquirer = require('inquirer')
// 命令行打印美化
const chalk = require('chalk')
const readFileList = require('./modules/readFileList');
const { type, repairDate} = require('./modules/fn');
const log = console.log
// 配置文件的路径
const configPath = path.join(__dirname, 'config.yml')

main();

/**
 * 主体函数
 */
async function main() {

  const promptList = [{
    type: "confirm",
    message: chalk.yellow('批量操作frontmatter有修改数据的风险，确定要继续吗？'),
    name: "edit",
  }];
  let edit = true;

  await inquirer.prompt(promptList).then(answers => {
    edit = answers.edit
  })
  // 退出操作
  if(!edit) {
    return
  }
  // 解析配置文件的数据转为js对象
  const config = yamlToJs.load(configPath)

  if (type(config.path) !== 'array') {
    log(chalk.red('路径配置有误，path字段应该是一个数组'))
    return
  }

  if (config.path[0] !== 'docs') {
    log(chalk.red("路径配置有误，path数组的第一个成员必须是'docs'"))
    return
  }

  // 要批量修改的文件路径
  const filePath = path.join(__dirname, '..', ...config.path);
  // 读取所有md文件数据
  const files = readFileList(filePath);

  files.forEach(file => {
    // 读取每个md文件的内容
    let dataStr = fs.readFileSync(file.filePath, 'utf8');
    // 解析md文件的front Matter。 fileMatterObj => {content:'剔除frontmatter后的文件内容字符串', data:{<frontmatter对象>}, ...}
    const fileMatterObj = matter(dataStr);
    // 得到md文件的front Matter
    let matterData = fileMatterObj.data;
    
    let mark = false;
    // 删除操作
    if (config.delete) {
      if( type(config.delete) !== 'array' ) {
        log(chalk.yellow('未能完成删除操作，delete字段的值应该是一个数组！'))
      } else {
        config.delete.forEach(item => {
          if (matterData[item]) {
            delete matterData[item];
            mark = true;
          }
        })
      }
    }

    // 添加、修改操作
    if (type(config.data) === 'object') {
      // 将配置数据合并到front Matter对象
      Object.assign(matterData, config.data);
      mark = true;
    }
    
    // 有操作时才继续
    if (mark) {
      if(matterData.date && type(matterData.date) === 'date') {
        // 修复时间格式
        matterData.date = repairDate(matterData.date);
      }
      const newData = jsonToYaml.stringify(matterData).replace(/\n\s{2}/g,"\n").replace(/"/g,"")  + '---\r\n' + fileMatterObj.content;
      // 写入
      fs.writeFileSync(file.filePath, newData);
      log(chalk.green(`update frontmatter：${file.filePath} `))
    }
  })
}
