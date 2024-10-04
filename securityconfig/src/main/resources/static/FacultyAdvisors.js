// FacultyAdvisors.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FacultyAdvisors = () => {
  const [advisors, setAdvisors] = useState([]);

  useEffect(() => {
    const fetchAdvisors = async () => {
      const response = await axios.get('/api/student/advisors');
      setAdvisors(response.data);
    };
    fetchAdvisors();
  }, []);

  return (
    <div>
      <h3>Faculty Advisors</h3>
      <ul>
        {advisors.map(advisor => (
          <li key={advisor.id}>
            {advisor.name} - Email: <a href={`mailto:${advisor.email}`}>{advisor.email}</a> - Phone: {advisor.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacultyAdvisors;
