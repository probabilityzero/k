import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "../../layout/Banner";
import { ArtData, artCollection, collections } from "../../data/library";
import BreadcrumbNav from "../../layout/BreadcrumbNav";

const Miscellaneous: React.FC = () => {
  useEffect(() => {
    const section = document.getElementById("target-section");
    if (section) {
      section.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const miscData: ArtData[] = artCollection.filter(
    (item: ArtData) => item.collection === "miscellaneous"
  );

  // Retrieve metadata from the centralized collections data
  const meta = collections["miscellaneous"] || {
    title: "Miscellaneous",
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {miscData.map((data) => (
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
                      <source src={data.mediaItems[0].url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={data.mediaItems[0].url}
                      alt={data.mediaItems[0].alt || data.title}
                      className="w-full h-full object-cover"
                    />
                  )
                ) : data.thumbUrl ? (
                  <img
                    src={data.thumbUrl}
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

export default Miscellaneous;
