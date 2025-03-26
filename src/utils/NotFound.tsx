import React from "react";
import { Link, useLocation, Navigate } from "react-router-dom";

const NotFound: React.FC = () => {
  // Get current location
  const location = useLocation();
  
  // Define regex for valid slug: must start with "/No." followed by one or more characters.
  const validSlugRegex = /^\/No\..+/;
  
  // If the URL does not match our pattern, redirect to home
  if (!validSlugRegex.test(location.pathname)) {
    return <Navigate to="/" replace />;
  }
  
  // Define an array of image/GIF URLs
  const media = [
    "https://media0.giphy.com/media/WZrOaNjFPKT5e/giphy.gif",
    "https://www.teahub.io/photos/full/288-2886370_illustration.gif",
    "https://media.giphy.com/media/aGeePr7nv6ra8/giphy.gif",
    "https://i.pinimg.com/originals/cd/9a/cb/cd9acb44872869bd9110cadc8f68b9da.gif",
    "https://68.media.tumblr.com/33e1ac9451cb50a5705ac03aa977d879/tumblr_oobcp0hw9T1v8tshbo1_540.gif",
    "https://64.media.tumblr.com/a97aadb40f9122496b87446af7faf088/559203c192687d3b-06/s2048x3072_c0,3425,100000,96233/5f9d39de76f7c5cbac7fea5d412d62b814346413.gif"
  ];
  
  // Choose one at random
  const randomMedia = media[Math.floor(Math.random() * media.length)];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center-800 p-4">
      <header className="mb-4">
        <h2 className="text-xl font-bold p-4 opacity-80">
          I am Nonexistent
        </h2>
      </header>
      <div className="max-w-xl text-center">
        {randomMedia && (
          <div className="mb-4">
            <img
              src={randomMedia}
              alt="Art Not Found"
              className="w-full aspect-video rounded-sm"
            />
          </div>
        )}
        <h1 className="text-5xl font-extrabold my-2 tracking-tight">
          Art:// Not Found
        </h1>
        <p className="text-lg m-4">
          The art piece you seek has eluded the collection. Whether it’s lost in the folds of history or hidden in plain sight, it remains a mystery.
        </p>
        <p className="text-md m-6" style={{ opacity: 0.6 }}>
          Please check the URL, or explore our curated galleries to discover other remarkable works.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 border hover:bg-opacity-75 hover:text-opacity-75 transition-colors duration-300 rounded-sm"
        >
          Return to Gallery
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
