import type { RouteLocation } from 'vue-router';
import type { Breadcrumb } from '../types/Breadcrumbs.interface';

const BREADCRUMBS_ITEMS: Record<string, Breadcrumb> = {
    index: { label: 'Главная', to: { name: 'index' } },
    posts: { label: 'Список постов', to: { name: 'posts' } },
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
            breadcrumbs: (to: RouteLocation) => {
                const { postId } = to.params;
                const postBreadcrumb: Breadcrumb = {
                    label: `Пост #${postId}`,
                    to: { name: 'post', params: { postId } },
                };
                return [BREADCRUMBS_ITEMS.index, BREADCRUMBS_ITEMS.posts, postBreadcrumb];
            },
        },
    },
];
