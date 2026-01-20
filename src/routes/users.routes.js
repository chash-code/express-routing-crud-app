```javascript
const express = require('express');
const router = express.Router();

// Create User - POST /users/add
router.post('/add', (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const newUser = {
    userId: String(req.db.users.length + 1),
    name,
    email
  };

  req.db.users.push(newUser);
  req.saveDb();

  res.status(201).json({
    message: 'User created successfully',
    user: newUser
  });
});

// Get All Users - GET /users
router.get('/', (req, res) => {
  res.status(200).json({
    count: req.db.users.length,
    users: req.db.users
  });
});

// Get Single User - GET /users/:userId
router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const user = req.db.users.find(u => u.userId === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.status(200).json({ user });
});

// Update User - PUT /users/update/:userId
router.put('/update/:userId', (req, res) => {
  const { userId } = req.params;
  const { name, email } = req.body;

  const userIndex = req.db.users.findIndex(u => u.userId === userId);

  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  if (name) req.db.users[userIndex].name = name;
  if (email) req.db.users[userIndex].email = email;

  req.saveDb();

  res.status(200).json({
    message: 'User updated successfully',
    user: req.db.users[userIndex]
  });
});

// Delete User - DELETE /users/delete/:userId
router.delete('/delete/:userId', (req, res) => {
  const { userId } = req.params;
  const userIndex = req.db.users.findIndex(u => u.userId === userId);

  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  const deletedUser = req.db.users.splice(userIndex, 1);
  req.saveDb();

  res.status(200).json({
    message: 'User deleted successfully',
    user: deletedUser[0]
  });
});

module.exports = router;
```
