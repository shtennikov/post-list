<template>
    <main class="post-list-page">
        <UiContainer>
            <h3>Список постов</h3>
            <PostList v-if="posts" :posts="posts" @delete-post="deletePost" />
            <TheSpinner v-else-if="isLoading" />
            <UiAlert v-else>{{ ALERT_TEXT }}</UiAlert>
        </UiContainer>
    </main>
</template>

<script setup lang="ts">
import PostList from '../components/PostList.vue';
import UiAlert from '../components/UiAlert.vue';
import TheSpinner from '../components/TheSpinner.vue';
import UiContainer from '../components/UiContainer.vue';
import { usePostsFetch } from '../composables/usePostsFetch';

const ALERT_TEXT = 'Что-то пошло не так...';

const { posts, isLoading } = usePostsFetch();

const deletePost = (postIndex: number) => {
    posts.value = posts.value?.filter((_, index) => index !== postIndex) || [];
};
</script>

<style scoped lang="scss"></style>
