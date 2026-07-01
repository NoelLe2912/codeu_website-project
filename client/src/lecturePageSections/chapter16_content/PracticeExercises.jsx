import React from "react";

export default function PracticeExercises() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-10 text-white text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Practice Exercises</h2>
              <p className="text-xl mb-6">Test your OOP skills!</p>
              <div className="bg-white/20 rounded-lg p-6 text-left">
                <p className="font-bold mb-3 text-xl">Challenge yourself to build these:</p>
                <ul className="space-y-2">
                  <li>• Write an <code>__eq__</code> method for the Line class that evaluates to True if they refer to equivalent Point objects, in either order.</li>
                  <li>• Write a Line method called <code>midpoint</code> that returns a new Point object at the center of the line segment.</li>
                  <li>• Write a Rectangle method called <code>midpoint</code> that finds the point in the center of the rectangle.</li>
                  <li>• Write a Rectangle method called <code>make_cross</code> that returns two diagonals intersecting at the center.</li>
                  <li>• Define a <code>Circle</code> class with <code>center</code> and <code>radius</code> attributes.</li>
                </ul>
              </div>
            </section>
  );
}
