<template>
  <div>
    <div>
      <input
        v-model="formData.name"
        label="用户名"
        placeholder="请输入用户名"
      />
    </div>
    <div>
      <input
        v-model="formData.password"
        label="密码"
        placeholder="请输入密码"
      />
    </div>
    <div>
      <button @click="onSubmit">提交</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const formData = reactive({
  name: '',
  password: '',
})

const onSubmit = () => {
  if (!formData.name) {
    App.interface.alert('请输入用户名')
    return
  }

  if (!formData.password) {
    App.interface.alert('请输入密码')
    return
  }

  App.request({
    url: '/login',
    method: 'GET',
  }).then(() => {
    App.interface.alert('提交成功')
  })
}
</script>
