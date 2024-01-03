<template>
    <main class="post-list-page">
        <h3>Список постов</h3>
        <PostList v-if="posts" :posts="posts" />
        <TheSpinner v-else-if="isLoading" />
        <UiAlert v-else>{{ ALERT_TEXT }}</UiAlert>
    </main>
</template>

<script setup lang="ts">
import PostList from '../components/PostList.vue';
import UiAlert from '../components/UiAlert.vue';
import TheSpinner from '../components/TheSpinner.vue';
import { usePostsFetch } from '../composables/usePostsFetch';

const ALERT_TEXT = 'Что-то пошло не так...';

const { posts, isLoading } = usePostsFetch();
</script>

<style scoped lang="scss">
.post-list-page {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
