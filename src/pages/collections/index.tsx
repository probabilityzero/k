// src/pages/AllCollections.tsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArtData, artCollection } from "../../data/library";

interface CollectionSectionProps {
  title: string;
  collection: "machines" | "patterns" | "audiovisual" | "miscellaneous";
}

const CollectionSection: React.FC<CollectionSectionProps> = ({
  title,
  collection: collectionUrl,
}) => {
  // Filter data by collection type
  const data: ArtData[] = artCollection.filter(
    (art) => art.collection === collectionUrl
  );

  return (
    <section className="my-8">
      <div className="flex flex-col lg:flex-row">
        <div className="mb-4 z-10 lg:top-10 lg:mb-0 lg:mr-6 lg:w-1/6 lg:sticky lg:pb-32 items-start">
          <Link
            to={`/collections/${collectionUrl}`}
            className="group inline-flex items-baseline text-3xl font-light hover:underline decoration-1"
          >
            {title}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-80 transition-all duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        <div className="lg:w-5/6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((art) => (
            <Link
              key={art.id}
              to={`/No.${art.id}`}
              className="block border-opacity-50 rounded-sm overflow-hidden"
            >
              <div className="w-full aspect-square overflow-hidden">
                {art.thumbUrl ? (
                  <img
                    src={art.thumbUrl}
                    alt={art.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-red-500">No Media</span>
                  </div>
                )}
              </div>
              <div className="p-1">
                <h3 className="text-lg font-medium hover:underline">
                  {art.title}
                </h3>
                {art.subtitle && (
                  <p className="text-xs text-secondary">{art.subtitle}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const AllCollections: React.FC = () => {
    useEffect(() => {
      const section = document.getElementById("target-section");
      if (section) {
        section.scrollIntoView();
      } else {
        window.scrollTo(0, 0);
      }
    }, []);
  
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.5); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div>
      <div className="relative w-full h-[50vh] flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent" />
        <div
          className="relative z-10  text-white px-4"
          style={{ transform: `translateY(${offset * 0.4}px)` }} 
        >
          <h1 className="text-3xl md:text-5xl font-bold inline-block px-2 py-1">
            collections
          </h1>
          <p className="mt-4 text-lg md:text-2xl inline-block px-2 py-1 max-w-3xl mx-auto text-opacity-85">
            all of the collections
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <CollectionSection title="machines" collection="machines" />
        <CollectionSection title="patterns" collection="patterns" />
        <CollectionSection title="audiovisual" collection="audiovisual" />
        <CollectionSection title="misc" collection="miscellaneous" />
      </div>
    </div>
  );
};

export default AllCollections;
