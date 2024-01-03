<template>
    <main>
        Пост № {{ postId }}
        <template v-if="post && author">
            <PostItem :post="post" />
            <AuthorInfo :author="author" />
        </template>
        <TheSpinner v-else-if="isLoading" />
        <UiAlert v-else>{{ ALERT_TEXT }}</UiAlert>
    </main>
</template>

<script setup lang="ts">
import PostItem from '../components/PostItem.vue';
import { usePostInfoFetch } from '../composables/usePostInfoFetch';
import TheSpinner from '../components/TheSpinner.vue';
import AuthorInfo from '../components/AuthorInfo.vue';
import UiAlert from '../components/UiAlert.vue';

const ALERT_TEXT = 'Что-то пошло не так...';

const props = defineProps<{ postId: number }>();

const { post, author, isLoading } = usePostInfoFetch(props.postId);
</script>

<style scoped lang="scss"></style>
