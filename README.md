
# API Test Automation - Playwright + TypeScript

## 🔧 Setup Instructions

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run API tests**
   ```bash
   npx playwright test
   ```

---

## ✅ API Test Cases

- `GET /api/users` - Validate status 200, list of users, and user count
- `GET /api/users` with query param - Extract user ID by email
- `POST /api/users` - Create user, validate status and response
- `PUT /api/users/{id}` - Update user, validate response
- `DELETE /api/users/{id}` - Validate 204 No Content

---

## 📦 Design Pattern

- **Page Object Model**: One object per endpoint group
- **Tooling**: Playwright APIRequestContext + TypeScript

---

## 📝 Assumptions

- No auth token needed (public test API)
- All API responses are assumed to be JSON
- Sample user IDs used (1–12)
