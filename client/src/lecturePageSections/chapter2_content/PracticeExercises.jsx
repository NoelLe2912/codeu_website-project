import React from "react";

export default function PracticeExercises() {
  return (
    <section
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-10 text-white text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Practice Exercises</h2>
                <p className="text-xl mb-6">
                  Use the exercises below to reinforce what you've learned!
                </p>
                <div className="bg-white/20 rounded-lg p-6 text-left">
                  <p className="font-bold mb-3 text-xl">Challenge Yourself:</p>
                  <ul className="space-y-2">
                    <li>
                      • Create a variable called radius with value 5, then calculate
                      volume of a sphere (formula: 4/3 × π × r³)
                    </li>
                    <li>
                      • Import the math module and use math.cos and math.sin to
                      verify that sin²(x) + cos²(x) = 1
                    </li>
                    <li>
                      • Experiment with invalid variable names and see what error
                      messages you get
                    </li>
                    <li>
                      • Calculate how many seconds are in a week using variables for
                      days, hours, minutes
                    </li>
                    <li>
                      • Use int() to convert the string '1101' from binary (base 2)
                      to decimal
                    </li>
                    <li>
                      • Try using round() with different decimal places on math.pi
                    </li>
                  </ul>
                </div>
              </section>
  );
}
