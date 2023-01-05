import type { MyRouter } from '~/my-router';
import Layout from '@/layout/Layout.vue';

const routes: Array<MyRouter> = [
    // 首页重定向
    {
        path: '',
        redirect: '/home'
    },
    // 登录
    {
        path: '/login',
        component: () => import('@/views/login/login.vue'),
        meta: {
            hidden: true
        }
    },
    // 首页
    {
        path: '/home',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('@/views/home/home.vue'),
                meta: {
                    hidden: false,
                    title: '首页'
                }
            }
        ]
    },
    // 系统设置
    {
        path: '/system-set',
        component: Layout,
        redirect: '/system-set/set',
        children: [
            {
                path: 'set',
                component: () => import('@/views/system_set/system-set.vue'),
                meta: {
                    hidden: false,
                    title: '系统设置'
                }
            },
            {
                path: 'list',
                component: () => import('@/views/system_set/admin-list.vue'),
                meta: {
                    hidden: true,
                    title: '管理人员管理'
                }
            },
            {
                path: 'role',
                component: () => import('@/views/system_set/admin-role.vue'),
                meta: {
                    hidden: true,
                    title: '角色管理'
                }
            },
            {
                path: 'jurisdiction',
                component: () => import('@/views/system_set/admin-jurisdiction-list.vue'),
                meta: {
                    hidden: true,
                    title: '权限管理'
                }
            },
        ]
    },
    // 个人中心
    {
        path: '/mine',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('@/views/mine/mine.vue'),
                meta: {
                    hidden: true,
                    title: '个人中心'
                }
            }
        ]
    },
    // 会员管理
    {
        path: '/manage-vip',
        component: Layout,
        redirect: '/manage-vip/list',
        children: [
            {
                path: 'list',
                component: () => import('@/views/manage-vip/manage-vip-list.vue'),
                meta: {
                    title: '会员管理',
                    hidden: false
                }
            },
            {
                path: 'details',
                component: () => import('@/views/manage-vip/manage-vip-details.vue'),
                meta: {
                    title: '会员详情',
                    hidden: true
                }
            },
            {
                path: 'demand',
                component: () => import('@/views/manage-vip/manage-vip-demand.vue'),
                meta: {
                    title: '会员择偶要求',
                    hidden: true
                }
            },
            {
                path: 'data',
                component: () => import('@/views/manage-vip/manage-vip-data.vue'),
                meta: {
                    title: '会员数据',
                    hidden: true
                }
            },
            {
                path: 'album',
                component: () => import('@/views/manage-vip/manage-vip-album.vue'),
                meta: {
                    title: '会员管理',
                    hidden: true
                }
            },
        ]
    },
    // 礼物管理
    {
        path: '/manage-gift',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('@/views/manage-gift/manage-gift-list.vue'),
                meta: {
                    title: '礼物管理',
                    hidden: false
                }
            }
        ]
    },
    // 相册管理
    {
        path: '/manage-album',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('@/views/manage-album/manage-album.vue'),
                meta: {
                    title: '相册管理',
                    hidden: false
                }
            }
        ]
    },

    // 404
    {
        path: '/404',
        component: () => import('@/views/error/404.vue'),
        meta: {
            title: '404',
            hidden: true
        }
    },
    {
        path: '/:pathMach(.*)*',
        redirect: '/404'
    }
]

export default routes