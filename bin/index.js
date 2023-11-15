#!/usr/bin/env node

import inquirer from 'inquirer'
import chalk from 'chalk'
import path from 'path'
import url from 'url'
import fs from 'fs'
import { createRequire } from 'module'
import copyTemplateDir from 'copy-template-dir'

const require = createRequire(import.meta.url)
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

// 是否使用e2e测试
const e2etestQuestion = [{
  type: 'rawlist',
  message: 'do you need an e2e test platform(cypress)?',
  name: 'value',
  default: 'Y',
  choices: ['Y', 'N'],
}]

const copyFile = (srcDir, targetDir, vars = {}) => {
  return new Promise((reslove => {
    copyTemplateDir(srcDir, targetDir, vars, reslove)
  }))
}

const renameFile = () => {
  const dir = argvs[argvs.length - 1]
  const gitigoreFileSrc = path.join(process.cwd(), dir, '.gitignore_')
  const gitigoreFileTarget = path.join(process.cwd(), dir, '.gitignore')

  return new Promise((reslove) => {
    fs.rename(gitigoreFileSrc, gitigoreFileTarget, reslove)
  })

}

const updateE2EFile = async () => {
  const dir = argvs[argvs.length - 1]
  const packagePath = path.join(process.cwd(), `${dir}/package.json`)

  const packageJSON = require(packagePath)

  packageJSON.scripts['cypress:open'] = "cypress open"
  packageJSON.devDependencies['cypress'] = '^13.5.0'

  return new Promise((reslove) => {
    fs.writeFile(packagePath, JSON.stringify(packageJSON, null, 2), 'utf8', reslove)
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
  const e2etestDir = path.join(baseDir, '../template/e2etest')
  const platform = await inquirer.prompt(platformQuestion)
  const framework = await inquirer.prompt(frameworkQuestion)
  const e2etest = await inquirer.prompt(e2etestQuestion)
  const srcFrameworkDir = path.join(baseDir, `../template/${framework.value}`)
  const srcPlatformDir = path.join(baseDir, `../template/${platform.value}`)
  const srcFrameworkPlatformDir = path.join(baseDir, `../template/${framework.value}${platform.value}`)

  await copyFile(srcPublicDir, targetDir)
  await copyFile(srcFrameworkDir, targetDir)
  await copyFile(srcPlatformDir, targetDir)
  await copyFile(srcFrameworkPlatformDir, targetDir)
  await renameFile()
  if(e2etest.value === 'Y') {
    await copyFile(e2etestDir, targetDir)
    await updateE2EFile()
    process.exit()
  }
}

init()
