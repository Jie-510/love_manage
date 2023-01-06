import request from '@/utils/request';
import { UserLogin } from './types/user-int';
// 登录
export const loginReq = (data: UserLogin) => {
    return request({
        method: 'post',
        url: 'admin/admin/login',
        data
    })
}