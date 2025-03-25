import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import { ThemeToggle } from "../utils/Theme";
// import { cardItemsData } from "../data/cards";

export interface CardsData {
  to: string;
  imgSrc: string;
  alt: string;
  label: string;
  wide?: boolean; // Flag to indicate wide card usage
}

export const cardItemsData: CardsData[] = [
  {
    to: "/collections",
    imgSrc:
      "https://ipfs.pixura.io/ipfs/QmWRHCWqguPMvobUQ6FiC19V6U46M8yDkGQjCC5JSdS51n/EncryptionFacility.gif",
    alt: "Collections",
    label: "collections",
  },
  {
    to: "/collections/machines",
    imgSrc:
      "https://ipfs.pixura.io/ipfs/QmWRHCWqguPMvobUQ6FiC19V6U46M8yDkGQjCC5JSdS51n/EncryptionFacility.gif",
    alt: "Machines",
    label: "machines",
  },
  {
    to: "/collections/patterns",
    imgSrc:
      "https://ipfs.io/ipfs/QmW4ZfkBhNw8pFHD5tMfrP9ZvPA2aDy8ur2e4pafiSjkTJ",
    alt: "Patterns",
    label: "patterns",
  },
  {
    to: "/collections/audiovisual",
    imgSrc:
      "https://ipfs.io/ipfs/QmehS5B3bhhYogej5BUkcSYeUT78MmTGkNNwYgR3jJ6Gc7",
    alt: "Audiovisual",
    label: "audiovisual",
  },
  {
    to: "/miscellaneous",
    imgSrc:
      "https://res.cloudinary.com/nifty-gateway/image/upload/v1684745617/publishers/ina-vare/67816/91345/Kerim%20Safa%20-%20Irregular%20Liquid%20-%20Kerim%20Safa.gif",
    alt: "Miscellaneous",
    label: "miscellaneous",
  },
  {
    to: "/exhibitions",
    imgSrc:
      "https://ipfs.pixura.io/ipfs/QmWRHCWqguPMvobUQ6FiC19V6U46M8yDkGQjCC5JSdS51n/EncryptionFacility.gif",
    alt: "Exhibitions",
    label: "exhibitions",
  },
  {
    to: "/about",
    imgSrc:
      "https://ipfs.io/ipfs/QmWEZphHGwcTKPBKVgnM5Q4cUPytdhCAyrq7uvtydjbkcP",
    alt: "About",
    label: "about",
  },
];

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
    const section = document.getElementById("target-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  // Upper row: collections, machines, patterns, audiovisual, miscellaneous
  const upperRowItems = cardItemsData.filter((item) =>
    ["collections", "machines", "patterns", "audiovisual", "miscellaneous"].includes(
      item.label
    )
  );

  // Second row: exhibitions and about
  const secondRowItems = cardItemsData.filter((item) =>
    ["exhibitions", "about"].includes(item.label)
  );

  return (
    <div className="flex flex-col">
      {/* Header / Logo */}
      <header className="flex justify-center items-center py-8">
        <div className="text-4xl font-bold">
          K
        </div>
      </header>

      {/* Main content with extra bottom padding */}
      <main className="flex py-10 relative">
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
    </div>
  );
};

export default Home;
