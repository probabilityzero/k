import React, { useState, useEffect } from "react";

interface BannerProps {
  title: string;
  subtitle?: string;
  bgImageUrl: string; // URL for the background image
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, bgImageUrl }) => {
  const [offsetY, setOffsetY] = useState(0);

  // Update offset for parallax effect
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to target section smoothly
  const scrollToTarget = () => {
    const target = document.getElementById("content-section");
    if (target) {
      window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <div id="top" className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{ backgroundImage: `url(${bgImageUrl})` }}
      />
      
      {/* Foreground text with parallax */}
      <div
        className="relative z-10 text-white px-4 pb-10"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
      >
        <div className="flex items-baseline space-x-2 justify-center">
          <h1 className="text-3xl md:text-5xl font-bold inline-block bg-black leading-none px-0.5">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-2xl inline-block max-w-3xl mx-auto text-opacity-85 bg-black px-0.5">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Scroll Arrow (bottom left) */}
      <div
        className="absolute bottom-6 items-center cursor-pointer transition-all duration-300 ease-in-out"
        onClick={scrollToTarget}
      >
        <div className="group relative flex items-center justify-center w-12 h-12 rounded">
          {/* Arrow with hover effect */}
          <svg
            className="w-12 h-12 text-white animate-bounce transition-all duration-200 group-hover:bg-[#111111] absolute inset-0 rounded-full border-2 border-transparent group-active:border-[#eee] animate-disappear group-hover:rounded-full p-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Banner;