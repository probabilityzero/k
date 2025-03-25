// src/pages/collections/machines.tsx

import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../../components/Banner";
import { ArtData, artCollection } from "../../../data/library";

const Machines: React.FC = () => {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {machinesData.map((machine) => (
            <Link
              key={machine.id}
              to={`/No.${machine.id}`}
              className="group border border-gray-700 p-4 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:underline">
                {machine.title}
              </h3>
              {machine.subtitle && (
                <p className="text-sm text-gray-300">{machine.subtitle}</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Machines;
