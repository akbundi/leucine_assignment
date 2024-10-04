// UpdateProfile.js
import React, { useState } from 'react';
import axios from 'axios';

const UpdateProfile = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [officeHours, setOfficeHours] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put('/api/faculty/update-profile', { email, phone, officeHours });
    alert('Profile updated');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
      <input type="text" value={officeHours} onChange={(e) => setOfficeHours(e.target.value)} placeholder="Office Hours" required />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateProfile;
