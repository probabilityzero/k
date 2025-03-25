// src/pages/collections/audiovisuals.tsx

import React from "react";
import { Link } from "react-router-dom";
import { ArtData, artCollection } from "../../../data/library";

const Audiovisual: React.FC = () => {
  const audiovisualData: ArtData[] = artCollection.filter(
    (art) => art.collection === "audiovisual"
  );

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Audiovisual Collection</h1>
      <ul className="space-y-4">
        {audiovisualData.map((art) => (
          <li key={art.id} className="border-b pb-2">
            <Link
              to={`/audiovisual/No.${art.id}`}
              className="text-blue-500 hover:underline"
            >
              {art.title} (No.{art.id})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Audiovisual;
