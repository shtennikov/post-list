<template>
    <TransitionGroup v-if="posts.length" class="post-list" name="list" tag="ul">
        <li v-for="(post, index) in posts" :key="post.id">
            <RouterLink :to="{ name: 'post', params: { postId: post.id } }">
                <PostItem @click.right.prevent="$emit('delete-post', index)" :post="post" />
            </RouterLink>
        </li>
    </TransitionGroup>
    <UiAlert v-else>{{ ALERT_TEXT_EMPTY }}</UiAlert>
</template>

<script setup lang="ts">
import type { Post } from '../types/Post.interface';
import PostItem from './PostItem.vue';
import { UiAlert } from './ui';

const ALERT_TEXT_EMPTY = 'Список постов пуст';

defineProps<{ posts: Post[] }>();

defineEmits<{
    'delete-post': [index: number];
}>();
</script>

<style scoped>
.post-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

.list-enter-active,
.list-leave-active {
    transition: all 0.2s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(500px);
}
</style>
