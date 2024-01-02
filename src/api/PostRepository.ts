import { httpClient } from './httpClient';
import type { Post } from '../types/Post.interface';

class PostRepository {
    public async getPosts(): Promise<Post[]> {
        const response = await httpClient.get(`/posts`);
        return response.data;
    }

    public async getPost(id: number): Promise<Post> {
        const response = await httpClient.get(`/posts/${id}`);
        return response.data;
    }
}

export const postRepository = new PostRepository();
