<template>
    <UiContainer>
        <main class="post-list-page">
            <UiPageTitle tag="h2">Список постов</UiPageTitle>
            <PostList v-if="posts" :posts="posts" @delete-post="deletePost" />
            <TheSpinner v-else-if="isLoading" />
            <UiAlert v-else>{{ ALERT_TEXT }}</UiAlert>
        </main>
    </UiContainer>
</template>

<script setup lang="ts">
import PostList from '../components/PostList.vue';
import UiAlert from '../components/UiAlert.vue';
import TheSpinner from '../components/TheSpinner.vue';
import UiContainer from '../components/UiContainer.vue';
import UiPageTitle from '../components/UiPageTitle.vue';
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
