import { Layout } from "antd";
import React from "react";
import Footer from "../Footer";
import Header from "../Header";

type Props = {
  children: React.ReactNode;
};

const LayoutComponent = ({ children }: Props) => {
  return (
    <Layout
      style={{
        maxWidth: 480,
        maxHeight: "100vh",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Header />
      <Layout.Content
        style={{
          height: "100vh",
          backgroundColor: "white",
          overflow: "initial",
        }}
      >
        {children}
      </Layout.Content>
    </Layout>
  );
};

export default LayoutComponent;
