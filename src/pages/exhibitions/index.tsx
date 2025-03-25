// pages/exhibitions.tsx

import React, { useEffect } from "react";

const Exhibitions: React.FC = () => {
  useEffect(() => {
    // Scroll to the top of the page or to a specific section ID
    const section = document.getElementById("target-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <div id="target-section" className="flex items-center justify-center p-10">
      <img
        src="https://static.wikia.nocookie.net/3df97e1d-0285-476a-a951-a968d24d92a0/scale-to-width/755"
        alt="Exhibition"
        className="grayscale opacity-75 transition-opacity duration-500 ease-in-out hover:opacity-100"
      />
    </div>
  );
};

export default Exhibitions;