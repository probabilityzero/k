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
    "https://media.giphy.com/media/aGeePr7nv6ra8/giphy.gif",
    "https://i.pinimg.com/originals/cd/9a/cb/cd9acb44872869bd9110cadc8f68b9da.gif",
    "https://68.media.tumblr.com/33e1ac9451cb50a5705ac03aa977d879/tumblr_oobcp0hw9T1v8tshbo1_540.gif",
    "https://64.media.tumblr.com/a97aadb40f9122496b87446af7faf088/559203c192687d3b-06/s2048x3072_c0,3425,100000,96233/5f9d39de76f7c5cbac7fea5d412d62b814346413.gif",
    "https://i.pinimg.com/originals/da/d2/e7/dad2e74d5e892a72b840635ca29b228f.gif",
    "https://media.giphy.com/media/kryv0022zw7eg/giphy.gif",
    "https://www.icegif.com/wp-content/uploads/2022/07/icegif-1404.gif",
    ""
  ];
  
  // Choose one at random
  const randomMedia = media[Math.floor(Math.random() * media.length)];

  return (
    <div className="max-w-7xl mx-auto p-2">
      <header className="mb-4">
        <h2 className="text-xl font-bold p-4 opacity-80">
          I am Nonexistent
        </h2>
      </header>
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center p-4">
        {randomMedia && (
          <div className="mb-4">
            <img
              src={randomMedia}
              className="w-full max-w-xl min-h-48 md:min-h-72 aspect-video rounded-sm"
            />
          </div>
        )}
        <h1 className="text-4xl font-extrabold my-4 tracking-tight">
          Art:// Not Found
        </h1>
        <p className="text-base">
          The art piece you seek has eluded the collection. Whether lost in history or in plain sight, it remains a mystery.
        </p>
        <p className="text-sm mt-2 mb-8" style={{ opacity: 0.7 }}>
        Please check the URL, or explore the <a href="/collections" className="hover:underline">collections</a>.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 border transition-transform duration-200 rounded-sm transform hover:-translate-y-0.5"
        >
          Return to Gallery
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
