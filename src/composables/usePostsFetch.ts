import { ref, warn } from 'vue';
import { postRepository } from '../api/PostRepository';
import type { Post } from '../types/Post.interface';

export function usePostsFetch() {
    const posts = ref<Post[] | null>(null);
    const isError = ref(false);
    const isLoading = ref(true);

    postRepository
        .getPosts()
        .then((data) => {
            posts.value = data;
            isLoading.value = false;
        })
        .catch((err) => {
            isError.value = true;
            warn(err);
        });

    return {
        posts,
        isError,
        isLoading,
    };
}
