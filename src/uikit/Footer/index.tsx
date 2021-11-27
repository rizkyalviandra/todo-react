import { Layout, Typography } from "antd";
import React from "react";

const Footer = () => {
  return (
    <Layout.Footer style={{ display: "flex", justifyContent: "center" }}>
      <Typography.Text>Created with ☕️</Typography.Text>
    </Layout.Footer>
  );
};

export default Footer;
