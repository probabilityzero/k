import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center-800 p-8">
      <div className="max-w-xl text-center">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
          Art Not Found
        </h1>
        <p className="text-lg mb-6">
          The masterpiece you seek has eluded our collection. Whether it’s lost in the folds of history or hidden in plain sight, it remains a mystery.
        </p>
        <p className="text-md text-gray-600 mb-8">
          Please check the URL, or explore our curated galleries to discover other remarkable works.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 border hover:bg-opacity-75 hover:text-opacity-75 transition-colors duration-300 rounded-full"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
