import { computed, ref } from 'vue';
import { postRepository } from '../api/PostRepository';
import type { Post } from '../types/Post.interface';
import type { User } from '../types/User.interface';
import { userRepository } from '@/api/UserRepository';

export function usePostInfoFetch(postId: number) {
    const post = ref<Post | null>(null);
    const author = ref<User | null>(null);
    const isError = ref(false);

    const isLoading = computed(() => !(post.value && author.value));

    const fetchData = async () => {
        try {
            const postData = await postRepository.getPost(postId);
            const userData = await userRepository.getUser(postData.userId);

            post.value = postData;
            author.value = userData;
        } catch (error) {
            isError.value = true;
            console.warn('Error fetching post/author data:', error);
        }
    };

    fetchData();

    return {
        post,
        author,
        isError,
        isLoading,
    };
}
