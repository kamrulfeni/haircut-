"use client";
import { Layout } from "antd";
const { Content } = Layout;
import React from "react";
import Header from "./Header";
import NavbarPage from "./Navbar";

const Contents = ({ children }: { children: React.ReactNode }) => {

  return (
    <Content style={{ minHeight: "100vh", color: "black" }}>
      <Header />
      <NavbarPage/>
      {children}
    </Content>
  );
};

export default Contents;
