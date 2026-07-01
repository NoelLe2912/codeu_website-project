import React from "react";

export default function PracticeExercises() {
  return (
    <section
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-10 text-white text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Practice Exercises</h2>
                <p className="text-xl mb-6">
                  Use the exercises below to master interface design!
                </p>
                <div className="bg-white/20 rounded-lg p-6 text-left">
                  <p className="font-bold mb-3 text-xl">Build Your Skills:</p>
                  <ul className="space-y-2">
                    <li>
                      • Write a function draw_box(width, height, char) that draws a
                      filled rectangle
                    </li>
                    <li>
                      • Create a function draw_triangle(size) that draws a right
                      triangle
                    </li>
                    <li>
                      • Write repeat_pattern(pattern, count) that prints a string
                      pattern multiple times
                    </li>
                    <li>
                      • Create draw_border(text) that prints text with a decorative
                      border around it
                    </li>
                    <li>
                      • Write a function make_banner(text, width) that centers text
                      in a banner
                    </li>
                    <li>
                      • Create a refactored set of functions to draw complex
                      patterns like checkerboards
                    </li>
                  </ul>
                </div>
              </section>
  );
}
