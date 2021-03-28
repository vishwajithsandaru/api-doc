import React, { useEffect, useState } from "react";

import { Input, Tree } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/storeConfig";
import "./App.less";
import "./App.css";
import Layout, { Content } from "antd/lib/layout/layout";

import { Definitions, Paths, SwaggerType } from "./models/swagger";

const converter = require('widdershins');

export interface TreeItem {
  title: string;
  key: string;
  checkable?:boolean,
  children?: TreeItem[];
}
function App() {
  const [endPointTreeData, setEndPointTreeData] = useState<TreeItem[] | null>(null);
  const [definitionTreeData, setDefinitionTreeData] = useState<TreeItem[] | null>(null);

  const [jsonObject, setJsonObject] = useState<SwaggerType | null>(null);
  const [selectedPaths,setSelectedPaths] = useState<Paths|null>(null);
  const [selectedDefinitions,setSelectedDefinitions] = useState<Definitions|null>(null);

  const downloadMd = (str: string) => {
    const elem = document.createElement("a");
    const file = new Blob([str], { type: "text/plain;charset=utf-8" });
    elem.href = URL.createObjectURL(file);
    elem.download = "api-doc.md";
    elem.click();
  };

  useEffect(() => {

    const doThis = async () => {};
    doThis();

    let endPointTree: TreeItem[] = [];
    let definitionTree :TreeItem[]=[];
    if (jsonObject) {
      for (const [pathKey, path] of Object.entries(jsonObject.paths)) {
        let itemChild: TreeItem[] = [];
        for (const [key, leaf] of Object.entries(path)) {
          itemChild.push({ key: `${pathKey}///${key}`, title: key });
        }
        endPointTree.push({ key: pathKey, title: pathKey, children: itemChild });
      }

      console.log(jsonObject);
      if(jsonObject.definitions){
        for (const [definitionKey, value] of Object.entries(jsonObject.definitions)) {
          definitionTree.push({key:definitionKey,title:definitionKey});
        }
        
        
      }
      setDefinitionTreeData(definitionTree);
      setEndPointTreeData(endPointTree);
    }

  }, [jsonObject]);

  const onClickDownload = () => {

    let options = {}; // defaults shown


    if (jsonObject != null) {
      converter
        .convert(jsonObject, options)
        .then((md: any) => {
          console.log(md);
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
  }



  const onEndPointCheck = (checkedkeys: any) => {
    console.log(checkedkeys);

    let selectedTemp:Paths={};
    for (const key of checkedkeys) {
      const [basePath,method] = (key as string).split('///');
      if(method){
        selectedTemp={...selectedTemp,[basePath]:{
          ...selectedTemp[basePath],
          [method]:{...(jsonObject?.paths[basePath][method])}
          }}
      }
    }

    setSelectedPaths(selectedTemp)
  };

  const onDefinitionCheck=(checkedKey:any)=>{
    let tempSelected = {};
    for (const key of checkedKey ) {
        tempSelected={...tempSelected,[key]:jsonObject?.definitions[key]}
    }
    setSelectedDefinitions(tempSelected);
  }

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
        <Input type="button" onClick={()=>{onClickDownload()}}></Input>
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
          {
            definitionTreeData && (
              <Tree
              // checkStrictly
              checkable
              treeData={definitionTreeData}
              onCheck={onDefinitionCheck}
            ></Tree>
            )
          }

</Content>
      </Content>
    </Layout>
  );
}

export default App;
