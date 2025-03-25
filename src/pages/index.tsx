import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../utils/Theme";
import { cardItemsData } from "../data/cards";

// Reusable component for standard card item
interface CardItemProps {
  to: string;
  imgSrc: string;
  alt: string;
  label: string;
}

const CardItems: React.FC<CardItemProps> = ({ to, imgSrc, alt, label }) => {
  return (
    <Link
      to={to}
      className="relative flex items-center justify-center hover:opacity-80 transition-opacity"
    >
      <img
        src={imgSrc}
        alt={alt}
        className="h-40 w-40 md:h-48 md:w-48 lg:h-52 lg:w-52 object-cover"
      />
      <span className="absolute bg-black text-white text-xl font-medium tracking-wider p-1">
        {label}
      </span>
    </Link>
  );
};

// Reusable component for wide card item
const CardWideItems: React.FC<CardItemProps> = ({ to, imgSrc, alt, label }) => {
  return (
    <Link
      to={to}
      className="relative flex items-center justify-center hover:opacity-80 transition-opacity"
    >
      <img
        src={imgSrc}
        alt={alt}
        className="h-40 w-[344px] md:h-48 md:w-[416px] lg:h-56 lg:w-[480px] object-cover"
      />
      <span className="absolute bg-black text-white font-medium text-lg tracking-wider p-1">
        {label}
      </span>
    </Link>
  );
};

const Home: React.FC = () => {
  useEffect(() => {
    // Scroll to the top of the page or to a specific section ID
    const section = document.getElementById("target-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  // Upper row: collections, machines, patterns, audiovisual, misc
  const upperRowItems = cardItemsData.filter((item) =>
    ["collections", "machines", "patterns", "audiovisual", "misc"].includes(
      item.label
    )
  );

  // Second row: exhibitions and about
  const secondRowItems = cardItemsData.filter((item) =>
    ["exhibitions", "about"].includes(item.label)
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header / Logo */}
      <header className="flex justify-center items-center py-8">
        <div className="text-4xl font-bold">K</div>
      </header>

      {/* Main content with extra bottom padding */}
      <main className="flex pt-0 lg:pt-10 relative pb-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Upper row items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8 pb-6 lg:pb-8">
            {upperRowItems.map((item, index) =>
              item.wide ? (
                <CardWideItems
                  key={index}
                  to={item.to}
                  imgSrc={item.imgSrc}
                  alt={item.alt}
                  label={item.label}
                />
              ) : (
                <CardItems
                  key={index}
                  to={item.to}
                  imgSrc={item.imgSrc}
                  alt={item.alt}
                  label={item.label}
                />
              )
            )}
          </div>

          {/* Second row items */}
          <div className="flex justify-end gap-6 lg:gap-8 pb-8">
            {secondRowItems.map((item, index) =>
              item.wide ? (
                <CardWideItems
                  key={index}
                  to={item.to}
                  imgSrc={item.imgSrc}
                  alt={item.alt}
                  label={item.label}
                />
              ) : (
                <CardItems
                  key={index}
                  to={item.to}
                  imgSrc={item.imgSrc}
                  alt={item.alt}
                  label={item.label}
                />
              )
            )}
          </div>
        </div>
      </main>

      {/* ThemeToggle fixed at bottom without overlapping due to main's extra padding */}
      <div className="fixed inset-x-0 bottom-0 flex justify-center py-6 items-center pointer-events-none">
        <div className="pointer-events-auto">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Home;
