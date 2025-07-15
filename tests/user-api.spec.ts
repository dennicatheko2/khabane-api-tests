
import { test } from '@playwright/test';
import { UserApi } from '../pages/UserApi';

test.describe('Reqres API Tests', () => {
  test('GET /api/users returns user list and count', async ({ request }) => {
    const api = new UserApi(request);
    const data = await api.getUsers();
    console.log(`User count on page: ${data.data.length}`);
  });

  test('GET /api/users?per_page=100 returns user with specific email', async ({ request }) => {
    const api = new UserApi(request);
    const userId = await api.getUserIdByEmail('charles.morris@reqres.in');
    console.log(`User ID for charles.morris@reqres.in: ${userId}`);
  });

  test('POST /api/users creates a user', async ({ request }) => {
    const api = new UserApi(request);
    await api.createUser('John Doe', 'Developer');
  });

  test('PUT /api/users/:id updates a user', async ({ request }) => {
    const api = new UserApi(request);
    await api.updateUser(2, 'Senior Developer');
  });

  test('DELETE /api/users/:id deletes a user', async ({ request }) => {
    const api = new UserApi(request);
    await api.deleteUser(2);
  });
});
