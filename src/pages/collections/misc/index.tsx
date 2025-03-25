// src/pages/collections/misc.tsx

import React from "react";
import { Link } from "react-router-dom";
import { ArtData, artCollection } from "../../../data/library";

const Misc: React.FC = () => {
  const miscData: ArtData[] = artCollection.filter(
    (art) => art.collection === "misc"
  );

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Miscellaneous Collection</h1>
      <ul className="space-y-4">
        {miscData.map((art) => (
          <li key={art.id} className="border-b pb-2">
            <Link
              to={`/misc/No.${art.id}`}
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

export default Misc;
