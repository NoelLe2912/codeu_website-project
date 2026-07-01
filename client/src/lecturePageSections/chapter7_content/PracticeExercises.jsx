import React from "react";

export default function PracticeExercises() {
  return (
    <section
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-10 text-white text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Practice Exercises</h2>
                <p className="text-xl mb-6">
                  Master iteration and search with these challenges!
                </p>
                <div className="bg-white/20 rounded-lg p-6 text-left">
                  <p className="font-bold mb-3 text-xl">Build Your Skills:</p>
                  <ul className="space-y-2">
                    <li>
                      • Write uses_none that checks if a word avoids forbidden
                      letters
                    </li>
                    <li>
                      • Create uses_only to verify a word uses only allowed letters
                    </li>
                    <li>
                      • Implement uses_all to ensure all required letters are
                      present
                    </li>
                    <li>• Build check_word to validate Spelling Bee words</li>
                    <li>• Write word_score to calculate points for valid words</li>
                    <li>• Reuse functions: write uses_none using uses_any</li>
                    <li>• Reuse functions: write uses_all using uses_only</li>
                  </ul>
                </div>
              </section>
  );
}
