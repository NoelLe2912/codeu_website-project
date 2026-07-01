import React from "react";

export default function PracticeExercises() {
  return (
    <section
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-10 text-white text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Practice Exercises</h2>
                <p className="text-xl mb-6">Master lists with these challenges!</p>
                <div className="bg-white/20 rounded-lg p-6 text-left">
                  <p className="font-bold mb-3 text-xl">Build Your Skills:</p>
                  <ul className="space-y-2">
                    <li>
                      • Write is_anagram to check if two words are anagrams by
                      sorting their letters
                    </li>
                    <li>• Find all anagrams of "takes" in the word list</li>
                    <li>
                      • Create is_palindrome to check if a word reads the same
                      backward
                    </li>
                    <li>• Find all palindromes with at least 7 letters</li>
                    <li>
                      • Write reverse_sentence to reverse the word order in a
                      sentence
                    </li>
                    <li>
                      • Create total_length to sum the lengths of all words in a
                      list
                    </li>
                    <li>
                      • Experiment with aliasing: create two lists, make one an
                      alias, and observe changes
                    </li>
                  </ul>
                </div>
              </section>
  );
}
