import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useAppDispatch } from "../../hook/useAppRedux";
import { setCheckLogin } from "../../redux/slices/accountSlice";
export interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const dispatch = useAppDispatch();
  const isLogin = Cookies.get("login");

  useEffect(() => {
    if (isLogin) {
      dispatch(setCheckLogin({ token: isLogin }));
    }
  });
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
