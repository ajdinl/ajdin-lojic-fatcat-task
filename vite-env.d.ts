/// <reference types="vite/client" />

declare const __CWD__: string;

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_API_URL_POST: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
