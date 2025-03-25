// src/pages/collections/machines.tsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "../../../components/Banner";
import { ArtData, artCollection } from "../../../data/library";

const Machines: React.FC = () => {
  useEffect(() => {
    const section = document.getElementById("target-section");
    if (section) {
      section.scrollIntoView(); 
    } else {
      window.scrollTo(0, 0); 
    }
  }, []);

  const machinesData: ArtData[] = artCollection.filter(
    (item) => item.collection === "machines"
  );

  return (
    <div className="min-h-screen">
      <Banner
        title="Machines"
        subtitle="Mechanical wonders and futuristic technology"
        bgImageUrl="https://ipfs.pixura.io/ipfs/QmWRHCWqguPMvobUQ6FiC19V6U46M8yDkGQjCC5JSdS51n/EncryptionFacility.gif"
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {machinesData.map((data) => (
            <Link
              key={data.id}
              to={`/No.${data.id}`}
              className="group block rounded-sm overflow-hidden"
            >
              {/* Square Container */}
              <div className="w-full aspect-square overflow-hidden">
                {data.mediaItems && data.mediaItems.length > 0 ? (
                  data.mediaItems[0].type === "video" ? (
                    <video className="w-full h-full object-cover" muted>
                      <source
                        src={data.mediaItems[0].url}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={data.mediaItems[0].url}
                      alt={data.mediaItems[0].alt || data.title}
                      className="w-full h-full object-cover"
                    />
                  )
                ) : data.imageUrl ? (
                  <img
                    src={data.imageUrl}
                    alt={data.title}
                    className="w-full h-full object-cover"
                  />
                ) : data.videoUrl ? (
                  <video className="w-full h-full object-cover" muted>
                    <source src={data.videoUrl} type="video/mp4" />
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
                  {data.title}
                </h3>
                {data.subtitle && (
                  <p className="text-xs text-opacity-60">{data.subtitle}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Machines;
