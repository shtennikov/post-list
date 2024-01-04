<template>
    <article class="post-item">
        <h3 class="post-item__title">{{ post.title }}</h3>
        <p class="post-item__body">{{ post.body }}</p>
        <slot name="author" />
    </article>
</template>

<script setup lang="ts">
import type { Post } from '../types/Post.interface';

defineProps<{ post: Post }>();
</script>

<style scoped lang="scss">
.post-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    padding: 20px 30px;
    max-width: 700px;
    border: 2px solid $border-color;
    border-radius: 40px;
    transition: transform 0.3s ease;

    &__title {
        color: $text-title-color;
    }

    &__body {
        color: $text-primary-color;
    }

    a &:hover {
        border-color: $accent-color;
        transform: scale(1.02);
    }
}
</style>
