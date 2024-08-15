// server/routes/tasks.js
const express = require('express');
const Task = require('../models/Task');
const jwt = require('jsonwebtoken');

const router = express.Router();

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, 'secret', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

router.get('/', authenticateToken, async (req, res) => {
  const tasks = await Task.find({ userId: req.user.userId });
  res.json(tasks);
});

router.post('/', authenticateToken, async (req, res) => {
  const { description } = req.body;
  const task = new Task({ description, userId: req.user.userId });
  await task.save();
  res.status(201).send('Task created');
});

router.delete('/:id', authenticateToken, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.send('Task deleted');
});

module.exports = router;
