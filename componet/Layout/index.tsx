import React from "react";
import Footer from "../Footer";

export interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="content">
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
