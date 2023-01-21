import { useState } from 'react';
import { DatePicker, message, Button, Space, Checkbox, Form, Input, notification, Col } from 'antd';
import { Login as GetToken } from '../../api/subdomainapi';
import { useMutation } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();

  let auth = useAuth();

  let from = location?.state?.from?.pathname || "/"

  //this is how we make a call to log us in
  const mutation = useMutation({
    mutationFn: GetToken,
    onSuccess: (data) => {
      
      if (auth.isLoggedin) {
        navigate(from, {replace: true})
      }
    },
    onError: (err : any) => {
      notification.error(err?.message)
    }
  });

  const onFinish = (values: any) => {
  //  mutation.mutate(values)
    auth.signIn("jlhgjlhl", () => {
      navigate(from, {replace: true})
    })

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Col span={12} offset={6} style={{marginTop: '90px'}}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input type='email'/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button loading={mutation.isLoading} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Col>



  );
}