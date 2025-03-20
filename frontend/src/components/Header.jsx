import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold">CV Maker</Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/dashboard" className="hover:text-blue-500">Dashboard</Link>
            <Link to="/login" className="hover:text-blue-500">Login</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <Link to="/dashboard" className="block py-2">Dashboard</Link>
            <Link to="/login" className="block py-2">Login</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;