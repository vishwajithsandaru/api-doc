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

export interface Definitions{
    [key:string]:any
}