import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { Breadcrumb, DatePicker, Input, Tree } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/storeConfig";
import "./App.less";
import "./App.css";
import Layout, { Content } from "antd/lib/layout/layout";
import { converter } from "widdershins";
import axios from "axios";
import fs from "fs";
import { SwaggerType } from "./models/swagger";
import { SwaggerObj } from "./models/sample";
export interface TreeItem {
  title: string;
  key: string;
  children?: TreeItem[];
}
function App() {
  const [treeData, setTreeData] = useState<TreeItem[] | null>(null);

  const [jsonObject, setJsonObject] = useState<SwaggerType | null>(null);

  useEffect(() => {
    let options = { codeSamples: true };

    const downloadMd = (str: string) => {
      const elem = document.createElement("a");
      const file = new Blob([str], { type: "text/plain;charset=utf-8" });
      elem.href = URL.createObjectURL(file);
      elem.download = "api-doc.md";
      elem.click();
    };

    const doThis = async () => {};
    doThis();

    let tree: TreeItem[] = [];
    if (jsonObject) {
      for (const [pathKey, path] of Object.entries(jsonObject.paths)) {
        let itemChild: TreeItem[] = [];
        for (const [key, leaf] of Object.entries(path)) {
          itemChild.push({ key: `${pathKey}/${key}`, title: key });
        }
        tree.push({ key: pathKey, title: pathKey, children: itemChild });
      }
    }

    setTreeData(tree);

    if (jsonObject != null) {
      // converter
      //   .convert(jsonObject, options)
      //   .then((md: any) => {})
      //   .catch((err: any) => {
      //     console.log(err);
      //   });
    }
  }, [jsonObject]);

  const readSwagger = (obj: SwaggerType) => {};

  const onCheck = (checkedkey: any) => {
    console.log("fooooooo", checkedkey);
  };

  const fileReader = new FileReader();

  const handleChoosenFile = () => {
    const json = fileReader.result;
    let stringjson: string = json != undefined ? json.toString() : "{}";
    let jsonObj = JSON.parse(stringjson);
    setJsonObject(jsonObj);
  };

  const fileChange = (file: any) => {
    fileReader.onloadend = handleChoosenFile;
    fileReader.readAsText(file[0]);
  };

  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.isLoading);
  return (
    <Layout>
      <Content className="w-50 p-10">
        <input type="file" onChange={(e) => fileChange(e.target.files)} />
        <Input type="text"></Input>

        <Content>
          <div>dfdsfdsf</div>
          {treeData && (
            <Tree
              checkStrictly
              checkable
              treeData={treeData}
              onCheck={onCheck}
            ></Tree>
          )}
        </Content>
      </Content>
    </Layout>
  );
}

export default App;
