// AdminDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const AdminDashboard = () => {
  const [enrollmentData, setEnrollmentData] = useState({ labels: [], data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/admin/dashboard-data');
      setEnrollmentData({
        labels: response.data.years,
        data: response.data.enrollments
      });
    };
    fetchData();
  }, []);

  const data = {
    labels: enrollmentData.labels,
    datasets: [
      {
        label: 'Student Enrollment Trends',
        data: enrollmentData.data,
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'blue',
      },
    ],
  };

  return <Line data={data} />;
};

export default AdminDashboard;
