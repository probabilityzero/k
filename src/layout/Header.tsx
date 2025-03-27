import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-thin">
          {/* <Grip /> */}
          Sentients
        </Link>
        <nav className="flex space-x-4">
        <Link to="/exhibitions" className="hover:underline">exhibitions</Link>
          <Link to="/machines" className="hover:underline">machines</Link>
          <Link to="/patterns" className="hover:underline">patterns</Link>
          <Link to="/audiovisual" className="hover:underline">audiovisual</Link>
          <Link to="/misc" className="hover:underline">misc</Link>
          <Link to="/about" className="hover:underline">about</Link>
        </nav>
      </div>
    </header>
  );
};
