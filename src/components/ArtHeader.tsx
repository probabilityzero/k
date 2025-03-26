import React from "react";
import { ArtData } from "../data/library";

interface ArtHeaderProps {
  art: ArtData;
}

const ArtHeader: React.FC<ArtHeaderProps> = ({ art }) => {
  return (
    <header className="mb-4">
      <h2 className="text-xl font-bold py-2 px-4">
        {/* {art.title}  */}
        I am No.{art.id}.
      </h2>
    </header>
  );
};

export default ArtHeader;
