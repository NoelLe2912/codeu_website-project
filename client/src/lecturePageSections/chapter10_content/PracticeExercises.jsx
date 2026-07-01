import React from "react";

export default function PracticeExercises() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-10 text-white text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Practice Exercises</h2>
              <p className="text-xl mb-6">Master dictionaries with these challenges!</p>
              <div className="bg-white/20 rounded-lg p-6 text-left">
                <p className="font-bold mb-3 text-xl">Build Your Skills:</p>
                <ul className="space-y-2">
                  <li>• Rewrite value_counts using the get() method to eliminate the if statement</li>
                  <li>• Write has_duplicates to check if any element appears more than once</li>
                  <li>• Create find_repeats to return keys with counts greater than 1</li>
                  <li>• Write add_counters to combine two letter-counting dictionaries</li>
                  <li>• Implement is_interlocking to check if a word can split into two valid words</li>
                  <li>• Find all interlocking words with 8+ letters in the word list</li>
                  <li>• Use memoization to optimize other recursive functions</li>
                </ul>
              </div>
            </section>
  );
}
