import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { artCollection } from "../../data/library";
import ArtHeader from "../../components/ArtHeader";
import ArtShowcase from "../../components/ArtShowcase";
import NotFound from "../../components/NotFound";

const ArtPage: React.FC = () => {
    useEffect(() => {
      const section = document.getElementById("target-section");
      if (section) {
        section.scrollIntoView(); 
      } else {
        window.scrollTo(0, 0); 
      }
    }, []);

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
