import React from "react";
import styles from "../../styles/Login.module.css";
import { Button, Form, Input } from "antd";

function login() {
  return (
    <div className={styles.container}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        initialValues={{}}
        onFinish={(val) => {
          console.log(val);
        }}
        onFinishFailed={(err) => {
          console.log("err", err);
        }}
      >
        <Form.Item
          label={<label className={styles.inpurt}>Username</label>}
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={<label className={styles.inpurt}>email</label>}
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={<label className={styles.inpurt}>password</label>}
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default login;
