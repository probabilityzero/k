// src/pages/collections/patterns.tsx

import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../../components/Banner";
import { ArtData, artCollection } from "../../../data/library";

const Patterns: React.FC = () => {
  // Filter data to only get "patterns" collection
  const patternsData: ArtData[] = artCollection.filter(
    (item) => item.collection === "patterns"
  );

  return (
    <div className="min-h-screen">
      {/* Reusable Banner with props */}
      <Banner
        title="Patterns"
        subtitle="Seamless dynamic patterns, generated or drawn based on distinct rulesets"
        bgImageUrl="https://ipfs.io/ipfs/QmTBp8aYuEFAL5auPVdk69tVVenneoK2GrZCsoSxxvcLbQ"
      />

      {/* Grid of items below banner */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {patternsData.map((pattern) => (
            <Link
              key={pattern.id}
              to={`/No.${pattern.id}`}
              className="group border p-4 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:underline">
                {pattern.title}
              </h3>
              {pattern.subtitle && (
                <p className="text-sm text-gray-300">{pattern.subtitle}</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Patterns;
