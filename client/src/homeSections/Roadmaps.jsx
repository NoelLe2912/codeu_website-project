import React from "react";
import { roadmaps } from "../constants";

const Roadmaps = () => {
  return (
    <section className="mt-16 px-8">
      <h2 className="text-3xl font-extrabold text-blue-600 text-center">
        Our Development Roadmaps
      </h2>
      <h3 className="text-xl text-black mt-4 max-w-3xl mx-auto leading-relaxed text-center">
        Choose your path and start building real-world skills with our curated
        development roadmaps.
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {roadmaps.map((rm) => {
          // build icon URL dynamically from filename listed in the data
          const iconUrl = rm.icon
            ? new URL(`../assets/icons/${rm.icon}`, import.meta.url).href
            : null;

          return (
            <div
              key={rm.title}
              className="bg-white rounded-xl shadow-[0_4px_8px_0_rgba(37,99,235,0.4)] p-6 text-center hover:shadow-xl transition"
            >
              {iconUrl && (
                <img
                  src={iconUrl}
                  alt={`${rm.title} icon`}
                  className="h-20 w-auto mx-auto"
                />
              )}
              <h4 className="text-xl font-bold mb-2 mt-4">{rm.title}</h4>
              <p className="text-gray-700">{rm.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Roadmaps;
