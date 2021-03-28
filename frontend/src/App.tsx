import React, { useEffect, useState } from "react";
import { Button, Input, Tree } from "antd";
import "./App.less";
import "./App.css";
import Layout, { Content } from "antd/lib/layout/layout";
import Axios from 'axios';

import {
  Definitions,
  Paths,
  SwaggerType,
  Options,
  Tag,
} from "./models/swagger";

// const dots = require("dot").process({ path: "./view"});

export interface TreeItem {
  title: string;
  key: string;
  checkable?: boolean;
  children?: TreeItem[];
}
function App() {
  const [endPointTreeData, setEndPointTreeData] = useState<TreeItem[] | null>(
    null
  );
  const [definitionTreeData, setDefinitionTreeData] = useState<
    TreeItem[] | null
  >(null);

  const [jsonObject, setJsonObject] = useState<SwaggerType | null>(null);
  const [selectedPaths, setSelectedPaths] = useState<Paths | null>(null);
  const [
    selectedDefinitions,
    setSelectedDefinitions,
  ] = useState<Definitions | null>(null);

  const [newTags, setNewTags] = useState<Tag[]>();

  const downloadMd = (str: string) => {
    const elem = document.createElement("a");
    const file = new Blob([str], { type: "text/plain;charset=utf-8" });
    elem.href = URL.createObjectURL(file);
    elem.download = "api-doc.md";
    elem.click();
  };

  let res: any = null;

  useEffect(() => {
    let endPointTree: TreeItem[] = [];
    let definitionTree: TreeItem[] = [];
    if (jsonObject) {
      for (const [pathKey, path] of Object.entries(jsonObject.paths)) {
        let itemChild: TreeItem[] = [];
        for (const [key, leaf] of Object.entries(path)) {
          itemChild.push({ key: `${pathKey}///${key}`, title: key });
        }
        endPointTree.push({
          key: pathKey,
          title: pathKey,
          children: itemChild,
        });
      }

      console.log(jsonObject);
      if (jsonObject.definitions) {
        for (const [definitionKey, value] of Object.entries(
          jsonObject.definitions
        )) {
          definitionTree.push({ key: definitionKey, title: definitionKey });
        }
      }
      setDefinitionTreeData(definitionTree);
      setEndPointTreeData(endPointTree);
    }
  }, [jsonObject]);

  const onClickDownload = async () => {
    try{
      res = await Axios.post('/api/doc', jsonObject, {
        headers:{
          'Content-Type': 'application/json'
        }
      });
      // console.log(res.data.markdownOutput)
      downloadMd(res.data.markdownOutput);
    }catch(e){
      console.log(e);
    }
  };

  const onEndPointCheck = (checkedkeys: any) => {
    console.log(checkedkeys);

    let selectedTemp: Paths = {};
    let selectedTags = new Set();
    for (const key of checkedkeys) {
      const [basePath, method] = (key as string).split("///");
      if (method) {
        selectedTemp = {
          ...selectedTemp,
          [basePath]: {
            ...selectedTemp[basePath],
            [method]: { ...jsonObject?.paths[basePath][method] },
          },
        };

        (jsonObject?.paths[basePath][method].tags as string[]).forEach((el) =>
          selectedTags.add(el)
        );
      }
    }
    // console.log("selected tags", selectedTags);
    // setNewTags();
    setSelectedPaths(selectedTemp);
  };

  useEffect(() => {
    console.log("final Object >>>>", {
      ...jsonObject,
      tags: [],
      paths: selectedPaths,
      definitions: selectedDefinitions,
    });
  }, [selectedPaths, selectedDefinitions]);
  const onDefinitionCheck = (checkedKey: any) => {
    let tempSelected = {};
    for (const key of checkedKey) {
      tempSelected = { ...tempSelected, [key]: jsonObject?.definitions[key] };
    }
    setSelectedDefinitions(tempSelected);
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

  return (
    <Layout>
      <Content className="w-50 p-10">
        <Input type="file" onChange={(e) => fileChange(e.target.files)} />
        <Button
          onClick={() => {
            onClickDownload();
          }}
          type="primary"
          title="Download"
        >
          Download File
        </Button>
        <Content>
          {endPointTreeData && (
            <Tree
              // checkStrictly
              checkable
              treeData={endPointTreeData}
              onCheck={onEndPointCheck}
            ></Tree>
          )}
        </Content>
        <Content className="p-10">
          {definitionTreeData && (
            <Tree
              // checkStrictly
              checkable
              treeData={definitionTreeData}
              onCheck={onDefinitionCheck}
            ></Tree>
          )}
        </Content>
        {/* create final object */}
        <Content className="p-10">
          {JSON.stringify({
            ...jsonObject,
            paths: selectedPaths,
            definitions: selectedDefinitions,
          })}
        </Content>
      </Content>
    </Layout>
  );
}

export default App;
