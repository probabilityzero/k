// pages/exhibitions.tsx

import React, { useEffect } from "react";

const Exhibitions: React.FC = () => {
  useEffect(() => {
    const section = document.getElementById("target-section");
    if (section) {
      section.scrollIntoView(); 
    } else {
      window.scrollTo(0, 0); 
    }
  }, []);

  return (
    <div id="target-section" className="flex items-center justify-center p-10">
      <img
        src="https://static.wikia.nocookie.net/3df97e1d-0285-476a-a951-a968d24d92a0/scale-to-width/755"
        alt="Exhibition"
        className="grayscale opacity-75 transition-opacity duration-1000 ease-in-out hover:opacity-100"
      />
    </div>
  );
};

export default Exhibitions;