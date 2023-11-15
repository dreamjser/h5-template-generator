import React, { useState } from 'react'

const View = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const onsubmit = () => {
    if (!name) {
      App.interface.alert('请输入用户名')
      return
    }

    if (!password) {
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
  return (
    <div>
      <div>
        <label>用户名</label>
        <input
          onChange={(e: any) => {
            setName(e.target.value)
          }}
          placeholder="请输入用户名"
        />
      </div>
      <div>
        <label>密码</label>
        <input
          onChange={(e: any) => {
            setPassword(e.target.value)
          }}
          placeholder="请输入密码"
        />
      </div>
      <div>
        <button onClick={onsubmit}>提交</button>
      </div>
    </div>
  )
}

export default View
