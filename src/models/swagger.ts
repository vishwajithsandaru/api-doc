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
    codeSamples?: boolean,
    httpsnippet? :  boolean,
    templateCallback?: any,
    theme?: string,
    search?: boolean,
    sample?: boolean,
    discovery?: boolean,
    includes? : [],
    shallowSchemas? : boolean,
    tocSummary? : boolean,
    headings? : boolean
}

export interface Definitions{
    [key:string]:any
}