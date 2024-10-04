// ClassList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClassList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axios.get('/api/faculty/class-list');
      setStudents(response.data);
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <h3>Class List</h3>
      <ul>
        {students.map(student => (
          <li key={student.id}>{student.name} - {student.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClassList;
