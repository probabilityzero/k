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
          <div className="flex space-x-3 md:space-x-4">
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
    <footer className="m-4 relative">
      <div className="container mx-auto relative">
        {/* Left and Right Navigation Container */}
        <div className="flex justify-between items-center w-full py-1">
          {/* Left Navigation */}
          <div className="flex space-x-3 md:space-x-4">
            <Link to="/">
            <span className='hover:underline font-semibold'>K</span>
            <span className='ml-3 md:ml-4'>/</span>
            </Link>
            
            <Link to="/collections" className="hover:underline">
              collections
            </Link>
            <Link to="/miscellaneous" className="hover:underline">
              misc
            </Link>
              {/* <Link to="/collections/machines" className="hover:underline">
                machines
              </Link>
              <Link to="/collections/patterns" className="hover:underline">
                patterns
              </Link>
              <Link to="/collections/audiovisual" className="hover:underline">
                audiovisual
              </Link> */}
          </div>

          {/* Centered ThemeToggle */}
          <div className="absolute inset-x-0 flex justify-center pointer-events-none">
            <div className="pointer-events-auto">
              <ThemeToggle />
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex space-x-3 md:space-x-4">
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
