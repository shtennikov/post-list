import { httpClient } from './httpClient';
import type { User } from '../types/User.interface';

class UserRepository {
    public async getUsers(): Promise<User[]> {
        const response = await httpClient.get(`/users`);
        return response.data;
    }

    public async getUser(id: number): Promise<User> {
        const response = await httpClient.get(`/users/${id}`);
        return response.data;
    }
}

export const userRepository = new UserRepository();
