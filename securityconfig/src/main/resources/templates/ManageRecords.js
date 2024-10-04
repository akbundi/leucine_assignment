// ManageRecords.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageRecords = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('/api/admin/users');
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    await axios.delete(`/api/admin/user/${userId}`);
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div>
      <h3>Manage Records</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.role}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageRecords;
