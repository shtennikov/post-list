<template>
    <ul v-if="posts.length" class="post-list">
        <li v-for="(post, index) in posts" :key="post.id">
            <RouterLink :to="{ name: 'post', params: { postId: post.id } }">
                <PostItem @click.right.prevent="$emit('delete-post', index)" :post="post" />
            </RouterLink>
        </li>
    </ul>
    <UiAlert v-else>{{ ALERT_TEXT_EMPTY }}</UiAlert>
</template>

<script setup lang="ts">
import type { Post } from '../types/Post.interface';
import PostItem from './PostItem.vue';
import UiAlert from './UiAlert.vue';

const ALERT_TEXT_EMPTY = 'Список постов пуст';

defineProps<{ posts: Post[] }>();

defineEmits<{
    'delete-post': [index: number];
}>();
</script>

<style scoped>
.post-list {
    margin: auto;
    max-width: fit-content;
}
</style>
