```javascript
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Load database
const dbPath = path.join(__dirname, 'db.json');
let db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

// Make db accessible to routes
app.use((req, res, next) => {
  req.db = db;
  req.saveDb = () => {
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
  };
  next();
});

// Import routes
const userRoutes = require('./routes/users.routes');
const todoRoutes = require('./routes/todos.routes');

// Use routes
app.use('/users', userRoutes);
app.use('/todos', todoRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Express Routing API',
    endpoints: {
      users: '/users',
      todos: '/todos'
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```
