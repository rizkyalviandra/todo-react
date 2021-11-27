import { Layout, Typography } from "antd";
import React from "react";

const Header = () => {
  return (
    <Layout.Header
      style={{
        backgroundColor: "#eaeaea",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography.Title>To-do List</Typography.Title>
    </Layout.Header>
  );
};

export default Header;
