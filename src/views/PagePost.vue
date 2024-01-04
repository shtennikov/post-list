<template>
    <UiContainer>
        <main class="page-post-item">
            <template v-if="post && author">
                <UiPageTitle tag="h2">Пост #{{ postId }}</UiPageTitle>
                <PostItem :post="post">
                    <template #author>
                        <AuthorInfo :author="author" />
                    </template>
                </PostItem>
            </template>

            <TheSpinner v-else-if="isLoading" />
            <UiAlert v-else>{{ ALERT_TEXT }}</UiAlert>
        </main>
    </UiContainer>
</template>

<script setup lang="ts">
import PostItem from '../components/PostItem.vue';
import { usePostInfoFetch } from '../composables/usePostInfoFetch';
import TheSpinner from '../components/TheSpinner.vue';
import AuthorInfo from '../components/AuthorInfo.vue';
import UiAlert from '../components/UiAlert.vue';
import UiContainer from '../components/UiContainer.vue';
import UiPageTitle from '../components/UiPageTitle.vue';

const ALERT_TEXT = 'Что-то пошло не так...';

const props = defineProps<{ postId: number }>();

const { post, author, isLoading } = usePostInfoFetch(props.postId);
</script>

<style scoped lang="scss">
.page-post-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
