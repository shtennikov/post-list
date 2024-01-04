<template>
    <UiContainer>
        <main class="post-list-page">
            <UiPageTitle tag="h2">Список постов</UiPageTitle>
            <PostList v-if="posts" :posts="posts" @delete-post="deletePost" />
            <UiSpinner v-else-if="isLoading" />
            <UiAlert v-else>{{ ALERT_TEXT }}</UiAlert>
        </main>
    </UiContainer>
</template>

<script setup lang="ts">
import PostList from '../components/PostList.vue';
import { UiAlert, UiSpinner, UiContainer, UiPageTitle } from '../components/ui';
import { usePostsFetch } from '../composables/usePostsFetch';

const ALERT_TEXT = 'Что-то пошло не так...';

const { posts, isLoading } = usePostsFetch();

const deletePost = (postIndex: number) => {
    posts.value = posts.value?.filter((_, index) => index !== postIndex) || [];
};
</script>

<style scoped lang="scss">
.post-list-page {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
