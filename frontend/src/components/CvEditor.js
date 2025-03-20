import React, { useState } from 'react';
import axios from 'axios';

function CvEditor() {
  const [cvData, setCvData] = useState({ name: '', email: '', experience: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setCvData({ ...cvData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    axios.post('http://localhost:5000/save', { userId: 'user123', cvData })
      .then(response => setMessage(response.data.message))
      .catch(error => setMessage('Error saving CV'));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Edit Your CV</h2>
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border p-2 w-full"
          value={cvData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="border p-2 w-full"
          value={cvData.email}
          onChange={handleChange}
        />
        <textarea
          name="experience"
          placeholder="Work Experience"
          className="border p-2 w-full h-32"
          value={cvData.experience}
          onChange={handleChange}
        />
        <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">
          Save CV
        </button>
        {message && <p className="mt-2">{message}</p>}
      </div>
    </div>
  );
}

export default CvEditor;
