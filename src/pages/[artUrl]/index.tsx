import React from "react";
import { useParams } from "react-router-dom";
import { artCollection } from "../../data/library";
import ArtHeader from "../../components/ArtHeader";
import ArtShowcase from "../../components/ArtShowcase";
import NotFound from "../../components/NotFound";

const ArtPage: React.FC = () => {
  const { artUrl } = useParams<{ artUrl: string }>();

  if (!artUrl || !artUrl.startsWith("No.")) {
    return <NotFound />;
  }

  const id = artUrl.slice(3);

  const art = artCollection.find((item) => item.id === id);

  if (!art) {
    return <NotFound />;
  }

  return (
    <div className="max-w-7xl mx-auto p-2">
      <ArtHeader art={art} />
      <ArtShowcase art={art} />
    </div>
  );
};

export default ArtPage;
