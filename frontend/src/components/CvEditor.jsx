// src/components/CVEditor.jsx
import { useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import TemplatePreview from './TemplatePreview';

const CVEditor = () => {
  const [sections, setSections] = useState({
    personal: {},
    experience: [],
    education: [],
    skills: [],
  });

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:col-span-1 space-y-4">
        <SectionForm onSubmit={addExperience} />
        <SectionForm onSubmit={addEducation} />
      </div>
      <div className="md:col-span-3 bg-white p-6 shadow-lg">
        <TemplatePreview data={sections} ref={componentRef} />
        <button onClick={handlePrint} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Download PDF
        </button>
      </div>
    </div>
  );
};