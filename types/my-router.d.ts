

import { RouteRecordRaw } from 'vue-router';
// 路由每一项
export interface RouterItem {
    meta?: {
        hidden?: boolean,
        title?: string,
        path?: string
    },
    children?: MyRouters
}
// 合并vue-router自带的
export type MyRouter = RouterItem & RouteRecordRaw
// 配置children的
export type MyRouters = Array<MyRouter>