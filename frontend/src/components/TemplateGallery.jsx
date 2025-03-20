// src/components/TemplateGallery.jsx
import { useState } from 'react';

const TemplateGallery = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
      {templates.map(template => (
        <div key={template.id} className="cursor-pointer border rounded-lg overflow-hidden hover:shadow-lg" onClick={() => setSelectedTemplate(template)}>
          <img src={template.preview} alt={template.name} className="w-full h-48 object-cover" />
          <div className="p-2 text-sm text-center">{template.name}</div>
        </div>
      ))}
    </div>
  );
};