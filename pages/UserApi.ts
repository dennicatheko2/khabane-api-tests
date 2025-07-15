
import { APIRequestContext, expect } from '@playwright/test';

export class UserApi {
  constructor(private request: APIRequestContext) {}

  async getUsers(page = 1) {
    const res = await this.request.get(`/api/users?page=${page}`);
    expect(res.status()).toBe(200);
    const data = await res.json();
    expect(data.data.length).toBeGreaterThan(0);
    return data;
  }

  async getAllUsers() {
    const res = await this.request.get('/api/users?per_page=100');
    expect(res.status()).toBe(200);
    const data = await res.json();
    return data.data;
  }

  async getUserIdByEmail(email: string) {
    const users = await this.getAllUsers();
    const user = users.find((u: any) => u.email === email);
    return user?.id;
  }

  async createUser(name: string, job: string) {
    const res = await this.request.post('/api/users', {
      data: { name, job }
    });
    expect(res.status()).toBe(201);
    const body = await res.json();
    expect(body.name).toBe(name);
    expect(body.job).toBe(job);
    return body;
  }

  async updateUser(id: number, job: string) {
    const res = await this.request.put(`/api/users/${id}`, {
      data: { job }
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.job).toBe(job);
    return body;
  }

  async deleteUser(id: number) {
    const res = await this.request.delete(`/api/users/${id}`);
    expect(res.status()).toBe(204);
  }
}
