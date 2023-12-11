import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_BASE_URL = 'https://crudapi.co.uk/api/v1';

function TasksList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/tasks`);
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/tasks/${id}`);
      const response = await axios.get(`${API_BASE_URL}/tasks`);
      setTasks(response.data);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const markAsCompleted = async (id) => {
    try {
      await axios.patch(`${API_BASE_URL}/tasks/${id}`, { isCompleted: true });
      const response = await axios.get(`${API_BASE_URL}/tasks`);
      setTasks(response.data);
    } catch (error) {
      console.error('Error marking task as completed:', error);
    }
  };

  return (
    <div>
      <h2>Tasks List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name} - Completed: {task.isCompleted ? 'Yes' : 'No'}
            <button type="button" onClick={() => markAsCompleted(task.id)}>
              Mark as Completed
            </button>
            <Link to={`/edit/${task.id}`}>Edit</Link>
            <button type="button" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TasksList;
