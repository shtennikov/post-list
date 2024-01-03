<template>
    <article class="post-item">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
    </article>
</template>

<script setup lang="ts">
import type { Post } from '../types/Post.interface';

defineProps<{ post: Post }>();
</script>

<style scoped lang="scss">
.post-item {
    max-width: 500px;
}
</style>
