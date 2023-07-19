import React, { FC, useEffect } from 'react'
import { Button, Form, Input } from 'antd-mobile'

const View: FC = () => {
  useEffect(() => {}, [])

  return (
    <div className="login-wrap">
      <Form layout="horizontal">
        <Form.Item label="用户名" name="username">
          <Input placeholder="请输入用户名" clearable />
        </Form.Item>
        <Form.Item label="密码" name="password">
          <Input placeholder="请输入密码" clearable type="password" />
        </Form.Item>
      </Form>
      <div className="btn-area">
        <Button block color="primary">
          登录
        </Button>
        <Button className="mt10" block>
          注册
        </Button>
      </div>
    </div>
  )
}

export default View
