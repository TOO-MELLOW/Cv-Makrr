import { useEffect, useState } from 'react';
import api from '../utils/api';
import CVEditor from '../components/CVEditor';

const Dashboard = () => {
  const [cvs, setCVs] = useState([]);

  useEffect(() => {
    const fetchCVs = async () => {
      try {
        const { data } = await api.get('/api/cv');
        setCVs(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCVs();
  }, []);

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl mb-4">Your CVs</h1>
      <CVEditor />
    </div>
  );
};

export default Dashboard;