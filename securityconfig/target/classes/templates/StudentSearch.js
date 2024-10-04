// StudentSearch.js
import React, { useState } from 'react';
import axios from 'axios';

const StudentSearch = () => {
  const [query, setQuery] = useState('');
  const [students, setStudents] = useState([]);

  const handleSearch = async () => {
    const response = await axios.get(`/api/student/search?query=${query}`);
    setStudents(response.data);
  };

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search students..." />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {students.map(student => (
          <li key={student.id}>{student.name} - {student.department}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentSearch;
