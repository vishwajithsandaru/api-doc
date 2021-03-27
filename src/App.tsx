import React from "react";
import logo from "./logo.svg";
import { Breadcrumb, DatePicker, Input } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/storeConfig";
import "./App.less";
import "./App.css";
import Layout, { Content } from "antd/lib/layout/layout";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.isLoading);
  return (
    <Layout>
      <Content className="w-50 p-10">
        <Input  type="text"></Input>
      </Content>
    </Layout>
  );
}

export default App;
