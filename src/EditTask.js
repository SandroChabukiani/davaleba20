import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const API_BASE_URL = 'https://crudapi.co.uk/api/v1';

function EditTask() {
  const { id } = useParams();
  const [task, setTask] = useState({
    name: '',
    isCompleted: false,
    term: '',
    assigneeName: '',
    assigneeSurname: '',
    additionalInfo: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/tasks/${id}`);
        setTask(response.data);
      } catch (error) {
        console.error('Error fetching task:', error);
      }
    };

    fetchTask();
  }, [id]);

  const updateTask = async () => {
    try {
      await axios.put(`${API_BASE_URL}/tasks/${id}`, task);
      navigate('/');
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <label htmlFor="taskName">Task Name:</label>
      <input
        type="text"
        id="taskName"
        value={task.name}
        onChange={(e) => setTask({ ...task, name: e.target.value })}
        required
      />
      <button type="button" onClick={updateTask}>
        Update Task
      </button>
    </div>
  );
}

export default EditTask;
