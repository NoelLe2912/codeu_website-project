import React from "react";

export default function PracticeExercises() {
  return (
    <section
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-10 text-white text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Practice Exercises</h2>
                <p className="text-xl mb-6">Master tuples with these challenges!</p>
                <div className="bg-white/20 rounded-lg p-6 text-left">
                  <p className="font-bold mb-3 text-xl">Build Your Skills:</p>
                  <ul className="space-y-2">
                    <li>
                      • Explore hashability: Create a tuple containing a list and
                      try using it as a dict key
                    </li>
                    <li>
                      • Implement a Caesar cipher using letter_map and tuple
                      operations
                    </li>
                    <li>
                      • Write most_frequent_letters to print letters in decreasing
                      frequency order
                    </li>
                    <li>
                      • Find all anagram groups using sorted letters as dictionary
                      keys
                    </li>
                    <li>
                      • Create word_distance to count differences between
                      same-length words
                    </li>
                    <li>
                      • Find metathesis pairs (words differing by two swapped
                      letters)
                    </li>
                    <li>
                      • Use zip, enumerate, and tuple assignment to solve word
                      puzzles
                    </li>
                  </ul>
                </div>
              </section>
  );
}
