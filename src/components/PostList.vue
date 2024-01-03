<template>
    <ul class="post-list">
        <li v-for="post in posts" :key="post.id">
            <RouterLink :to="{ name: 'post', params: { postId: post.id } }">
                <PostItem :post="post" />
            </RouterLink>
        </li>
    </ul>
</template>

<script setup lang="ts">
import type { Post } from '../types/Post.interface';
import PostItem from './PostItem.vue';

defineProps<{ posts: Post[] }>();
</script>

<style scoped>
.post-list {
    margin: auto;
    max-width: fit-content;
}
</style>
