import React from "react";

export default function PracticeExercises() {
  return (
    <section
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-10 text-white text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Practice Exercises</h2>
                <p className="text-xl mb-6">Master return values and recursion!</p>
                <div className="bg-white/20 rounded-lg p-6 text-left">
                  <p className="font-bold mb-3 text-xl">Build Your Skills:</p>
                  <ul className="space-y-2">
                    <li>
                      • Write hypot(a, b) to calculate the hypotenuse of a right
                      triangle
                    </li>
                    <li>• Create is_between(x, y, z) to check if x ≤ y ≤ z</li>
                    <li>• Implement the Ackermann function recursively</li>
                    <li>
                      • Write a recursive GCD (greatest common divisor) function
                    </li>
                    <li>• Practice incremental development on a new function</li>
                    <li>
                      • Convert functions that print to pure functions that return
                    </li>
                    <li>• Add input validation to your recursive functions</li>
                  </ul>
                </div>
              </section>
  );
}
