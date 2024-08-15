// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';
import { addTask, updateTask, getTasks } from '../api';
import { useHistory, useParams } from 'react-router-dom';

const TaskForm = () => {
  const [description, setDescription] = useState('');
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      // Load task for editing
      const fetchTask = async () => {
        try {
          const { data } = await getTasks();
          const task = data.find(t => t._id === id);
          setDescription(task?.description || '');
        } catch (error) {
          console.error(error);
        }
      };
      fetchTask();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateTask(id, { description });
      } else {
        await addTask({ description });
      }
      history.push('/tasks');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit Task' : 'Add Task'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">{id ? 'Update Task' : 'Add Task'}</button>
      </form>
    </div>
  );
};

export default TaskForm;

