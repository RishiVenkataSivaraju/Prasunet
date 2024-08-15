// src/components/TaskList.js
import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../api';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await getTasks();
        setTasks(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Your Tasks</h2>
      <Link to="/add-task">Add New Task</Link>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            {task.description}
            <Link to={`/edit-task/${task._id}`}>Edit</Link>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
