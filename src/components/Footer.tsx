import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../utils/Theme';

export const Footer: React.FC = () => {
  return (
    <footer className="p-4 relative">
      <div className="container mx-auto relative">
        {/* Left and Right Navigation Container */}
        <div className="flex justify-between items-center w-full py-2">

          {/* Left Navigation */}
          <div className="flex space-x-2 md:space-x-4">
            <Link to="/" className="hover:underline">home</Link>
            <Link to="/collections" className="hover:underline">collections</Link>
            <div className='hidden space-x-4'>
              <Link to="/machines" className="hover:underline">machines</Link>
              <Link to="/patterns" className="hover:underline">patterns</Link>
              <Link to="/audiovisual" className="hover:underline">audiovisual</Link>
            </div>
            <Link to="/misc" className="hover:underline">misc</Link>
          </div>
        
        {/* Centered ThemeToggle */}
        <div className="absolute inset-x-0 flex justify-center pointer-events-none">
          <div className="pointer-events-auto">
            <ThemeToggle />
          </div>
        </div>

          {/* Right Navigation */}
          <div className="flex space-x-4">
            <Link to="/exhibitions" className="hover:underline">exhibitions</Link>
            <Link to="/about" className="hover:underline">about</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
