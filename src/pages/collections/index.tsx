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
      <div className="mb-4">
        <Link
          to={`/${collection}`}
          className="group inline-flex items-center justify-end text-3xl font-bold"
        >
          {title.toLowerCase()}
          <span className="group-hover:opacity-80 ml-3 text-sm opacity-0 transition-all duration-150">open</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-80 transition-all duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((art) => (
          <Link
            key={art.id}
            to={`/No.${art.id}`}
            className="block border rounded overflow-hidden hover:shadow-lg transition-shadow"
          >
            {art.mediaItems && art.mediaItems.length > 0 ? (
              art.mediaItems[0].type === "video" ? (
                <video className="w-full h-48 object-cover" muted>
                  <source src={art.mediaItems[0].url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={art.mediaItems[0].url}
                  alt={art.mediaItems[0].alt || art.title}
                  className="w-full h-48 object-cover"
                />
              )
            ) : art.imageUrl ? (
              <img
                src={art.imageUrl}
                alt={art.title}
                className="w-full h-48 object-cover"
              />
            ) : art.videoUrl ? (
              <video className="w-full h-48 object-cover" muted>
                <source src={art.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">No Media</span>
              </div>
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold">{art.title}</h3>
              {art.subtitle && (
                <p className="text-sm text-gray-600">{art.subtitle}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

const AllCollections: React.FC = () => {
  return (
    <div>
      {/* Inline Banner */}
      <div className="relative w-full h-[50vh] flex items-center justify-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://via.placeholder.com/1920x1080?text=Banner+Image")',
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
        <CollectionSection title="machines" collection="machines" />
        <CollectionSection title="patterns" collection="patterns" />
        <CollectionSection title="audiovisual" collection="audiovisual" />
        <CollectionSection title="miscellaneous" collection="misc" />
      </div>
    </div>
  );
};

export default AllCollections;
