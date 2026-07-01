import React from "react";
import { courses } from "../constants";

const Courses = () => {
  return (
    <div>
      <section className="mt-16 px-8">
        <h2 className="text-3xl font-extrabold text-blue-600 text-center">
          Cover Different Types of Programming Courses
        </h2>
        <h3 className="text-xl text-black mt-4 max-w-3xl mx-auto leading-relaxed text-center">
          Choose your path and start building real-world skills with our curated
          development roadmaps.
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {courses.map((c) => (
            <div
              key={c.name}
              className={`bg-white rounded-xl shadow-[0_4px_8px_0_rgba(37,99,235,0.4)] p-6 hover:shadow-[0_4px_12px_0_rgba(234,179,8,0.6)] transition flex items-center gap-4`}
            >
              <img
                src={c.imgUrl}
                alt={c.name}
                className="h-20 w-auto flex-shrink-0"
              />
              <div className="text-left">
                <h3 className="font-semibold text-lg">{c.name}</h3>
                <p className="text-gray-600">{c.lesson} Lessons</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;
