import React from "react";

export default function PracticeExercises() {
  return (
    <section
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-10 text-white text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Practice Exercises</h2>
                <p className="text-xl mb-6">
                  Master text analysis with these challenges!
                </p>
                <div className="bg-white/20 rounded-lg p-6 text-left">
                  <p className="font-bold mb-3 text-xl">Build Your Skills:</p>
                  <ul className="space-y-2">
                    <li>
                      • Count trigrams (three-word sequences) and find the most
                      common
                    </li>
                    <li>
                      • Build a successor map using bigrams as keys instead of
                      single words
                    </li>
                    <li>• Generate text using the trigram successor map</li>
                    <li>
                      • Create a function that cleans text more thoroughly (handle
                      contractions, numbers)
                    </li>
                    <li>• Write a spell-checker using dictionary subtraction</li>
                    <li>
                      • Analyze which words most commonly start or end sentences
                    </li>
                    <li>
                      • Build a simple autocomplete system using successor maps
                    </li>
                  </ul>
                </div>
              </section>
  );
}
