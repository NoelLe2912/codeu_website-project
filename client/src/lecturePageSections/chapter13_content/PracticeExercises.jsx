import React from "react";

export default function PracticeExercises() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-10 text-white text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Practice Exercises</h2>
              <p className="text-xl mb-6">Master persistent data storage!</p>
              <div className="bg-white/20 rounded-lg p-6 text-left">
                <p className="font-bold mb-3 text-xl">Build Your Skills:</p>
                <ul className="space-y-2">
                  <li>• Write a function that uses f-strings to format data for file output</li>
                  <li>• Create a simulated database using a dictionary to understand key-value stores</li>
                  <li>• Implement a function that compares two text strings character by character</li>
                  <li>• Build an anagram database using nested dictionaries</li>
                  <li>• Write a recursive function to count all items in nested lists</li>
                  <li>• Create a hash-like function using string operations</li>
                  <li>• Practice the read-modify-write pattern for updating complex data</li>
                </ul>
              </div>
            </section>
  );
}
