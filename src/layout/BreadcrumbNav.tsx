import React from "react";
import { Link, useLocation } from "react-router-dom";

interface MiniHeaderProps {
  title: string; // The current page title, e.g., "Collection Name"
}

const BreadcrumbNav: React.FC<MiniHeaderProps> = ({ title }) => {
  const location = useLocation(); // Get current route path
  const isCollectionPage = location.pathname.includes("/collections/");

  // Scroll to the top of the page function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full mb-6">
      <nav className="space-x-2 md:space-x-4">
        <Link to="/" className="font-semibold hover:underline px-1">
          K
        </Link>

        {isCollectionPage && (
          <>
            <span className="mr-1">/</span>
            <Link to="/collections" className="hover:underline">
              collections
            </Link>
          </>
        )}

        {/* Dynamic Page Title */}
        <span className="mr-1">:</span>
        <button
          onClick={scrollToTop}
          className="hover:underline focus:outline-none"
        >
          {title.toLowerCase()}
        </button>
      </nav>
    </div>
  );
};

export default BreadcrumbNav;