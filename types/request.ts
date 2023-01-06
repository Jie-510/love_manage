import axios, { AxiosRequestConfig, AxiosHeaders } from 'axios';

declare module 'axios' {
    interface myRequest extends AxiosRequestConfig {
        headers?: any
    }
}