import { ref } from 'vue';
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
        .catch((error) => {
            isError.value = true;
            console.warn('Error fetching posts data:', error);
        });

    return {
        posts,
        isError,
        isLoading,
    };
}
