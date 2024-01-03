import type { RouteLocation } from 'vue-router';
import type { Breadcrumbs } from '../types/Breadcrumbs.interface';

const BREADCRUMBS_ITEMS: Record<string, Breadcrumbs> = {
    index: { label: 'Главная', routeName: 'index' },
    posts: { label: 'Список постов', routeName: 'posts' },
    post: { label: 'Пост', routeName: 'post' },
} as const;

export const routes = [
    {
        name: 'index',
        path: '/',
        component: () => import('../views/PageMain.vue'),
    },
    {
        name: 'posts',
        path: '/posts',
        component: () => import('../views/PagePostList.vue'),
        meta: {
            breadcrumbs: [BREADCRUMBS_ITEMS.index, BREADCRUMBS_ITEMS.posts],
        },
    },
    {
        name: 'post',
        path: '/posts/:postId(\\d+)',
        component: () => import('../views/PagePost.vue'),
        props: (to: RouteLocation) => ({
            postId: Number(to.params.postId),
        }),
        meta: {
            breadcrumbs: [BREADCRUMBS_ITEMS.index, BREADCRUMBS_ITEMS.posts, BREADCRUMBS_ITEMS.post],
        },
    },
];
