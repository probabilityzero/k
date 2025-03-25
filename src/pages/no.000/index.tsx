// pages/ArtDetail.tsx

import React from "react";
import { useParams } from "react-router-dom";
import ArtDisplay from "../../components/Display";
import { artCollection, ArtData } from "../../data/library";

const ArtDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Find art by ID alone
  const art: ArtData | undefined = artCollection.find(
    (item) => item.id === id
  );

  if (!art) {
    return (
      <div className="max-w-5xl mx-auto p-4">
        <h2 className="text-2xl font-bold">Art not found!</h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">
        {art.title} (No.{art.id})
      </h2>
      <ArtDisplay art={art} />
    </div>
  );
};

export default ArtDetail;
