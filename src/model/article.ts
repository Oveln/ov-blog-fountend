export interface Response {
    code: number;
    data: Data;
    msg: string;
    [property: string]: any;
}

export interface Data {
    list: Article[];
    [property: string]: any;
}

export interface Article {
    content: string;
    create_time: string;
    id: string;
    title: string;
    update_time: string;
    visible: boolean;
}
