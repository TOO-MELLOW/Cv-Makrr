import React, { useState } from 'react';
import axios from 'axios';

function UploadCv() {
  const [file, setFile] = useState(null);
  const [uploadMsg, setUploadMsg] = useState('');

  const handleFileChange = e => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('cvFile', file);

    axios.post('http://localhost:5000/upload', formData)
      .then(response => setUploadMsg(response.data.message))
      .catch(error => setUploadMsg('Error uploading file'));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Upload Your CV</h2>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      <button onClick={handleUpload} className="bg-green-500 text-white px-4 py-2 rounded">
        Upload
      </button>
      {uploadMsg && <p className="mt-2">{uploadMsg}</p>}
    </div>
  );
}

export default UploadCv;
