// src/pages/collections/audiovisual.tsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "../../../components/Banner";
import { ArtData, artCollection } from "../../../data/library";

const Audiovisual: React.FC = () => {
  useEffect(() => {
    const section = document.getElementById("target-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const audiovisualData: ArtData[] = artCollection.filter(
    (item) => item.collection === "audiovisual"
  );

  return (
    <div className="min-h-screen">
      <Banner
        title="audiovisual"
        subtitle="Mechanical wonders and futuristic technology"
        bgImageUrl="https://ipfs.pixura.io/ipfs/QmWRHCWqguPMvobUQ6FiC19V6U46M8yDkGQjCC5JSdS51n/EncryptionFacility.gif"
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {audiovisualData.map((machine) => (
            <Link
              key={machine.id}
              to={`/No.${machine.id}`}
              className="group block rounded-sm overflow-hidden"
            >
              {/* Square Container */}
              <div className="w-full aspect-square overflow-hidden">
                {machine.mediaItems && machine.mediaItems.length > 0 ? (
                  machine.mediaItems[0].type === "video" ? (
                    <video className="w-full h-full object-cover" muted>
                      <source
                        src={machine.mediaItems[0].url}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={machine.mediaItems[0].url}
                      alt={machine.mediaItems[0].alt || machine.title}
                      className="w-full h-full object-cover"
                    />
                  )
                ) : machine.imageUrl ? (
                  <img
                    src={machine.imageUrl}
                    alt={machine.title}
                    className="w-full h-full object-cover"
                  />
                ) : machine.videoUrl ? (
                  <video className="w-full h-full object-cover" muted>
                    <source src={machine.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-red-500">No Media</span>
                  </div>
                )}
              </div>

              {/* Title and Subtitle */}
              <div className="p-1">
                <h3 className="text-lg font-medium hover:underline">
                  {machine.title}
                </h3>
                {machine.subtitle && (
                  <p className="text-xs text-opacity-60">{machine.subtitle}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Audiovisual;
