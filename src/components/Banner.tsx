// src/components/Banner.tsx

import React from "react";

interface BannerProps {
  title: string;
  subtitle?: string;
  bgImageUrl: string; // URL for the background image
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, bgImageUrl }) => {
  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{ backgroundImage: `url(${bgImageUrl})` }}
      />

      {/* Foreground text */}
      <div className="relative z-10 text-center font-bold text-white px-4 pb-10">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold inline-block px-2 py-1 bg-black">
            {title}
          </h1>
        </div>
        {subtitle && (
          <div>
            <p className="mt-4 text-lg md:text-2xl inline-block px-2 py-1 max-w-3xl mx-auto text-opacity-85 bg-black">
              {subtitle}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
