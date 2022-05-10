/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import styles from "../../styles/Login.module.css";
import { Button, Form, Input, notification } from "antd";
import { useAppDispatch, useAppSelector } from "../../hook/useAppRedux";
import { setSignUp } from "../../redux/slices/accountSlice";
import router from "next/router";
import Link from "next/link";

const login = () => {
  const dispatch = useAppDispatch();
  const { signUpState } = useAppSelector((state) => state.account.value);

  useEffect(() => {
    console.log(signUpState);
    if (signUpState === "success") {
      router.push("/login");
    }
  }, [signUpState]);
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.h1}>Sign Up</h1>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          initialValues={{}}
          onFinish={(val) => {
            if (val.checkPassword === val.password) {
              dispatch(setSignUp({ val }));
              console.log(val);
            } else {
              alert("確認密碼錯誤");
            }
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
          <Form.Item
            label={<label className={styles.inpurt}>確認password</label>}
            name="checkPassword"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <div>
          <Link href="/login">
            <a className={styles.h3}>go to login</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default login;
