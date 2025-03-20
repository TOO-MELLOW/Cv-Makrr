import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TemplateSelector from './components/TemplateSelector';
import CvEditor from './components/CvEditor';
import UploadCv from './components/UploadCv';
import OcrCv from './components/OcrCv';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">CV Maker</h1>
          <nav>
            <Link className="mx-2 text-blue-500" to="/">Templates</Link>
            <Link className="mx-2 text-blue-500" to="/editor">Edit CV</Link>
            <Link className="mx-2 text-blue-500" to="/upload">Upload CV</Link>
            <Link className="mx-2 text-blue-500" to="/ocr">Scan CV</Link>
          </nav>
        </header>
        <main className="p-4">
          <Routes>
            <Route path="/" element={<TemplateSelector />} />
            <Route path="/editor" element={<CvEditor />} />
            <Route path="/upload" element={<UploadCv />} />
            <Route path="/ocr" element={<OcrCv />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
