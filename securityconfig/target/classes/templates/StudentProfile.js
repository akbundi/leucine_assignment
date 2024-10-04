// StudentProfile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await axios.get('/api/student/profile');
      setProfile(response.data);
    };
    fetchProfile();
  }, []);

  return profile ? (
    <div>
      <img src={profile.photo} alt="Student" />
      <h2>{profile.name}</h2>
      <p>Email: {profile.email}</p>
      <p>Phone: {profile.phone}</p>
      <h3>Courses</h3>
      <ul>
        {profile.courses.map(course => <li key={course.id}>{course.title} - Grade: {course.grade}</li>)}
      </ul>
    </div>
  ) : <p>Loading...</p>;
};

export default StudentProfile;
