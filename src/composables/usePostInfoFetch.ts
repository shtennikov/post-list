import { computed, ref } from 'vue';
import { AxiosError } from 'axios';
import { postRepository } from '../api/PostRepository';
import type { Post } from '../types/Post.interface';
import type { User } from '../types/User.interface';
import { userRepository } from '@/api/UserRepository';

export function usePostInfoFetch(postId: number) {
    const post = ref<Post | null>(null);
    const author = ref<User | null>(null);
    const isError = ref(false);
    const isNotFound = ref(false);

    const isLoading = computed(() => !(post.value && author.value));

    const fetchData = async () => {
        try {
            const postData = await postRepository.getPost(postId);
            const userData = await userRepository.getUser(postData.userId);

            post.value = postData;
            author.value = userData;
        } catch (error) {
            isError.value = true;

            if (error instanceof AxiosError && error.response?.status === 404) {
                isNotFound.value = true;
            }
            console.warn('Error fetching post/author data:', error);
        }
    };

    fetchData();

    return {
        post,
        author,
        isError,
        isLoading,
        isNotFound,
    };
}
