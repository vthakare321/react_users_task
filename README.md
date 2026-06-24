# Mini Admin Dashboard

A React + TypeScript + Vite based Mini Admin Dashboard that uses DummyJSON APIs for authentication and users management.

---

## Features

### Authentication
- Login using DummyJSON Auth API
- Protected routes
- Logout functionality
- Persist authentication using Zustand

### Dashboard
- Sidebar navigation
- Header
- Responsive layout

### User Management
- User listing
- User details
- Search users
- Pagination
- Add user
- Edit user
- Delete user
- Loading state
- Error state
- Empty state

### Reusable Components
- Loader
- ErrorMessage
- EmptyState

---

## Tech Stack

- React
- TypeScript
- Vite
- React Router DOM
- Axios
- TanStack Query
- React Hook Form
- Zustand
- Tailwind CSS

---

## Folder Structure

```text
src
│
├── api
│     apiClient.ts
│     authService.ts
│     userService.ts
│     localUserService.ts
│
├── components
├── hooks
├── layouts
├── pages
├── routes
├── store
├── types
├── App.tsx
├── main.tsx
```

---

## API Endpoints

### Login

```http
POST https://dummyjson.com/auth/login
```

### Get Users

```http
GET https://dummyjson.com/users
```

### Search Users

```http
GET https://dummyjson.com/users/search?q=keyword
```

### Get User By Id

```http
GET https://dummyjson.com/users/:id
```

### Add User

```http
POST https://dummyjson.com/users/add
```

### Update User

```http
PATCH https://dummyjson.com/users/:id
```

### Delete User

```http
DELETE https://dummyjson.com/users/:id
```

---

## Login Credentials

```text
Username : emilys
Password : emilyspass
```

---

## State Management

### React Hook Form
Used for:

- Login form
- Add User form
- Edit User form

### TanStack Query
Used for:

- User listing
- User detail
- Search users

### Zustand
Used for:

- Authentication state
- Token persistence

---

## Assumptions

DummyJSON does not persist add, update, or delete operations.

To provide a better user experience:

- Newly added users are stored in localStorage.
- Edited local users are updated in localStorage.
- Deleted local users are removed from localStorage.
- Local users are merged with API users while rendering.

---

## Limitations

Since DummyJSON is a fake REST API:
- Data changes are not persisted on the server.

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

---

## Future Improvements

- Toast notifications
- Sorting
