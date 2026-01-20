# Express Routing CRUD App

A RESTful API built with Express.js featuring CRUD operations for Users and Todos.

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. The server will run on http://localhost:3000

## API Endpoints

### Users Routes

- **POST** `/users/add` - Create a new user
- **GET** `/users` - Get all users
- **GET** `/users/:userId` - Get single user
- **PUT** `/users/update/:userId` - Update user
- **DELETE** `/users/delete/:userId` - Delete user

### Todos Routes

- **POST** `/todos/add` - Create a new todo
- **GET** `/todos` - Get all todos
- **GET** `/todos/:todoId` - Get single todo
- **PUT** `/todos/update/:todoId` - Update todo
- **DELETE** `/todos/delete/:todoId` - Delete todo

## Testing with cURL or Postman

### Create User
```bash
curl -X POST http://localhost:3000/users/add \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com"}'
```

### Get All Users
```bash
curl http://localhost:3000/users
```

### Update User
```bash
curl -X PUT http://localhost:3000/users/update/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Name"}'
```

### Delete User
```bash
curl -X DELETE http://localhost:3000/users/delete/1
```

## Features

✅ Express.js application on port 3000
✅ JSON database (db.json)
✅ Real-time CRUD operations
✅ Separate routes for /users and /todos
✅ Clean index.js with no direct CRUD logic
✅ Proper HTTP status codes
✅ Route parameter validation
✅ Modular and readable code

## Author
Chash 
```
