import inquirer from 'inquirer'

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

const init = async () => {
  const platform = await inquirer.prompt(platformQuestion)
  const framework = await inquirer.prompt(frameworkQuestion)

  console.log(platform.value, framework.value)
}

init()
