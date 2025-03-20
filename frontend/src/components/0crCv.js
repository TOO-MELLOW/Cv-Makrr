import React, { useState } from 'react';
import axios from 'axios';

function OcrCv() {
  const [imageData, setImageData] = useState(null);
  const [extractedText, setExtractedText] = useState('');

  const handleImageChange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageData(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleOcr = () => {
    axios.post('http://localhost:5000/ocr', { imageData })
      .then(response => setExtractedText(response.data.text))
      .catch(error => setExtractedText('Error processing OCR'));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Scan Your CV</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4" />
      <button onClick={handleOcr} className="bg-purple-500 text-white px-4 py-2 rounded">
        Process Image
      </button>
      {extractedText && (
        <div className="mt-4 p-2 border rounded bg-white">
          <h3 className="font-semibold mb-2">Extracted Text:</h3>
          <pre>{extractedText}</pre>
        </div>
      )}
    </div>
  );
}

export default OcrCv;
