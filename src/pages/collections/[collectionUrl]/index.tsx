// src/pages/collections/[collectionUrl].tsx

import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Banner from "../../../layout/Banner";
import { ArtData, artCollection, collections } from "../../../data/library";
import NotFound from "../../../utils/NotFound";
import BreadcrumbNav from "../../../layout/BreadcrumbNav";

const CollectionPage: React.FC = () => {
  // Get the collectionUrl parameter from the URL
  const { collectionUrl } = useParams<{ collectionUrl: string }>();

  // Scroll to target or top on mount
  useEffect(() => {
    const section = document.getElementById("target-section");
    if (section) {
      section.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  // If no collectionUrl is provided, show an error message.
  if (!collectionUrl) {
    return <div className="text-center p-8">No collection specified.</div>;
  }

  // Filter the artCollection by the collectionUrl parameter.
  const filteredArt: ArtData[] = artCollection.filter(
    (item) => item.collection === collectionUrl
  );

  // Retrieve metadata for this collection from the data file.
  const meta = collections[collectionUrl] || {
    title: collectionUrl,
    subtitle: "",
    bgImageUrl: "",
  };

  return (
    <div className="min-h-screen">
      <Banner
        title={meta.title}
        subtitle={meta.subtitle}
        bgImageUrl={meta.bgImageUrl}
      />

      <div id="content-section" className="max-w-7xl mx-auto px-4 py-8">
        <BreadcrumbNav title={meta.title}/>
        
        {filteredArt.length === 0 ? (
          <NotFound />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredArt.map((data) => (
              <Link
                key={data.id}
                to={`/No.${data.id}`}
                className="group block rounded-sm overflow-hidden"
              >
                {/* Square Container */}
                <div className="w-full aspect-square overflow-hidden">
                  {data.thumbUrl ? (
                    <img
                      src={data.thumbUrl}
                      alt={data.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className=""></span>
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
        )}
      </div>
    </div>
  );
};

export default CollectionPage;
