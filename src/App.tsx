import React from "react";
import logo from "./logo.svg";
import { Breadcrumb, DatePicker } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/storeConfig";
import "./App.less";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.isLoading);
  return (
    <div>
      <Breadcrumb className='m-3 text-red-400'>
        <Breadcrumb.Item href=''>
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href=''>
          <UserOutlined />
          <span className='text-red-600'>Is Loading {isLoading}</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Application</Breadcrumb.Item>
      </Breadcrumb>
      <DatePicker></DatePicker>
    </div>
  );
}

export default App;
