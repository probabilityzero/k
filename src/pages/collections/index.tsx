// src/pages/AllCollections.tsx

import React from "react";
import { Link } from "react-router-dom";
import { ArtData, artCollection } from "../../data/library";

interface CollectionSectionProps {
  title: string;
  collection: "machines" | "patterns" | "audiovisual" | "misc";
}

const CollectionSection: React.FC<CollectionSectionProps> = ({
  title,
  collection,
}) => {
  // Filter data by collection type
  const data: ArtData[] = artCollection.filter(
    (art) => art.collection === collection
  );

  return (
    <section className="my-8">
      <div className="flex flex-col lg:flex-row">
        {/* Header Section */}
        <div className="mb-4 lg:mb-0 lg:mr-6 lg:w-1/4 flex items-center">
          <Link
            to={`/${collection}`}
            className="group inline-flex items-center text-3xl font-bold"
          >
            {title}
            <span className="group-hover:opacity-80 ml-3 text-sm opacity-0 transition-all duration-150">
              open
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-80 transition-all duration-200"
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

        {/* Items Grid */}
        <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((art) => (
            <Link
              key={art.id}
              to={`/No.${art.id}`}
              className="block border-opacity-50 rounded overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Square container */}
              <div className="w-full aspect-square overflow-hidden">
                {art.mediaItems && art.mediaItems.length > 0 ? (
                  art.mediaItems[0].type === "video" ? (
                    <video className="w-full h-full object-cover" muted>
                      <source src={art.mediaItems[0].url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={art.mediaItems[0].url}
                      alt={art.mediaItems[0].alt || art.title}
                      className="w-full h-full object-cover"
                    />
                  )
                ) : art.imageUrl ? (
                  <img
                    src={art.imageUrl}
                    alt={art.title}
                    className="w-full h-full object-cover"
                  />
                ) : art.videoUrl ? (
                  <video className="w-full h-full object-cover" muted>
                    <source src={art.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-red-500">No Media</span>
                  </div>
                )}
              </div>
              <div className="p-1">
                <h3 className="text-md font-medium">{art.title}</h3>
                {art.subtitle && (
                  <p className="text-xs group-hover:opacity-75 opacity-0">
                    {art.subtitle}
                  </p>
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
  return (
    <div>
      {/* Inline Banner */}
      <div className="relative w-full h-[50vh] flex flex-col items-center justify-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("")',
          }}
        />
        {/* Gradient overlay fading toward the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent" />
        {/* Centered text */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold inline-block bg-black bg-opacity-50 px-4 py-2">
            collections
          </h1>
          <p className="mt-4 text-lg md:text-2xl inline-block bg-black bg-opacity-50 px-4 py-2">
            all of the collections
          </p>
        </div>
      </div>

      {/* Collection sections start right below the banner */}
      <div className="max-w-6xl mx-auto p-4">
        <CollectionSection title="Machines" collection="machines" />
        <CollectionSection title="Patterns" collection="patterns" />
        <CollectionSection title="Audiovisual" collection="audiovisual" />
        <CollectionSection title="Miscellaneous" collection="misc" />
      </div>
    </div>
  );
};

export default AllCollections;
