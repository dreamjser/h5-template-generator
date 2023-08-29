#!/usr/bin/env node

import inquirer from 'inquirer'
import chalk from 'chalk'
import path from 'path'
import url from 'url'
import fs from 'fs'
import copyTemplateDir from 'copy-template-dir'

const argvs = process.argv

// 选择平台
const platformQuestion = [{
  type: 'rawlist',
  message: 'please select a platform',
  name: 'value',
  default: 'mobile',
  choices: ['mobile', 'desktop'],
}]

// 选择框架
const frameworkQuestion = [{
  type: 'rawlist',
  message: 'please select a framework',
  name: 'value',
  default: 'react',
  choices: ['react', 'vue'],
}]

const copyFile = (srcDir, targetDir, vars = {}) => {
  return new Promise((reslove => {
    copyTemplateDir(srcDir, targetDir, vars, reslove)
  }))
}

const renameFile = () => {
  const dir = argvs[argvs.length - 1]
  const gitigoreFileSrc = path.join(process.cwd(), dir, 'template/public/.gitignore_')
  const gitigoreFileTarget = path.join(process.cwd(), dir, 'template/public/.gitignore')

  fs.rename(gitigoreFileSrc, gitigoreFileTarget, () => {
    console.log(chalk.green('completed!!!!'))
    process.exit()
  })
}

const init = async () => {
  if(argvs.length < 3) {
    console.log(chalk.yellow('请输入目录 \n'))
    return false
  }

  const dir = argvs[argvs.length - 1]
  const baseDir = path.dirname(url.fileURLToPath(import.meta.url))
  const targetDir = path.join(process.cwd(), dir)
  const srcPublicDir = path.join(baseDir, '../template/public')
  const platform = await inquirer.prompt(platformQuestion)
  const framework = await inquirer.prompt(frameworkQuestion)
  const srcFrameworkDir = path.join(baseDir, `../template/${framework.value}`)
  const srcPlatformDir = path.join(baseDir, `../template/${platform.value}`)
  const srcFrameworkPlatformDir = path.join(baseDir, `../template/${framework.value}${platform.value}`)

  await copyFile(srcPublicDir, targetDir)
  await copyFile(srcFrameworkDir, targetDir)
  await copyFile(srcPlatformDir, targetDir)
  await copyFile(srcFrameworkPlatformDir, targetDir)
  renameFile()
}

init()
