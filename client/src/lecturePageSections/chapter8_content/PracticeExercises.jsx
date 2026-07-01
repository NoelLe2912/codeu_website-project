import React from "react";

export default function PracticeExercises() {
  return (
    <section
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-10 text-white text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Practice Exercises</h2>
                <p className="text-xl mb-6">
                  Master strings and regex with these challenges!
                </p>
                <div className="bg-white/20 rounded-lg p-6 text-left">
                  <p className="font-bold mb-3 text-xl">Build Your Skills:</p>
                  <ul className="space-y-2">
                    <li>
                      • Write a function that works like the !head shell command to
                      display the first n lines of a file
                    </li>
                    <li>
                      • Create a Wordle checker that validates words based on
                      previous guesses
                    </li>
                    <li>
                      • Use regex to find all variations of a word (like "pale",
                      "pales", "paled", "paleness")
                    </li>
                    <li>
                      • Write patterns to match phone numbers, email addresses, or
                      URLs
                    </li>
                    <li>
                      • Count occurrences of specific words or patterns in a large
                      text file
                    </li>
                    <li>
                      • Convert text between British and American spelling using
                      regex substitution
                    </li>
                    <li>
                      • Extract specific information from structured text using
                      regex groups
                    </li>
                  </ul>
                </div>
              </section>
  );
}
