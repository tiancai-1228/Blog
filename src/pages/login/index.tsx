/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import styles from "../../styles/Login.module.css";
import { Alert, Button, Form, Input, notification } from "antd";
import { useAppDispatch, useAppSelector } from "../../hook/useAppRedux";
import { setLogin, setloginState } from "../../redux/slices/accountSlice";
import router from "next/router";

const login = () => {
  const dispatch = useAppDispatch();
  const { loginState } = useAppSelector((state) => state.account.value);

  const openNotificationWithIcon = (type: "success" | "error") => {
    notification[type]({
      message: type === "success" ? "login success" : "login false",
    });
  };
  useEffect(() => {
    if (loginState === "success") {
      console.log("in");
      openNotificationWithIcon("success");
      dispatch(setloginState({ loginState: undefined }));
      router.push("/");
    } else if (loginState === "false") {
      openNotificationWithIcon("error");
      dispatch(setloginState({ loginState: undefined }));
    }
  }, [loginState]);
  return (
    <>
      <div className={styles.container}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          initialValues={{}}
          onFinish={(val) => {
            dispatch(setLogin({ val }));
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
            rules={[{ required: true, message: "Please input your EMAIL!" }]}
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
    </>
  );
};

export default login;
