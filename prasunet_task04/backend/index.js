// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/todo-app', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));

app.listen(5000, () => console.log('Server running on port 5000'));
