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

            <UiSpinner v-else-if="isLoading" />
            <UiAlert v-else>{{ ALERT_TEXT }}</UiAlert>
        </main>
    </UiContainer>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import PostItem from '../components/PostItem.vue';
import AuthorInfo from '../components/AuthorInfo.vue';
import { usePostInfoFetch } from '../composables/usePostInfoFetch';
import { UiSpinner, UiAlert, UiContainer, UiPageTitle } from '../components/ui';

const ALERT_TEXT = 'Что-то пошло не так...';

const props = defineProps<{ postId: number }>();
const router = useRouter();

const { post, author, isLoading, isNotFound } = usePostInfoFetch(props.postId);

watch(isNotFound, () => {
    if (isNotFound) {
        router.push({ name: 'not-found' });
    }
});
</script>

<style scoped lang="scss">
.page-post-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
