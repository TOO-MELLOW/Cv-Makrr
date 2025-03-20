import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TemplateSelector() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/templates')
      .then(response => setTemplates(response.data))
      .catch(error => console.error('Error fetching templates', error));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Choose a Template</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {templates.map(template => (
          <div key={template.id} className="border rounded shadow p-2 hover:shadow-lg transition">
            <img src={template.preview} alt={template.name} className="w-full h-32 object-cover rounded" />
            <h3 className="mt-2 text-center">{template.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TemplateSelector;
