// pages/about.tsx

import React, { useEffect} from "react";

const About: React.FC = () => {
  useEffect(() => {
    const section = document.getElementById("target-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold my-4">About Me</h1>
      <p>Pika pika pika</p>
    </div>
  );
};

export default About;
