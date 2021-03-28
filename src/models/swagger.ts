export interface SwaggerType {
    swagger: string;
    info: Info;
    host: string;
    basePath: string;
    tags: Tag[];
    paths: Paths;
    definitions: Definitions;
}
export interface Info {
    description: string;
    version: string;
    title: string;
    termsOfService: string;
    contact: any;
    license: any;
}
export interface Tag {
    name: string;
    description: string;
}

export interface Paths {
    [key : string]:{
        [key:string]:any  
    }
}

export interface Options {
    "codeSamples" = true;
    "httpsnippet" = false;
    templateCallback = function(templateName,stage,data) { return data };
    theme = 'darkula';
    search = true;
    sample = true; // set false by --raw
    discovery = false;
    includes = [];
    shallowSchemas = false;
    tocSummary = false;
    headings = 2;
    options.yaml = false;
}

export interface Definitions{
    [key:string]:any
}