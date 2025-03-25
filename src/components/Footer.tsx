import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../utils/Theme';

export const HomeFooter: React.FC = () => {
  return (
    <footer className="p-4 relative">
      <div className="container mx-auto relative">
        {/* Left and Right Navigation Container */}
        <div className="flex justify-between items-center w-full py-1">
          {/* Left Navigation */}
          <div className="flex space-x-2 md:space-x-4">
            <Link to="/" className="hover:underline">
             ​
            </Link>
          </div>

          {/* Centered ThemeToggle */}
          <div className="absolute inset-x-0 flex justify-center pointer-events-none">
            <div className="pointer-events-auto">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="p-4 relative">
      <div className="container mx-auto relative">
        {/* Left and Right Navigation Container */}
        <div className="flex justify-between items-center w-full py-1">
          {/* Left Navigation */}
          <div className="flex space-x-2 md:space-x-4">
            <Link to="/" className="hover:underline font-light px-1">
              {/* /K / */}
              K
            </Link>
            <span className='mr-1'>∶</span>
            <Link to="/collections" className="hover:underline">
              collections
            </Link>
            <div className="hidden space-x-4">
              <Link to="/collections/machines" className="hover:underline">
                machines
              </Link>
              <Link to="/collections/patterns" className="hover:underline">
                patterns
              </Link>
              <Link to="/collections/audiovisual" className="hover:underline">
                audiovisual
              </Link>
            </div>
            <Link to="/miscellaneous" className="hover:underline">
              misc
            </Link>
          </div>

          {/* Centered ThemeToggle */}
          <div className="absolute inset-x-0 flex justify-center pointer-events-none">
            <div className="pointer-events-auto">
              <ThemeToggle />
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex space-x-4">
            <Link to="/exhibitions" className="hover:underline">
              exhibitions
            </Link>
            <Link to="/about" className="hover:underline">
              about
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
