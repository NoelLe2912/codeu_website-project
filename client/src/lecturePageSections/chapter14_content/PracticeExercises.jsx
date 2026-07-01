import React from "react";

export default function PracticeExercises() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-10 text-white text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Practice Exercises</h2>
              <p className="text-xl mb-6">Master object-oriented programming!</p>
              <div className="bg-white/20 rounded-lg p-6 text-left">
                <p className="font-bold mb-3 text-xl">Build Your Skills:</p>
                <ul className="space-y-2">
                  <li>• Write subtract_time to find the interval between two times in seconds</li>
                  <li>• Create is_after to check if one time comes after another</li>
                  <li>• Define a Date class with year, month, and day attributes</li>
                  <li>• Write make_date, print_date, and is_after for Date objects</li>
                  <li>• Create a Point class representing (x, y) coordinates</li>
                  <li>• Write functions to calculate distance between points</li>
                  <li>• Experiment with pure vs impure function styles</li>
                </ul>
              </div>
            </section>
  );
}
