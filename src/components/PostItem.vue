<template>
    <div class="post-item">
        <h3>{{ post.title }}</h3>
        <article>{{ post.body }}</article>
    </div>
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
