export interface CreatePostData {
    id: number;
    title: string;
    body: string;
}

export interface CreatePostVariables {
    title: string;
    body: string;
}

export interface CreatePostError {
    message: string;
}
